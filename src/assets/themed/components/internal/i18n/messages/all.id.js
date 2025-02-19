export default {
  '@cloudscape-design/components': {
    id: {
      alert: { dismissAriaLabel: [{ type: 0, value: 'Abaikan pemberitahuan' }] },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navigasi samping' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Tutup navigasi samping' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Buka navigasi samping' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notifikasi' }],
        'ariaLabels.tools': [{ type: 0, value: 'Panel bantuan' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Buka panel bantuan' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Tutup panel bantuan' }],
      },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Kesalahan' }],
        selectedAriaLabel: [{ type: 0, value: 'Dipilih' }],
      },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Bulan berikutnya' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Bulan sebelumnya' }],
        todayAriaLabel: [{ type: 0, value: 'Hari ini' }],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notifikasi' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Kesalahan' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'Sedang berlangsung' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Info' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Semua notifikasi' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notifikasi' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Berhasil' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Peringatan' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Kesalahan' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Kesalahan' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Hapus' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Tutup modal' }] },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Halaman berikutnya' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Halaman ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' dari semua halaman' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Halaman sebelumnya' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Tutup popover' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Semua properti' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Terapkan' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Hapus filter' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Edit filter' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Properti' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Nilai' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'dan' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'atau' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Berisi' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Tidak berisi' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'Tidak sama dengan' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Sama dengan' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Lebih besar dari atau sama dengan' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Lebih besar dari' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Kurang dari atau sama dengan' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Kurang dari' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operator' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operator' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Properti' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Tampilkan lebih sedikit' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Tampilkan lebih banyak' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Nilai' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' sama dengan ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' tidak sama dengan ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' lebih besar dari ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' lebih besar dari atau sama dengan ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' kurang dari ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' kurang dari atau sama dengan ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' berisi ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Hapus filter, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' tidak berisi ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Kesalahan' }],
        selectedAriaLabel: [{ type: 0, value: 'Dipilih' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Langkah ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Langkah ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' dari ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Batalkan' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Sebelumnya' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Berikutnya' }],
        'i18nStrings.optional': [{ type: 0, value: 'opsional' }],
      },
    },
  },
};
