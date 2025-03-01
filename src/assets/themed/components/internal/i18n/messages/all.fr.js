export default {
  '@cloudscape-design/components': {
    fr: {
      alert: { dismissAriaLabel: [{ type: 0, value: "Ignorer l'alerte" }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navigation latérale' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Fermer la navigation latérale' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Ouvrir la navigation latérale' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notifications' }],
        'ariaLabels.tools': [{ type: 0, value: "Volet d'aide" }],
        'ariaLabels.toolsClose': [{ type: 0, value: "Ouvrir le volet d'aide" }],
        'ariaLabels.toolsToggle': [{ type: 0, value: "Fermer le volet d'aide" }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Erreur' }],
        selectedAriaLabel: [{ type: 0, value: 'Sélectionné' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Mois suivant' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Mois précédent' }],
        todayAriaLabel: [{ type: 0, value: "Aujourd'hui" }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notifications' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erreur' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'En cours' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Informations' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Toutes les notifications' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notifications' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Réussite' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Avertissement' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erreur' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Erreur' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Effacer' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Fermer le modal' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Page suivante' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Page ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' de toutes les pages' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Page précédente' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Fermer la fenêtre contextuelle' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Toutes les propriétés' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Appliquer' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Effacer les filtres' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Modifier le filtre' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Propriétés' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Valeurs' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'et' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'ou' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Contient' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Ne contient pas' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: "N'est pas égal à" }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Égal à' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Supérieur ou égal à' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Supérieur à' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Inférieur ou égal à' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Inférieur à' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Opérateur' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Opérateurs' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Propriété' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Afficher moins' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Afficher plus' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Valeur' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' égal à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: " n'est pas égal à " },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est supérieur à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est supérieur ou égal à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est inférieur à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' est inférieur ou égal à ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' contient ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Supprimer le filtre, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' ne contient pas ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Erreur' }],
        selectedAriaLabel: [{ type: 0, value: 'Sélectionné' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Étape ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Étape ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Annuler' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Précédent' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Suivant' }],
        'i18nStrings.optional': [{ type: 0, value: 'facultatif' }],
      },
    },
  },
};
