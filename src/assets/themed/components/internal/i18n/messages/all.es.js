export default {
  '@cloudscape-design/components': {
    es: {
      alert: { dismissAriaLabel: [{ type: 0, value: 'Descartar alerta' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navegación lateral' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Cerrar navegación lateral' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Abrir navegación lateral' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notificaciones' }],
        'ariaLabels.tools': [{ type: 0, value: 'Panel de ayuda' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Abrir panel de ayuda' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Cerrar panel de ayuda' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Error' }],
        selectedAriaLabel: [{ type: 0, value: 'Seleccionado' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Próximo mes' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Mes anterior' }],
        todayAriaLabel: [{ type: 0, value: 'Hoy' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notificaciones' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Error' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'En curso' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Información' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Todas las notificaciones' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notificaciones' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Éxito' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Advertencia' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Error' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Error' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Borrar' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Cerrar modal' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Página siguiente' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Página ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' de todas las páginas' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Página anterior' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Cerrar ventana emergente' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Todas las propiedades' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Aplicar' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Borrar filtros' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Editar filtro' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Propiedades' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Valores' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'y' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'o' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Contiene' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'No contiene' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'No es igual a' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Igual a' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Mayor o igual que' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Mayor que' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Menor o igual que' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Menor que' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operador' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operadores' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Propiedad' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Mostrar menos' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Mostrar más' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Valor' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' no es igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' es mayor que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' es mayor o igual que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' es menor que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' es menor o igual que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' contiene ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Eliminar filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' no contiene ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Error' }],
        selectedAriaLabel: [{ type: 0, value: 'Seleccionado' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Paso ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Paso ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Anterior' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Siguiente' }],
        'i18nStrings.optional': [{ type: 0, value: 'opcional' }],
      },
    },
  },
};
