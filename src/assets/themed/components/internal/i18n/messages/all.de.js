export default {
  '@cloudscape-design/components': {
    de: {
      alert: { dismissAriaLabel: [{ type: 0, value: 'Warnung verwerfen' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Seitennavigation' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Seitennavigation schließen' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Seitennavigation öffnen' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Benachrichtigungen' }],
        'ariaLabels.tools': [{ type: 0, value: 'Hilfebereich' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Hilfebereich öffnen' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Hilfebereich schließen' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Fehler' }],
        selectedAriaLabel: [{ type: 0, value: 'Ausgewählt' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Nächster Monat' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Vorheriger Monat' }],
        todayAriaLabel: [{ type: 0, value: 'Heute' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Benachrichtigungen' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Fehler' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'In Bearbeitung' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Info' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Alle Benachrichtigungen' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Benachrichtigungen' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Erfolg' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Warnung' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Fehler' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Fehler' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Löschen' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Modal schließen' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Nächste Seite' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Seite ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' aller Seiten' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Vorherige Seite' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Popover schließen' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Alle Eigenschaften' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Anwenden' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Abbrechen' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Filter löschen' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Filter bearbeiten' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Eigenschaften' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Werte' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'und' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'oder' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Enthält' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Enthält nicht' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'Ist nicht gleich' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Ist gleich' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Ist größer als oder gleich' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Ist größer als' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Ist kleiner als oder gleich' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Ist kleiner als' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operator' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operatoren' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Eigenschaft' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Weniger anzeigen' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Mehr anzeigen' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Wert' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Filter entfernen, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' ist gleich ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Filter entfernen, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' ist nicht gleich ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Filter entfernen, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' ist größer als ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Filter entfernen, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' ist größer oder gleich ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Filter entfernen, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' ist kleiner als ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Filter entfernen, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' ist kleiner als oder gleich ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Filter entfernen, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' enthält ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Filter entfernen, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' enthält nicht ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Fehler' }],
        selectedAriaLabel: [{ type: 0, value: 'Ausgewählt' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Schritt ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Schritt ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' von ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Abbrechen' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Zurück' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Weiter' }],
        'i18nStrings.optional': [{ type: 0, value: 'optional' }],
      },
    },
  },
};
