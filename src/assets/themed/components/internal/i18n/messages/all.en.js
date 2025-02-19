export default {
  '@cloudscape-design/components': {
    en: {
      alert: { dismissAriaLabel: [{ type: 0, value: 'Dismiss alert' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Side navigation' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Close side navigation' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Open side navigation' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notifications' }],
        'ariaLabels.tools': [{ type: 0, value: 'Help panel' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Open help panel' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Close help panel' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Error' }],
        selectedAriaLabel: [{ type: 0, value: 'Selected' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Next month' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Previous month' }],
        todayAriaLabel: [{ type: 0, value: 'Today' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notifications' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Error' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'In progress' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Info' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'All notifications' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notifications' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Success' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Warning' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Error' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Error' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Clear' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Close modal' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Next page' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Page ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' of all pages' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Previous page' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Close popover' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'All properties' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Apply' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Cancel' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Clear filters' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Edit filter' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Properties' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Values' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'and' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'or' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Contains' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Does not contain' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'Does not equal' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Equals' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Greater than or equal' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Greater than' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Less than or equal' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Less than' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operator' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operators' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Property' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Show fewer' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Show more' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Value' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Remove filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' equals ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Remove filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' does not equal ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Remove filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' is greater than ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Remove filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' is greater than or equal to ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Remove filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' is less than ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Remove filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' is less than or equal to ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Remove filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' contains ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Remove filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' does not contain ' },
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
        selectedAriaLabel: [{ type: 0, value: 'Selected' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Step ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Step ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' of ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Cancel' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Previous' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Next' }],
        'i18nStrings.optional': [{ type: 0, value: 'optional' }],
      },
    },
  },
};
