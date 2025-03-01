export default {
  '@cloudscape-design/components': {
    ko: {
      alert: { dismissAriaLabel: [{ type: 0, value: '알림 무시' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: '측면 탐색' }],
        'ariaLabels.navigationClose': [{ type: 0, value: '측면 탐색 닫기' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: '측면 탐색 열기' }],
        'ariaLabels.notifications': [{ type: 0, value: '알림' }],
        'ariaLabels.tools': [{ type: 0, value: '도움말 창' }],
        'ariaLabels.toolsClose': [{ type: 0, value: '도움말 창 열기' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: '도움말 창 닫기' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: '오류' }],
        selectedAriaLabel: [{ type: 0, value: '선택됨' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: '다음 달' }],
        previousMonthAriaLabel: [{ type: 0, value: '이전 달' }],
        todayAriaLabel: [{ type: 0, value: '오늘' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: '알림' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: '오류' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: '진행 중' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: '정보' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: '모든 알림' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: '알림' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: '성공' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: '경고' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: '오류' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: '오류' }] },
      input: { clearAriaLabel: [{ type: 0, value: '지우기' }] },
      modal: { closeAriaLabel: [{ type: 0, value: '모달 닫기' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: '다음 페이지' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: '전체 페이지 중 ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: '페이지' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: '이전 페이지' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: '팝오버 닫기' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: '모든 속성' }],
        'i18nStrings.applyActionText': [{ type: 0, value: '적용' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: '취소' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: '필터 지우기' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: '필터 편집' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: '속성' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: '값' }],
        'i18nStrings.operationAndText': [{ type: 0, value: '및' }],
        'i18nStrings.operationOrText': [{ type: 0, value: '또는' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: '포함' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: '포함 안 함' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: '같지 않음' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: '같음' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: '크거나 같음' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: '보다 큼' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: '작거나 같음' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: '보다 작음' }],
        'i18nStrings.operatorText': [{ type: 0, value: '연산자' }],
        'i18nStrings.operatorsText': [{ type: 0, value: '연산자' }],
        'i18nStrings.propertyText': [{ type: 0, value: '속성' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: '더 적게 보기' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: '더 많이 보기' }],
        'i18nStrings.valueText': [{ type: 0, value: '값' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '이(가) ' },
                  { type: 1, value: 'token__value' },
                  { type: 0, value: '과(와) 같음 필터 제거' },
                ],
              },
              not_equals: {
                value: [
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '이(가) ' },
                  { type: 1, value: 'token__value' },
                  { type: 0, value: '과(와) 같지 않음 필터 제거' },
                ],
              },
              greater_than: {
                value: [
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '이(가) ' },
                  { type: 1, value: 'token__value' },
                  { type: 0, value: '보다 큼 필터 제거' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '이(가) ' },
                  { type: 1, value: 'token__value' },
                  { type: 0, value: '보다 크거나 같음 필터 제거' },
                ],
              },
              less_than: {
                value: [
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '이(가) ' },
                  { type: 1, value: 'token__value' },
                  { type: 0, value: '보다 작음 필터 제거' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '이(가) ' },
                  { type: 1, value: 'token__value' },
                  { type: 0, value: '보다 작거나 같음 필터 제거' },
                ],
              },
              contains: {
                value: [
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '이(가) ' },
                  { type: 1, value: 'token__value' },
                  { type: 0, value: '을(를) 포함함 필터 제거' },
                ],
              },
              not_contains: {
                value: [
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: '이(가) ' },
                  { type: 1, value: 'token__value' },
                  { type: 0, value: '을(를) 포함하지 않음 필터 제거' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: { errorIconAriaLabel: [{ type: 0, value: '오류' }], selectedAriaLabel: [{ type: 0, value: '선택됨' }] },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 1, value: 'stepNumber' },
          { type: 0, value: '단계' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 1, value: 'stepNumber' },
          { type: 0, value: '/' },
          { type: 1, value: 'stepsCount' },
          { type: 0, value: ' 단계' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: '취소' }],
        'i18nStrings.previousButton': [{ type: 0, value: '이전' }],
        'i18nStrings.nextButton': [{ type: 0, value: '다음' }],
        'i18nStrings.optional': [{ type: 0, value: '선택 사항' }],
      },
    },
  },
};
