export default {
  '@cloudscape-design/components': {
    'zh-CN': {
      alert: { dismissAriaLabel: [{ type: 0, value: '退出提示' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: '侧导航' }],
        'ariaLabels.navigationClose': [{ type: 0, value: '关闭侧导航' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: '打开侧导航' }],
        'ariaLabels.notifications': [{ type: 0, value: '通知' }],
        'ariaLabels.tools': [{ type: 0, value: '帮助面板' }],
        'ariaLabels.toolsClose': [{ type: 0, value: '打开帮助面板' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: '关闭帮助面板' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: '错误' }],
        selectedAriaLabel: [{ type: 0, value: '已选定' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: '下个月' }],
        previousMonthAriaLabel: [{ type: 0, value: '上个月' }],
        todayAriaLabel: [{ type: 0, value: '今天' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: '通知' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: '错误' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: '进行中' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: '信息' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: '所有通知' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: '通知' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: '成功' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: '警告' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: '错误' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: '错误' }] },
      input: { clearAriaLabel: [{ type: 0, value: '清除' }] },
      modal: { closeAriaLabel: [{ type: 0, value: '关闭模态' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: '下一页' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: '第 ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' 页' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: '上一页' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: '关闭弹出框' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: '所有属性' }],
        'i18nStrings.applyActionText': [{ type: 0, value: '应用' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: '取消' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: '清除筛选条件' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: '编辑筛选条件' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: '属性' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: '值' }],
        'i18nStrings.operationAndText': [{ type: 0, value: '和' }],
        'i18nStrings.operationOrText': [{ type: 0, value: '或' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: '包含' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: '不包含' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: '不等于' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: '等于' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: '大于或等于' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: '大于' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: '小于或等于' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: '小于' }],
        'i18nStrings.operatorText': [{ type: 0, value: '运算符' }],
        'i18nStrings.operatorsText': [{ type: 0, value: '运算符' }],
        'i18nStrings.propertyText': [{ type: 0, value: '属性' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: '显示更少' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: '显示更多' }],
        'i18nStrings.valueText': [{ type: 0, value: '值' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: '删除筛选条件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '等于' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: '删除筛选条件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '不等于' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: '删除筛选条件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '大于' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: '删除筛选条件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '大于或等于' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: '删除筛选条件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '小于' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: '删除筛选条件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '小于或等于' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: '删除筛选条件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '包含' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: '删除筛选条件，' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '不包含' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: { errorIconAriaLabel: [{ type: 0, value: '错误' }], selectedAriaLabel: [{ type: 0, value: '已选定' }] },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: '第 ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' 步' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: '第 ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' 步，共 ' },
          { type: 1, value: 'stepsCount' },
          { type: 0, value: ' 步' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: '取消' }],
        'i18nStrings.previousButton': [{ type: 0, value: '上一步' }],
        'i18nStrings.nextButton': [{ type: 0, value: '下一步' }],
        'i18nStrings.optional': [{ type: 0, value: '可选' }],
      },
    },
  },
};
