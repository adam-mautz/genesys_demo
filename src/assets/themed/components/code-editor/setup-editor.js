export function setupEditor(ace, editor, setAnnotations, setCursorPosition, setHighlightedAnnotation, setPaneStatus) {
    ace.config.loadModule('ace/ext/language_tools', function () {
        editor.setOptions({
            displayIndentGuides: false,
            enableSnippets: true,
            enableBasicAutocompletion: true,
        });
    });
    editor.setAutoScrollEditorIntoView(true);
    // To display cursor position in status bar
    editor.session.selection.on('changeCursor', () => {
        setCursorPosition(editor.getCursorPosition());
    });
    editor.session.on('changeAnnotation', () => {
        const editorAnnotations = editor.session.getAnnotations();
        const newAnnotations = editorAnnotations.filter(a => a.type !== 'info');
        if (editorAnnotations.length !== newAnnotations.length) {
            editor.session.setAnnotations(newAnnotations);
        }
        setAnnotations(newAnnotations);
    });
    editor.commands.addCommand({
        name: 'exitCodeEditor',
        bindKey: 'Esc',
        exec: () => {
            editor.container.focus();
        },
    });
    editor.on('focus', () => {
        editor.textInput.getElement().setAttribute('tabindex', 0);
    });
    editor.on('blur', () => {
        editor.textInput.getElement().setAttribute('tabindex', -1);
    });
    // prevent users to step into editor directly by keyboard
    editor.textInput.getElement().setAttribute('tabindex', -1);
    editor.commands.removeCommand('showSettingsMenu', false);
    // Prevent default behavior on error/warning icon click
    editor.on('guttermousedown', (e) => {
        e.stop();
    });
    const moveCursorToAnnotation = (a) => {
        if (typeof a.row === 'number') {
            editor.gotoLine(a.row + 1, a.column || 0, false);
        }
    };
    // open error/warning pane when user clicks on gutter icon
    editor.on('gutterclick', (e) => {
        const { row } = e.getDocumentPosition();
        const currentAnnotations = editor.session.getAnnotations().filter(a => a.row === row && a.type !== 'info');
        const errors = currentAnnotations.filter(a => a.type === 'error');
        if (errors.length > 0) {
            setHighlightedAnnotation(errors[0]);
            setPaneStatus('error');
            moveCursorToAnnotation(errors[0]);
        }
        else if (currentAnnotations.length > 0) {
            setHighlightedAnnotation(currentAnnotations[0]);
            setPaneStatus('warning');
            moveCursorToAnnotation(currentAnnotations[0]);
        }
        else {
            setHighlightedAnnotation(undefined);
            setPaneStatus('hidden');
            editor.gotoLine(row + 1, 0, false);
        }
    });
    // HACK: Wrapped lines are highlighted individually. This is seriously the recommended fix.
    // See: https://github.com/ajaxorg/ace/issues/3067
    editor.setHighlightActiveLine(false);
    editor.$updateHighlightActiveLine = function () {
        const session = this.getSession();
        let highlight;
        if (this.$highlightActiveLine) {
            if (this.$selectionStyle !== 'line' || !this.selection.isMultiLine()) {
                highlight = this.getCursorPosition();
            }
            if (this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1)) {
                highlight = false;
            }
        }
        if (session.$highlightLineMarker && !highlight) {
            session.removeMarker(session.$highlightLineMarker.id);
            session.$highlightLineMarker = null;
        }
        else if (!session.$highlightLineMarker && highlight) {
            const range = new ace.Range(highlight.row, 0, highlight.row, Infinity);
            range.id = session.addMarker(range, 'ace_active-line', 'fullLine');
            session.$highlightLineMarker = range;
        }
        else if (highlight) {
            session.$highlightLineMarker.start.row = highlight.row;
            session.$highlightLineMarker.end.row = highlight.row;
            session.$highlightLineMarker.start.column = 0;
            session._signal('changeBackMarker');
        }
    };
    editor.setHighlightActiveLine(true);
    // HACK: Annotations aren't cleared when editor is empty.
    editor.on('change', () => {
        if (editor.getValue().length === 0) {
            editor.session.clearAnnotations();
        }
    });
    // HACK: "disable" error tooltips by hiding them as soon as they appear.
    // See https://github.com/ajaxorg/ace/issues/4004
    editor.on('showGutterTooltip', (tooltip) => {
        tooltip.hide();
    });
}
//# sourceMappingURL=setup-editor.js.map