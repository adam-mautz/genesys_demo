export default {
  '@cloudscape-design/components': {
    'pt-BR': {
      alert: { dismissAriaLabel: [{ type: 0, value: 'Descartar alerta' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navegação lateral' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Fechar navegação lateral' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Abrir navegação lateral' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notificações' }],
        'ariaLabels.tools': [{ type: 0, value: 'Painel de ajuda' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Abrir o painel de ajuda' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Fechar o painel de ajuda' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Erro' }],
        selectedAriaLabel: [{ type: 0, value: 'Selecionado' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Próximo mês' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Mês anterior' }],
        todayAriaLabel: [{ type: 0, value: 'Hoje' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notificações' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erro' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'Em andamento' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Informações' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Todas as notificações' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notificações' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Com êxito' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Aviso' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erro' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Erro' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Limpar' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Fechar modal' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Próxima página' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Página ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' de todas as páginas' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Página anterior' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Fechar pop-over' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Todas as propriedades' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Aplicar' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Limpar filtros' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Editar filtro' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Propriedades' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Valores' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'e' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'ou' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Contém' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Não contém' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'Diferente de' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Igual a' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Maior que ou igual a' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Maior que' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Menor que ou igual a' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Menor que' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operador' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operadores' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Propriedade' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Mostrar menos' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Mostrar mais' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Valor' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' diferente de ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é maior que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é maior que ou igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é menor que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é menor que ou igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Remove filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' contém ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' não contém ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Erro' }],
        selectedAriaLabel: [{ type: 0, value: 'Selecionado' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Etapa ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Etapa ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Anterior' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Próximo' }],
        'i18nStrings.optional': [{ type: 0, value: 'opcional' }],
      },
    },
  },
};
