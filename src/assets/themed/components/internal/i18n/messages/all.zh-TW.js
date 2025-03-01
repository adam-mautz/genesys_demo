export default {
  '@cloudscape-design/components': {
    'zh-TW': {
      alert: { dismissAriaLabel: [{ type: 0, value: '關閉提醒' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: '側邊導覽' }],
        'ariaLabels.navigationClose': [{ type: 0, value: '關閉側邊導覽' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: '開啟側邊導覽' }],
        'ariaLabels.notifications': [{ type: 0, value: '通知' }],
        'ariaLabels.tools': [{ type: 0, value: '說明面板' }],
        'ariaLabels.toolsClose': [{ type: 0, value: '開啟說明面板' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: '關閉說明面板' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: '錯誤' }],
        selectedAriaLabel: [{ type: 0, value: '已選取' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: '下個月' }],
        previousMonthAriaLabel: [{ type: 0, value: '上個月' }],
        todayAriaLabel: [{ type: 0, value: '今天' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: '通知' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: '錯誤' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: '進行中' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: '資訊' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: '所有通知' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: '通知' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: '成功' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: '警告' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: '錯誤' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: '錯誤' }] },
      input: { clearAriaLabel: [{ type: 0, value: '清除' }] },
      modal: { closeAriaLabel: [{ type: 0, value: '關閉強制回應' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: '下一頁' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: '所有頁面中的第 ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' 頁' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: '上一頁' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: '關閉彈出視窗' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: '所有屬性' }],
        'i18nStrings.applyActionText': [{ type: 0, value: '套用' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: '取消' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: '清除篩選條件' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: '編輯篩選條件' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: '屬性' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: '值' }],
        'i18nStrings.operationAndText': [{ type: 0, value: '和' }],
        'i18nStrings.operationOrText': [{ type: 0, value: '或' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: '包含' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: '不包含' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: '不等於' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: '等於' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: '大於或等於' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: '大於' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: '小於或等於' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: '小於' }],
        'i18nStrings.operatorText': [{ type: 0, value: '運算子' }],
        'i18nStrings.operatorsText': [{ type: 0, value: '運算子' }],
        'i18nStrings.propertyText': [{ type: 0, value: '屬性' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: '顯示較少' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: '顯示更多' }],
        'i18nStrings.valueText': [{ type: 0, value: '值' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: '移除篩選條件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' 等於 ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: '移除篩選條件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' 不等於 ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: '移除篩選條件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' 大於 ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: '移除篩選條件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' 大於或等於 ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: '移除篩選條件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' 小於 ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: '移除篩選條件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' 小於或等於 ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: '移除篩選條件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' 包含 ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: '移除篩選條件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' 不包含 ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: { errorIconAriaLabel: [{ type: 0, value: '錯誤' }], selectedAriaLabel: [{ type: 0, value: '已選取' }] },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: '步驟 ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: '步驟 ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: '，共 ' },
          { type: 1, value: 'stepsCount' },
          { type: 0, value: ' 步' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: '取消' }],
        'i18nStrings.previousButton': [{ type: 0, value: '上一步' }],
        'i18nStrings.nextButton': [{ type: 0, value: '下一步' }],
        'i18nStrings.optional': [{ type: 0, value: '選用' }],
      },
    },
  },
};
