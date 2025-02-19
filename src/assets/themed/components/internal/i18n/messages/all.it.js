export default {
  '@cloudscape-design/components': {
    it: {
      alert: { dismissAriaLabel: [{ type: 0, value: 'Avviso di disattivazione' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navigazione laterale' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Chiudi navigazione laterale' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Apri navigazione laterale' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notifiche' }],
        'ariaLabels.tools': [{ type: 0, value: 'Pannello di aiuto' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Apri il pannello di aiuto' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Chiudere il pannello di aiuto' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Errore' }],
        selectedAriaLabel: [{ type: 0, value: 'Selezionato' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Mese successivo' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Mese precedente' }],
        todayAriaLabel: [{ type: 0, value: 'Oggi' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notifiche' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Errore' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'In corso' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Informazioni' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Tutte le notifiche' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notifiche' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Esito positivo' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Avviso' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Errore' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Errore' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Cancella' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Chiudi modale' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Pagina successiva' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Pagina ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' di tutte le pagine' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Pagina precedente' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Chiudi popover' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Tutte le proprietà' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Applica' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Annulla' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Cancella filtri' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Modifica filtro' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Proprietà' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Valori' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'e' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'o' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Contiene' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Non contiene' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'Non è uguale a' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Uguale a' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Maggiore o uguale a' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Maggiore di' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Minore o uguale a' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Minore di' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operatore' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operatori' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Proprietà' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Mostra meno' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Mostra altro' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Valore' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Rimuovi filtro ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ', uguale a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Rimuovi filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' non è uguale a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Rimuovi filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' è maggiore di ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Rimuovi filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' è maggiore o uguale a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Rimuovi filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' è inferiore a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Rimuovi filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' è minore o uguale a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Rimuovi filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' contiene ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Rimuovi filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' non contiene ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Errore' }],
        selectedAriaLabel: [{ type: 0, value: 'Selezionato' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Fase ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Fase ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' di ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Annulla' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Precedente' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Successivo' }],
        'i18nStrings.optional': [{ type: 0, value: 'facoltativo' }],
      },
    },
  },
};
