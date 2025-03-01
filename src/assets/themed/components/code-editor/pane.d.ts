/// <reference types="react" />
import { Ace } from 'ace-builds';
export interface PaneProps {
    id: string;
    visible: boolean;
    annotations: Ace.Annotation[];
    highlighted?: Ace.Annotation;
    cursorPositionLabel: (row: number, column: number) => string;
    closeButtonAriaLabel: string;
    onClose: () => void;
    onAnnotationClick: (annotation: Ace.Annotation) => void;
    onAnnotationClear: () => void;
}
export declare const Pane: ({ id, visible, annotations, highlighted, onClose, onAnnotationClick, onAnnotationClear, cursorPositionLabel, closeButtonAriaLabel, }: PaneProps) => JSX.Element | null;
//# sourceMappingURL=pane.d.ts.map