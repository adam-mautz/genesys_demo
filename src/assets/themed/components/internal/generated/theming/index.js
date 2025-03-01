export var preset = {
  "theme": {
    "id": "visual-refresh",
    "selector": ":root",
    "modes": {
      "color": {
        "id": "color",
        "states": {
          "light": {
            "default": true
          },
          "dark": {
            "selector": ".awsui-dark-mode"
          }
        }
      },
      "density": {
        "id": "density",
        "states": {
          "comfortable": {
            "default": true
          },
          "compact": {
            "selector": ".awsui-compact-mode"
          }
        }
      },
      "motion": {
        "id": "motion",
        "states": {
          "default": {
            "default": true
          },
          "disabled": {
            "selector": ".awsui-motion-disabled"
          }
        }
      }
    },
    "tokens": {
      "colorAmazonOrange": "#ff9900",
      "colorAwsSquidInk": "#232f3e",
      "colorBlack": "#000000",
      "colorBlue100": "#f2f8fd",
      "colorBlue200": "#d3e7f9",
      "colorBlue300": "#b5d6f4",
      "colorBlue400": "#89bdee",
      "colorBlue500": "#539fe5",
      "colorBlue600": "#0972d3",
      "colorBlue700": "#065299",
      "colorBlue800": "#033160",
      "colorBlue900": "#00142b",
      "colorBlueOpaque": "rgba(51, 136, 221, 0.5)",
      "colorGreen100": "#f2fcf3",
      "colorGreen500": "#29ad32",
      "colorGreen600": "#037f0c",
      "colorGreen700": "#1a520f",
      "colorGreen900": "#001a02",
      "colorGrey100": "#fbfbfb",
      "colorGrey125": "#f8f8f8",
      "colorGrey150": "#f4f4f4",
      "colorGrey200": "#e9ebed",
      "colorGrey300": "#d1d5db",
      "colorGrey400": "#9ba7b6",
      "colorGrey450": "#8d99a8",
      "colorGrey500": "#7d8998",
      "colorGrey550": "#5f6b7a",
      "colorGrey600": "#414d5c",
      "colorGrey650": "#354150",
      "colorGrey700": "#232f3e",
      "colorGrey750": "#192534",
      "colorGrey800": "#0f1b2a",
      "colorGrey900": "#000716",
      "colorGrey950": "#222222",
      "colorOrange100": "#fef6f0",
      "colorOrange500": "#ec7211",
      "colorOrange600": "#eb5f07",
      "colorOrange700": "#dd6b10",
      "colorRed100": "#fff7f7",
      "colorRed500": "#eb6f6f",
      "colorRed600": "#d91515",
      "colorRed700": "#7c2718",
      "colorRed900": "#1a0000",
      "colorTransparent": "transparent",
      "colorWhite": "#ffffff",
      "colorChartsRed300": {
        "light": "#ea7158",
        "dark": "#d63f38"
      },
      "colorChartsRed400": {
        "light": "#dc5032",
        "dark": "#ed5958"
      },
      "colorChartsRed500": {
        "light": "#d13313",
        "dark": "#fe6e73"
      },
      "colorChartsRed600": {
        "light": "#ba2e0f",
        "dark": "#ff8a8a"
      },
      "colorChartsRed700": {
        "light": "#a82a0c",
        "dark": "#ffa09e"
      },
      "colorChartsRed800": {
        "light": "#972709",
        "dark": "#ffb3b0"
      },
      "colorChartsRed900": {
        "light": "#892407",
        "dark": "#ffc4c0"
      },
      "colorChartsRed1000": {
        "light": "#7d2105",
        "dark": "#ffd2cf"
      },
      "colorChartsRed1100": {
        "light": "#721e03",
        "dark": "#ffe0dd"
      },
      "colorChartsRed1200": {
        "light": "#671c00",
        "dark": "#ffecea"
      },
      "colorChartsOrange300": {
        "light": "#e07941",
        "dark": "#c55305"
      },
      "colorChartsOrange400": {
        "light": "#cc5f21",
        "dark": "#de6923"
      },
      "colorChartsOrange500": {
        "light": "#bc4d01",
        "dark": "#f27c36"
      },
      "colorChartsOrange600": {
        "light": "#a84401",
        "dark": "#f89256"
      },
      "colorChartsOrange700": {
        "light": "#983c02",
        "dark": "#fca572"
      },
      "colorChartsOrange800": {
        "light": "#8a3603",
        "dark": "#ffb68b"
      },
      "colorChartsOrange900": {
        "light": "#7e3103",
        "dark": "#ffc6a4"
      },
      "colorChartsOrange1000": {
        "light": "#732c02",
        "dark": "#ffd4bb"
      },
      "colorChartsOrange1100": {
        "light": "#692801",
        "dark": "#ffe1cf"
      },
      "colorChartsOrange1200": {
        "light": "#602400",
        "dark": "#ffede2"
      },
      "colorChartsYellow300": {
        "light": "#b2911c",
        "dark": "#977001"
      },
      "colorChartsYellow400": {
        "light": "#9c7b0b",
        "dark": "#b08400"
      },
      "colorChartsYellow500": {
        "light": "#8a6b05",
        "dark": "#c59600"
      },
      "colorChartsYellow600": {
        "light": "#7b5f04",
        "dark": "#d3a61c"
      },
      "colorChartsYellow700": {
        "light": "#6f5504",
        "dark": "#dfb52c"
      },
      "colorChartsYellow800": {
        "light": "#654d03",
        "dark": "#eac33a"
      },
      "colorChartsYellow900": {
        "light": "#5d4503",
        "dark": "#f1cf65"
      },
      "colorChartsYellow1000": {
        "light": "#553f03",
        "dark": "#f7db8a"
      },
      "colorChartsYellow1100": {
        "light": "#4d3901",
        "dark": "#fce5a8"
      },
      "colorChartsYellow1200": {
        "light": "#483300",
        "dark": "#ffefc9"
      },
      "colorChartsGreen300": {
        "light": "#67a353",
        "dark": "#48851a"
      },
      "colorChartsGreen400": {
        "light": "#41902c",
        "dark": "#5a9b29"
      },
      "colorChartsGreen500": {
        "light": "#1f8104",
        "dark": "#69ae34"
      },
      "colorChartsGreen600": {
        "light": "#1a7302",
        "dark": "#7dbd4c"
      },
      "colorChartsGreen700": {
        "light": "#176702",
        "dark": "#8fca61"
      },
      "colorChartsGreen800": {
        "light": "#145d02",
        "dark": "#9fd673"
      },
      "colorChartsGreen900": {
        "light": "#125502",
        "dark": "#b2df8d"
      },
      "colorChartsGreen1000": {
        "light": "#104d01",
        "dark": "#c5e7a8"
      },
      "colorChartsGreen1100": {
        "light": "#0f4601",
        "dark": "#d5efbe"
      },
      "colorChartsGreen1200": {
        "light": "#0d4000",
        "dark": "#e4f7d5"
      },
      "colorChartsTeal300": {
        "light": "#2ea597",
        "dark": "#018977"
      },
      "colorChartsTeal400": {
        "light": "#1c8e81",
        "dark": "#009d89"
      },
      "colorChartsTeal500": {
        "light": "#0d7d70",
        "dark": "#00b09b"
      },
      "colorChartsTeal600": {
        "light": "#096f64",
        "dark": "#40bfa9"
      },
      "colorChartsTeal700": {
        "light": "#06645a",
        "dark": "#5fccb7"
      },
      "colorChartsTeal800": {
        "light": "#045b52",
        "dark": "#77d7c3"
      },
      "colorChartsTeal900": {
        "light": "#03524a",
        "dark": "#94e0d0"
      },
      "colorChartsTeal1000": {
        "light": "#014b44",
        "dark": "#ace9db"
      },
      "colorChartsTeal1100": {
        "light": "#01443e",
        "dark": "#c2f0e6"
      },
      "colorChartsTeal1200": {
        "light": "#003e38",
        "dark": "#d7f7f0"
      },
      "colorChartsBlue1300": {
        "light": "#529ccb",
        "dark": "#00819c"
      },
      "colorChartsBlue1400": {
        "light": "#3184c2",
        "dark": "#0497ba"
      },
      "colorChartsBlue1500": {
        "light": "#0273bb",
        "dark": "#08aad2"
      },
      "colorChartsBlue1600": {
        "light": "#0166ab",
        "dark": "#44b9dd"
      },
      "colorChartsBlue1700": {
        "light": "#015b9d",
        "dark": "#63c6e7"
      },
      "colorChartsBlue1800": {
        "light": "#015292",
        "dark": "#79d2f0"
      },
      "colorChartsBlue1900": {
        "light": "#014a87",
        "dark": "#98dcf5"
      },
      "colorChartsBlue11000": {
        "light": "#01437d",
        "dark": "#b3e4f8"
      },
      "colorChartsBlue11100": {
        "light": "#003c75",
        "dark": "#caedfc"
      },
      "colorChartsBlue11200": {
        "light": "#00366d",
        "dark": "#ddf4ff"
      },
      "colorChartsBlue2300": {
        "light": "#688ae8",
        "dark": "#486de8"
      },
      "colorChartsBlue2400": {
        "light": "#5978e3",
        "dark": "#6384f5"
      },
      "colorChartsBlue2500": {
        "light": "#4066df",
        "dark": "#7698fe"
      },
      "colorChartsBlue2600": {
        "light": "#3759ce",
        "dark": "#8ea9ff"
      },
      "colorChartsBlue2700": {
        "light": "#314fbf",
        "dark": "#a2b8ff"
      },
      "colorChartsBlue2800": {
        "light": "#2c46b1",
        "dark": "#b1c5ff"
      },
      "colorChartsBlue2900": {
        "light": "#273ea5",
        "dark": "#c3d1ff"
      },
      "colorChartsBlue21000": {
        "light": "#23379b",
        "dark": "#d2dcff"
      },
      "colorChartsBlue21100": {
        "light": "#1f3191",
        "dark": "#dfe6ff"
      },
      "colorChartsBlue21200": {
        "light": "#1b2b88",
        "dark": "#ecf0ff"
      },
      "colorChartsPurple300": {
        "light": "#a783e1",
        "dark": "#8d59de"
      },
      "colorChartsPurple400": {
        "light": "#9469d6",
        "dark": "#a173ea"
      },
      "colorChartsPurple500": {
        "light": "#8456ce",
        "dark": "#b088f5"
      },
      "colorChartsPurple600": {
        "light": "#7749bf",
        "dark": "#bf9bf9"
      },
      "colorChartsPurple700": {
        "light": "#6b40b2",
        "dark": "#cbabfc"
      },
      "colorChartsPurple800": {
        "light": "#6237a7",
        "dark": "#d6baff"
      },
      "colorChartsPurple900": {
        "light": "#59309d",
        "dark": "#dfc8ff"
      },
      "colorChartsPurple1000": {
        "light": "#512994",
        "dark": "#e8d5ff"
      },
      "colorChartsPurple1100": {
        "light": "#4a238b",
        "dark": "#efe2ff"
      },
      "colorChartsPurple1200": {
        "light": "#431d84",
        "dark": "#f5edff"
      },
      "colorChartsPink300": {
        "light": "#da7596",
        "dark": "#c64a70"
      },
      "colorChartsPink400": {
        "light": "#ce567c",
        "dark": "#d56889"
      },
      "colorChartsPink500": {
        "light": "#c33d69",
        "dark": "#e07f9d"
      },
      "colorChartsPink600": {
        "light": "#b1325c",
        "dark": "#eb92ad"
      },
      "colorChartsPink700": {
        "light": "#a32952",
        "dark": "#f5a2bb"
      },
      "colorChartsPink800": {
        "light": "#962249",
        "dark": "#ffb0c8"
      },
      "colorChartsPink900": {
        "light": "#8b1b42",
        "dark": "#ffc1d4"
      },
      "colorChartsPink1000": {
        "light": "#81143b",
        "dark": "#ffd1de"
      },
      "colorChartsPink1100": {
        "light": "#780d35",
        "dark": "#ffdfe8"
      },
      "colorChartsPink1200": {
        "light": "#6f062f",
        "dark": "#ffecf1"
      },
      "colorChartsStatusCritical": {
        "light": "{colorChartsRed1000}",
        "dark": "{colorChartsRed300}"
      },
      "colorChartsStatusHigh": {
        "light": "{colorChartsRed600}",
        "dark": "{colorChartsRed500}"
      },
      "colorChartsStatusMedium": {
        "light": "{colorChartsOrange400}",
        "dark": "{colorChartsOrange600}"
      },
      "colorChartsStatusLow": {
        "light": "{colorChartsYellow300}",
        "dark": "{colorChartsYellow700}"
      },
      "colorChartsStatusPositive": {
        "light": "{colorChartsGreen300}",
        "dark": "{colorChartsGreen500}"
      },
      "colorChartsStatusInfo": {
        "light": "{colorChartsBlue1400}",
        "dark": "{colorChartsBlue1500}"
      },
      "colorChartsStatusNeutral": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey500}"
      },
      "colorChartsThresholdNegative": {
        "light": "{colorRed600}",
        "dark": "{colorRed500}"
      },
      "colorChartsThresholdPositive": {
        "light": "{colorGreen600}",
        "dark": "{colorGreen500}"
      },
      "colorChartsThresholdInfo": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorChartsThresholdNeutral": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorChartsLineGrid": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey600}"
      },
      "colorChartsLineTick": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey600}"
      },
      "colorChartsLineAxis": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey600}"
      },
      "colorChartsPaletteCategorical1": {
        "light": "{colorChartsBlue2300}",
        "dark": "{colorChartsBlue2300}"
      },
      "colorChartsPaletteCategorical2": {
        "light": "{colorChartsPink500}",
        "dark": "{colorChartsPink500}"
      },
      "colorChartsPaletteCategorical3": {
        "light": "{colorChartsTeal300}",
        "dark": "{colorChartsTeal300}"
      },
      "colorChartsPaletteCategorical4": {
        "light": "{colorChartsPurple500}",
        "dark": "{colorChartsPurple500}"
      },
      "colorChartsPaletteCategorical5": {
        "light": "{colorChartsOrange300}",
        "dark": "{colorChartsOrange300}"
      },
      "colorChartsPaletteCategorical6": {
        "light": "{colorChartsBlue2600}",
        "dark": "{colorChartsBlue2600}"
      },
      "colorChartsPaletteCategorical7": {
        "light": "{colorChartsPink800}",
        "dark": "{colorChartsPink800}"
      },
      "colorChartsPaletteCategorical8": {
        "light": "{colorChartsTeal600}",
        "dark": "{colorChartsTeal600}"
      },
      "colorChartsPaletteCategorical9": {
        "light": "{colorChartsPurple800}",
        "dark": "{colorChartsPurple800}"
      },
      "colorChartsPaletteCategorical10": {
        "light": "{colorChartsOrange600}",
        "dark": "{colorChartsOrange600}"
      },
      "colorChartsPaletteCategorical11": {
        "light": "{colorChartsBlue2900}",
        "dark": "{colorChartsBlue2900}"
      },
      "colorChartsPaletteCategorical12": {
        "light": "{colorChartsPink1100}",
        "dark": "{colorChartsPink1100}"
      },
      "colorChartsPaletteCategorical13": {
        "light": "{colorChartsTeal900}",
        "dark": "{colorChartsTeal900}"
      },
      "colorChartsPaletteCategorical14": {
        "light": "{colorChartsPurple1100}",
        "dark": "{colorChartsPurple1100}"
      },
      "colorChartsPaletteCategorical15": {
        "light": "{colorChartsOrange900}",
        "dark": "{colorChartsOrange900}"
      },
      "colorChartsPaletteCategorical16": {
        "light": "{colorChartsBlue21200}",
        "dark": "{colorChartsBlue21200}"
      },
      "colorChartsPaletteCategorical17": {
        "light": "{colorChartsPink400}",
        "dark": "{colorChartsPink400}"
      },
      "colorChartsPaletteCategorical18": {
        "light": "{colorChartsTeal1200}",
        "dark": "{colorChartsTeal1200}"
      },
      "colorChartsPaletteCategorical19": {
        "light": "{colorChartsPurple400}",
        "dark": "{colorChartsPurple400}"
      },
      "colorChartsPaletteCategorical20": {
        "light": "{colorChartsOrange1200}",
        "dark": "{colorChartsOrange1200}"
      },
      "colorChartsPaletteCategorical21": {
        "light": "{colorChartsBlue2500}",
        "dark": "{colorChartsBlue2500}"
      },
      "colorChartsPaletteCategorical22": {
        "light": "{colorChartsPink700}",
        "dark": "{colorChartsPink700}"
      },
      "colorChartsPaletteCategorical23": {
        "light": "{colorChartsTeal500}",
        "dark": "{colorChartsTeal500}"
      },
      "colorChartsPaletteCategorical24": {
        "light": "{colorChartsPurple700}",
        "dark": "{colorChartsPurple700}"
      },
      "colorChartsPaletteCategorical25": {
        "light": "{colorChartsOrange500}",
        "dark": "{colorChartsOrange500}"
      },
      "colorChartsPaletteCategorical26": {
        "light": "{colorChartsBlue2800}",
        "dark": "{colorChartsBlue2800}"
      },
      "colorChartsPaletteCategorical27": {
        "light": "{colorChartsPink1000}",
        "dark": "{colorChartsPink1000}"
      },
      "colorChartsPaletteCategorical28": {
        "light": "{colorChartsTeal800}",
        "dark": "{colorChartsTeal800}"
      },
      "colorChartsPaletteCategorical29": {
        "light": "{colorChartsPurple1000}",
        "dark": "{colorChartsPurple1000}"
      },
      "colorChartsPaletteCategorical30": {
        "light": "{colorChartsOrange800}",
        "dark": "{colorChartsOrange800}"
      },
      "colorChartsPaletteCategorical31": {
        "light": "{colorChartsBlue21100}",
        "dark": "{colorChartsBlue21100}"
      },
      "colorChartsPaletteCategorical32": {
        "light": "{colorChartsPink300}",
        "dark": "{colorChartsPink300}"
      },
      "colorChartsPaletteCategorical33": {
        "light": "{colorChartsTeal1100}",
        "dark": "{colorChartsTeal1100}"
      },
      "colorChartsPaletteCategorical34": {
        "light": "{colorChartsPurple300}",
        "dark": "{colorChartsPurple300}"
      },
      "colorChartsPaletteCategorical35": {
        "light": "{colorChartsOrange1100}",
        "dark": "{colorChartsOrange1100}"
      },
      "colorChartsPaletteCategorical36": {
        "light": "{colorChartsBlue2400}",
        "dark": "{colorChartsBlue2400}"
      },
      "colorChartsPaletteCategorical37": {
        "light": "{colorChartsPink600}",
        "dark": "{colorChartsPink600}"
      },
      "colorChartsPaletteCategorical38": {
        "light": "{colorChartsTeal400}",
        "dark": "{colorChartsTeal400}"
      },
      "colorChartsPaletteCategorical39": {
        "light": "{colorChartsPurple600}",
        "dark": "{colorChartsPurple600}"
      },
      "colorChartsPaletteCategorical40": {
        "light": "{colorChartsOrange400}",
        "dark": "{colorChartsOrange400}"
      },
      "colorChartsPaletteCategorical41": {
        "light": "{colorChartsBlue2700}",
        "dark": "{colorChartsBlue2700}"
      },
      "colorChartsPaletteCategorical42": {
        "light": "{colorChartsPink900}",
        "dark": "{colorChartsPink900}"
      },
      "colorChartsPaletteCategorical43": {
        "light": "{colorChartsTeal700}",
        "dark": "{colorChartsTeal700}"
      },
      "colorChartsPaletteCategorical44": {
        "light": "{colorChartsPurple900}",
        "dark": "{colorChartsPurple900}"
      },
      "colorChartsPaletteCategorical45": {
        "light": "{colorChartsOrange700}",
        "dark": "{colorChartsOrange700}"
      },
      "colorChartsPaletteCategorical46": {
        "light": "{colorChartsBlue21000}",
        "dark": "{colorChartsBlue21000}"
      },
      "colorChartsPaletteCategorical47": {
        "light": "{colorChartsPink1200}",
        "dark": "{colorChartsPink1200}"
      },
      "colorChartsPaletteCategorical48": {
        "light": "{colorChartsTeal1000}",
        "dark": "{colorChartsTeal1000}"
      },
      "colorChartsPaletteCategorical49": {
        "light": "{colorChartsPurple1200}",
        "dark": "{colorChartsPurple1200}"
      },
      "colorChartsPaletteCategorical50": {
        "light": "{colorChartsOrange1000}",
        "dark": "{colorChartsOrange1000}"
      },
      "colorGreyOpaque25": {
        "light": "rgba(255, 255, 255, 0.25)",
        "dark": "rgba(255, 255, 255, 0.25)"
      },
      "colorGreyOpaque40": {
        "light": "rgba(0, 0, 0, 0.4)",
        "dark": "rgba(0, 0, 0, 0.4)"
      },
      "colorGreyOpaque50": {
        "light": "rgba(0, 0, 0, 0.5)",
        "dark": "rgba(0, 0, 0, 0.5)"
      },
      "colorGreyOpaque70": {
        "light": "rgba(35, 47, 62, 0.7)",
        "dark": "rgba(0, 7, 22, 0.7)"
      },
      "colorGreyOpaque80": {
        "light": "rgba(22, 25, 31, 0.8)",
        "dark": "rgba(22, 25, 31, 0.8)"
      },
      "colorGreyOpaque90": {
        "light": "rgba(242, 243, 243, 0.9)",
        "dark": "rgba(242, 243, 243, 0.9)"
      },
      "colorGreyTransparent": {
        "light": "rgba(0, 7, 22, 0.12)",
        "dark": "rgba(0, 7, 22, 1)"
      },
      "colorGreyTransparentHeavy": {
        "light": "rgba(0, 7, 22, 0.12)",
        "dark": "rgba(0, 7, 22, 1)"
      },
      "colorGreyTransparentLight": {
        "light": "rgba(0, 7, 22, 0.12)",
        "dark": "rgba(0, 7, 22, 1)"
      },
      "colorBackgroundButtonLinkActive": {
        "light": "{colorBlue200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundButtonLinkHover": {
        "light": "{colorBlue100}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundButtonNormalActive": {
        "light": "{colorBlue200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundButtonNormalDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundButtonNormalDisabled": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundButtonNormalHover": {
        "light": "{colorBlue100}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundButtonPrimaryActive": {
        "light": "#3774C1",
        "dark": "#3774C1"
      },
      "colorBackgroundButtonPrimaryDefault": {
        "light": "#3081ED",
        "dark": "#3081ED"
      },
      "colorBackgroundButtonPrimaryDisabled": {
        "light": "#e2e2e2",
        "dark": "#e2e2e2"
      },
      "colorBackgroundButtonPrimaryHover": {
        "light": "#3774C1",
        "dark": "#3774C1"
      },
      "colorBackgroundCalendarToday": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundCellShaded": {
        "light": "{colorGrey125}",
        "dark": "{colorGrey700}"
      },
      "colorBackgroundCodeEditorGutterActiveLineDefault": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorBackgroundCodeEditorGutterActiveLineError": {
        "light": "{colorTextStatusError}",
        "dark": "{colorTextStatusError}"
      },
      "colorBackgroundCodeEditorGutterDefault": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundCodeEditorLoading": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundCodeEditorPaneItemHover": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundCodeEditorStatusBar": {
        "light": "{colorGrey150}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundContainerContent": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundContainerHeader": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundControlChecked": {
        "light": "#3081ED",
        "dark": "#3081ED"
      },
      "colorBackgroundControlDefault": {
        "light": "#ffffff",
        "dark": "#ffffff"
      },
      "colorBackgroundControlDisabled": {
        "light": "#e2e2e2",
        "dark": "#e2e2e2"
      },
      "colorBackgroundDropdownItemDefault": {
        "light": "#3774C1",
        "dark": "#3774C1"
      },
      "colorBackgroundDropdownItemDimmed": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBackgroundDropdownItemFilterMatch": {
        "light": "{colorBlue100}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundDropdownItemHover": {
        "light": "#5CAEFF",
        "dark": "#5CAEFF"
      },
      "colorBackgroundDropdownItemSelected": {
        "light": "{colorBackgroundItemSelected}",
        "dark": "{colorBackgroundItemSelected}"
      },
      "colorBackgroundHomeHeader": {
        "light": "#3774C1",
        "dark": "#3774C1"
      },
      "colorBackgroundInputDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundInputDisabled": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundItemSelected": {
        "light": "{colorBlue100}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundLayoutMain": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundLayoutMobilePanel": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey900}"
      },
      "colorBackgroundLayoutPanelContent": {
        "light": "{colorBackgroundContainerContent}",
        "dark": "{colorBackgroundContainerContent}"
      },
      "colorBackgroundLayoutPanelHover": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundLayoutPanelTriggerActive": {
        "light": "{colorBlue900}",
        "dark": "{colorBlue400}"
      },
      "colorBackgroundLayoutToggleActive": {
        "light": "{colorGrey650}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundLayoutToggleDefault": {
        "light": "{colorGrey750}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundLayoutToggleHover": {
        "light": "{colorGrey650}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundLayoutToggleSelectedActive": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundLayoutToggleSelectedDefault": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundLayoutToggleSelectedHover": {
        "light": "{colorBlue700}",
        "dark": "{colorBlue400}"
      },
      "colorBackgroundModalOverlay": {
        "light": "{colorGreyOpaque70}",
        "dark": "{colorGreyOpaque70}"
      },
      "colorBackgroundNotificationBlue": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue600}"
      },
      "colorBackgroundNotificationGreen": {
        "light": "{colorGreen600}",
        "dark": "{colorGreen600}"
      },
      "colorBackgroundNotificationGrey": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey550}"
      },
      "colorBackgroundNotificationRed": {
        "light": "{colorRed600}",
        "dark": "{colorRed600}"
      },
      "colorBackgroundPopover": {
        "light": "{colorWhite}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundProgressBarContentDefault": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundProgressBarContentInFlash": {
        "light": "{colorWhite}",
        "dark": "{colorWhite}"
      },
      "colorBackgroundProgressBarLayoutDefault": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey650}"
      },
      "colorBackgroundProgressBarLayoutInFlash": {
        "light": "{colorGreyOpaque25}",
        "dark": "{colorGreyOpaque25}"
      },
      "colorBackgroundSegmentActive": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBackgroundSegmentDefault": {
        "light": "{colorBackgroundButtonNormalDefault}",
        "dark": "{colorBackgroundButtonNormalDefault}"
      },
      "colorBackgroundSegmentDisabled": {
        "light": "{colorBackgroundButtonNormalDisabled}",
        "dark": "{colorBackgroundButtonNormalDisabled}"
      },
      "colorBackgroundSegmentHover": {
        "light": "{colorBackgroundSegmentDefault}",
        "dark": "{colorBackgroundSegmentDefault}"
      },
      "colorBackgroundStatusError": {
        "light": "{colorRed100}",
        "dark": "{colorRed900}"
      },
      "colorBackgroundStatusInfo": {
        "light": "{colorBlue100}",
        "dark": "{colorBlue900}"
      },
      "colorBackgroundStatusSuccess": {
        "light": "{colorGreen100}",
        "dark": "{colorGreen900}"
      },
      "colorBackgroundStatusWarning": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorBackgroundTableHeader": {
        "light": "{colorBackgroundContainerHeader}",
        "dark": "{colorBackgroundContainerHeader}"
      },
      "colorBackgroundTilesDisabled": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey750}"
      },
      "colorBackgroundToggleCheckedDisabled": {
        "light": "{colorBlue300}",
        "dark": "{colorBlue800}"
      },
      "colorBackgroundToggleDefault": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey500}"
      },
      "colorBorderButtonNormalActive": {
        "light": "{colorBlue800}",
        "dark": "{colorBlue400}"
      },
      "colorBorderButtonNormalDefault": {
        "light": "#3081ED",
        "dark": "#3081ED"
      },
      "colorBorderButtonNormalDisabled": {
        "light": "#e2e2e2",
        "dark": "#e2e2e2"
      },
      "colorBorderButtonNormalHover": {
        "light": "#3774C1",
        "dark": "#3774C1"
      },
      "colorBorderButtonPrimaryDisabled": {
        "light": "{colorBackgroundButtonPrimaryDisabled}",
        "dark": "{colorBackgroundButtonPrimaryDisabled}"
      },
      "colorBorderCalendarGrid": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBorderCalendarGridSelectedFocusRing": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey800}"
      },
      "colorBorderCodeEditorAceActiveLineLightTheme": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey300}"
      },
      "colorBorderCodeEditorAceActiveLineDarkTheme": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey550}"
      },
      "colorBorderCodeEditorDefault": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey550}"
      },
      "colorBorderCodeEditorPaneItemHover": {
        "light": "{colorBorderDropdownItemHover}",
        "dark": "{colorBorderDropdownItemHover}"
      },
      "colorBorderContainerDivider": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBorderContainerTop": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBorderControlChecked": {
        "light": "{colorBackgroundControlChecked}",
        "dark": "{colorBackgroundControlChecked}"
      },
      "colorBorderControlDefault": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey500}"
      },
      "colorBorderControlDisabled": {
        "light": "{colorBackgroundControlDisabled}",
        "dark": "{colorBackgroundControlDisabled}"
      },
      "colorBorderDividerActive": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorBorderDividerDefault": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey600}"
      },
      "colorBorderDividerPanelBottom": {
        "light": "{colorBorderDividerDefault}",
        "dark": "{colorGreyTransparent}"
      },
      "colorBorderDividerPanelSide": {
        "light": "{colorBorderDividerDefault}",
        "dark": "{colorBorderDividerDefault}"
      },
      "colorBorderDropdownContainer": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey550}"
      },
      "colorBorderDropdownGroup": {
        "light": "{colorBorderDropdownItemDefault}",
        "dark": "{colorBorderDropdownItemDefault}"
      },
      "colorBorderDropdownItemDefault": {
        "light": "{colorBorderDividerDefault}",
        "dark": "{colorBorderDividerDefault}"
      },
      "colorBorderDropdownItemHover": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey550}"
      },
      "colorBorderDropdownItemDimmedHover": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey500}"
      },
      "colorBorderDropdownItemSelected": {
        "light": "{colorBorderItemSelected}",
        "dark": "{colorBorderItemSelected}"
      },
      "colorBorderDropdownItemTop": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorBorderInputDefault": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey550}"
      },
      "colorBorderInputDisabled": {
        "light": "{colorBackgroundInputDisabled}",
        "dark": "{colorBackgroundInputDisabled}"
      },
      "colorBorderItemFocused": {
        "light": "#3081ED",
        "dark": "#3081ED"
      },
      "colorBorderItemPlaceholder": {
        "light": "{colorBorderItemSelected}",
        "dark": "{colorBorderItemSelected}"
      },
      "colorBorderItemSelected": {
        "light": "#3081ED",
        "dark": "#3081ED"
      },
      "colorBorderLayout": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorBorderPopover": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey550}"
      },
      "colorBorderSegmentActive": {
        "light": "{colorBorderSegmentDefault}",
        "dark": "{colorBorderSegmentDefault}"
      },
      "colorBorderSegmentDefault": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorBorderSegmentDisabled": {
        "light": "{colorBorderSegmentDefault}",
        "dark": "{colorBorderSegmentDefault}"
      },
      "colorBorderSegmentHover": {
        "light": "{colorBorderSegmentDefault}",
        "dark": "{colorBorderSegmentDefault}"
      },
      "colorBorderStatusError": {
        "light": "{colorRed600}",
        "dark": "{colorRed500}"
      },
      "colorBorderStatusInfo": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorBorderStatusSuccess": {
        "light": "{colorGreen600}",
        "dark": "{colorGreen500}"
      },
      "colorBorderStatusWarning": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey450}"
      },
      "colorBorderDividerInteractiveDefault": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey300}"
      },
      "colorBorderTabsDivider": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey600}"
      },
      "colorBorderTabsShadow": {
        "light": "{colorGreyTransparent}",
        "dark": "{colorGreyTransparent}"
      },
      "colorBorderTabsUnderline": {
        "light": "{colorTextAccent}",
        "dark": "{colorTextAccent}"
      },
      "colorBorderTilesDisabled": {
        "light": "{colorBackgroundTilesDisabled}",
        "dark": "{colorBackgroundTilesDisabled}"
      },
      "colorBorderTutorial": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey600}"
      },
      "colorForegroundControlDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorForegroundControlDisabled": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorShadowDefault": {
        "light": "{colorGreyTransparentHeavy}",
        "dark": "{colorGreyTransparentHeavy}"
      },
      "colorShadowLayoutPanelTrigger": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey650}"
      },
      "colorShadowMedium": {
        "light": "{colorGreyTransparent}",
        "dark": "{colorGreyTransparent}"
      },
      "colorShadowSide": {
        "light": "{colorGreyTransparentLight}",
        "dark": "{colorGreyTransparentLight}"
      },
      "colorStrokeCodeEditorResizeHandler": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorStrokeCodeEditorGutterActiveLineDefault": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey750}"
      },
      "colorStrokeCodeEditorGutterActiveLineHover": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey900}"
      },
      "colorTextAccent": {
        "light": "#3081ED",
        "dark": "#3081ED"
      },
      "colorTextBodyDefault": {
        "light": "#3e3e3e",
        "dark": "#3e3e3e"
      },
      "colorTextBodySecondary": {
        "light": "#4a4f54",
        "dark": "#4a4f54"
      },
      "colorTextBreadcrumbCurrent": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorTextBreadcrumbIcon": {
        "light": "{colorGrey500}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextButtonInlineIconDefault": {
        "light": "{colorTextLinkDefault}",
        "dark": "{colorTextLinkDefault}"
      },
      "colorTextButtonInlineIconDisabled": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextButtonInlineIconHover": {
        "light": "{colorTextLinkHover}",
        "dark": "{colorTextLinkHover}"
      },
      "colorTextButtonNormalActive": {
        "light": "#3774C1",
        "dark": "#3774C1"
      },
      "colorTextButtonNormalDefault": {
        "light": "#3081ED",
        "dark": "#3081ED"
      },
      "colorTextButtonNormalHover": {
        "light": "#3774C1",
        "dark": "#3774C1"
      },
      "colorTextLinkButtonNormalDefault": {
        "light": "{colorTextButtonNormalDefault}",
        "dark": "{colorTextButtonNormalDefault}"
      },
      "colorTextLinkButtonNormalHover": {
        "light": "{colorTextButtonNormalHover}",
        "dark": "{colorTextButtonNormalHover}"
      },
      "colorTextLinkButtonNormalActive": {
        "light": "{colorTextButtonNormalActive}",
        "dark": "{colorTextButtonNormalActive}"
      },
      "colorTextButtonPrimaryActive": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextButtonPrimaryDefault": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextButtonPrimaryHover": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextCalendarDayHover": {
        "light": "{colorTextDropdownItemDefault}",
        "dark": "{colorTextDropdownItemDefault}"
      },
      "colorTextCalendarDaySelected": {
        "light": "{colorTextAccent}",
        "dark": "{colorTextAccent}"
      },
      "colorTextCalendarMonth": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextCodeEditorGutterActiveLine": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextCodeEditorGutterDefault": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey300}"
      },
      "colorTextCodeEditorStatusBarDisabled": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey550}"
      },
      "colorTextCodeEditorTabButtonError": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextColumnHeader": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey400}"
      },
      "colorTextColumnSortingIcon": {
        "light": "{colorTextColumnHeader}",
        "dark": "{colorTextColumnHeader}"
      },
      "colorTextControlDisabled": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextCounter": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextDisabled": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey550}"
      },
      "colorTextDropdownFooter": {
        "light": "{colorTextFormSecondary}",
        "dark": "{colorTextFormSecondary}"
      },
      "colorTextDropdownGroupLabel": {
        "light": "{colorTextGroupLabel}",
        "dark": "{colorTextGroupLabel}"
      },
      "colorTextDropdownHeader": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorTextDropdownItemDefault": {
        "light": "{colorTextFormDefault}",
        "dark": "{colorTextFormDefault}"
      },
      "colorTextDropdownItemDimmed": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextDropdownItemDisabled": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextDropdownItemFilterMatch": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue400}"
      },
      "colorTextDropdownItemHighlighted": {
        "light": "#3e3e3e",
        "dark": "#3e3e3e"
      },
      "colorTextDropdownItemSecondary": {
        "light": "{colorTextFormSecondary}",
        "dark": "{colorTextFormSecondary}"
      },
      "colorTextDropdownItemSecondaryHover": {
        "light": "{colorGrey550}",
        "dark": "colorGrey300"
      },
      "colorTextEmpty": {
        "light": "#e2e2e2",
        "dark": "#e2e2e2"
      },
      "colorTextExpandableSectionDefault": {
        "light": "{colorTextInteractiveActive}",
        "dark": "{colorTextInteractiveActive}"
      },
      "colorTextExpandableSectionHover": {
        "light": "{colorTextAccent}",
        "dark": "{colorTextAccent}"
      },
      "colorTextExpandableSectionNavigationIconDefault": {
        "light": "{colorTextInteractiveDefault}",
        "dark": "{colorTextInteractiveDefault}"
      },
      "colorTextFormDefault": {
        "light": "#3e3e3e",
        "dark": "#3e3e3e"
      },
      "colorTextFormLabel": {
        "light": "{colorTextFormDefault}",
        "dark": "{colorTextFormDefault}"
      },
      "colorTextFormSecondary": {
        "light": "#4a4f54",
        "dark": "#4a4f54"
      },
      "colorTextGroupLabel": {
        "light": "#4a4f54",
        "dark": "#4a4f54"
      },
      "colorTextHeadingDefault": {
        "light": "#3e3e3e",
        "dark": "#3e3e3e"
      },
      "colorTextHeadingSecondary": {
        "light": "#4a4f54",
        "dark": "#4a4f54"
      },
      "colorTextHomeHeaderDefault": {
        "light": "{colorWhite}",
        "dark": "{colorWhite}"
      },
      "colorTextHomeHeaderSecondary": {
        "light": "#e2e2e2",
        "dark": "#e2e2e2"
      },
      "colorTextIconCaret": {
        "light": "{colorGrey500}",
        "dark": "{colorGrey450}"
      },
      "colorTextIconSubtle": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey400}"
      },
      "colorTextInputDisabled": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey550}"
      },
      "colorTextInputPlaceholder": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey500}"
      },
      "colorTextInputPlaceholderDisabled": {
        "light": "{colorTextInputDisabled}",
        "dark": "{colorTextInputDisabled}"
      },
      "colorTextInteractiveActive": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorTextInteractiveDefault": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorTextInteractiveDisabled": {
        "light": "{colorGrey400}",
        "dark": "{colorGrey550}"
      },
      "colorTextInteractiveHover": {
        "light": "#3e3e3e",
        "dark": "#3e3e3e"
      },
      "colorTextInteractiveInvertedDefault": {
        "light": "{colorGrey300}",
        "dark": "{colorGrey300}"
      },
      "colorTextInteractiveInvertedHover": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey100}"
      },
      "colorTextInverted": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextLabel": {
        "light": "#3e3e3e",
        "dark": "#3e3e3e"
      },
      "colorTextLayoutToggle": {
        "light": "{colorWhite}",
        "dark": "{colorWhite}"
      },
      "colorTextLayoutToggleSelected": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextLinkDefault": {
        "light": "#3081ED",
        "dark": "#3081ED"
      },
      "colorTextLinkHover": {
        "light": "#3774C1",
        "dark": "#3774C1"
      },
      "colorTextLinkInvertedHover": {
        "light": "{colorWhite}",
        "dark": "{colorWhite}"
      },
      "colorTextLinkButtonUnderline": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorTextLinkButtonUnderlineHover": {
        "light": "transparent",
        "dark": "transparent"
      },
      "colorTextLinkPrimaryUnderline": {
        "light": "{colorTextLinkDefault}",
        "dark": "{colorTextLinkDefault}"
      },
      "colorTextNotificationDefault": {
        "light": "{colorGrey100}",
        "dark": "{colorGrey100}"
      },
      "colorTextPaginationPageNumberActiveDisabled": {
        "light": "{colorTextInteractiveDisabled}",
        "dark": "{colorTextInteractiveDisabled}"
      },
      "colorTextPaginationPageNumberDefault": {
        "light": "{colorTextInteractiveDefault}",
        "dark": "{colorGrey400}"
      },
      "colorTextSegmentActive": {
        "light": "{colorWhite}",
        "dark": "{colorGrey900}"
      },
      "colorTextSegmentDefault": {
        "light": "{colorGrey600}",
        "dark": "{colorGrey300}"
      },
      "colorTextSegmentHover": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorTextLayoutPanelTriggerHover": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorTextLayoutPanelTriggerActive": {
        "light": "{colorWhite}",
        "dark": "{colorGrey800}"
      },
      "colorTextSmall": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextStatusError": {
        "light": "{colorRed600}",
        "dark": "{colorRed500}"
      },
      "colorTextStatusInactive": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey450}"
      },
      "colorTextStatusInfo": {
        "light": "{colorBlue600}",
        "dark": "{colorBlue500}"
      },
      "colorTextStatusSuccess": {
        "light": "{colorGreen600}",
        "dark": "{colorGreen500}"
      },
      "colorTextStatusWarning": {
        "light": "{colorRed600}",
        "dark": "{colorRed500}"
      },
      "colorTextTopNavigationTitle": {
        "light": "{colorGrey900}",
        "dark": "{colorGrey100}"
      },
      "colorBoardPlaceholderActive": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey550}"
      },
      "colorBoardPlaceholderHover": {
        "light": "{colorBlue200}",
        "dark": "{colorBlue600}"
      },
      "colorDragPlaceholderActive": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey550}"
      },
      "colorDragPlaceholderHover": {
        "light": "{colorBlue200}",
        "dark": "{colorBlue600}"
      },
      "colorDropzoneBackgroundActive": {
        "light": "{colorGrey200}",
        "dark": "{colorGrey500}"
      },
      "colorDropzoneBackgroundHover": {
        "light": "{colorBlue200}",
        "dark": "{colorBlue600}"
      },
      "colorDropzoneTextActive": {
        "light": "{colorGrey550}",
        "dark": "{colorGrey800}"
      },
      "colorDropzoneTextHover": {
        "light": "{colorBlue800}",
        "dark": "{colorWhite}"
      },
      "fontBodyMLineHeight": "22px",
      "fontBodyMSize": "14px",
      "fontBodySLetterSpacing": "0.005em",
      "fontBodySLineHeight": "16px",
      "fontBodySSize": "12px",
      "fontButtonLetterSpacing": "0.005em",
      "fontButtonWeight": "{fontWeightHeavy}",
      "fontChartDetailSize": "{fontBodySSize}",
      "fontDisplayLLetterSpacing": "-0.03em",
      "fontDisplayLLineHeight": "54px",
      "fontDisplayLSize": "48px",
      "fontDisplayLabelWeight": "700",
      "fontExpandableHeadingSize": "{fontHeadingSSize}",
      "fontFamilyBase": "'Open Sans', 'Helvetica Neue', Roboto, Arial, sans-serif",
      "fontFamilyMonospace": "Monaco, Menlo, Consolas, 'Courier Prime', Courier, 'Courier New', monospace",
      "fontHeaderH2DescriptionLineHeight": "{fontBodyMLineHeight}",
      "fontHeaderH2DescriptionSize": "{fontBodyMSize}",
      "fontHeadingLLetterSpacing": "-0.015em",
      "fontHeadingLLineHeight": "30px",
      "fontHeadingLSize": "24px",
      "fontHeadingLWeight": "{fontWeightHeavy}",
      "fontHeadingMLetterSpacing": "-0.010em",
      "fontHeadingMLineHeight": "24px",
      "fontHeadingMSize": "20px",
      "fontHeadingMWeight": "{fontWeightHeavy}",
      "fontHeadingSLetterSpacing": "-0.005em",
      "fontHeadingSLineHeight": "20px",
      "fontHeadingSSize": "16px",
      "fontHeadingSWeight": "{fontWeightHeavy}",
      "fontHeadingXlLetterSpacing": "-0.02em",
      "fontHeadingXlLineHeight": "40px",
      "fontHeadingXlSize": "32px",
      "fontHeadingXlWeight": "{fontWeightHeavy}",
      "fontHeadingXsLineHeight": "18px",
      "fontHeadingXsSize": "14px",
      "fontHeadingXsWeight": "{fontWeightHeavy}",
      "fontBoxValueLargeWeight": "{fontWeightHeavy}",
      "fontLinkButtonLetterSpacing": "{fontButtonLetterSpacing}",
      "fontLinkButtonWeight": "{fontButtonWeight}",
      "fontLinkPrimaryDecoration": "underline",
      "fontLinkPrimaryLetterSpacing": "\"inherit\"",
      "fontLinkPrimaryWeight": "\"inherit\"",
      "fontPanelHeaderLineHeight": "{fontHeadingMLineHeight}",
      "fontPanelHeaderSize": "{fontHeadingMSize}",
      "fontSmoothingWebkit": "antialiased",
      "fontSmoothingMozOsx": "grayscale",
      "fontTabsDisabledWeight": "{fontWayfindingLinkActiveWeight}",
      "fontTabsLineHeight": "{fontHeadingSLineHeight}",
      "fontTabsSize": "{fontHeadingSSize}",
      "fontWayfindingLinkActiveWeight": "{fontWeightHeavy}",
      "fontWeightHeavy": "800",
      "borderActiveWidth": "4px",
      "borderCodeEditorStatusDividerWidth": "{borderDividerSectionWidth}",
      "borderContainerStickyWidth": "0px",
      "borderContainerTopWidth": "0px",
      "borderControlFocusRingShadowSpread": "0px",
      "borderControlInvalidFocusRingShadowSpread": "2px",
      "borderDividerListWidth": "1px",
      "borderDividerSectionWidth": "2px",
      "borderDropdownVirtualOffsetWidth": "2px",
      "borderFieldWidth": "2px",
      "borderInvalidWidth": "8px",
      "borderItemWidth": "2px",
      "borderLineChartDashArray": "3 5",
      "borderLineChartLineJoin": "round",
      "borderLineChartWidth": "2px",
      "borderPanelHeaderWidth": "2px",
      "borderPanelTopWidth": "1px",
      "borderRadiusAlert": "{borderRadiusFlashbar}",
      "borderRadiusBadge": "4px",
      "borderRadiusButton": "20px",
      "borderRadiusCalendarDayFocusRing": "3px",
      "borderRadiusCodeEditor": "{borderRadiusInput}",
      "borderRadiusContainer": "16px",
      "borderRadiusControlCircularFocusRing": "4px",
      "borderRadiusControlDefaultFocusRing": "4px",
      "borderRadiusDropdown": "{borderRadiusItem}",
      "borderRadiusDropzone": "12px",
      "borderRadiusFlashbar": "12px",
      "borderRadiusItem": "8px",
      "borderRadiusInput": "8px",
      "borderRadiusPopover": "{borderRadiusInput}",
      "borderRadiusTabsFocusRing": "20px",
      "borderRadiusTiles": "{borderRadiusInput}",
      "borderRadiusToken": "{borderRadiusInput}",
      "borderRadiusTutorialPanelItem": "{borderRadiusInput}",
      "borderTableStickyWidth": "2px",
      "borderLinkFocusRingOutline": "0",
      "borderLinkFocusRingShadowSpread": "2px",
      "motionDurationExtraFast": {
        "default": "45ms",
        "disabled": "0ms"
      },
      "motionDurationExtraSlow": {
        "default": "270ms",
        "disabled": "0ms"
      },
      "motionDurationFast": {
        "default": "90ms",
        "disabled": "0ms"
      },
      "motionDurationModerate": {
        "default": "135ms",
        "disabled": "0ms"
      },
      "motionDurationRefreshOnlyAmbient": {
        "default": "2000ms",
        "disabled": "0ms"
      },
      "motionDurationRefreshOnlyFast": {
        "default": "115ms",
        "disabled": "0ms"
      },
      "motionDurationRefreshOnlyMedium": {
        "default": "165ms",
        "disabled": "0ms"
      },
      "motionDurationRefreshOnlySlow": {
        "default": "250ms",
        "disabled": "0ms"
      },
      "motionDurationRotate180": {
        "default": "{motionDurationModerate}",
        "disabled": "{motionDurationModerate}"
      },
      "motionDurationRotate90": {
        "default": "{motionDurationModerate}",
        "disabled": "{motionDurationModerate}"
      },
      "motionDurationShowPaced": {
        "default": "{motionDurationSlow}",
        "disabled": "{motionDurationSlow}"
      },
      "motionDurationShowQuick": {
        "default": "{motionDurationModerate}",
        "disabled": "{motionDurationModerate}"
      },
      "motionDurationSlow": {
        "default": "180ms",
        "disabled": "0ms"
      },
      "motionDurationTransitionQuick": {
        "default": "{motionDurationFast}",
        "disabled": "{motionDurationFast}"
      },
      "motionDurationTransitionShowPaced": {
        "default": "{motionDurationSlow}",
        "disabled": "{motionDurationSlow}"
      },
      "motionDurationTransitionShowQuick": {
        "default": "{motionDurationFast}",
        "disabled": "{motionDurationFast}"
      },
      "motionEasingEaseOutQuart": {
        "default": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "disabled": "cubic-bezier(0.165, 0.84, 0.44, 1)"
      },
      "motionEasingRefreshOnlyA": {
        "default": "cubic-bezier(0, 0, 0, 1)",
        "disabled": "cubic-bezier(0, 0, 0, 1)"
      },
      "motionEasingRefreshOnlyB": {
        "default": "cubic-bezier(1, 0, 0.83, 1)",
        "disabled": "cubic-bezier(1, 0, 0.83, 1)"
      },
      "motionEasingRefreshOnlyC": {
        "default": "cubic-bezier(0.84, 0, 0.16, 1)",
        "disabled": "cubic-bezier(0.84, 0, 0.16, 1)"
      },
      "motionEasingRefreshOnlyD": {
        "default": "cubic-bezier(0.33, 0, 0.67, 1)",
        "disabled": "cubic-bezier(0.33, 0, 0.67, 1)"
      },
      "motionEasingRotate180": {
        "default": "{motionEasingEaseOutQuart}",
        "disabled": "{motionEasingEaseOutQuart}"
      },
      "motionEasingRotate90": {
        "default": "{motionEasingEaseOutQuart}",
        "disabled": "{motionEasingEaseOutQuart}"
      },
      "motionEasingShowPaced": {
        "default": "ease-out",
        "disabled": "ease-out"
      },
      "motionEasingShowQuick": {
        "default": "ease-out",
        "disabled": "ease-out"
      },
      "motionEasingTransitionQuick": {
        "default": "linear",
        "disabled": "linear"
      },
      "motionEasingTransitionShowPaced": {
        "default": "ease-out",
        "disabled": "ease-out"
      },
      "motionEasingTransitionShowQuick": {
        "default": "linear",
        "disabled": "linear"
      },
      "motionEasingResponsive": {
        "default": "{motionEasingRefreshOnlyA}",
        "disabled": "{motionEasingRefreshOnlyA}"
      },
      "motionEasingSticky": {
        "default": "{motionEasingRefreshOnlyB}",
        "disabled": "{motionEasingRefreshOnlyB}"
      },
      "motionEasingExpressive": {
        "default": "{motionEasingRefreshOnlyC}",
        "disabled": "{motionEasingRefreshOnlyC}"
      },
      "motionDurationResponsive": {
        "default": "{motionDurationRefreshOnlyFast}",
        "disabled": "{motionDurationRefreshOnlyFast}"
      },
      "motionDurationExpressive": {
        "default": "{motionDurationRefreshOnlyMedium}",
        "disabled": "{motionDurationRefreshOnlyMedium}"
      },
      "motionDurationComplex": {
        "default": "{motionDurationRefreshOnlySlow}",
        "disabled": "{motionDurationRefreshOnlySlow}"
      },
      "motionKeyframesFadeIn": {
        "default": "awsui-fade-in-35003c",
        "disabled": "awsui-fade-in-35003c"
      },
      "motionKeyframesFadeOut": {
        "default": "awsui-fade-out-35003c",
        "disabled": "awsui-fade-out-35003c"
      },
      "motionKeyframesStatusIconError": {
        "default": "awsui-status-icon-error-35003c",
        "disabled": "awsui-status-icon-error-35003c"
      },
      "motionKeyframesScalePopup": {
        "default": "awsui-scale-popup-35003c",
        "disabled": "awsui-scale-popup-35003c"
      },
      "sizeCalendarGridWidth": {
        "comfortable": "238px",
        "compact": "238px"
      },
      "sizeControl": {
        "comfortable": "16px",
        "compact": "16px"
      },
      "sizeIconBig": {
        "comfortable": "32px",
        "compact": "32px"
      },
      "sizeIconLarge": {
        "comfortable": "48px",
        "compact": "48px"
      },
      "sizeIconMedium": {
        "comfortable": "20px",
        "compact": "20px"
      },
      "sizeIconNormal": {
        "comfortable": "16px",
        "compact": "16px"
      },
      "sizeTableSelectionHorizontal": {
        "comfortable": "40px",
        "compact": "40px"
      },
      "sizeVerticalInput": {
        "comfortable": "34px",
        "compact": "30px"
      },
      "sizeVerticalPanelIconOffset": {
        "comfortable": "15px",
        "compact": "13px"
      },
      "spaceAlertActionLeft": {
        "comfortable": "{spaceS}",
        "compact": "{spaceS}"
      },
      "spaceAlertHorizontal": {
        "comfortable": "{spaceFlashbarHorizontal}",
        "compact": "{spaceFlashbarHorizontal}"
      },
      "spaceAlertMessageRight": {
        "comfortable": "{spaceXxs}",
        "compact": "{spaceXxs}"
      },
      "spaceAlertVertical": {
        "comfortable": "{spaceScaledXs}",
        "compact": "{spaceScaledXs}"
      },
      "spaceButtonFocusOutlineGutter": {
        "comfortable": "4px",
        "compact": "4px"
      },
      "spaceButtonIconFocusOutlineGutterVertical": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceButtonIconOnlyHorizontal": {
        "comfortable": "7px",
        "compact": "5px"
      },
      "spaceButtonInlineIconFocusOutlineGutter": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceButtonModalDismissVertical": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceCalendarGridFocusOutlineGutter": {
        "comfortable": "-5px",
        "compact": "-5px"
      },
      "spaceCalendarGridSelectedFocusOutlineGutter": {
        "comfortable": "{spaceCalendarGridFocusOutlineGutter}",
        "compact": "{spaceCalendarGridFocusOutlineGutter}"
      },
      "spaceCardHorizontal": {
        "comfortable": "{spaceContainerHorizontal}",
        "compact": "{spaceContainerHorizontal}"
      },
      "spaceCodeEditorStatusFocusOutlineGutter": {
        "comfortable": "-7px",
        "compact": "-7px"
      },
      "spaceContainerContentTop": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceContainerHeaderVertical": {
        "comfortable": "{spaceS}",
        "compact": "{spaceS}"
      },
      "spaceContainerHorizontal": {
        "comfortable": "{spaceL}",
        "compact": "{spaceL}"
      },
      "spaceContentHeaderPaddingBottom": {
        "comfortable": "{spaceXl}",
        "compact": "{spaceS}"
      },
      "spaceDarkHeaderOverlapDistance": {
        "comfortable": "36px",
        "compact": "32px"
      },
      "spaceExpandableSectionIconOffsetTop": {
        "comfortable": "{spaceScaled2xXxs}",
        "compact": "{spaceScaled2xXxs}"
      },
      "spaceFieldHorizontal": {
        "comfortable": "{spaceS}",
        "compact": "{spaceS}"
      },
      "spaceFieldIconOffset": {
        "comfortable": "36px",
        "compact": "36px"
      },
      "spaceFilteringTokenDismissButtonFocusOutlineGutter": {
        "comfortable": "-5px",
        "compact": "-5px"
      },
      "spaceFilteringTokenOperationSelectFocusOutlineGutter": {
        "comfortable": "-5px",
        "compact": "-5px"
      },
      "spaceFlashbarActionLeft": {
        "comfortable": "{spaceS}",
        "compact": "{spaceS}"
      },
      "spaceFlashbarDismissRight": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceFlashbarHorizontal": {
        "comfortable": "{spaceM}",
        "compact": "{spaceM}"
      },
      "spaceGridGutter": {
        "comfortable": "{spaceL}",
        "compact": "{spaceM}"
      },
      "spaceLayoutContentBottom": {
        "comfortable": "{spaceScaled2xXxxl}",
        "compact": "{spaceScaled2xXxxl}"
      },
      "spaceLayoutToggleDiameter": {
        "comfortable": "40px",
        "compact": "40px"
      },
      "spaceLayoutTogglePadding": {
        "comfortable": "{spaceScaledL}",
        "compact": "{spaceScaledL}"
      },
      "spaceModalContentBottom": {
        "comfortable": "{spaceScaled2xM}",
        "compact": "{spaceScaled2xM}"
      },
      "spaceModalHorizontal": {
        "comfortable": "{spaceContainerHorizontal}",
        "compact": "{spaceContainerHorizontal}"
      },
      "spacePanelNavLeft": {
        "comfortable": "28px",
        "compact": "28px"
      },
      "spacePanelSideLeft": {
        "comfortable": "28px",
        "compact": "28px"
      },
      "spacePanelSideRight": {
        "comfortable": "{spaceScaledXl}",
        "compact": "{spaceScaledXl}"
      },
      "spacePanelSplitTop": {
        "comfortable": "{spaceScaledL}",
        "compact": "{spaceScaledL}"
      },
      "spaceSegmentedControlFocusOutlineGutter": {
        "comfortable": "4px",
        "compact": "4px"
      },
      "spaceTableHeaderFocusOutlineGutter": {
        "comfortable": "0px",
        "compact": "-1px"
      },
      "spaceTabsContentTop": {
        "comfortable": "{spaceScaledS}",
        "compact": "{spaceScaledS}"
      },
      "spaceTableHorizontal": {
        "comfortable": "{spaceContainerHorizontal}",
        "compact": "{spaceContainerHorizontal}"
      },
      "spaceTableHeaderHorizontal": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceTableContentBottom": {
        "comfortable": "4px",
        "compact": "4px"
      },
      "spaceTableContentTop": {
        "comfortable": "{spaceScaledS}",
        "compact": "{spaceScaledS}"
      },
      "spaceTableEmbeddedContentBottom": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceTableEmbeddedHeaderTop": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceTableFooterHorizontal": {
        "comfortable": "{spaceTableHeaderHorizontal}",
        "compact": "{spaceTableHeaderHorizontal}"
      },
      "spaceTabsFocusOutlineGutter": {
        "comfortable": "-8px",
        "compact": "-8px"
      },
      "spaceTextGridVertical": {
        "comfortable": "{spaceScaledM}",
        "compact": "{spaceScaledM}"
      },
      "spaceScaled2xNone": {
        "comfortable": "{spaceNone}",
        "compact": "{spaceNone}"
      },
      "spaceScaled2xXxxs": {
        "comfortable": "{spaceXxxs}",
        "compact": "{spaceNone}"
      },
      "spaceScaled2xXxs": {
        "comfortable": "{spaceXxs}",
        "compact": "{spaceNone}"
      },
      "spaceScaled2xXs": {
        "comfortable": "{spaceXs}",
        "compact": "{spaceNone}"
      },
      "spaceScaled2xS": {
        "comfortable": "{spaceS}",
        "compact": "{spaceXxs}"
      },
      "spaceScaled2xM": {
        "comfortable": "{spaceM}",
        "compact": "{spaceXs}"
      },
      "spaceScaled2xL": {
        "comfortable": "{spaceL}",
        "compact": "{spaceS}"
      },
      "spaceScaled2xXl": {
        "comfortable": "{spaceXl}",
        "compact": "{spaceM}"
      },
      "spaceScaled2xXxl": {
        "comfortable": "{spaceXxl}",
        "compact": "{spaceL}"
      },
      "spaceScaled2xXxxl": {
        "comfortable": "{spaceXxxl}",
        "compact": "{spaceXl}"
      },
      "spaceScaledNone": {
        "comfortable": "{spaceNone}",
        "compact": "{spaceNone}"
      },
      "spaceScaledXxxs": {
        "comfortable": "{spaceXxxs}",
        "compact": "{spaceNone}"
      },
      "spaceScaledXxs": {
        "comfortable": "{spaceXxs}",
        "compact": "{spaceXxxs}"
      },
      "spaceScaledXs": {
        "comfortable": "{spaceXs}",
        "compact": "{spaceXxs}"
      },
      "spaceScaledS": {
        "comfortable": "{spaceS}",
        "compact": "{spaceXs}"
      },
      "spaceScaledM": {
        "comfortable": "{spaceM}",
        "compact": "{spaceS}"
      },
      "spaceScaledL": {
        "comfortable": "{spaceL}",
        "compact": "{spaceM}"
      },
      "spaceScaledXl": {
        "comfortable": "{spaceXl}",
        "compact": "{spaceL}"
      },
      "spaceScaledXxl": {
        "comfortable": "{spaceXxl}",
        "compact": "{spaceXl}"
      },
      "spaceScaledXxxl": {
        "comfortable": "{spaceXxxl}",
        "compact": "{spaceXxl}"
      },
      "spaceStaticXxxs": {
        "comfortable": "{spaceXxxs}",
        "compact": "{spaceXxxs}"
      },
      "spaceStaticXxs": {
        "comfortable": "{spaceXxs}",
        "compact": "{spaceXxs}"
      },
      "spaceStaticXs": {
        "comfortable": "{spaceXs}",
        "compact": "{spaceXs}"
      },
      "spaceStaticS": {
        "comfortable": "{spaceS}",
        "compact": "{spaceS}"
      },
      "spaceStaticM": {
        "comfortable": "{spaceM}",
        "compact": "{spaceM}"
      },
      "spaceStaticL": {
        "comfortable": "{spaceL}",
        "compact": "{spaceL}"
      },
      "spaceStaticXl": {
        "comfortable": "{spaceXl}",
        "compact": "{spaceXl}"
      },
      "spaceStaticXxl": {
        "comfortable": "{spaceXxl}",
        "compact": "{spaceXxl}"
      },
      "spaceStaticXxxl": {
        "comfortable": "{spaceXxxl}",
        "compact": "{spaceXxxl}"
      },
      "spaceNone": {
        "comfortable": "0px",
        "compact": "0px"
      },
      "spaceXxxs": {
        "comfortable": "2px",
        "compact": "2px"
      },
      "spaceXxs": {
        "comfortable": "4px",
        "compact": "4px"
      },
      "spaceXs": {
        "comfortable": "8px",
        "compact": "8px"
      },
      "spaceS": {
        "comfortable": "12px",
        "compact": "12px"
      },
      "spaceM": {
        "comfortable": "16px",
        "compact": "16px"
      },
      "spaceL": {
        "comfortable": "20px",
        "compact": "20px"
      },
      "spaceXl": {
        "comfortable": "24px",
        "compact": "24px"
      },
      "spaceXxl": {
        "comfortable": "32px",
        "compact": "32px"
      },
      "spaceXxxl": {
        "comfortable": "40px",
        "compact": "40px"
      },
      "shadowContainer": {
        "light": "0px 0px 1px 1px #e9ebed, 0px 1px 8px 2px rgba(0, 7, 22, 0.12)",
        "dark": "0px 1px 8px 2px rgba(0, 7, 22, 0.6)"
      },
      "shadowContainerStacked": {
        "light": "-1px 1px 1px 0px #e9ebed, 1px 1px 1px 0px #e9ebed, 0px 9px 8px -7px rgb(0 7 22 / 12%), 8px 0px 8px -7px rgb(0 7 22 / 12%), -8px 0px 8px -7px rgb(0 7 22 / 12%)",
        "dark": "0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)"
      },
      "shadowContainerActive": {
        "light": "0px 1px 1px 1px #e9ebed, 0px 6px 36px #0007161a",
        "dark": "0px 1px 1px 1px #192534, 0px 6px 36px #000716"
      },
      "shadowDropdown": {
        "light": "0px 4px 20px 1px rgba(0, 7, 22, 0.10)",
        "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
      },
      "shadowDropup": {
        "light": "{shadowDropdown}",
        "dark": "{shadowDropdown}"
      },
      "shadowFlashCollapsed": {
        "light": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "dark": "0px 4px 4px rgba(0, 0, 0, 0.25)"
      },
      "shadowFlashSticky": {
        "light": "0px 6px 36px rgba(0, 7, 22, 0.10)",
        "dark": "0px 6px 36px rgba(0, 7, 22, 1)"
      },
      "shadowModal": {
        "light": "{shadowDropdown}",
        "dark": "{shadowDropdown}"
      },
      "shadowPanel": {
        "light": "0px 1px 1px 1px #e9ebed, 0px 6px 36px rgba(0, 7, 22, 0.10)",
        "dark": "0px 1px 1px 1px #192534, 0px 6px 36px rgba(0, 7, 22, 1)"
      },
      "shadowPanelToggle": {
        "light": "0px 6px 12px 1px rgba(0, 7, 22, 0.12)",
        "dark": "0px 6px 12px 1px rgba(0, 7, 22, 1)"
      },
      "shadowPopover": {
        "light": "{shadowDropdown}",
        "dark": "{shadowDropdown}"
      },
      "shadowSplitBottom": {
        "light": "0px -36px 36px -36px rgba(0, 7, 22, 0.10)",
        "dark": "0px -36px 36px -36px rgba(0, 7, 22, 1)"
      },
      "shadowSplitSide": {
        "light": "-1px 0px 1px 0px #e9ebed, -36px 6px 36px -36px rgba(0, 7, 22, 0.10)",
        "dark": "-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)"
      },
      "shadowSticky": {
        "light": "{shadowDropdown}",
        "dark": "{shadowDropdown}"
      },
      "shadowStickyEmbedded": {
        "light": "0px 2px 0px 0px #e9ebed, 0px 16px 16px -12px rgba(0, 7, 22, 0.10)",
        "dark": "0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)"
      },
      "shadowStickyColumnFirst": {
        "light": "4px 0px 20px 1px rgba(0, 7, 22, 0.1)",
        "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
      },
      "shadowStickyColumnLast": {
        "light": "-4px 0 20px 1px rgba(0, 28, 36, 0.1)",
        "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
      }
    },
    "contexts": {
      "compact-table": {
        "id": "compact-table",
        "selector": ".awsui-context-compact-table",
        "tokens": {
          "spaceAlertActionLeft": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceAlertHorizontal": {
            "comfortable": "{spaceFlashbarHorizontal}",
            "compact": "{spaceFlashbarHorizontal}"
          },
          "spaceAlertMessageRight": {
            "comfortable": "{spaceXxs}",
            "compact": "{spaceXxs}"
          },
          "spaceAlertVertical": {
            "comfortable": "{spaceScaledXs}",
            "compact": "{spaceScaledXs}"
          },
          "spaceButtonFocusOutlineGutter": {
            "comfortable": "4px",
            "compact": "4px"
          },
          "spaceButtonIconFocusOutlineGutterVertical": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceButtonIconOnlyHorizontal": {
            "comfortable": "7px",
            "compact": "5px"
          },
          "spaceButtonInlineIconFocusOutlineGutter": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceButtonModalDismissVertical": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceCalendarGridFocusOutlineGutter": {
            "comfortable": "-5px",
            "compact": "-5px"
          },
          "spaceCalendarGridSelectedFocusOutlineGutter": {
            "comfortable": "{spaceCalendarGridFocusOutlineGutter}",
            "compact": "{spaceCalendarGridFocusOutlineGutter}"
          },
          "spaceCardHorizontal": {
            "comfortable": "{spaceContainerHorizontal}",
            "compact": "{spaceContainerHorizontal}"
          },
          "spaceCodeEditorStatusFocusOutlineGutter": {
            "comfortable": "-7px",
            "compact": "-7px"
          },
          "spaceContainerContentTop": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceContainerHeaderVertical": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceContainerHorizontal": {
            "comfortable": "{spaceL}",
            "compact": "{spaceL}"
          },
          "spaceContentHeaderPaddingBottom": {
            "comfortable": "{spaceXl}",
            "compact": "{spaceS}"
          },
          "spaceDarkHeaderOverlapDistance": {
            "comfortable": "36px",
            "compact": "32px"
          },
          "spaceExpandableSectionIconOffsetTop": {
            "comfortable": "{spaceScaled2xXxs}",
            "compact": "{spaceScaled2xXxs}"
          },
          "spaceFieldHorizontal": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceFieldIconOffset": {
            "comfortable": "36px",
            "compact": "36px"
          },
          "spaceFilteringTokenDismissButtonFocusOutlineGutter": {
            "comfortable": "-5px",
            "compact": "-5px"
          },
          "spaceFilteringTokenOperationSelectFocusOutlineGutter": {
            "comfortable": "-5px",
            "compact": "-5px"
          },
          "spaceFlashbarActionLeft": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceFlashbarDismissRight": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceFlashbarHorizontal": {
            "comfortable": "{spaceM}",
            "compact": "{spaceM}"
          },
          "spaceGridGutter": {
            "comfortable": "{spaceL}",
            "compact": "{spaceM}"
          },
          "spaceLayoutContentBottom": {
            "comfortable": "{spaceScaled2xXxxl}",
            "compact": "{spaceScaled2xXxxl}"
          },
          "spaceLayoutToggleDiameter": {
            "comfortable": "40px",
            "compact": "40px"
          },
          "spaceLayoutTogglePadding": {
            "comfortable": "{spaceScaledL}",
            "compact": "{spaceScaledL}"
          },
          "spaceModalContentBottom": {
            "comfortable": "{spaceScaled2xM}",
            "compact": "{spaceScaled2xM}"
          },
          "spaceModalHorizontal": {
            "comfortable": "{spaceContainerHorizontal}",
            "compact": "{spaceContainerHorizontal}"
          },
          "spacePanelNavLeft": {
            "comfortable": "28px",
            "compact": "28px"
          },
          "spacePanelSideLeft": {
            "comfortable": "28px",
            "compact": "28px"
          },
          "spacePanelSideRight": {
            "comfortable": "{spaceScaledXl}",
            "compact": "{spaceScaledXl}"
          },
          "spacePanelSplitTop": {
            "comfortable": "{spaceScaledL}",
            "compact": "{spaceScaledL}"
          },
          "spaceSegmentedControlFocusOutlineGutter": {
            "comfortable": "4px",
            "compact": "4px"
          },
          "spaceTableHeaderFocusOutlineGutter": {
            "comfortable": "0px",
            "compact": "-1px"
          },
          "spaceTabsContentTop": {
            "comfortable": "{spaceScaledS}",
            "compact": "{spaceScaledS}"
          },
          "spaceTableHorizontal": {
            "comfortable": "{spaceContainerHorizontal}",
            "compact": "{spaceContainerHorizontal}"
          },
          "spaceTableHeaderHorizontal": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceTableContentBottom": {
            "comfortable": "4px",
            "compact": "4px"
          },
          "spaceTableContentTop": {
            "comfortable": "{spaceScaledS}",
            "compact": "{spaceScaledS}"
          },
          "spaceTableEmbeddedContentBottom": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceTableEmbeddedHeaderTop": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceTableFooterHorizontal": {
            "comfortable": "{spaceTableHeaderHorizontal}",
            "compact": "{spaceTableHeaderHorizontal}"
          },
          "spaceTabsFocusOutlineGutter": {
            "comfortable": "-8px",
            "compact": "-8px"
          },
          "spaceTextGridVertical": {
            "comfortable": "{spaceScaledM}",
            "compact": "{spaceScaledM}"
          },
          "spaceScaled2xNone": {
            "comfortable": "{spaceNone}",
            "compact": "{spaceNone}"
          },
          "spaceScaled2xXxxs": {
            "comfortable": "{spaceXxxs}",
            "compact": "{spaceNone}"
          },
          "spaceScaled2xXxs": {
            "comfortable": "{spaceXxs}",
            "compact": "{spaceNone}"
          },
          "spaceScaled2xXs": {
            "comfortable": "{spaceXs}",
            "compact": "{spaceNone}"
          },
          "spaceScaled2xS": {
            "comfortable": "{spaceS}",
            "compact": "{spaceXxs}"
          },
          "spaceScaled2xM": {
            "comfortable": "{spaceM}",
            "compact": "{spaceXs}"
          },
          "spaceScaled2xL": {
            "comfortable": "{spaceL}",
            "compact": "{spaceS}"
          },
          "spaceScaled2xXl": {
            "comfortable": "{spaceXl}",
            "compact": "{spaceM}"
          },
          "spaceScaled2xXxl": {
            "comfortable": "{spaceXxl}",
            "compact": "{spaceL}"
          },
          "spaceScaled2xXxxl": {
            "comfortable": "{spaceXxxl}",
            "compact": "{spaceXl}"
          },
          "spaceScaledNone": {
            "comfortable": "{spaceNone}",
            "compact": "{spaceNone}"
          },
          "spaceScaledXxxs": {
            "comfortable": "{spaceNone}",
            "compact": "{spaceNone}"
          },
          "spaceScaledXxs": {
            "comfortable": "{spaceXxxs}",
            "compact": "{spaceXxxs}"
          },
          "spaceScaledXs": {
            "comfortable": "{spaceXxs}",
            "compact": "{spaceXxs}"
          },
          "spaceScaledS": {
            "comfortable": "{spaceXs}",
            "compact": "{spaceXs}"
          },
          "spaceScaledM": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceScaledL": {
            "comfortable": "{spaceM}",
            "compact": "{spaceM}"
          },
          "spaceScaledXl": {
            "comfortable": "{spaceL}",
            "compact": "{spaceL}"
          },
          "spaceScaledXxl": {
            "comfortable": "{spaceXl}",
            "compact": "{spaceXl}"
          },
          "spaceScaledXxxl": {
            "comfortable": "{spaceXxl}",
            "compact": "{spaceXxl}"
          },
          "spaceStaticXxxs": {
            "comfortable": "{spaceXxxs}",
            "compact": "{spaceXxxs}"
          },
          "spaceStaticXxs": {
            "comfortable": "{spaceXxs}",
            "compact": "{spaceXxs}"
          },
          "spaceStaticXs": {
            "comfortable": "{spaceXs}",
            "compact": "{spaceXs}"
          },
          "spaceStaticS": {
            "comfortable": "{spaceS}",
            "compact": "{spaceS}"
          },
          "spaceStaticM": {
            "comfortable": "{spaceM}",
            "compact": "{spaceM}"
          },
          "spaceStaticL": {
            "comfortable": "{spaceL}",
            "compact": "{spaceL}"
          },
          "spaceStaticXl": {
            "comfortable": "{spaceXl}",
            "compact": "{spaceXl}"
          },
          "spaceStaticXxl": {
            "comfortable": "{spaceXxl}",
            "compact": "{spaceXxl}"
          },
          "spaceStaticXxxl": {
            "comfortable": "{spaceXxxl}",
            "compact": "{spaceXxxl}"
          },
          "spaceNone": {
            "comfortable": "0px",
            "compact": "0px"
          },
          "spaceXxxs": {
            "comfortable": "2px",
            "compact": "2px"
          },
          "spaceXxs": {
            "comfortable": "4px",
            "compact": "4px"
          },
          "spaceXs": {
            "comfortable": "8px",
            "compact": "8px"
          },
          "spaceS": {
            "comfortable": "12px",
            "compact": "12px"
          },
          "spaceM": {
            "comfortable": "16px",
            "compact": "16px"
          },
          "spaceL": {
            "comfortable": "20px",
            "compact": "20px"
          },
          "spaceXl": {
            "comfortable": "24px",
            "compact": "24px"
          },
          "spaceXxl": {
            "comfortable": "32px",
            "compact": "32px"
          },
          "spaceXxxl": {
            "comfortable": "40px",
            "compact": "40px"
          },
          "sizeVerticalInput": {
            "comfortable": "30px",
            "compact": "30px"
          }
        }
      },
      "top-navigation": {
        "id": "top-navigation",
        "selector": ".awsui-context-top-navigation",
        "tokens": {
          "colorGreyOpaque25": {
            "light": "rgba(255, 255, 255, 0.25)",
            "dark": "rgba(255, 255, 255, 0.25)"
          },
          "colorGreyOpaque40": {
            "light": "rgba(0, 0, 0, 0.4)",
            "dark": "rgba(0, 0, 0, 0.4)"
          },
          "colorGreyOpaque50": {
            "light": "rgba(0, 0, 0, 0.5)",
            "dark": "rgba(0, 0, 0, 0.5)"
          },
          "colorGreyOpaque70": {
            "light": "rgba(0, 7, 22, 0.7)",
            "dark": "rgba(0, 7, 22, 0.7)"
          },
          "colorGreyOpaque80": {
            "light": "rgba(22, 25, 31, 0.8)",
            "dark": "rgba(22, 25, 31, 0.8)"
          },
          "colorGreyOpaque90": {
            "light": "rgba(242, 243, 243, 0.9)",
            "dark": "rgba(242, 243, 243, 0.9)"
          },
          "colorGreyTransparent": {
            "light": "rgba(0, 7, 22, 1)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorGreyTransparentHeavy": {
            "light": "rgba(0, 7, 22, 1)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorGreyTransparentLight": {
            "light": "rgba(0, 7, 22, 1)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorBackgroundButtonLinkActive": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonLinkHover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonNormalActive": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonNormalDefault": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundButtonNormalDisabled": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundButtonNormalHover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonPrimaryActive": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundButtonPrimaryDefault": {
            "light": "{colorBorderButtonNormalDefault}",
            "dark": "{colorBorderButtonNormalDefault}"
          },
          "colorBackgroundButtonPrimaryDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonPrimaryHover": {
            "light": "{colorBorderButtonNormalHover}",
            "dark": "{colorBorderButtonNormalHover}"
          },
          "colorBackgroundCalendarToday": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCellShaded": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBackgroundCodeEditorGutterActiveLineError": {
            "light": "{colorTextStatusError}",
            "dark": "{colorTextStatusError}"
          },
          "colorBackgroundCodeEditorGutterDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorLoading": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorPaneItemHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCodeEditorStatusBar": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundContainerContent": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundContainerHeader": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlChecked": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundControlDefault": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemDefault": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundDropdownItemDimmed": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundDropdownItemFilterMatch": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemSelected": {
            "light": "{colorBackgroundItemSelected}",
            "dark": "{colorBackgroundItemSelected}"
          },
          "colorBackgroundHomeHeader": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundInputDefault": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundInputDisabled": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundItemSelected": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundLayoutMain": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundLayoutMobilePanel": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundLayoutPanelContent": {
            "light": "{colorBackgroundContainerContent}",
            "dark": "{colorBackgroundContainerContent}"
          },
          "colorBackgroundLayoutPanelHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutPanelTriggerActive": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundLayoutToggleActive": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundLayoutToggleHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleSelectedActive": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundModalOverlay": {
            "light": "{colorGreyOpaque70}",
            "dark": "{colorGreyOpaque70}"
          },
          "colorBackgroundNotificationBlue": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorBackgroundNotificationGreen": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen600}"
          },
          "colorBackgroundNotificationGrey": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBackgroundNotificationRed": {
            "light": "{colorRed600}",
            "dark": "{colorRed600}"
          },
          "colorBackgroundPopover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundProgressBarContentDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundProgressBarContentInFlash": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorBackgroundProgressBarLayoutDefault": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundProgressBarLayoutInFlash": {
            "light": "{colorGreyOpaque25}",
            "dark": "{colorGreyOpaque25}"
          },
          "colorBackgroundSegmentActive": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundSegmentDefault": {
            "light": "{colorBackgroundButtonNormalDefault}",
            "dark": "{colorBackgroundButtonNormalDefault}"
          },
          "colorBackgroundSegmentDisabled": {
            "light": "{colorBackgroundButtonNormalDisabled}",
            "dark": "{colorBackgroundButtonNormalDisabled}"
          },
          "colorBackgroundSegmentHover": {
            "light": "{colorBackgroundSegmentDefault}",
            "dark": "{colorBackgroundSegmentDefault}"
          },
          "colorBackgroundStatusError": {
            "light": "{colorRed900}",
            "dark": "{colorRed900}"
          },
          "colorBackgroundStatusInfo": {
            "light": "{colorBlue900}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundStatusSuccess": {
            "light": "{colorGreen900}",
            "dark": "{colorGreen900}"
          },
          "colorBackgroundStatusWarning": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundTableHeader": {
            "light": "{colorBackgroundContainerHeader}",
            "dark": "{colorBackgroundContainerHeader}"
          },
          "colorBackgroundTilesDisabled": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundToggleCheckedDisabled": {
            "light": "{colorBlue800}",
            "dark": "{colorBlue800}"
          },
          "colorBackgroundToggleDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderButtonNormalActive": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBorderButtonNormalDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderButtonNormalDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderButtonNormalHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBorderButtonPrimaryDisabled": {
            "light": "{colorBackgroundButtonPrimaryDisabled}",
            "dark": "{colorBackgroundButtonPrimaryDisabled}"
          },
          "colorBorderCalendarGrid": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderCalendarGridSelectedFocusRing": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBorderCodeEditorAceActiveLineLightTheme": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderCodeEditorAceActiveLineDarkTheme": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorPaneItemHover": {
            "light": "{colorBorderDropdownItemHover}",
            "dark": "{colorBorderDropdownItemHover}"
          },
          "colorBorderContainerDivider": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderContainerTop": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderControlChecked": {
            "light": "{colorBackgroundControlChecked}",
            "dark": "{colorBackgroundControlChecked}"
          },
          "colorBorderControlDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderControlDisabled": {
            "light": "{colorBackgroundControlDisabled}",
            "dark": "{colorBackgroundControlDisabled}"
          },
          "colorBorderDividerActive": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBorderDividerDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBorderDividerPanelBottom": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderDividerPanelSide": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownContainer": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDropdownGroup": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDropdownItemDefault}"
          },
          "colorBorderDropdownItemDefault": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownItemHover": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDropdownItemDimmedHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderDropdownItemSelected": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderDropdownItemTop": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderInputDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderInputDisabled": {
            "light": "{colorBackgroundInputDisabled}",
            "dark": "{colorBackgroundInputDisabled}"
          },
          "colorBorderItemFocused": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderItemPlaceholder": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderItemSelected": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderLayout": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBorderPopover": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderSegmentActive": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderSegmentDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderSegmentDisabled": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderSegmentHover": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderStatusError": {
            "light": "{colorRed500}",
            "dark": "{colorRed500}"
          },
          "colorBorderStatusInfo": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderStatusSuccess": {
            "light": "{colorGreen500}",
            "dark": "{colorGreen500}"
          },
          "colorBorderStatusWarning": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorBorderDividerInteractiveDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderTabsDivider": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBorderTabsShadow": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderTabsUnderline": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorBorderTilesDisabled": {
            "light": "{colorBackgroundTilesDisabled}",
            "dark": "{colorBackgroundTilesDisabled}"
          },
          "colorBorderTutorial": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorForegroundControlDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorForegroundControlDisabled": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorShadowDefault": {
            "light": "{colorGreyTransparentHeavy}",
            "dark": "{colorGreyTransparentHeavy}"
          },
          "colorShadowLayoutPanelTrigger": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorShadowMedium": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorShadowSide": {
            "light": "{colorGreyTransparentLight}",
            "dark": "{colorGreyTransparentLight}"
          },
          "colorStrokeCodeEditorResizeHandler": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorStrokeCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorStrokeCodeEditorGutterActiveLineHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextAccent": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextBodyDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextBodySecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextBreadcrumbCurrent": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorTextBreadcrumbIcon": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconDefault": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextButtonInlineIconDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconHover": {
            "light": "{colorTextLinkHover}",
            "dark": "{colorTextLinkHover}"
          },
          "colorTextButtonNormalActive": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextButtonNormalDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextButtonNormalHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextLinkButtonNormalDefault": {
            "light": "{colorTextButtonNormalDefault}",
            "dark": "{colorTextButtonNormalDefault}"
          },
          "colorTextLinkButtonNormalHover": {
            "light": "{colorTextButtonNormalHover}",
            "dark": "{colorTextButtonNormalHover}"
          },
          "colorTextLinkButtonNormalActive": {
            "light": "{colorTextButtonNormalActive}",
            "dark": "{colorTextButtonNormalActive}"
          },
          "colorTextButtonPrimaryActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextCalendarDayHover": {
            "light": "{colorTextDropdownItemDefault}",
            "dark": "{colorTextDropdownItemDefault}"
          },
          "colorTextCalendarDaySelected": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorTextCalendarMonth": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextCodeEditorGutterActiveLine": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextCodeEditorGutterDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextCodeEditorStatusBarDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextCodeEditorTabButtonError": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextColumnHeader": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey400}"
          },
          "colorTextColumnSortingIcon": {
            "light": "{colorTextColumnHeader}",
            "dark": "{colorTextColumnHeader}"
          },
          "colorTextControlDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextCounter": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextDropdownFooter": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownGroupLabel": {
            "light": "{colorTextGroupLabel}",
            "dark": "{colorTextGroupLabel}"
          },
          "colorTextDropdownHeader": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextDropdownItemDefault": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextDropdownItemDimmed": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemFilterMatch": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextDropdownItemHighlighted": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey200}"
          },
          "colorTextDropdownItemSecondary": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownItemSecondaryHover": {
            "light": "colorGrey300",
            "dark": "colorGrey300"
          },
          "colorTextEmpty": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextExpandableSectionDefault": {
            "light": "{colorTextInteractiveActive}",
            "dark": "{colorTextInteractiveActive}"
          },
          "colorTextExpandableSectionHover": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorTextExpandableSectionNavigationIconDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextFormDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextFormLabel": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextFormSecondary": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextGroupLabel": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextHeadingDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey200}"
          },
          "colorTextHeadingSecondary": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextHomeHeaderDefault": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextHomeHeaderSecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextIconCaret": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextIconSubtle": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey400}"
          },
          "colorTextInputDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextInputPlaceholder": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorTextInputPlaceholderDisabled": {
            "light": "{colorTextInputDisabled}",
            "dark": "{colorTextInputDisabled}"
          },
          "colorTextInteractiveActive": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextInteractiveHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveInvertedDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveInvertedHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInverted": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextLabel": {
            "light": "{colorTextFormLabel}",
            "dark": "{colorTextFormLabel}"
          },
          "colorTextLayoutToggle": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLayoutToggleSelected": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextLinkDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextLinkHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextLinkInvertedHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLinkButtonUnderline": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextLinkButtonUnderlineHover": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextLinkPrimaryUnderline": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextNotificationDefault": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextPaginationPageNumberActiveDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextPaginationPageNumberDefault": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey400}"
          },
          "colorTextSegmentActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextSegmentDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextSegmentHover": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutPanelTriggerHover": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutPanelTriggerActive": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorTextSmall": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusError": {
            "light": "{colorRed500}",
            "dark": "{colorRed500}"
          },
          "colorTextStatusInactive": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusInfo": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextStatusSuccess": {
            "light": "{colorGreen500}",
            "dark": "{colorGreen500}"
          },
          "colorTextStatusWarning": {
            "light": "{colorRed500}",
            "dark": "{colorRed500}"
          },
          "colorTextTopNavigationTitle": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBoardPlaceholderActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBoardPlaceholderHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDragPlaceholderActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorDragPlaceholderHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneBackgroundActive": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorDropzoneBackgroundHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneTextActive": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorDropzoneTextHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          }
        }
      },
      "header": {
        "id": "header",
        "selector": ".awsui-context-content-header",
        "tokens": {
          "shadowContainer": {
            "light": "none",
            "dark": "none"
          },
          "shadowContainerStacked": {
            "light": "0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)",
            "dark": "0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)"
          },
          "shadowContainerActive": {
            "light": "0px 1px 1px 1px #192534, 0px 6px 36px #000716",
            "dark": "0px 1px 1px 1px #192534, 0px 6px 36px #000716"
          },
          "shadowDropdown": {
            "light": "0px 4px 20px 1px rgba(0, 7, 22, 1)",
            "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
          },
          "shadowDropup": {
            "light": "{shadowDropdown}",
            "dark": "{shadowDropdown}"
          },
          "shadowFlashCollapsed": {
            "light": "0px 4px 4px rgba(0, 0, 0, 0.25)",
            "dark": "0px 4px 4px rgba(0, 0, 0, 0.25)"
          },
          "shadowFlashSticky": {
            "light": "0px 6px 36px rgba(0, 7, 22, 0.10)",
            "dark": "0px 6px 36px rgba(0, 7, 22, 1)"
          },
          "shadowModal": {
            "light": "{shadowDropdown}",
            "dark": "{shadowDropdown}"
          },
          "shadowPanel": {
            "light": "0px 1px 1px 1px #e9ebed, 0px 6px 36px rgba(0, 7, 22, 0.10)",
            "dark": "0px 1px 1px 1px #192534, 0px 6px 36px rgba(0, 7, 22, 1)"
          },
          "shadowPanelToggle": {
            "light": "0px 6px 12px 1px rgba(0, 7, 22, 0.12)",
            "dark": "0px 6px 12px 1px rgba(0, 7, 22, 1)"
          },
          "shadowPopover": {
            "light": "{shadowDropdown}",
            "dark": "{shadowDropdown}"
          },
          "shadowSplitBottom": {
            "light": "0px -36px 36px -36px rgba(0, 7, 22, 1)",
            "dark": "0px -36px 36px -36px rgba(0, 7, 22, 1)"
          },
          "shadowSplitSide": {
            "light": "-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)",
            "dark": "-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)"
          },
          "shadowSticky": {
            "light": "{shadowDropdown}",
            "dark": "{shadowDropdown}"
          },
          "shadowStickyEmbedded": {
            "light": "0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)",
            "dark": "0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)"
          },
          "shadowStickyColumnFirst": {
            "light": "0px 4px 20px 1px rgba(0, 7, 22, 1)",
            "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
          },
          "shadowStickyColumnLast": {
            "light": "0px 4px 20px 1px rgba(0, 7, 22, 1)",
            "dark": "0px 4px 20px 1px rgba(0, 7, 22, 1)"
          },
          "colorGreyOpaque25": {
            "light": "rgba(255, 255, 255, 0.25)",
            "dark": "rgba(255, 255, 255, 0.25)"
          },
          "colorGreyOpaque40": {
            "light": "rgba(0, 0, 0, 0.4)",
            "dark": "rgba(0, 0, 0, 0.4)"
          },
          "colorGreyOpaque50": {
            "light": "rgba(0, 0, 0, 0.5)",
            "dark": "rgba(0, 0, 0, 0.5)"
          },
          "colorGreyOpaque70": {
            "light": "rgba(0, 7, 22, 0.7)",
            "dark": "rgba(0, 7, 22, 0.7)"
          },
          "colorGreyOpaque80": {
            "light": "rgba(22, 25, 31, 0.8)",
            "dark": "rgba(22, 25, 31, 0.8)"
          },
          "colorGreyOpaque90": {
            "light": "rgba(242, 243, 243, 0.9)",
            "dark": "rgba(242, 243, 243, 0.9)"
          },
          "colorGreyTransparent": {
            "light": "rgba(0, 7, 22, 1)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorGreyTransparentHeavy": {
            "light": "rgba(0, 7, 22, 1)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorGreyTransparentLight": {
            "light": "rgba(0, 7, 22, 1)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorBackgroundButtonLinkActive": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonLinkHover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonNormalActive": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonNormalDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundButtonNormalDisabled": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundButtonNormalHover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonPrimaryActive": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundButtonPrimaryDefault": {
            "light": "{colorBorderButtonNormalDefault}",
            "dark": "{colorBorderButtonNormalDefault}"
          },
          "colorBackgroundButtonPrimaryDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonPrimaryHover": {
            "light": "{colorBorderButtonNormalHover}",
            "dark": "{colorBorderButtonNormalHover}"
          },
          "colorBackgroundCalendarToday": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCellShaded": {
            "light": "{colorGrey700}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBackgroundCodeEditorGutterActiveLineError": {
            "light": "{colorTextStatusError}",
            "dark": "{colorTextStatusError}"
          },
          "colorBackgroundCodeEditorGutterDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorLoading": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorPaneItemHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCodeEditorStatusBar": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundContainerContent": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundContainerHeader": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlChecked": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundControlDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundControlDisabled": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundDropdownItemDimmed": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundDropdownItemFilterMatch": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemSelected": {
            "light": "{colorBackgroundItemSelected}",
            "dark": "{colorBackgroundItemSelected}"
          },
          "colorBackgroundHomeHeader": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundInputDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundInputDisabled": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundItemSelected": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundLayoutMain": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundLayoutMobilePanel": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundLayoutPanelContent": {
            "light": "{colorBackgroundContainerContent}",
            "dark": "{colorBackgroundContainerContent}"
          },
          "colorBackgroundLayoutPanelHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutPanelTriggerActive": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundLayoutToggleActive": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundLayoutToggleHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleSelectedActive": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundModalOverlay": {
            "light": "{colorGreyOpaque70}",
            "dark": "{colorGreyOpaque70}"
          },
          "colorBackgroundNotificationBlue": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorBackgroundNotificationGreen": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen600}"
          },
          "colorBackgroundNotificationGrey": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBackgroundNotificationRed": {
            "light": "{colorRed600}",
            "dark": "{colorRed600}"
          },
          "colorBackgroundPopover": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundProgressBarContentDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundProgressBarContentInFlash": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorBackgroundProgressBarLayoutDefault": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundProgressBarLayoutInFlash": {
            "light": "{colorGreyOpaque25}",
            "dark": "{colorGreyOpaque25}"
          },
          "colorBackgroundSegmentActive": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundSegmentDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundSegmentDisabled": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundSegmentHover": {
            "light": "{colorBackgroundSegmentDefault}",
            "dark": "{colorBackgroundSegmentDefault}"
          },
          "colorBackgroundStatusError": {
            "light": "{colorRed900}",
            "dark": "{colorRed900}"
          },
          "colorBackgroundStatusInfo": {
            "light": "{colorBlue900}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundStatusSuccess": {
            "light": "{colorGreen900}",
            "dark": "{colorGreen900}"
          },
          "colorBackgroundStatusWarning": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundTableHeader": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundTilesDisabled": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundToggleCheckedDisabled": {
            "light": "{colorBlue800}",
            "dark": "{colorBlue800}"
          },
          "colorBackgroundToggleDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderButtonNormalActive": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBorderButtonNormalDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderButtonNormalDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderButtonNormalHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorBorderButtonPrimaryDisabled": {
            "light": "{colorBackgroundButtonPrimaryDisabled}",
            "dark": "{colorBackgroundButtonPrimaryDisabled}"
          },
          "colorBorderCalendarGrid": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderCalendarGridSelectedFocusRing": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorBorderCodeEditorAceActiveLineLightTheme": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderCodeEditorAceActiveLineDarkTheme": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorPaneItemHover": {
            "light": "{colorBorderDropdownItemHover}",
            "dark": "{colorBorderDropdownItemHover}"
          },
          "colorBorderContainerDivider": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderContainerTop": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderControlChecked": {
            "light": "{colorBackgroundControlChecked}",
            "dark": "{colorBackgroundControlChecked}"
          },
          "colorBorderControlDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderControlDisabled": {
            "light": "{colorBackgroundControlDisabled}",
            "dark": "{colorBackgroundControlDisabled}"
          },
          "colorBorderDividerActive": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBorderDividerDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBorderDividerPanelBottom": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderDividerPanelSide": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownContainer": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDropdownGroup": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDropdownItemDefault}"
          },
          "colorBorderDropdownItemDefault": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownItemHover": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDropdownItemDimmedHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderDropdownItemSelected": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderDropdownItemTop": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderInputDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderInputDisabled": {
            "light": "{colorBackgroundInputDisabled}",
            "dark": "{colorBackgroundInputDisabled}"
          },
          "colorBorderItemFocused": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderItemPlaceholder": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderItemSelected": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderLayout": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBorderPopover": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderSegmentActive": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderSegmentDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderSegmentDisabled": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderSegmentHover": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderStatusError": {
            "light": "{colorRed500}",
            "dark": "{colorRed500}"
          },
          "colorBorderStatusInfo": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorBorderStatusSuccess": {
            "light": "{colorGreen500}",
            "dark": "{colorGreen500}"
          },
          "colorBorderStatusWarning": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorBorderDividerInteractiveDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderTabsDivider": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorBorderTabsShadow": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderTabsUnderline": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorBorderTilesDisabled": {
            "light": "{colorBackgroundTilesDisabled}",
            "dark": "{colorBackgroundTilesDisabled}"
          },
          "colorBorderTutorial": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey600}"
          },
          "colorForegroundControlDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorForegroundControlDisabled": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorShadowDefault": {
            "light": "{colorGreyTransparentHeavy}",
            "dark": "{colorGreyTransparentHeavy}"
          },
          "colorShadowLayoutPanelTrigger": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorShadowMedium": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorShadowSide": {
            "light": "{colorGreyTransparentLight}",
            "dark": "{colorGreyTransparentLight}"
          },
          "colorStrokeCodeEditorResizeHandler": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorStrokeCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorStrokeCodeEditorGutterActiveLineHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextAccent": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextBodyDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextBodySecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextBreadcrumbCurrent": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorTextBreadcrumbIcon": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconDefault": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextButtonInlineIconDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconHover": {
            "light": "{colorTextLinkHover}",
            "dark": "{colorTextLinkHover}"
          },
          "colorTextButtonNormalActive": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextButtonNormalDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextButtonNormalHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextLinkButtonNormalDefault": {
            "light": "{colorTextButtonNormalDefault}",
            "dark": "{colorTextButtonNormalDefault}"
          },
          "colorTextLinkButtonNormalHover": {
            "light": "{colorTextButtonNormalHover}",
            "dark": "{colorTextButtonNormalHover}"
          },
          "colorTextLinkButtonNormalActive": {
            "light": "{colorTextButtonNormalActive}",
            "dark": "{colorTextButtonNormalActive}"
          },
          "colorTextButtonPrimaryActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextCalendarDayHover": {
            "light": "{colorTextDropdownItemDefault}",
            "dark": "{colorTextDropdownItemDefault}"
          },
          "colorTextCalendarDaySelected": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorTextCalendarMonth": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextCodeEditorGutterActiveLine": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextCodeEditorGutterDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextCodeEditorStatusBarDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextCodeEditorTabButtonError": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextColumnHeader": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey400}"
          },
          "colorTextColumnSortingIcon": {
            "light": "{colorTextColumnHeader}",
            "dark": "{colorTextColumnHeader}"
          },
          "colorTextControlDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextCounter": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextDropdownFooter": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownGroupLabel": {
            "light": "{colorTextGroupLabel}",
            "dark": "{colorTextGroupLabel}"
          },
          "colorTextDropdownHeader": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextDropdownItemDefault": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextDropdownItemDimmed": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemFilterMatch": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextDropdownItemHighlighted": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey200}"
          },
          "colorTextDropdownItemSecondary": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownItemSecondaryHover": {
            "light": "colorGrey300",
            "dark": "colorGrey300"
          },
          "colorTextEmpty": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextExpandableSectionDefault": {
            "light": "{colorTextInteractiveActive}",
            "dark": "{colorTextInteractiveActive}"
          },
          "colorTextExpandableSectionHover": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorTextExpandableSectionNavigationIconDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextFormDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextFormLabel": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextFormSecondary": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextGroupLabel": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextHeadingDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey200}"
          },
          "colorTextHeadingSecondary": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextHomeHeaderDefault": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextHomeHeaderSecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextIconCaret": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextIconSubtle": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey400}"
          },
          "colorTextInputDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextInputPlaceholder": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorTextInputPlaceholderDisabled": {
            "light": "{colorTextInputDisabled}",
            "dark": "{colorTextInputDisabled}"
          },
          "colorTextInteractiveActive": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveDisabled": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorTextInteractiveHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveInvertedDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveInvertedHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInverted": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextLabel": {
            "light": "{colorTextFormLabel}",
            "dark": "{colorTextFormLabel}"
          },
          "colorTextLayoutToggle": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLayoutToggleSelected": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextLinkDefault": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextLinkHover": {
            "light": "{colorBlue400}",
            "dark": "{colorBlue400}"
          },
          "colorTextLinkInvertedHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLinkButtonUnderline": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextLinkButtonUnderlineHover": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextLinkPrimaryUnderline": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextNotificationDefault": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextPaginationPageNumberActiveDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextPaginationPageNumberDefault": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey400}"
          },
          "colorTextSegmentActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorTextSegmentDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextSegmentHover": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutPanelTriggerHover": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutPanelTriggerActive": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorTextSmall": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusError": {
            "light": "{colorRed500}",
            "dark": "{colorRed500}"
          },
          "colorTextStatusInactive": {
            "light": "{colorGrey450}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusInfo": {
            "light": "{colorBlue500}",
            "dark": "{colorBlue500}"
          },
          "colorTextStatusSuccess": {
            "light": "{colorGreen500}",
            "dark": "{colorGreen500}"
          },
          "colorTextStatusWarning": {
            "light": "{colorRed500}",
            "dark": "{colorRed500}"
          },
          "colorTextTopNavigationTitle": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBoardPlaceholderActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBoardPlaceholderHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDragPlaceholderActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorDragPlaceholderHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneBackgroundActive": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorDropzoneBackgroundHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneTextActive": {
            "light": "{colorGrey800}",
            "dark": "{colorGrey800}"
          },
          "colorDropzoneTextHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          }
        }
      },
      "flashbar": {
        "id": "flashbar",
        "selector": ".awsui-context-flashbar",
        "tokens": {
          "colorGreyOpaque25": {
            "light": "rgba(255, 255, 255, 0.25)",
            "dark": "rgba(255, 255, 255, 0.25)"
          },
          "colorGreyOpaque40": {
            "light": "rgba(0, 0, 0, 0.4)",
            "dark": "rgba(0, 0, 0, 0.4)"
          },
          "colorGreyOpaque50": {
            "light": "rgba(0, 0, 0, 0.5)",
            "dark": "rgba(0, 0, 0, 0.5)"
          },
          "colorGreyOpaque70": {
            "light": "rgba(35, 47, 62, 0.7)",
            "dark": "rgba(0, 7, 22, 0.7)"
          },
          "colorGreyOpaque80": {
            "light": "rgba(22, 25, 31, 0.8)",
            "dark": "rgba(22, 25, 31, 0.8)"
          },
          "colorGreyOpaque90": {
            "light": "rgba(242, 243, 243, 0.9)",
            "dark": "rgba(242, 243, 243, 0.9)"
          },
          "colorGreyTransparent": {
            "light": "rgba(0, 7, 22, 0.12)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorGreyTransparentHeavy": {
            "light": "rgba(0, 7, 22, 0.12)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorGreyTransparentLight": {
            "light": "rgba(0, 7, 22, 0.12)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorBackgroundButtonLinkActive": {
            "light": "{colorBlue200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonLinkHover": {
            "light": "{colorBlue100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonNormalActive": {
            "light": "rgba(0, 7, 22, 0.2)",
            "dark": "rgba(0, 7, 22, 0.2)"
          },
          "colorBackgroundButtonNormalDefault": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundButtonNormalDisabled": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundButtonNormalHover": {
            "light": "rgba(0, 7, 22, 0.15)",
            "dark": "rgba(0, 7, 22, 0.15)"
          },
          "colorBackgroundButtonPrimaryActive": {
            "light": "{colorBlue800}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundButtonPrimaryDefault": {
            "light": "{colorBorderButtonNormalDefault}",
            "dark": "{colorBorderButtonNormalDefault}"
          },
          "colorBackgroundButtonPrimaryDisabled": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonPrimaryHover": {
            "light": "{colorBorderButtonNormalHover}",
            "dark": "{colorBorderButtonNormalHover}"
          },
          "colorBackgroundCalendarToday": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCellShaded": {
            "light": "{colorGrey125}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorBackgroundCodeEditorGutterActiveLineError": {
            "light": "{colorTextStatusError}",
            "dark": "{colorTextStatusError}"
          },
          "colorBackgroundCodeEditorGutterDefault": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorLoading": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorPaneItemHover": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCodeEditorStatusBar": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundContainerContent": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundContainerHeader": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlChecked": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundControlDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlDisabled": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundDropdownItemDimmed": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundDropdownItemFilterMatch": {
            "light": "{colorBlue100}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemHover": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemSelected": {
            "light": "{colorBackgroundItemSelected}",
            "dark": "{colorBackgroundItemSelected}"
          },
          "colorBackgroundHomeHeader": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundInputDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundInputDisabled": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundItemSelected": {
            "light": "{colorBlue100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundLayoutMain": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundLayoutMobilePanel": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundLayoutPanelContent": {
            "light": "{colorBackgroundContainerContent}",
            "dark": "{colorBackgroundContainerContent}"
          },
          "colorBackgroundLayoutPanelHover": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutPanelTriggerActive": {
            "light": "{colorBlue900}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundLayoutToggleActive": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundLayoutToggleHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleSelectedActive": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedHover": {
            "light": "{colorBlue700}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundModalOverlay": {
            "light": "{colorGreyOpaque70}",
            "dark": "{colorGreyOpaque70}"
          },
          "colorBackgroundNotificationBlue": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorBackgroundNotificationGreen": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen600}"
          },
          "colorBackgroundNotificationGrey": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey550}"
          },
          "colorBackgroundNotificationRed": {
            "light": "{colorRed600}",
            "dark": "{colorRed600}"
          },
          "colorBackgroundPopover": {
            "light": "{colorWhite}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundProgressBarContentDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundProgressBarContentInFlash": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorBackgroundProgressBarLayoutDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundProgressBarLayoutInFlash": {
            "light": "{colorGreyOpaque25}",
            "dark": "{colorGreyOpaque25}"
          },
          "colorBackgroundSegmentActive": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundSegmentDefault": {
            "light": "{colorBackgroundButtonNormalDefault}",
            "dark": "{colorBackgroundButtonNormalDefault}"
          },
          "colorBackgroundSegmentDisabled": {
            "light": "{colorBackgroundButtonNormalDisabled}",
            "dark": "{colorBackgroundButtonNormalDisabled}"
          },
          "colorBackgroundSegmentHover": {
            "light": "{colorBackgroundSegmentDefault}",
            "dark": "{colorBackgroundSegmentDefault}"
          },
          "colorBackgroundStatusError": {
            "light": "{colorRed100}",
            "dark": "{colorRed900}"
          },
          "colorBackgroundStatusInfo": {
            "light": "{colorBlue100}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundStatusSuccess": {
            "light": "{colorGreen100}",
            "dark": "{colorGreen900}"
          },
          "colorBackgroundStatusWarning": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundTableHeader": {
            "light": "{colorBackgroundContainerHeader}",
            "dark": "{colorBackgroundContainerHeader}"
          },
          "colorBackgroundTilesDisabled": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundToggleCheckedDisabled": {
            "light": "{colorBlue300}",
            "dark": "{colorBlue800}"
          },
          "colorBackgroundToggleDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey500}"
          },
          "colorBorderButtonNormalActive": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorBorderButtonNormalDefault": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBorderButtonNormalDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorBorderButtonNormalHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorBorderButtonPrimaryDisabled": {
            "light": "{colorBackgroundButtonPrimaryDisabled}",
            "dark": "{colorBackgroundButtonPrimaryDisabled}"
          },
          "colorBorderCalendarGrid": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderCalendarGridSelectedFocusRing": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey800}"
          },
          "colorBorderCodeEditorAceActiveLineLightTheme": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderCodeEditorAceActiveLineDarkTheme": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorPaneItemHover": {
            "light": "{colorBorderDropdownItemHover}",
            "dark": "{colorBorderDropdownItemHover}"
          },
          "colorBorderContainerDivider": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderContainerTop": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderControlChecked": {
            "light": "{colorBackgroundControlChecked}",
            "dark": "{colorBackgroundControlChecked}"
          },
          "colorBorderControlDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderControlDisabled": {
            "light": "{colorBackgroundControlDisabled}",
            "dark": "{colorBackgroundControlDisabled}"
          },
          "colorBorderDividerActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorBorderDividerDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey600}"
          },
          "colorBorderDividerPanelBottom": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderDividerPanelSide": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownContainer": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDropdownGroup": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDropdownItemDefault}"
          },
          "colorBorderDropdownItemDefault": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownItemHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDropdownItemDimmedHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderDropdownItemSelected": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderDropdownItemTop": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderInputDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey550}"
          },
          "colorBorderInputDisabled": {
            "light": "{colorBackgroundInputDisabled}",
            "dark": "{colorBackgroundInputDisabled}"
          },
          "colorBorderItemFocused": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorBorderItemPlaceholder": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderItemSelected": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBorderLayout": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorBorderPopover": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorBorderSegmentActive": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderSegmentDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorBorderSegmentDisabled": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderSegmentHover": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderStatusError": {
            "light": "{colorRed600}",
            "dark": "{colorRed500}"
          },
          "colorBorderStatusInfo": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBorderStatusSuccess": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen500}"
          },
          "colorBorderStatusWarning": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey450}"
          },
          "colorBorderDividerInteractiveDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey300}"
          },
          "colorBorderTabsDivider": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey600}"
          },
          "colorBorderTabsShadow": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderTabsUnderline": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorBorderTilesDisabled": {
            "light": "{colorBackgroundTilesDisabled}",
            "dark": "{colorBackgroundTilesDisabled}"
          },
          "colorBorderTutorial": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey600}"
          },
          "colorForegroundControlDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorForegroundControlDisabled": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorShadowDefault": {
            "light": "{colorGreyTransparentHeavy}",
            "dark": "{colorGreyTransparentHeavy}"
          },
          "colorShadowLayoutPanelTrigger": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorShadowMedium": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorShadowSide": {
            "light": "{colorGreyTransparentLight}",
            "dark": "{colorGreyTransparentLight}"
          },
          "colorStrokeCodeEditorResizeHandler": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorStrokeCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey750}"
          },
          "colorStrokeCodeEditorGutterActiveLineHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey900}"
          },
          "colorTextAccent": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextBodyDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextBodySecondary": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextBreadcrumbCurrent": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorTextBreadcrumbIcon": {
            "light": "{colorGrey500}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconDefault": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextButtonInlineIconDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconHover": {
            "light": "{colorTextLinkHover}",
            "dark": "{colorTextLinkHover}"
          },
          "colorTextButtonNormalActive": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextButtonNormalDefault": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextButtonNormalHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLinkButtonNormalDefault": {
            "light": "{colorTextButtonNormalDefault}",
            "dark": "{colorTextButtonNormalDefault}"
          },
          "colorTextLinkButtonNormalHover": {
            "light": "{colorTextButtonNormalHover}",
            "dark": "{colorTextButtonNormalHover}"
          },
          "colorTextLinkButtonNormalActive": {
            "light": "{colorTextButtonNormalActive}",
            "dark": "{colorTextButtonNormalActive}"
          },
          "colorTextButtonPrimaryActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryHover": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextCalendarDayHover": {
            "light": "{colorTextDropdownItemDefault}",
            "dark": "{colorTextDropdownItemDefault}"
          },
          "colorTextCalendarDaySelected": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorTextCalendarMonth": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextCodeEditorGutterActiveLine": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextCodeEditorGutterDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextCodeEditorStatusBarDisabled": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey550}"
          },
          "colorTextCodeEditorTabButtonError": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextColumnHeader": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey400}"
          },
          "colorTextColumnSortingIcon": {
            "light": "{colorTextColumnHeader}",
            "dark": "{colorTextColumnHeader}"
          },
          "colorTextControlDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextCounter": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorTextDropdownFooter": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownGroupLabel": {
            "light": "{colorTextGroupLabel}",
            "dark": "{colorTextGroupLabel}"
          },
          "colorTextDropdownHeader": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextDropdownItemDefault": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextDropdownItemDimmed": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemFilterMatch": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue400}"
          },
          "colorTextDropdownItemHighlighted": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey200}"
          },
          "colorTextDropdownItemSecondary": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownItemSecondaryHover": {
            "light": "{colorGrey550}",
            "dark": "colorGrey300"
          },
          "colorTextEmpty": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey300}"
          },
          "colorTextExpandableSectionDefault": {
            "light": "{colorTextInteractiveActive}",
            "dark": "{colorTextInteractiveActive}"
          },
          "colorTextExpandableSectionHover": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorTextExpandableSectionNavigationIconDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextFormDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextFormLabel": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextFormSecondary": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextGroupLabel": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey450}"
          },
          "colorTextHeadingDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey200}"
          },
          "colorTextHeadingSecondary": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey450}"
          },
          "colorTextHomeHeaderDefault": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextHomeHeaderSecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextIconCaret": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey450}"
          },
          "colorTextIconSubtle": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey400}"
          },
          "colorTextInputDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorTextInputPlaceholder": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorTextInputPlaceholderDisabled": {
            "light": "{colorTextInputDisabled}",
            "dark": "{colorTextInputDisabled}"
          },
          "colorTextInteractiveActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorTextInteractiveHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveInvertedDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveInvertedHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInverted": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextLabel": {
            "light": "{colorTextFormLabel}",
            "dark": "{colorTextFormLabel}"
          },
          "colorTextLayoutToggle": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLayoutToggleSelected": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextLinkDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextLinkHover": {
            "light": "{colorBlue800}",
            "dark": "{colorBlue400}"
          },
          "colorTextLinkInvertedHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLinkButtonUnderline": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextLinkButtonUnderlineHover": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextLinkPrimaryUnderline": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextNotificationDefault": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextPaginationPageNumberActiveDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextPaginationPageNumberDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorGrey400}"
          },
          "colorTextSegmentActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextSegmentDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextSegmentHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutPanelTriggerHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutPanelTriggerActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorTextSmall": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusError": {
            "light": "{colorRed600}",
            "dark": "{colorRed500}"
          },
          "colorTextStatusInactive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusInfo": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextStatusSuccess": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen500}"
          },
          "colorTextStatusWarning": {
            "light": "{colorRed600}",
            "dark": "{colorRed500}"
          },
          "colorTextTopNavigationTitle": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorBoardPlaceholderActive": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey550}"
          },
          "colorBoardPlaceholderHover": {
            "light": "{colorBlue200}",
            "dark": "{colorBlue600}"
          },
          "colorDragPlaceholderActive": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey550}"
          },
          "colorDragPlaceholderHover": {
            "light": "{colorBlue200}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneBackgroundActive": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey500}"
          },
          "colorDropzoneBackgroundHover": {
            "light": "{colorBlue200}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneTextActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey800}"
          },
          "colorDropzoneTextHover": {
            "light": "{colorBlue800}",
            "dark": "{colorWhite}"
          }
        }
      },
      "alert": {
        "id": "alert",
        "selector": ".awsui-context-alert",
        "tokens": {
          "colorGreyOpaque25": {
            "light": "rgba(255, 255, 255, 0.25)",
            "dark": "rgba(255, 255, 255, 0.25)"
          },
          "colorGreyOpaque40": {
            "light": "rgba(0, 0, 0, 0.4)",
            "dark": "rgba(0, 0, 0, 0.4)"
          },
          "colorGreyOpaque50": {
            "light": "rgba(0, 0, 0, 0.5)",
            "dark": "rgba(0, 0, 0, 0.5)"
          },
          "colorGreyOpaque70": {
            "light": "rgba(35, 47, 62, 0.7)",
            "dark": "rgba(0, 7, 22, 0.7)"
          },
          "colorGreyOpaque80": {
            "light": "rgba(22, 25, 31, 0.8)",
            "dark": "rgba(22, 25, 31, 0.8)"
          },
          "colorGreyOpaque90": {
            "light": "rgba(242, 243, 243, 0.9)",
            "dark": "rgba(242, 243, 243, 0.9)"
          },
          "colorGreyTransparent": {
            "light": "rgba(0, 7, 22, 0.12)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorGreyTransparentHeavy": {
            "light": "rgba(0, 7, 22, 0.12)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorGreyTransparentLight": {
            "light": "rgba(0, 7, 22, 0.12)",
            "dark": "rgba(0, 7, 22, 1)"
          },
          "colorBackgroundButtonLinkActive": {
            "light": "{colorBlue200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonLinkHover": {
            "light": "{colorBlue100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundButtonNormalActive": {
            "light": "rgba(0, 7, 22, 0.1)",
            "dark": "rgba(255, 255, 255, 0.15)"
          },
          "colorBackgroundButtonNormalDefault": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundButtonNormalDisabled": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundButtonNormalHover": {
            "light": "rgba(0, 7, 22, 0.05)",
            "dark": "rgba(255, 255, 255, 0.1)"
          },
          "colorBackgroundButtonPrimaryActive": {
            "light": "{colorBlue800}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundButtonPrimaryDefault": {
            "light": "{colorBorderButtonNormalDefault}",
            "dark": "{colorBorderButtonNormalDefault}"
          },
          "colorBackgroundButtonPrimaryDisabled": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundButtonPrimaryHover": {
            "light": "{colorBorderButtonNormalHover}",
            "dark": "{colorBorderButtonNormalHover}"
          },
          "colorBackgroundCalendarToday": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCellShaded": {
            "light": "{colorGrey125}",
            "dark": "{colorGrey700}"
          },
          "colorBackgroundCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorBackgroundCodeEditorGutterActiveLineError": {
            "light": "{colorTextStatusError}",
            "dark": "{colorTextStatusError}"
          },
          "colorBackgroundCodeEditorGutterDefault": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorLoading": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundCodeEditorPaneItemHover": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundCodeEditorStatusBar": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundContainerContent": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundContainerHeader": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlChecked": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundControlDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundControlDisabled": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundDropdownItemDimmed": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBackgroundDropdownItemFilterMatch": {
            "light": "{colorBlue100}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemHover": {
            "light": "{colorGrey150}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundDropdownItemSelected": {
            "light": "{colorBackgroundItemSelected}",
            "dark": "{colorBackgroundItemSelected}"
          },
          "colorBackgroundHomeHeader": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundInputDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundInputDisabled": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundItemSelected": {
            "light": "{colorBlue100}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundLayoutMain": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundLayoutMobilePanel": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey900}"
          },
          "colorBackgroundLayoutPanelContent": {
            "light": "{colorBackgroundContainerContent}",
            "dark": "{colorBackgroundContainerContent}"
          },
          "colorBackgroundLayoutPanelHover": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutPanelTriggerActive": {
            "light": "{colorBlue900}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundLayoutToggleActive": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleDefault": {
            "light": "{colorGrey750}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundLayoutToggleHover": {
            "light": "{colorGrey650}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundLayoutToggleSelectedActive": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundLayoutToggleSelectedHover": {
            "light": "{colorBlue700}",
            "dark": "{colorBlue400}"
          },
          "colorBackgroundModalOverlay": {
            "light": "{colorGreyOpaque70}",
            "dark": "{colorGreyOpaque70}"
          },
          "colorBackgroundNotificationBlue": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue600}"
          },
          "colorBackgroundNotificationGreen": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen600}"
          },
          "colorBackgroundNotificationGrey": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey550}"
          },
          "colorBackgroundNotificationRed": {
            "light": "{colorRed600}",
            "dark": "{colorRed600}"
          },
          "colorBackgroundPopover": {
            "light": "{colorWhite}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundProgressBarContentDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundProgressBarContentInFlash": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorBackgroundProgressBarLayoutDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey650}"
          },
          "colorBackgroundProgressBarLayoutInFlash": {
            "light": "{colorGreyOpaque25}",
            "dark": "{colorGreyOpaque25}"
          },
          "colorBackgroundSegmentActive": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBackgroundSegmentDefault": {
            "light": "{colorBackgroundButtonNormalDefault}",
            "dark": "{colorBackgroundButtonNormalDefault}"
          },
          "colorBackgroundSegmentDisabled": {
            "light": "{colorBackgroundButtonNormalDisabled}",
            "dark": "{colorBackgroundButtonNormalDisabled}"
          },
          "colorBackgroundSegmentHover": {
            "light": "{colorBackgroundSegmentDefault}",
            "dark": "{colorBackgroundSegmentDefault}"
          },
          "colorBackgroundStatusError": {
            "light": "{colorRed100}",
            "dark": "{colorRed900}"
          },
          "colorBackgroundStatusInfo": {
            "light": "{colorBlue100}",
            "dark": "{colorBlue900}"
          },
          "colorBackgroundStatusSuccess": {
            "light": "{colorGreen100}",
            "dark": "{colorGreen900}"
          },
          "colorBackgroundStatusWarning": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorBackgroundTableHeader": {
            "light": "{colorBackgroundContainerHeader}",
            "dark": "{colorBackgroundContainerHeader}"
          },
          "colorBackgroundTilesDisabled": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey750}"
          },
          "colorBackgroundToggleCheckedDisabled": {
            "light": "{colorBlue300}",
            "dark": "{colorBlue800}"
          },
          "colorBackgroundToggleDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey500}"
          },
          "colorBorderButtonNormalActive": {
            "light": "{colorTextButtonNormalHover}",
            "dark": "{colorTextButtonNormalHover}"
          },
          "colorBorderButtonNormalDefault": {
            "light": "{colorTextButtonNormalDefault}",
            "dark": "{colorTextButtonNormalDefault}"
          },
          "colorBorderButtonNormalDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorBorderButtonNormalHover": {
            "light": "{colorTextButtonNormalHover}",
            "dark": "{colorTextButtonNormalHover}"
          },
          "colorBorderButtonPrimaryDisabled": {
            "light": "{colorBackgroundButtonPrimaryDisabled}",
            "dark": "{colorBackgroundButtonPrimaryDisabled}"
          },
          "colorBorderCalendarGrid": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderCalendarGridSelectedFocusRing": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey800}"
          },
          "colorBorderCodeEditorAceActiveLineLightTheme": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorBorderCodeEditorAceActiveLineDarkTheme": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey550}"
          },
          "colorBorderCodeEditorPaneItemHover": {
            "light": "{colorBorderDropdownItemHover}",
            "dark": "{colorBorderDropdownItemHover}"
          },
          "colorBorderContainerDivider": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderContainerTop": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderControlChecked": {
            "light": "{colorBackgroundControlChecked}",
            "dark": "{colorBackgroundControlChecked}"
          },
          "colorBorderControlDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderControlDisabled": {
            "light": "{colorBackgroundControlDisabled}",
            "dark": "{colorBackgroundControlDisabled}"
          },
          "colorBorderDividerActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorBorderDividerDefault": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey600}"
          },
          "colorBorderDividerPanelBottom": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderDividerPanelSide": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownContainer": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDropdownGroup": {
            "light": "{colorBorderDropdownItemDefault}",
            "dark": "{colorBorderDropdownItemDefault}"
          },
          "colorBorderDropdownItemDefault": {
            "light": "{colorBorderDividerDefault}",
            "dark": "{colorBorderDividerDefault}"
          },
          "colorBorderDropdownItemHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey550}"
          },
          "colorBorderDropdownItemDimmedHover": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey500}"
          },
          "colorBorderDropdownItemSelected": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderDropdownItemTop": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorBorderInputDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey550}"
          },
          "colorBorderInputDisabled": {
            "light": "{colorBackgroundInputDisabled}",
            "dark": "{colorBackgroundInputDisabled}"
          },
          "colorBorderItemFocused": {
            "light": "{colorBlue600}",
            "dark": "{colorGrey100}"
          },
          "colorBorderItemPlaceholder": {
            "light": "{colorBorderItemSelected}",
            "dark": "{colorBorderItemSelected}"
          },
          "colorBorderItemSelected": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBorderLayout": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorBorderPopover": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorBorderSegmentActive": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderSegmentDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorBorderSegmentDisabled": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderSegmentHover": {
            "light": "{colorBorderSegmentDefault}",
            "dark": "{colorBorderSegmentDefault}"
          },
          "colorBorderStatusError": {
            "light": "{colorRed600}",
            "dark": "{colorRed500}"
          },
          "colorBorderStatusInfo": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorBorderStatusSuccess": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen500}"
          },
          "colorBorderStatusWarning": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey450}"
          },
          "colorBorderDividerInteractiveDefault": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey300}"
          },
          "colorBorderTabsDivider": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey600}"
          },
          "colorBorderTabsShadow": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorBorderTabsUnderline": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorBorderTilesDisabled": {
            "light": "{colorBackgroundTilesDisabled}",
            "dark": "{colorBackgroundTilesDisabled}"
          },
          "colorBorderTutorial": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey600}"
          },
          "colorForegroundControlDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorForegroundControlDisabled": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorShadowDefault": {
            "light": "{colorGreyTransparentHeavy}",
            "dark": "{colorGreyTransparentHeavy}"
          },
          "colorShadowLayoutPanelTrigger": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey650}"
          },
          "colorShadowMedium": {
            "light": "{colorGreyTransparent}",
            "dark": "{colorGreyTransparent}"
          },
          "colorShadowSide": {
            "light": "{colorGreyTransparentLight}",
            "dark": "{colorGreyTransparentLight}"
          },
          "colorStrokeCodeEditorResizeHandler": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorStrokeCodeEditorGutterActiveLineDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey750}"
          },
          "colorStrokeCodeEditorGutterActiveLineHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey900}"
          },
          "colorTextAccent": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextBodyDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextBodySecondary": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextBreadcrumbCurrent": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorTextBreadcrumbIcon": {
            "light": "{colorGrey500}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconDefault": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextButtonInlineIconDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextButtonInlineIconHover": {
            "light": "{colorTextLinkHover}",
            "dark": "{colorTextLinkHover}"
          },
          "colorTextButtonNormalActive": {
            "light": "{colorTextButtonNormalHover}",
            "dark": "{colorTextButtonNormalHover}"
          },
          "colorTextButtonNormalDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextButtonNormalHover": {
            "light": "{colorGrey900}",
            "dark": "{colorWhite}"
          },
          "colorTextLinkButtonNormalDefault": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextLinkButtonNormalHover": {
            "light": "{colorTextLinkHover}",
            "dark": "{colorTextLinkHover}"
          },
          "colorTextLinkButtonNormalActive": {
            "light": "{colorTextButtonNormalActive}",
            "dark": "{colorTextButtonNormalActive}"
          },
          "colorTextButtonPrimaryActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryDefault": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextButtonPrimaryHover": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextCalendarDayHover": {
            "light": "{colorTextDropdownItemDefault}",
            "dark": "{colorTextDropdownItemDefault}"
          },
          "colorTextCalendarDaySelected": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorTextCalendarMonth": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextCodeEditorGutterActiveLine": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextCodeEditorGutterDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextCodeEditorStatusBarDisabled": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey550}"
          },
          "colorTextCodeEditorTabButtonError": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextColumnHeader": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey400}"
          },
          "colorTextColumnSortingIcon": {
            "light": "{colorTextColumnHeader}",
            "dark": "{colorTextColumnHeader}"
          },
          "colorTextControlDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextCounter": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorTextDropdownFooter": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownGroupLabel": {
            "light": "{colorTextGroupLabel}",
            "dark": "{colorTextGroupLabel}"
          },
          "colorTextDropdownHeader": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextDropdownItemDefault": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextDropdownItemDimmed": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextDropdownItemFilterMatch": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue400}"
          },
          "colorTextDropdownItemHighlighted": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey200}"
          },
          "colorTextDropdownItemSecondary": {
            "light": "{colorTextFormSecondary}",
            "dark": "{colorTextFormSecondary}"
          },
          "colorTextDropdownItemSecondaryHover": {
            "light": "{colorGrey550}",
            "dark": "colorGrey300"
          },
          "colorTextEmpty": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey300}"
          },
          "colorTextExpandableSectionDefault": {
            "light": "{colorTextInteractiveActive}",
            "dark": "{colorTextInteractiveActive}"
          },
          "colorTextExpandableSectionHover": {
            "light": "{colorTextAccent}",
            "dark": "{colorTextAccent}"
          },
          "colorTextExpandableSectionNavigationIconDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorTextInteractiveDefault}"
          },
          "colorTextFormDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey300}"
          },
          "colorTextFormLabel": {
            "light": "{colorTextFormDefault}",
            "dark": "{colorTextFormDefault}"
          },
          "colorTextFormSecondary": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextGroupLabel": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey450}"
          },
          "colorTextHeadingDefault": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey200}"
          },
          "colorTextHeadingSecondary": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey450}"
          },
          "colorTextHomeHeaderDefault": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextHomeHeaderSecondary": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextIconCaret": {
            "light": "{colorGrey500}",
            "dark": "{colorGrey450}"
          },
          "colorTextIconSubtle": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey400}"
          },
          "colorTextInputDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorTextInputPlaceholder": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey500}"
          },
          "colorTextInputPlaceholderDisabled": {
            "light": "{colorTextInputDisabled}",
            "dark": "{colorTextInputDisabled}"
          },
          "colorTextInteractiveActive": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveDisabled": {
            "light": "{colorGrey400}",
            "dark": "{colorGrey550}"
          },
          "colorTextInteractiveHover": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorTextInteractiveInvertedDefault": {
            "light": "{colorGrey300}",
            "dark": "{colorGrey300}"
          },
          "colorTextInteractiveInvertedHover": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextInverted": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextLabel": {
            "light": "{colorTextFormLabel}",
            "dark": "{colorTextFormLabel}"
          },
          "colorTextLayoutToggle": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLayoutToggleSelected": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextLinkDefault": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextLinkHover": {
            "light": "{colorBlue800}",
            "dark": "{colorBlue400}"
          },
          "colorTextLinkInvertedHover": {
            "light": "{colorWhite}",
            "dark": "{colorWhite}"
          },
          "colorTextLinkButtonUnderline": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextLinkButtonUnderlineHover": {
            "light": "transparent",
            "dark": "transparent"
          },
          "colorTextLinkPrimaryUnderline": {
            "light": "{colorTextLinkDefault}",
            "dark": "{colorTextLinkDefault}"
          },
          "colorTextNotificationDefault": {
            "light": "{colorGrey100}",
            "dark": "{colorGrey100}"
          },
          "colorTextPaginationPageNumberActiveDisabled": {
            "light": "{colorTextInteractiveDisabled}",
            "dark": "{colorTextInteractiveDisabled}"
          },
          "colorTextPaginationPageNumberDefault": {
            "light": "{colorTextInteractiveDefault}",
            "dark": "{colorGrey400}"
          },
          "colorTextSegmentActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey900}"
          },
          "colorTextSegmentDefault": {
            "light": "{colorGrey600}",
            "dark": "{colorGrey300}"
          },
          "colorTextSegmentHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutPanelTriggerHover": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextLayoutPanelTriggerActive": {
            "light": "{colorWhite}",
            "dark": "{colorGrey800}"
          },
          "colorTextSmall": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusError": {
            "light": "{colorRed600}",
            "dark": "{colorRed500}"
          },
          "colorTextStatusInactive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey450}"
          },
          "colorTextStatusInfo": {
            "light": "{colorBlue600}",
            "dark": "{colorBlue500}"
          },
          "colorTextStatusSuccess": {
            "light": "{colorGreen600}",
            "dark": "{colorGreen500}"
          },
          "colorTextStatusWarning": {
            "light": "{colorRed600}",
            "dark": "{colorRed500}"
          },
          "colorTextTopNavigationTitle": {
            "light": "{colorGrey900}",
            "dark": "{colorGrey100}"
          },
          "colorBoardPlaceholderActive": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey550}"
          },
          "colorBoardPlaceholderHover": {
            "light": "{colorBlue200}",
            "dark": "{colorBlue600}"
          },
          "colorDragPlaceholderActive": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey550}"
          },
          "colorDragPlaceholderHover": {
            "light": "{colorBlue200}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneBackgroundActive": {
            "light": "{colorGrey200}",
            "dark": "{colorGrey500}"
          },
          "colorDropzoneBackgroundHover": {
            "light": "{colorBlue200}",
            "dark": "{colorBlue600}"
          },
          "colorDropzoneTextActive": {
            "light": "{colorGrey550}",
            "dark": "{colorGrey800}"
          },
          "colorDropzoneTextHover": {
            "light": "{colorBlue800}",
            "dark": "{colorWhite}"
          }
        }
      }
    },
    "tokenModeMap": {
      "colorChartsRed300": "color",
      "colorChartsRed400": "color",
      "colorChartsRed500": "color",
      "colorChartsRed600": "color",
      "colorChartsRed700": "color",
      "colorChartsRed800": "color",
      "colorChartsRed900": "color",
      "colorChartsRed1000": "color",
      "colorChartsRed1100": "color",
      "colorChartsRed1200": "color",
      "colorChartsOrange300": "color",
      "colorChartsOrange400": "color",
      "colorChartsOrange500": "color",
      "colorChartsOrange600": "color",
      "colorChartsOrange700": "color",
      "colorChartsOrange800": "color",
      "colorChartsOrange900": "color",
      "colorChartsOrange1000": "color",
      "colorChartsOrange1100": "color",
      "colorChartsOrange1200": "color",
      "colorChartsYellow300": "color",
      "colorChartsYellow400": "color",
      "colorChartsYellow500": "color",
      "colorChartsYellow600": "color",
      "colorChartsYellow700": "color",
      "colorChartsYellow800": "color",
      "colorChartsYellow900": "color",
      "colorChartsYellow1000": "color",
      "colorChartsYellow1100": "color",
      "colorChartsYellow1200": "color",
      "colorChartsGreen300": "color",
      "colorChartsGreen400": "color",
      "colorChartsGreen500": "color",
      "colorChartsGreen600": "color",
      "colorChartsGreen700": "color",
      "colorChartsGreen800": "color",
      "colorChartsGreen900": "color",
      "colorChartsGreen1000": "color",
      "colorChartsGreen1100": "color",
      "colorChartsGreen1200": "color",
      "colorChartsTeal300": "color",
      "colorChartsTeal400": "color",
      "colorChartsTeal500": "color",
      "colorChartsTeal600": "color",
      "colorChartsTeal700": "color",
      "colorChartsTeal800": "color",
      "colorChartsTeal900": "color",
      "colorChartsTeal1000": "color",
      "colorChartsTeal1100": "color",
      "colorChartsTeal1200": "color",
      "colorChartsBlue1300": "color",
      "colorChartsBlue1400": "color",
      "colorChartsBlue1500": "color",
      "colorChartsBlue1600": "color",
      "colorChartsBlue1700": "color",
      "colorChartsBlue1800": "color",
      "colorChartsBlue1900": "color",
      "colorChartsBlue11000": "color",
      "colorChartsBlue11100": "color",
      "colorChartsBlue11200": "color",
      "colorChartsBlue2300": "color",
      "colorChartsBlue2400": "color",
      "colorChartsBlue2500": "color",
      "colorChartsBlue2600": "color",
      "colorChartsBlue2700": "color",
      "colorChartsBlue2800": "color",
      "colorChartsBlue2900": "color",
      "colorChartsBlue21000": "color",
      "colorChartsBlue21100": "color",
      "colorChartsBlue21200": "color",
      "colorChartsPurple300": "color",
      "colorChartsPurple400": "color",
      "colorChartsPurple500": "color",
      "colorChartsPurple600": "color",
      "colorChartsPurple700": "color",
      "colorChartsPurple800": "color",
      "colorChartsPurple900": "color",
      "colorChartsPurple1000": "color",
      "colorChartsPurple1100": "color",
      "colorChartsPurple1200": "color",
      "colorChartsPink300": "color",
      "colorChartsPink400": "color",
      "colorChartsPink500": "color",
      "colorChartsPink600": "color",
      "colorChartsPink700": "color",
      "colorChartsPink800": "color",
      "colorChartsPink900": "color",
      "colorChartsPink1000": "color",
      "colorChartsPink1100": "color",
      "colorChartsPink1200": "color",
      "colorChartsStatusCritical": "color",
      "colorChartsStatusHigh": "color",
      "colorChartsStatusMedium": "color",
      "colorChartsStatusLow": "color",
      "colorChartsStatusPositive": "color",
      "colorChartsStatusInfo": "color",
      "colorChartsStatusNeutral": "color",
      "colorChartsThresholdNegative": "color",
      "colorChartsThresholdPositive": "color",
      "colorChartsThresholdInfo": "color",
      "colorChartsThresholdNeutral": "color",
      "colorChartsLineGrid": "color",
      "colorChartsLineTick": "color",
      "colorChartsLineAxis": "color",
      "colorChartsPaletteCategorical1": "color",
      "colorChartsPaletteCategorical2": "color",
      "colorChartsPaletteCategorical3": "color",
      "colorChartsPaletteCategorical4": "color",
      "colorChartsPaletteCategorical5": "color",
      "colorChartsPaletteCategorical6": "color",
      "colorChartsPaletteCategorical7": "color",
      "colorChartsPaletteCategorical8": "color",
      "colorChartsPaletteCategorical9": "color",
      "colorChartsPaletteCategorical10": "color",
      "colorChartsPaletteCategorical11": "color",
      "colorChartsPaletteCategorical12": "color",
      "colorChartsPaletteCategorical13": "color",
      "colorChartsPaletteCategorical14": "color",
      "colorChartsPaletteCategorical15": "color",
      "colorChartsPaletteCategorical16": "color",
      "colorChartsPaletteCategorical17": "color",
      "colorChartsPaletteCategorical18": "color",
      "colorChartsPaletteCategorical19": "color",
      "colorChartsPaletteCategorical20": "color",
      "colorChartsPaletteCategorical21": "color",
      "colorChartsPaletteCategorical22": "color",
      "colorChartsPaletteCategorical23": "color",
      "colorChartsPaletteCategorical24": "color",
      "colorChartsPaletteCategorical25": "color",
      "colorChartsPaletteCategorical26": "color",
      "colorChartsPaletteCategorical27": "color",
      "colorChartsPaletteCategorical28": "color",
      "colorChartsPaletteCategorical29": "color",
      "colorChartsPaletteCategorical30": "color",
      "colorChartsPaletteCategorical31": "color",
      "colorChartsPaletteCategorical32": "color",
      "colorChartsPaletteCategorical33": "color",
      "colorChartsPaletteCategorical34": "color",
      "colorChartsPaletteCategorical35": "color",
      "colorChartsPaletteCategorical36": "color",
      "colorChartsPaletteCategorical37": "color",
      "colorChartsPaletteCategorical38": "color",
      "colorChartsPaletteCategorical39": "color",
      "colorChartsPaletteCategorical40": "color",
      "colorChartsPaletteCategorical41": "color",
      "colorChartsPaletteCategorical42": "color",
      "colorChartsPaletteCategorical43": "color",
      "colorChartsPaletteCategorical44": "color",
      "colorChartsPaletteCategorical45": "color",
      "colorChartsPaletteCategorical46": "color",
      "colorChartsPaletteCategorical47": "color",
      "colorChartsPaletteCategorical48": "color",
      "colorChartsPaletteCategorical49": "color",
      "colorChartsPaletteCategorical50": "color",
      "colorGreyOpaque25": "color",
      "colorGreyOpaque40": "color",
      "colorGreyOpaque50": "color",
      "colorGreyOpaque70": "color",
      "colorGreyOpaque80": "color",
      "colorGreyOpaque90": "color",
      "colorGreyTransparent": "color",
      "colorGreyTransparentHeavy": "color",
      "colorGreyTransparentLight": "color",
      "colorBackgroundButtonLinkActive": "color",
      "colorBackgroundButtonLinkHover": "color",
      "colorBackgroundButtonNormalActive": "color",
      "colorBackgroundButtonNormalDefault": "color",
      "colorBackgroundButtonNormalDisabled": "color",
      "colorBackgroundButtonNormalHover": "color",
      "colorBackgroundButtonPrimaryActive": "color",
      "colorBackgroundButtonPrimaryDefault": "color",
      "colorBackgroundButtonPrimaryDisabled": "color",
      "colorBackgroundButtonPrimaryHover": "color",
      "colorBackgroundCalendarToday": "color",
      "colorBackgroundCellShaded": "color",
      "colorBackgroundCodeEditorGutterActiveLineDefault": "color",
      "colorBackgroundCodeEditorGutterActiveLineError": "color",
      "colorBackgroundCodeEditorGutterDefault": "color",
      "colorBackgroundCodeEditorLoading": "color",
      "colorBackgroundCodeEditorPaneItemHover": "color",
      "colorBackgroundCodeEditorStatusBar": "color",
      "colorBackgroundContainerContent": "color",
      "colorBackgroundContainerHeader": "color",
      "colorBackgroundControlChecked": "color",
      "colorBackgroundControlDefault": "color",
      "colorBackgroundControlDisabled": "color",
      "colorBackgroundDropdownItemDefault": "color",
      "colorBackgroundDropdownItemDimmed": "color",
      "colorBackgroundDropdownItemFilterMatch": "color",
      "colorBackgroundDropdownItemHover": "color",
      "colorBackgroundDropdownItemSelected": "color",
      "colorBackgroundHomeHeader": "color",
      "colorBackgroundInputDefault": "color",
      "colorBackgroundInputDisabled": "color",
      "colorBackgroundItemSelected": "color",
      "colorBackgroundLayoutMain": "color",
      "colorBackgroundLayoutMobilePanel": "color",
      "colorBackgroundLayoutPanelContent": "color",
      "colorBackgroundLayoutPanelHover": "color",
      "colorBackgroundLayoutPanelTriggerActive": "color",
      "colorBackgroundLayoutToggleActive": "color",
      "colorBackgroundLayoutToggleDefault": "color",
      "colorBackgroundLayoutToggleHover": "color",
      "colorBackgroundLayoutToggleSelectedActive": "color",
      "colorBackgroundLayoutToggleSelectedDefault": "color",
      "colorBackgroundLayoutToggleSelectedHover": "color",
      "colorBackgroundModalOverlay": "color",
      "colorBackgroundNotificationBlue": "color",
      "colorBackgroundNotificationGreen": "color",
      "colorBackgroundNotificationGrey": "color",
      "colorBackgroundNotificationRed": "color",
      "colorBackgroundPopover": "color",
      "colorBackgroundProgressBarContentDefault": "color",
      "colorBackgroundProgressBarContentInFlash": "color",
      "colorBackgroundProgressBarLayoutDefault": "color",
      "colorBackgroundProgressBarLayoutInFlash": "color",
      "colorBackgroundSegmentActive": "color",
      "colorBackgroundSegmentDefault": "color",
      "colorBackgroundSegmentDisabled": "color",
      "colorBackgroundSegmentHover": "color",
      "colorBackgroundStatusError": "color",
      "colorBackgroundStatusInfo": "color",
      "colorBackgroundStatusSuccess": "color",
      "colorBackgroundStatusWarning": "color",
      "colorBackgroundTableHeader": "color",
      "colorBackgroundTilesDisabled": "color",
      "colorBackgroundToggleCheckedDisabled": "color",
      "colorBackgroundToggleDefault": "color",
      "colorBorderButtonNormalActive": "color",
      "colorBorderButtonNormalDefault": "color",
      "colorBorderButtonNormalDisabled": "color",
      "colorBorderButtonNormalHover": "color",
      "colorBorderButtonPrimaryDisabled": "color",
      "colorBorderCalendarGrid": "color",
      "colorBorderCalendarGridSelectedFocusRing": "color",
      "colorBorderCodeEditorAceActiveLineLightTheme": "color",
      "colorBorderCodeEditorAceActiveLineDarkTheme": "color",
      "colorBorderCodeEditorDefault": "color",
      "colorBorderCodeEditorPaneItemHover": "color",
      "colorBorderContainerDivider": "color",
      "colorBorderContainerTop": "color",
      "colorBorderControlChecked": "color",
      "colorBorderControlDefault": "color",
      "colorBorderControlDisabled": "color",
      "colorBorderDividerActive": "color",
      "colorBorderDividerDefault": "color",
      "colorBorderDividerPanelBottom": "color",
      "colorBorderDividerPanelSide": "color",
      "colorBorderDropdownContainer": "color",
      "colorBorderDropdownGroup": "color",
      "colorBorderDropdownItemDefault": "color",
      "colorBorderDropdownItemHover": "color",
      "colorBorderDropdownItemDimmedHover": "color",
      "colorBorderDropdownItemSelected": "color",
      "colorBorderDropdownItemTop": "color",
      "colorBorderInputDefault": "color",
      "colorBorderInputDisabled": "color",
      "colorBorderItemFocused": "color",
      "colorBorderItemPlaceholder": "color",
      "colorBorderItemSelected": "color",
      "colorBorderLayout": "color",
      "colorBorderPopover": "color",
      "colorBorderSegmentActive": "color",
      "colorBorderSegmentDefault": "color",
      "colorBorderSegmentDisabled": "color",
      "colorBorderSegmentHover": "color",
      "colorBorderStatusError": "color",
      "colorBorderStatusInfo": "color",
      "colorBorderStatusSuccess": "color",
      "colorBorderStatusWarning": "color",
      "colorBorderDividerInteractiveDefault": "color",
      "colorBorderTabsDivider": "color",
      "colorBorderTabsShadow": "color",
      "colorBorderTabsUnderline": "color",
      "colorBorderTilesDisabled": "color",
      "colorBorderTutorial": "color",
      "colorForegroundControlDefault": "color",
      "colorForegroundControlDisabled": "color",
      "colorShadowDefault": "color",
      "colorShadowLayoutPanelTrigger": "color",
      "colorShadowMedium": "color",
      "colorShadowSide": "color",
      "colorStrokeCodeEditorResizeHandler": "color",
      "colorStrokeCodeEditorGutterActiveLineDefault": "color",
      "colorStrokeCodeEditorGutterActiveLineHover": "color",
      "colorTextAccent": "color",
      "colorTextBodyDefault": "color",
      "colorTextBodySecondary": "color",
      "colorTextBreadcrumbCurrent": "color",
      "colorTextBreadcrumbIcon": "color",
      "colorTextButtonInlineIconDefault": "color",
      "colorTextButtonInlineIconDisabled": "color",
      "colorTextButtonInlineIconHover": "color",
      "colorTextButtonNormalActive": "color",
      "colorTextButtonNormalDefault": "color",
      "colorTextButtonNormalHover": "color",
      "colorTextLinkButtonNormalDefault": "color",
      "colorTextLinkButtonNormalHover": "color",
      "colorTextLinkButtonNormalActive": "color",
      "colorTextButtonPrimaryActive": "color",
      "colorTextButtonPrimaryDefault": "color",
      "colorTextButtonPrimaryHover": "color",
      "colorTextCalendarDayHover": "color",
      "colorTextCalendarDaySelected": "color",
      "colorTextCalendarMonth": "color",
      "colorTextCodeEditorGutterActiveLine": "color",
      "colorTextCodeEditorGutterDefault": "color",
      "colorTextCodeEditorStatusBarDisabled": "color",
      "colorTextCodeEditorTabButtonError": "color",
      "colorTextColumnHeader": "color",
      "colorTextColumnSortingIcon": "color",
      "colorTextControlDisabled": "color",
      "colorTextCounter": "color",
      "colorTextDisabled": "color",
      "colorTextDropdownFooter": "color",
      "colorTextDropdownGroupLabel": "color",
      "colorTextDropdownHeader": "color",
      "colorTextDropdownItemDefault": "color",
      "colorTextDropdownItemDimmed": "color",
      "colorTextDropdownItemDisabled": "color",
      "colorTextDropdownItemFilterMatch": "color",
      "colorTextDropdownItemHighlighted": "color",
      "colorTextDropdownItemSecondary": "color",
      "colorTextDropdownItemSecondaryHover": "color",
      "colorTextEmpty": "color",
      "colorTextExpandableSectionDefault": "color",
      "colorTextExpandableSectionHover": "color",
      "colorTextExpandableSectionNavigationIconDefault": "color",
      "colorTextFormDefault": "color",
      "colorTextFormLabel": "color",
      "colorTextFormSecondary": "color",
      "colorTextGroupLabel": "color",
      "colorTextHeadingDefault": "color",
      "colorTextHeadingSecondary": "color",
      "colorTextHomeHeaderDefault": "color",
      "colorTextHomeHeaderSecondary": "color",
      "colorTextIconCaret": "color",
      "colorTextIconSubtle": "color",
      "colorTextInputDisabled": "color",
      "colorTextInputPlaceholder": "color",
      "colorTextInputPlaceholderDisabled": "color",
      "colorTextInteractiveActive": "color",
      "colorTextInteractiveDefault": "color",
      "colorTextInteractiveDisabled": "color",
      "colorTextInteractiveHover": "color",
      "colorTextInteractiveInvertedDefault": "color",
      "colorTextInteractiveInvertedHover": "color",
      "colorTextInverted": "color",
      "colorTextLabel": "color",
      "colorTextLayoutToggle": "color",
      "colorTextLayoutToggleSelected": "color",
      "colorTextLinkDefault": "color",
      "colorTextLinkHover": "color",
      "colorTextLinkInvertedHover": "color",
      "colorTextLinkButtonUnderline": "color",
      "colorTextLinkButtonUnderlineHover": "color",
      "colorTextLinkPrimaryUnderline": "color",
      "colorTextNotificationDefault": "color",
      "colorTextPaginationPageNumberActiveDisabled": "color",
      "colorTextPaginationPageNumberDefault": "color",
      "colorTextSegmentActive": "color",
      "colorTextSegmentDefault": "color",
      "colorTextSegmentHover": "color",
      "colorTextLayoutPanelTriggerHover": "color",
      "colorTextLayoutPanelTriggerActive": "color",
      "colorTextSmall": "color",
      "colorTextStatusError": "color",
      "colorTextStatusInactive": "color",
      "colorTextStatusInfo": "color",
      "colorTextStatusSuccess": "color",
      "colorTextStatusWarning": "color",
      "colorTextTopNavigationTitle": "color",
      "colorBoardPlaceholderActive": "color",
      "colorBoardPlaceholderHover": "color",
      "colorDragPlaceholderActive": "color",
      "colorDragPlaceholderHover": "color",
      "colorDropzoneBackgroundActive": "color",
      "colorDropzoneBackgroundHover": "color",
      "colorDropzoneTextActive": "color",
      "colorDropzoneTextHover": "color",
      "motionDurationExtraFast": "motion",
      "motionDurationExtraSlow": "motion",
      "motionDurationFast": "motion",
      "motionDurationModerate": "motion",
      "motionDurationRefreshOnlyAmbient": "motion",
      "motionDurationRefreshOnlyFast": "motion",
      "motionDurationRefreshOnlyMedium": "motion",
      "motionDurationRefreshOnlySlow": "motion",
      "motionDurationRotate180": "motion",
      "motionDurationRotate90": "motion",
      "motionDurationShowPaced": "motion",
      "motionDurationShowQuick": "motion",
      "motionDurationSlow": "motion",
      "motionDurationTransitionQuick": "motion",
      "motionDurationTransitionShowPaced": "motion",
      "motionDurationTransitionShowQuick": "motion",
      "motionEasingEaseOutQuart": "motion",
      "motionEasingRefreshOnlyA": "motion",
      "motionEasingRefreshOnlyB": "motion",
      "motionEasingRefreshOnlyC": "motion",
      "motionEasingRefreshOnlyD": "motion",
      "motionEasingRotate180": "motion",
      "motionEasingRotate90": "motion",
      "motionEasingShowPaced": "motion",
      "motionEasingShowQuick": "motion",
      "motionEasingTransitionQuick": "motion",
      "motionEasingTransitionShowPaced": "motion",
      "motionEasingTransitionShowQuick": "motion",
      "motionEasingResponsive": "motion",
      "motionEasingSticky": "motion",
      "motionEasingExpressive": "motion",
      "motionDurationResponsive": "motion",
      "motionDurationExpressive": "motion",
      "motionDurationComplex": "motion",
      "motionKeyframesFadeIn": "motion",
      "motionKeyframesFadeOut": "motion",
      "motionKeyframesStatusIconError": "motion",
      "motionKeyframesScalePopup": "motion",
      "sizeCalendarGridWidth": "density",
      "sizeControl": "density",
      "sizeIconBig": "density",
      "sizeIconLarge": "density",
      "sizeIconMedium": "density",
      "sizeIconNormal": "density",
      "sizeTableSelectionHorizontal": "density",
      "sizeVerticalInput": "density",
      "sizeVerticalPanelIconOffset": "density",
      "spaceAlertActionLeft": "density",
      "spaceAlertHorizontal": "density",
      "spaceAlertMessageRight": "density",
      "spaceAlertVertical": "density",
      "spaceButtonFocusOutlineGutter": "density",
      "spaceButtonIconFocusOutlineGutterVertical": "density",
      "spaceButtonIconOnlyHorizontal": "density",
      "spaceButtonInlineIconFocusOutlineGutter": "density",
      "spaceButtonModalDismissVertical": "density",
      "spaceCalendarGridFocusOutlineGutter": "density",
      "spaceCalendarGridSelectedFocusOutlineGutter": "density",
      "spaceCardHorizontal": "density",
      "spaceCodeEditorStatusFocusOutlineGutter": "density",
      "spaceContainerContentTop": "density",
      "spaceContainerHeaderVertical": "density",
      "spaceContainerHorizontal": "density",
      "spaceContentHeaderPaddingBottom": "density",
      "spaceDarkHeaderOverlapDistance": "density",
      "spaceExpandableSectionIconOffsetTop": "density",
      "spaceFieldHorizontal": "density",
      "spaceFieldIconOffset": "density",
      "spaceFilteringTokenDismissButtonFocusOutlineGutter": "density",
      "spaceFilteringTokenOperationSelectFocusOutlineGutter": "density",
      "spaceFlashbarActionLeft": "density",
      "spaceFlashbarDismissRight": "density",
      "spaceFlashbarHorizontal": "density",
      "spaceGridGutter": "density",
      "spaceLayoutContentBottom": "density",
      "spaceLayoutToggleDiameter": "density",
      "spaceLayoutTogglePadding": "density",
      "spaceModalContentBottom": "density",
      "spaceModalHorizontal": "density",
      "spacePanelNavLeft": "density",
      "spacePanelSideLeft": "density",
      "spacePanelSideRight": "density",
      "spacePanelSplitTop": "density",
      "spaceSegmentedControlFocusOutlineGutter": "density",
      "spaceTableHeaderFocusOutlineGutter": "density",
      "spaceTabsContentTop": "density",
      "spaceTableHorizontal": "density",
      "spaceTableHeaderHorizontal": "density",
      "spaceTableContentBottom": "density",
      "spaceTableContentTop": "density",
      "spaceTableEmbeddedContentBottom": "density",
      "spaceTableEmbeddedHeaderTop": "density",
      "spaceTableFooterHorizontal": "density",
      "spaceTabsFocusOutlineGutter": "density",
      "spaceTextGridVertical": "density",
      "spaceScaled2xNone": "density",
      "spaceScaled2xXxxs": "density",
      "spaceScaled2xXxs": "density",
      "spaceScaled2xXs": "density",
      "spaceScaled2xS": "density",
      "spaceScaled2xM": "density",
      "spaceScaled2xL": "density",
      "spaceScaled2xXl": "density",
      "spaceScaled2xXxl": "density",
      "spaceScaled2xXxxl": "density",
      "spaceScaledNone": "density",
      "spaceScaledXxxs": "density",
      "spaceScaledXxs": "density",
      "spaceScaledXs": "density",
      "spaceScaledS": "density",
      "spaceScaledM": "density",
      "spaceScaledL": "density",
      "spaceScaledXl": "density",
      "spaceScaledXxl": "density",
      "spaceScaledXxxl": "density",
      "spaceStaticXxxs": "density",
      "spaceStaticXxs": "density",
      "spaceStaticXs": "density",
      "spaceStaticS": "density",
      "spaceStaticM": "density",
      "spaceStaticL": "density",
      "spaceStaticXl": "density",
      "spaceStaticXxl": "density",
      "spaceStaticXxxl": "density",
      "spaceNone": "density",
      "spaceXxxs": "density",
      "spaceXxs": "density",
      "spaceXs": "density",
      "spaceS": "density",
      "spaceM": "density",
      "spaceL": "density",
      "spaceXl": "density",
      "spaceXxl": "density",
      "spaceXxxl": "density",
      "shadowContainer": "color",
      "shadowContainerStacked": "color",
      "shadowContainerActive": "color",
      "shadowDropdown": "color",
      "shadowDropup": "color",
      "shadowFlashCollapsed": "color",
      "shadowFlashSticky": "color",
      "shadowModal": "color",
      "shadowPanel": "color",
      "shadowPanelToggle": "color",
      "shadowPopover": "color",
      "shadowSplitBottom": "color",
      "shadowSplitSide": "color",
      "shadowSticky": "color",
      "shadowStickyEmbedded": "color",
      "shadowStickyColumnFirst": "color",
      "shadowStickyColumnLast": "color"
    }
  },
  "secondary": [],
  "themeable": [
    "colorChartsStatusCritical",
    "colorChartsStatusHigh",
    "colorChartsStatusMedium",
    "colorChartsStatusLow",
    "colorChartsStatusPositive",
    "colorChartsStatusInfo",
    "colorChartsStatusNeutral",
    "colorChartsThresholdNegative",
    "colorChartsThresholdPositive",
    "colorChartsThresholdInfo",
    "colorChartsThresholdNeutral",
    "colorChartsPaletteCategorical1",
    "colorChartsPaletteCategorical2",
    "colorChartsPaletteCategorical3",
    "colorChartsPaletteCategorical4",
    "colorChartsPaletteCategorical5",
    "colorChartsPaletteCategorical6",
    "colorChartsPaletteCategorical7",
    "colorChartsPaletteCategorical8",
    "colorChartsPaletteCategorical9",
    "colorChartsPaletteCategorical10",
    "colorChartsPaletteCategorical11",
    "colorChartsPaletteCategorical12",
    "colorChartsPaletteCategorical13",
    "colorChartsPaletteCategorical14",
    "colorChartsPaletteCategorical15",
    "colorChartsPaletteCategorical16",
    "colorChartsPaletteCategorical17",
    "colorChartsPaletteCategorical18",
    "colorChartsPaletteCategorical19",
    "colorChartsPaletteCategorical20",
    "colorChartsPaletteCategorical21",
    "colorChartsPaletteCategorical22",
    "colorChartsPaletteCategorical23",
    "colorChartsPaletteCategorical24",
    "colorChartsPaletteCategorical25",
    "colorChartsPaletteCategorical26",
    "colorChartsPaletteCategorical27",
    "colorChartsPaletteCategorical28",
    "colorChartsPaletteCategorical29",
    "colorChartsPaletteCategorical30",
    "colorChartsPaletteCategorical31",
    "colorChartsPaletteCategorical32",
    "colorChartsPaletteCategorical33",
    "colorChartsPaletteCategorical34",
    "colorChartsPaletteCategorical35",
    "colorChartsPaletteCategorical36",
    "colorChartsPaletteCategorical37",
    "colorChartsPaletteCategorical38",
    "colorChartsPaletteCategorical39",
    "colorChartsPaletteCategorical40",
    "colorChartsPaletteCategorical41",
    "colorChartsPaletteCategorical42",
    "colorChartsPaletteCategorical43",
    "colorChartsPaletteCategorical44",
    "colorChartsPaletteCategorical45",
    "colorChartsPaletteCategorical46",
    "colorChartsPaletteCategorical47",
    "colorChartsPaletteCategorical48",
    "colorChartsPaletteCategorical49",
    "colorChartsPaletteCategorical50",
    "colorBackgroundButtonPrimaryActive",
    "colorBackgroundButtonPrimaryDefault",
    "colorBackgroundButtonPrimaryDisabled",
    "colorBackgroundButtonPrimaryHover",
    "colorBackgroundCellShaded",
    "colorBackgroundContainerContent",
    "colorBackgroundContainerHeader",
    "colorBackgroundControlChecked",
    "colorBackgroundControlDefault",
    "colorBackgroundControlDisabled",
    "colorBackgroundDropdownItemDefault",
    "colorBackgroundDropdownItemFilterMatch",
    "colorBackgroundDropdownItemHover",
    "colorBackgroundHomeHeader",
    "colorBackgroundInputDefault",
    "colorBackgroundInputDisabled",
    "colorBackgroundItemSelected",
    "colorBackgroundLayoutMain",
    "colorBackgroundNotificationBlue",
    "colorBackgroundNotificationGreen",
    "colorBackgroundNotificationRed",
    "colorBackgroundStatusError",
    "colorBackgroundStatusInfo",
    "colorBackgroundStatusSuccess",
    "colorBackgroundStatusWarning",
    "colorBackgroundToggleCheckedDisabled",
    "colorBorderButtonNormalDefault",
    "colorBorderButtonNormalDisabled",
    "colorBorderButtonNormalHover",
    "colorBorderButtonPrimaryDisabled",
    "colorBorderContainerTop",
    "colorBorderControlDefault",
    "colorBorderDividerDefault",
    "colorBorderDropdownItemHover",
    "colorBorderInputDefault",
    "colorBorderItemFocused",
    "colorBorderItemSelected",
    "colorBorderStatusError",
    "colorBorderStatusInfo",
    "colorBorderStatusSuccess",
    "colorBorderStatusWarning",
    "colorForegroundControlDefault",
    "colorForegroundControlDisabled",
    "colorTextAccent",
    "colorTextBodyDefault",
    "colorTextBodySecondary",
    "colorTextButtonNormalActive",
    "colorTextButtonNormalDefault",
    "colorTextButtonNormalHover",
    "colorTextLinkButtonNormalDefault",
    "colorTextLinkButtonNormalHover",
    "colorTextLinkButtonNormalActive",
    "colorTextButtonPrimaryActive",
    "colorTextButtonPrimaryDefault",
    "colorTextButtonPrimaryHover",
    "colorTextCounter",
    "colorTextDropdownItemFilterMatch",
    "colorTextDropdownItemHighlighted",
    "colorTextEmpty",
    "colorTextFormDefault",
    "colorTextFormSecondary",
    "colorTextGroupLabel",
    "colorTextHeadingDefault",
    "colorTextHeadingSecondary",
    "colorTextHomeHeaderDefault",
    "colorTextHomeHeaderSecondary",
    "colorTextInputDisabled",
    "colorTextInputPlaceholder",
    "colorTextInteractiveDefault",
    "colorTextInteractiveDisabled",
    "colorTextInteractiveHover",
    "colorTextInteractiveInvertedDefault",
    "colorTextInteractiveInvertedHover",
    "colorTextLabel",
    "colorTextLinkDefault",
    "colorTextLinkHover",
    "colorTextNotificationDefault",
    "colorTextStatusError",
    "colorTextStatusInactive",
    "colorTextStatusInfo",
    "colorTextStatusSuccess",
    "colorTextStatusWarning",
    "fontFamilyBase",
    "fontFamilyMonospace",
    "borderRadiusAlert",
    "borderRadiusBadge",
    "borderRadiusButton",
    "borderRadiusCalendarDayFocusRing",
    "borderRadiusContainer",
    "borderRadiusControlCircularFocusRing",
    "borderRadiusControlDefaultFocusRing",
    "borderRadiusDropdown",
    "borderRadiusFlashbar",
    "borderRadiusItem",
    "borderRadiusInput",
    "borderRadiusPopover",
    "borderRadiusTabsFocusRing",
    "borderRadiusTiles",
    "borderRadiusToken",
    "borderRadiusTutorialPanelItem"
  ],
  "exposed": [
    "colorChartsRed300",
    "colorChartsRed400",
    "colorChartsRed500",
    "colorChartsRed600",
    "colorChartsRed700",
    "colorChartsRed800",
    "colorChartsRed900",
    "colorChartsRed1000",
    "colorChartsRed1100",
    "colorChartsRed1200",
    "colorChartsOrange300",
    "colorChartsOrange400",
    "colorChartsOrange500",
    "colorChartsOrange600",
    "colorChartsOrange700",
    "colorChartsOrange800",
    "colorChartsOrange900",
    "colorChartsOrange1000",
    "colorChartsOrange1100",
    "colorChartsOrange1200",
    "colorChartsYellow300",
    "colorChartsYellow400",
    "colorChartsYellow500",
    "colorChartsYellow600",
    "colorChartsYellow700",
    "colorChartsYellow800",
    "colorChartsYellow900",
    "colorChartsYellow1000",
    "colorChartsYellow1100",
    "colorChartsYellow1200",
    "colorChartsGreen300",
    "colorChartsGreen400",
    "colorChartsGreen500",
    "colorChartsGreen600",
    "colorChartsGreen700",
    "colorChartsGreen800",
    "colorChartsGreen900",
    "colorChartsGreen1000",
    "colorChartsGreen1100",
    "colorChartsGreen1200",
    "colorChartsTeal300",
    "colorChartsTeal400",
    "colorChartsTeal500",
    "colorChartsTeal600",
    "colorChartsTeal700",
    "colorChartsTeal800",
    "colorChartsTeal900",
    "colorChartsTeal1000",
    "colorChartsTeal1100",
    "colorChartsTeal1200",
    "colorChartsBlue1300",
    "colorChartsBlue1400",
    "colorChartsBlue1500",
    "colorChartsBlue1600",
    "colorChartsBlue1700",
    "colorChartsBlue1800",
    "colorChartsBlue1900",
    "colorChartsBlue11000",
    "colorChartsBlue11100",
    "colorChartsBlue11200",
    "colorChartsBlue2300",
    "colorChartsBlue2400",
    "colorChartsBlue2500",
    "colorChartsBlue2600",
    "colorChartsBlue2700",
    "colorChartsBlue2800",
    "colorChartsBlue2900",
    "colorChartsBlue21000",
    "colorChartsBlue21100",
    "colorChartsBlue21200",
    "colorChartsPurple300",
    "colorChartsPurple400",
    "colorChartsPurple500",
    "colorChartsPurple600",
    "colorChartsPurple700",
    "colorChartsPurple800",
    "colorChartsPurple900",
    "colorChartsPurple1000",
    "colorChartsPurple1100",
    "colorChartsPurple1200",
    "colorChartsPink300",
    "colorChartsPink400",
    "colorChartsPink500",
    "colorChartsPink600",
    "colorChartsPink700",
    "colorChartsPink800",
    "colorChartsPink900",
    "colorChartsPink1000",
    "colorChartsPink1100",
    "colorChartsPink1200",
    "colorChartsStatusCritical",
    "colorChartsStatusHigh",
    "colorChartsStatusMedium",
    "colorChartsStatusLow",
    "colorChartsStatusPositive",
    "colorChartsStatusInfo",
    "colorChartsStatusNeutral",
    "colorChartsThresholdNegative",
    "colorChartsThresholdPositive",
    "colorChartsThresholdInfo",
    "colorChartsThresholdNeutral",
    "colorChartsLineGrid",
    "colorChartsLineTick",
    "colorChartsLineAxis",
    "colorChartsPaletteCategorical1",
    "colorChartsPaletteCategorical2",
    "colorChartsPaletteCategorical3",
    "colorChartsPaletteCategorical4",
    "colorChartsPaletteCategorical5",
    "colorChartsPaletteCategorical6",
    "colorChartsPaletteCategorical7",
    "colorChartsPaletteCategorical8",
    "colorChartsPaletteCategorical9",
    "colorChartsPaletteCategorical10",
    "colorChartsPaletteCategorical11",
    "colorChartsPaletteCategorical12",
    "colorChartsPaletteCategorical13",
    "colorChartsPaletteCategorical14",
    "colorChartsPaletteCategorical15",
    "colorChartsPaletteCategorical16",
    "colorChartsPaletteCategorical17",
    "colorChartsPaletteCategorical18",
    "colorChartsPaletteCategorical19",
    "colorChartsPaletteCategorical20",
    "colorChartsPaletteCategorical21",
    "colorChartsPaletteCategorical22",
    "colorChartsPaletteCategorical23",
    "colorChartsPaletteCategorical24",
    "colorChartsPaletteCategorical25",
    "colorChartsPaletteCategorical26",
    "colorChartsPaletteCategorical27",
    "colorChartsPaletteCategorical28",
    "colorChartsPaletteCategorical29",
    "colorChartsPaletteCategorical30",
    "colorChartsPaletteCategorical31",
    "colorChartsPaletteCategorical32",
    "colorChartsPaletteCategorical33",
    "colorChartsPaletteCategorical34",
    "colorChartsPaletteCategorical35",
    "colorChartsPaletteCategorical36",
    "colorChartsPaletteCategorical37",
    "colorChartsPaletteCategorical38",
    "colorChartsPaletteCategorical39",
    "colorChartsPaletteCategorical40",
    "colorChartsPaletteCategorical41",
    "colorChartsPaletteCategorical42",
    "colorChartsPaletteCategorical43",
    "colorChartsPaletteCategorical44",
    "colorChartsPaletteCategorical45",
    "colorChartsPaletteCategorical46",
    "colorChartsPaletteCategorical47",
    "colorChartsPaletteCategorical48",
    "colorChartsPaletteCategorical49",
    "colorChartsPaletteCategorical50",
    "colorBackgroundButtonPrimaryActive",
    "colorBackgroundButtonPrimaryDefault",
    "colorBackgroundButtonPrimaryDisabled",
    "colorBackgroundButtonPrimaryHover",
    "colorBackgroundCellShaded",
    "colorBackgroundContainerContent",
    "colorBackgroundContainerHeader",
    "colorBackgroundControlChecked",
    "colorBackgroundControlDefault",
    "colorBackgroundControlDisabled",
    "colorBackgroundDropdownItemDefault",
    "colorBackgroundDropdownItemFilterMatch",
    "colorBackgroundDropdownItemHover",
    "colorBackgroundHomeHeader",
    "colorBackgroundInputDefault",
    "colorBackgroundInputDisabled",
    "colorBackgroundItemSelected",
    "colorBackgroundLayoutMain",
    "colorBackgroundNotificationBlue",
    "colorBackgroundNotificationGreen",
    "colorBackgroundNotificationRed",
    "colorBackgroundStatusError",
    "colorBackgroundStatusInfo",
    "colorBackgroundStatusSuccess",
    "colorBackgroundStatusWarning",
    "colorBackgroundToggleCheckedDisabled",
    "colorBorderButtonNormalDefault",
    "colorBorderButtonNormalDisabled",
    "colorBorderButtonNormalHover",
    "colorBorderButtonPrimaryDisabled",
    "colorBorderContainerTop",
    "colorBorderControlDefault",
    "colorBorderDividerDefault",
    "colorBorderDropdownItemHover",
    "colorBorderInputDefault",
    "colorBorderItemFocused",
    "colorBorderItemSelected",
    "colorBorderStatusError",
    "colorBorderStatusInfo",
    "colorBorderStatusSuccess",
    "colorBorderStatusWarning",
    "colorForegroundControlDefault",
    "colorForegroundControlDisabled",
    "colorTextAccent",
    "colorTextBodyDefault",
    "colorTextBodySecondary",
    "colorTextButtonNormalActive",
    "colorTextButtonNormalDefault",
    "colorTextButtonNormalHover",
    "colorTextButtonPrimaryActive",
    "colorTextButtonPrimaryDefault",
    "colorTextButtonPrimaryHover",
    "colorTextCounter",
    "colorTextDropdownItemFilterMatch",
    "colorTextDropdownItemHighlighted",
    "colorTextEmpty",
    "colorTextFormDefault",
    "colorTextFormSecondary",
    "colorTextGroupLabel",
    "colorTextHeadingDefault",
    "colorTextHeadingSecondary",
    "colorTextHomeHeaderDefault",
    "colorTextHomeHeaderSecondary",
    "colorTextInputDisabled",
    "colorTextInputPlaceholder",
    "colorTextInteractiveDefault",
    "colorTextInteractiveDisabled",
    "colorTextInteractiveHover",
    "colorTextInteractiveInvertedDefault",
    "colorTextInteractiveInvertedHover",
    "colorTextLabel",
    "colorTextLinkDefault",
    "colorTextLinkHover",
    "colorTextNotificationDefault",
    "colorTextStatusError",
    "colorTextStatusInactive",
    "colorTextStatusInfo",
    "colorTextStatusSuccess",
    "colorTextStatusWarning",
    "colorBoardPlaceholderActive",
    "colorBoardPlaceholderHover",
    "colorDragPlaceholderActive",
    "colorDragPlaceholderHover",
    "fontFamilyBase",
    "fontFamilyMonospace",
    "borderRadiusAlert",
    "borderRadiusBadge",
    "borderRadiusButton",
    "borderRadiusCalendarDayFocusRing",
    "borderRadiusContainer",
    "borderRadiusControlCircularFocusRing",
    "borderRadiusControlDefaultFocusRing",
    "borderRadiusDropdown",
    "borderRadiusFlashbar",
    "borderRadiusItem",
    "borderRadiusInput",
    "borderRadiusPopover",
    "borderRadiusTabsFocusRing",
    "borderRadiusTiles",
    "borderRadiusToken",
    "borderRadiusTutorialPanelItem",
    "motionEasingResponsive",
    "motionEasingSticky",
    "motionEasingExpressive",
    "motionDurationResponsive",
    "motionDurationExpressive",
    "motionDurationComplex",
    "motionKeyframesFadeIn",
    "motionKeyframesFadeOut",
    "motionKeyframesStatusIconError",
    "motionKeyframesScalePopup",
    "spaceContainerHorizontal",
    "spaceFieldHorizontal",
    "spaceScaledXxxs",
    "spaceScaledXxs",
    "spaceScaledXs",
    "spaceScaledS",
    "spaceScaledM",
    "spaceScaledL",
    "spaceScaledXl",
    "spaceScaledXxl",
    "spaceScaledXxxl",
    "spaceStaticXxxs",
    "spaceStaticXxs",
    "spaceStaticXs",
    "spaceStaticS",
    "spaceStaticM",
    "spaceStaticL",
    "spaceStaticXl",
    "spaceStaticXxl",
    "spaceStaticXxxl",
    "shadowContainerActive"
  ],
  "variablesMap": {
    "colorAmazonOrange": "color-amazon-orange",
    "colorAwsSquidInk": "color-aws-squid-ink",
    "colorBlack": "color-black",
    "colorBlue100": "color-blue-100",
    "colorBlue200": "color-blue-200",
    "colorBlue300": "color-blue-300",
    "colorBlue400": "color-blue-400",
    "colorBlue500": "color-blue-500",
    "colorBlue600": "color-blue-600",
    "colorBlue700": "color-blue-700",
    "colorBlue800": "color-blue-800",
    "colorBlue900": "color-blue-900",
    "colorBlueOpaque": "color-blue-opaque",
    "colorGreen100": "color-green-100",
    "colorGreen500": "color-green-500",
    "colorGreen600": "color-green-600",
    "colorGreen700": "color-green-700",
    "colorGreen900": "color-green-900",
    "colorGrey100": "color-grey-100",
    "colorGrey125": "color-grey-125",
    "colorGrey150": "color-grey-150",
    "colorGrey200": "color-grey-200",
    "colorGrey300": "color-grey-300",
    "colorGrey400": "color-grey-400",
    "colorGrey450": "color-grey-450",
    "colorGrey500": "color-grey-500",
    "colorGrey550": "color-grey-550",
    "colorGrey600": "color-grey-600",
    "colorGrey650": "color-grey-650",
    "colorGrey700": "color-grey-700",
    "colorGrey750": "color-grey-750",
    "colorGrey800": "color-grey-800",
    "colorGrey900": "color-grey-900",
    "colorGrey950": "color-grey-950",
    "colorOrange100": "color-orange-100",
    "colorOrange500": "color-orange-500",
    "colorOrange600": "color-orange-600",
    "colorOrange700": "color-orange-700",
    "colorRed100": "color-red-100",
    "colorRed500": "color-red-500",
    "colorRed600": "color-red-600",
    "colorRed700": "color-red-700",
    "colorRed900": "color-red-900",
    "colorTransparent": "color-transparent",
    "colorWhite": "color-white",
    "colorChartsRed300": "color-charts-red-300",
    "colorChartsRed400": "color-charts-red-400",
    "colorChartsRed500": "color-charts-red-500",
    "colorChartsRed600": "color-charts-red-600",
    "colorChartsRed700": "color-charts-red-700",
    "colorChartsRed800": "color-charts-red-800",
    "colorChartsRed900": "color-charts-red-900",
    "colorChartsRed1000": "color-charts-red-1000",
    "colorChartsRed1100": "color-charts-red-1100",
    "colorChartsRed1200": "color-charts-red-1200",
    "colorChartsOrange300": "color-charts-orange-300",
    "colorChartsOrange400": "color-charts-orange-400",
    "colorChartsOrange500": "color-charts-orange-500",
    "colorChartsOrange600": "color-charts-orange-600",
    "colorChartsOrange700": "color-charts-orange-700",
    "colorChartsOrange800": "color-charts-orange-800",
    "colorChartsOrange900": "color-charts-orange-900",
    "colorChartsOrange1000": "color-charts-orange-1000",
    "colorChartsOrange1100": "color-charts-orange-1100",
    "colorChartsOrange1200": "color-charts-orange-1200",
    "colorChartsYellow300": "color-charts-yellow-300",
    "colorChartsYellow400": "color-charts-yellow-400",
    "colorChartsYellow500": "color-charts-yellow-500",
    "colorChartsYellow600": "color-charts-yellow-600",
    "colorChartsYellow700": "color-charts-yellow-700",
    "colorChartsYellow800": "color-charts-yellow-800",
    "colorChartsYellow900": "color-charts-yellow-900",
    "colorChartsYellow1000": "color-charts-yellow-1000",
    "colorChartsYellow1100": "color-charts-yellow-1100",
    "colorChartsYellow1200": "color-charts-yellow-1200",
    "colorChartsGreen300": "color-charts-green-300",
    "colorChartsGreen400": "color-charts-green-400",
    "colorChartsGreen500": "color-charts-green-500",
    "colorChartsGreen600": "color-charts-green-600",
    "colorChartsGreen700": "color-charts-green-700",
    "colorChartsGreen800": "color-charts-green-800",
    "colorChartsGreen900": "color-charts-green-900",
    "colorChartsGreen1000": "color-charts-green-1000",
    "colorChartsGreen1100": "color-charts-green-1100",
    "colorChartsGreen1200": "color-charts-green-1200",
    "colorChartsTeal300": "color-charts-teal-300",
    "colorChartsTeal400": "color-charts-teal-400",
    "colorChartsTeal500": "color-charts-teal-500",
    "colorChartsTeal600": "color-charts-teal-600",
    "colorChartsTeal700": "color-charts-teal-700",
    "colorChartsTeal800": "color-charts-teal-800",
    "colorChartsTeal900": "color-charts-teal-900",
    "colorChartsTeal1000": "color-charts-teal-1000",
    "colorChartsTeal1100": "color-charts-teal-1100",
    "colorChartsTeal1200": "color-charts-teal-1200",
    "colorChartsBlue1300": "color-charts-blue-1-300",
    "colorChartsBlue1400": "color-charts-blue-1-400",
    "colorChartsBlue1500": "color-charts-blue-1-500",
    "colorChartsBlue1600": "color-charts-blue-1-600",
    "colorChartsBlue1700": "color-charts-blue-1-700",
    "colorChartsBlue1800": "color-charts-blue-1-800",
    "colorChartsBlue1900": "color-charts-blue-1-900",
    "colorChartsBlue11000": "color-charts-blue-1-1000",
    "colorChartsBlue11100": "color-charts-blue-1-1100",
    "colorChartsBlue11200": "color-charts-blue-1-1200",
    "colorChartsBlue2300": "color-charts-blue-2-300",
    "colorChartsBlue2400": "color-charts-blue-2-400",
    "colorChartsBlue2500": "color-charts-blue-2-500",
    "colorChartsBlue2600": "color-charts-blue-2-600",
    "colorChartsBlue2700": "color-charts-blue-2-700",
    "colorChartsBlue2800": "color-charts-blue-2-800",
    "colorChartsBlue2900": "color-charts-blue-2-900",
    "colorChartsBlue21000": "color-charts-blue-2-1000",
    "colorChartsBlue21100": "color-charts-blue-2-1100",
    "colorChartsBlue21200": "color-charts-blue-2-1200",
    "colorChartsPurple300": "color-charts-purple-300",
    "colorChartsPurple400": "color-charts-purple-400",
    "colorChartsPurple500": "color-charts-purple-500",
    "colorChartsPurple600": "color-charts-purple-600",
    "colorChartsPurple700": "color-charts-purple-700",
    "colorChartsPurple800": "color-charts-purple-800",
    "colorChartsPurple900": "color-charts-purple-900",
    "colorChartsPurple1000": "color-charts-purple-1000",
    "colorChartsPurple1100": "color-charts-purple-1100",
    "colorChartsPurple1200": "color-charts-purple-1200",
    "colorChartsPink300": "color-charts-pink-300",
    "colorChartsPink400": "color-charts-pink-400",
    "colorChartsPink500": "color-charts-pink-500",
    "colorChartsPink600": "color-charts-pink-600",
    "colorChartsPink700": "color-charts-pink-700",
    "colorChartsPink800": "color-charts-pink-800",
    "colorChartsPink900": "color-charts-pink-900",
    "colorChartsPink1000": "color-charts-pink-1000",
    "colorChartsPink1100": "color-charts-pink-1100",
    "colorChartsPink1200": "color-charts-pink-1200",
    "colorChartsStatusCritical": "color-charts-status-critical",
    "colorChartsStatusHigh": "color-charts-status-high",
    "colorChartsStatusMedium": "color-charts-status-medium",
    "colorChartsStatusLow": "color-charts-status-low",
    "colorChartsStatusPositive": "color-charts-status-positive",
    "colorChartsStatusInfo": "color-charts-status-info",
    "colorChartsStatusNeutral": "color-charts-status-neutral",
    "colorChartsThresholdNegative": "color-charts-threshold-negative",
    "colorChartsThresholdPositive": "color-charts-threshold-positive",
    "colorChartsThresholdInfo": "color-charts-threshold-info",
    "colorChartsThresholdNeutral": "color-charts-threshold-neutral",
    "colorChartsLineGrid": "color-charts-line-grid",
    "colorChartsLineTick": "color-charts-line-tick",
    "colorChartsLineAxis": "color-charts-line-axis",
    "colorChartsPaletteCategorical1": "color-charts-palette-categorical-1",
    "colorChartsPaletteCategorical2": "color-charts-palette-categorical-2",
    "colorChartsPaletteCategorical3": "color-charts-palette-categorical-3",
    "colorChartsPaletteCategorical4": "color-charts-palette-categorical-4",
    "colorChartsPaletteCategorical5": "color-charts-palette-categorical-5",
    "colorChartsPaletteCategorical6": "color-charts-palette-categorical-6",
    "colorChartsPaletteCategorical7": "color-charts-palette-categorical-7",
    "colorChartsPaletteCategorical8": "color-charts-palette-categorical-8",
    "colorChartsPaletteCategorical9": "color-charts-palette-categorical-9",
    "colorChartsPaletteCategorical10": "color-charts-palette-categorical-10",
    "colorChartsPaletteCategorical11": "color-charts-palette-categorical-11",
    "colorChartsPaletteCategorical12": "color-charts-palette-categorical-12",
    "colorChartsPaletteCategorical13": "color-charts-palette-categorical-13",
    "colorChartsPaletteCategorical14": "color-charts-palette-categorical-14",
    "colorChartsPaletteCategorical15": "color-charts-palette-categorical-15",
    "colorChartsPaletteCategorical16": "color-charts-palette-categorical-16",
    "colorChartsPaletteCategorical17": "color-charts-palette-categorical-17",
    "colorChartsPaletteCategorical18": "color-charts-palette-categorical-18",
    "colorChartsPaletteCategorical19": "color-charts-palette-categorical-19",
    "colorChartsPaletteCategorical20": "color-charts-palette-categorical-20",
    "colorChartsPaletteCategorical21": "color-charts-palette-categorical-21",
    "colorChartsPaletteCategorical22": "color-charts-palette-categorical-22",
    "colorChartsPaletteCategorical23": "color-charts-palette-categorical-23",
    "colorChartsPaletteCategorical24": "color-charts-palette-categorical-24",
    "colorChartsPaletteCategorical25": "color-charts-palette-categorical-25",
    "colorChartsPaletteCategorical26": "color-charts-palette-categorical-26",
    "colorChartsPaletteCategorical27": "color-charts-palette-categorical-27",
    "colorChartsPaletteCategorical28": "color-charts-palette-categorical-28",
    "colorChartsPaletteCategorical29": "color-charts-palette-categorical-29",
    "colorChartsPaletteCategorical30": "color-charts-palette-categorical-30",
    "colorChartsPaletteCategorical31": "color-charts-palette-categorical-31",
    "colorChartsPaletteCategorical32": "color-charts-palette-categorical-32",
    "colorChartsPaletteCategorical33": "color-charts-palette-categorical-33",
    "colorChartsPaletteCategorical34": "color-charts-palette-categorical-34",
    "colorChartsPaletteCategorical35": "color-charts-palette-categorical-35",
    "colorChartsPaletteCategorical36": "color-charts-palette-categorical-36",
    "colorChartsPaletteCategorical37": "color-charts-palette-categorical-37",
    "colorChartsPaletteCategorical38": "color-charts-palette-categorical-38",
    "colorChartsPaletteCategorical39": "color-charts-palette-categorical-39",
    "colorChartsPaletteCategorical40": "color-charts-palette-categorical-40",
    "colorChartsPaletteCategorical41": "color-charts-palette-categorical-41",
    "colorChartsPaletteCategorical42": "color-charts-palette-categorical-42",
    "colorChartsPaletteCategorical43": "color-charts-palette-categorical-43",
    "colorChartsPaletteCategorical44": "color-charts-palette-categorical-44",
    "colorChartsPaletteCategorical45": "color-charts-palette-categorical-45",
    "colorChartsPaletteCategorical46": "color-charts-palette-categorical-46",
    "colorChartsPaletteCategorical47": "color-charts-palette-categorical-47",
    "colorChartsPaletteCategorical48": "color-charts-palette-categorical-48",
    "colorChartsPaletteCategorical49": "color-charts-palette-categorical-49",
    "colorChartsPaletteCategorical50": "color-charts-palette-categorical-50",
    "colorGreyOpaque25": "color-grey-opaque-25",
    "colorGreyOpaque40": "color-grey-opaque-40",
    "colorGreyOpaque50": "color-grey-opaque-50",
    "colorGreyOpaque70": "color-grey-opaque-70",
    "colorGreyOpaque80": "color-grey-opaque-80",
    "colorGreyOpaque90": "color-grey-opaque-90",
    "colorGreyTransparent": "color-grey-transparent",
    "colorGreyTransparentHeavy": "color-grey-transparent-heavy",
    "colorGreyTransparentLight": "color-grey-transparent-light",
    "colorBackgroundButtonLinkActive": "color-background-button-link-active",
    "colorBackgroundButtonLinkHover": "color-background-button-link-hover",
    "colorBackgroundButtonNormalActive": "color-background-button-normal-active",
    "colorBackgroundButtonNormalDefault": "color-background-button-normal-default",
    "colorBackgroundButtonNormalDisabled": "color-background-button-normal-disabled",
    "colorBackgroundButtonNormalHover": "color-background-button-normal-hover",
    "colorBackgroundButtonPrimaryActive": "color-background-button-primary-active",
    "colorBackgroundButtonPrimaryDefault": "color-background-button-primary-default",
    "colorBackgroundButtonPrimaryDisabled": "color-background-button-primary-disabled",
    "colorBackgroundButtonPrimaryHover": "color-background-button-primary-hover",
    "colorBackgroundCalendarToday": "color-background-calendar-today",
    "colorBackgroundCellShaded": "color-background-cell-shaded",
    "colorBackgroundCodeEditorGutterActiveLineDefault": "color-background-code-editor-gutter-active-line-default",
    "colorBackgroundCodeEditorGutterActiveLineError": "color-background-code-editor-gutter-active-line-error",
    "colorBackgroundCodeEditorGutterDefault": "color-background-code-editor-gutter-default",
    "colorBackgroundCodeEditorLoading": "color-background-code-editor-loading",
    "colorBackgroundCodeEditorPaneItemHover": "color-background-code-editor-pane-item-hover",
    "colorBackgroundCodeEditorStatusBar": "color-background-code-editor-status-bar",
    "colorBackgroundContainerContent": "color-background-container-content",
    "colorBackgroundContainerHeader": "color-background-container-header",
    "colorBackgroundControlChecked": "color-background-control-checked",
    "colorBackgroundControlDefault": "color-background-control-default",
    "colorBackgroundControlDisabled": "color-background-control-disabled",
    "colorBackgroundDropdownItemDefault": "color-background-dropdown-item-default",
    "colorBackgroundDropdownItemDimmed": "color-background-dropdown-item-dimmed",
    "colorBackgroundDropdownItemFilterMatch": "color-background-dropdown-item-filter-match",
    "colorBackgroundDropdownItemHover": "color-background-dropdown-item-hover",
    "colorBackgroundDropdownItemSelected": "color-background-dropdown-item-selected",
    "colorBackgroundHomeHeader": "color-background-home-header",
    "colorBackgroundInputDefault": "color-background-input-default",
    "colorBackgroundInputDisabled": "color-background-input-disabled",
    "colorBackgroundItemSelected": "color-background-item-selected",
    "colorBackgroundLayoutMain": "color-background-layout-main",
    "colorBackgroundLayoutMobilePanel": "color-background-layout-mobile-panel",
    "colorBackgroundLayoutPanelContent": "color-background-layout-panel-content",
    "colorBackgroundLayoutPanelHover": "color-background-layout-panel-hover",
    "colorBackgroundLayoutPanelTriggerActive": "color-background-layout-panel-trigger-active",
    "colorBackgroundLayoutToggleActive": "color-background-layout-toggle-active",
    "colorBackgroundLayoutToggleDefault": "color-background-layout-toggle-default",
    "colorBackgroundLayoutToggleHover": "color-background-layout-toggle-hover",
    "colorBackgroundLayoutToggleSelectedActive": "color-background-layout-toggle-selected-active",
    "colorBackgroundLayoutToggleSelectedDefault": "color-background-layout-toggle-selected-default",
    "colorBackgroundLayoutToggleSelectedHover": "color-background-layout-toggle-selected-hover",
    "colorBackgroundModalOverlay": "color-background-modal-overlay",
    "colorBackgroundNotificationBlue": "color-background-notification-blue",
    "colorBackgroundNotificationGreen": "color-background-notification-green",
    "colorBackgroundNotificationGrey": "color-background-notification-grey",
    "colorBackgroundNotificationRed": "color-background-notification-red",
    "colorBackgroundPopover": "color-background-popover",
    "colorBackgroundProgressBarContentDefault": "color-background-progress-bar-content-default",
    "colorBackgroundProgressBarContentInFlash": "color-background-progress-bar-content-in-flash",
    "colorBackgroundProgressBarLayoutDefault": "color-background-progress-bar-layout-default",
    "colorBackgroundProgressBarLayoutInFlash": "color-background-progress-bar-layout-in-flash",
    "colorBackgroundSegmentActive": "color-background-segment-active",
    "colorBackgroundSegmentDefault": "color-background-segment-default",
    "colorBackgroundSegmentDisabled": "color-background-segment-disabled",
    "colorBackgroundSegmentHover": "color-background-segment-hover",
    "colorBackgroundStatusError": "color-background-status-error",
    "colorBackgroundStatusInfo": "color-background-status-info",
    "colorBackgroundStatusSuccess": "color-background-status-success",
    "colorBackgroundStatusWarning": "color-background-status-warning",
    "colorBackgroundTableHeader": "color-background-table-header",
    "colorBackgroundTilesDisabled": "color-background-tiles-disabled",
    "colorBackgroundToggleCheckedDisabled": "color-background-toggle-checked-disabled",
    "colorBackgroundToggleDefault": "color-background-toggle-default",
    "colorBorderButtonNormalActive": "color-border-button-normal-active",
    "colorBorderButtonNormalDefault": "color-border-button-normal-default",
    "colorBorderButtonNormalDisabled": "color-border-button-normal-disabled",
    "colorBorderButtonNormalHover": "color-border-button-normal-hover",
    "colorBorderButtonPrimaryDisabled": "color-border-button-primary-disabled",
    "colorBorderCalendarGrid": "color-border-calendar-grid",
    "colorBorderCalendarGridSelectedFocusRing": "color-border-calendar-grid-selected-focus-ring",
    "colorBorderCodeEditorAceActiveLineLightTheme": "color-border-code-editor-ace-active-line-light-theme",
    "colorBorderCodeEditorAceActiveLineDarkTheme": "color-border-code-editor-ace-active-line-dark-theme",
    "colorBorderCodeEditorDefault": "color-border-code-editor-default",
    "colorBorderCodeEditorPaneItemHover": "color-border-code-editor-pane-item-hover",
    "colorBorderContainerDivider": "color-border-container-divider",
    "colorBorderContainerTop": "color-border-container-top",
    "colorBorderControlChecked": "color-border-control-checked",
    "colorBorderControlDefault": "color-border-control-default",
    "colorBorderControlDisabled": "color-border-control-disabled",
    "colorBorderDividerActive": "color-border-divider-active",
    "colorBorderDividerDefault": "color-border-divider-default",
    "colorBorderDividerPanelBottom": "color-border-divider-panel-bottom",
    "colorBorderDividerPanelSide": "color-border-divider-panel-side",
    "colorBorderDropdownContainer": "color-border-dropdown-container",
    "colorBorderDropdownGroup": "color-border-dropdown-group",
    "colorBorderDropdownItemDefault": "color-border-dropdown-item-default",
    "colorBorderDropdownItemHover": "color-border-dropdown-item-hover",
    "colorBorderDropdownItemDimmedHover": "color-border-dropdown-item-dimmed-hover",
    "colorBorderDropdownItemSelected": "color-border-dropdown-item-selected",
    "colorBorderDropdownItemTop": "color-border-dropdown-item-top",
    "colorBorderInputDefault": "color-border-input-default",
    "colorBorderInputDisabled": "color-border-input-disabled",
    "colorBorderItemFocused": "color-border-item-focused",
    "colorBorderItemPlaceholder": "color-border-item-placeholder",
    "colorBorderItemSelected": "color-border-item-selected",
    "colorBorderLayout": "color-border-layout",
    "colorBorderPopover": "color-border-popover",
    "colorBorderSegmentActive": "color-border-segment-active",
    "colorBorderSegmentDefault": "color-border-segment-default",
    "colorBorderSegmentDisabled": "color-border-segment-disabled",
    "colorBorderSegmentHover": "color-border-segment-hover",
    "colorBorderStatusError": "color-border-status-error",
    "colorBorderStatusInfo": "color-border-status-info",
    "colorBorderStatusSuccess": "color-border-status-success",
    "colorBorderStatusWarning": "color-border-status-warning",
    "colorBorderDividerInteractiveDefault": "color-border-divider-interactive-default",
    "colorBorderTabsDivider": "color-border-tabs-divider",
    "colorBorderTabsShadow": "color-border-tabs-shadow",
    "colorBorderTabsUnderline": "color-border-tabs-underline",
    "colorBorderTilesDisabled": "color-border-tiles-disabled",
    "colorBorderTutorial": "color-border-tutorial",
    "colorForegroundControlDefault": "color-foreground-control-default",
    "colorForegroundControlDisabled": "color-foreground-control-disabled",
    "colorShadowDefault": "color-shadow-default",
    "colorShadowLayoutPanelTrigger": "color-shadow-layout-panel-trigger",
    "colorShadowMedium": "color-shadow-medium",
    "colorShadowSide": "color-shadow-side",
    "colorStrokeCodeEditorResizeHandler": "color-stroke-code-editor-resize-handler",
    "colorStrokeCodeEditorGutterActiveLineDefault": "color-stroke-code-editor-gutter-active-line-default",
    "colorStrokeCodeEditorGutterActiveLineHover": "color-stroke-code-editor-gutter-active-line-hover",
    "colorTextAccent": "color-text-accent",
    "colorTextBodyDefault": "color-text-body-default",
    "colorTextBodySecondary": "color-text-body-secondary",
    "colorTextBreadcrumbCurrent": "color-text-breadcrumb-current",
    "colorTextBreadcrumbIcon": "color-text-breadcrumb-icon",
    "colorTextButtonInlineIconDefault": "color-text-button-inline-icon-default",
    "colorTextButtonInlineIconDisabled": "color-text-button-inline-icon-disabled",
    "colorTextButtonInlineIconHover": "color-text-button-inline-icon-hover",
    "colorTextButtonNormalActive": "color-text-button-normal-active",
    "colorTextButtonNormalDefault": "color-text-button-normal-default",
    "colorTextButtonNormalHover": "color-text-button-normal-hover",
    "colorTextLinkButtonNormalDefault": "color-text-link-button-normal-default",
    "colorTextLinkButtonNormalHover": "color-text-link-button-normal-hover",
    "colorTextLinkButtonNormalActive": "color-text-link-button-normal-active",
    "colorTextButtonPrimaryActive": "color-text-button-primary-active",
    "colorTextButtonPrimaryDefault": "color-text-button-primary-default",
    "colorTextButtonPrimaryHover": "color-text-button-primary-hover",
    "colorTextCalendarDayHover": "color-text-calendar-day-hover",
    "colorTextCalendarDaySelected": "color-text-calendar-day-selected",
    "colorTextCalendarMonth": "color-text-calendar-month",
    "colorTextCodeEditorGutterActiveLine": "color-text-code-editor-gutter-active-line",
    "colorTextCodeEditorGutterDefault": "color-text-code-editor-gutter-default",
    "colorTextCodeEditorStatusBarDisabled": "color-text-code-editor-status-bar-disabled",
    "colorTextCodeEditorTabButtonError": "color-text-code-editor-tab-button-error",
    "colorTextColumnHeader": "color-text-column-header",
    "colorTextColumnSortingIcon": "color-text-column-sorting-icon",
    "colorTextControlDisabled": "color-text-control-disabled",
    "colorTextCounter": "color-text-counter",
    "colorTextDisabled": "color-text-disabled",
    "colorTextDropdownFooter": "color-text-dropdown-footer",
    "colorTextDropdownGroupLabel": "color-text-dropdown-group-label",
    "colorTextDropdownHeader": "color-text-dropdown-header",
    "colorTextDropdownItemDefault": "color-text-dropdown-item-default",
    "colorTextDropdownItemDimmed": "color-text-dropdown-item-dimmed",
    "colorTextDropdownItemDisabled": "color-text-dropdown-item-disabled",
    "colorTextDropdownItemFilterMatch": "color-text-dropdown-item-filter-match",
    "colorTextDropdownItemHighlighted": "color-text-dropdown-item-highlighted",
    "colorTextDropdownItemSecondary": "color-text-dropdown-item-secondary",
    "colorTextDropdownItemSecondaryHover": "color-text-dropdown-item-secondary-hover",
    "colorTextEmpty": "color-text-empty",
    "colorTextExpandableSectionDefault": "color-text-expandable-section-default",
    "colorTextExpandableSectionHover": "color-text-expandable-section-hover",
    "colorTextExpandableSectionNavigationIconDefault": "color-text-expandable-section-navigation-icon-default",
    "colorTextFormDefault": "color-text-form-default",
    "colorTextFormLabel": "color-text-form-label",
    "colorTextFormSecondary": "color-text-form-secondary",
    "colorTextGroupLabel": "color-text-group-label",
    "colorTextHeadingDefault": "color-text-heading-default",
    "colorTextHeadingSecondary": "color-text-heading-secondary",
    "colorTextHomeHeaderDefault": "color-text-home-header-default",
    "colorTextHomeHeaderSecondary": "color-text-home-header-secondary",
    "colorTextIconCaret": "color-text-icon-caret",
    "colorTextIconSubtle": "color-text-icon-subtle",
    "colorTextInputDisabled": "color-text-input-disabled",
    "colorTextInputPlaceholder": "color-text-input-placeholder",
    "colorTextInputPlaceholderDisabled": "color-text-input-placeholder-disabled",
    "colorTextInteractiveActive": "color-text-interactive-active",
    "colorTextInteractiveDefault": "color-text-interactive-default",
    "colorTextInteractiveDisabled": "color-text-interactive-disabled",
    "colorTextInteractiveHover": "color-text-interactive-hover",
    "colorTextInteractiveInvertedDefault": "color-text-interactive-inverted-default",
    "colorTextInteractiveInvertedHover": "color-text-interactive-inverted-hover",
    "colorTextInverted": "color-text-inverted",
    "colorTextLabel": "color-text-label",
    "colorTextLayoutToggle": "color-text-layout-toggle",
    "colorTextLayoutToggleSelected": "color-text-layout-toggle-selected",
    "colorTextLinkDefault": "color-text-link-default",
    "colorTextLinkHover": "color-text-link-hover",
    "colorTextLinkInvertedHover": "color-text-link-inverted-hover",
    "colorTextLinkButtonUnderline": "color-text-link-button-underline",
    "colorTextLinkButtonUnderlineHover": "color-text-link-button-underline-hover",
    "colorTextLinkPrimaryUnderline": "color-text-link-primary-underline",
    "colorTextNotificationDefault": "color-text-notification-default",
    "colorTextPaginationPageNumberActiveDisabled": "color-text-pagination-page-number-active-disabled",
    "colorTextPaginationPageNumberDefault": "color-text-pagination-page-number-default",
    "colorTextSegmentActive": "color-text-segment-active",
    "colorTextSegmentDefault": "color-text-segment-default",
    "colorTextSegmentHover": "color-text-segment-hover",
    "colorTextLayoutPanelTriggerHover": "color-text-layout-panel-trigger-hover",
    "colorTextLayoutPanelTriggerActive": "color-text-layout-panel-trigger-active",
    "colorTextSmall": "color-text-small",
    "colorTextStatusError": "color-text-status-error",
    "colorTextStatusInactive": "color-text-status-inactive",
    "colorTextStatusInfo": "color-text-status-info",
    "colorTextStatusSuccess": "color-text-status-success",
    "colorTextStatusWarning": "color-text-status-warning",
    "colorTextTopNavigationTitle": "color-text-top-navigation-title",
    "colorBoardPlaceholderActive": "color-board-placeholder-active",
    "colorBoardPlaceholderHover": "color-board-placeholder-hover",
    "colorDragPlaceholderActive": "color-drag-placeholder-active",
    "colorDragPlaceholderHover": "color-drag-placeholder-hover",
    "colorDropzoneBackgroundActive": "color-dropzone-background-active",
    "colorDropzoneBackgroundHover": "color-dropzone-background-hover",
    "colorDropzoneTextActive": "color-dropzone-text-active",
    "colorDropzoneTextHover": "color-dropzone-text-hover",
    "fontBodyMLineHeight": "font-body-m-line-height",
    "fontBodyMSize": "font-body-m-size",
    "fontBodySLetterSpacing": "font-body-s-letter-spacing",
    "fontBodySLineHeight": "font-body-s-line-height",
    "fontBodySSize": "font-body-s-size",
    "fontButtonLetterSpacing": "font-button-letter-spacing",
    "fontButtonWeight": "font-button-weight",
    "fontChartDetailSize": "font-chart-detail-size",
    "fontDisplayLLetterSpacing": "font-display-l-letter-spacing",
    "fontDisplayLLineHeight": "font-display-l-line-height",
    "fontDisplayLSize": "font-display-l-size",
    "fontDisplayLabelWeight": "font-display-label-weight",
    "fontExpandableHeadingSize": "font-expandable-heading-size",
    "fontFamilyBase": "font-family-base",
    "fontFamilyMonospace": "font-family-monospace",
    "fontHeaderH2DescriptionLineHeight": "font-header-h2-description-line-height",
    "fontHeaderH2DescriptionSize": "font-header-h2-description-size",
    "fontHeadingLLetterSpacing": "font-heading-l-letter-spacing",
    "fontHeadingLLineHeight": "font-heading-l-line-height",
    "fontHeadingLSize": "font-heading-l-size",
    "fontHeadingLWeight": "font-heading-l-weight",
    "fontHeadingMLetterSpacing": "font-heading-m-letter-spacing",
    "fontHeadingMLineHeight": "font-heading-m-line-height",
    "fontHeadingMSize": "font-heading-m-size",
    "fontHeadingMWeight": "font-heading-m-weight",
    "fontHeadingSLetterSpacing": "font-heading-s-letter-spacing",
    "fontHeadingSLineHeight": "font-heading-s-line-height",
    "fontHeadingSSize": "font-heading-s-size",
    "fontHeadingSWeight": "font-heading-s-weight",
    "fontHeadingXlLetterSpacing": "font-heading-xl-letter-spacing",
    "fontHeadingXlLineHeight": "font-heading-xl-line-height",
    "fontHeadingXlSize": "font-heading-xl-size",
    "fontHeadingXlWeight": "font-heading-xl-weight",
    "fontHeadingXsLineHeight": "font-heading-xs-line-height",
    "fontHeadingXsSize": "font-heading-xs-size",
    "fontHeadingXsWeight": "font-heading-xs-weight",
    "fontBoxValueLargeWeight": "font-box-value-large-weight",
    "fontLinkButtonLetterSpacing": "font-link-button-letter-spacing",
    "fontLinkButtonWeight": "font-link-button-weight",
    "fontLinkPrimaryDecoration": "font-link-primary-decoration",
    "fontLinkPrimaryLetterSpacing": "font-link-primary-letter-spacing",
    "fontLinkPrimaryWeight": "font-link-primary-weight",
    "fontPanelHeaderLineHeight": "font-panel-header-line-height",
    "fontPanelHeaderSize": "font-panel-header-size",
    "fontSmoothingWebkit": "font-smoothing-webkit",
    "fontSmoothingMozOsx": "font-smoothing-moz-osx",
    "fontTabsDisabledWeight": "font-tabs-disabled-weight",
    "fontTabsLineHeight": "font-tabs-line-height",
    "fontTabsSize": "font-tabs-size",
    "fontWayfindingLinkActiveWeight": "font-wayfinding-link-active-weight",
    "fontWeightHeavy": "font-weight-heavy",
    "borderActiveWidth": "border-active-width",
    "borderCodeEditorStatusDividerWidth": "border-code-editor-status-divider-width",
    "borderContainerStickyWidth": "border-container-sticky-width",
    "borderContainerTopWidth": "border-container-top-width",
    "borderControlFocusRingShadowSpread": "border-control-focus-ring-shadow-spread",
    "borderControlInvalidFocusRingShadowSpread": "border-control-invalid-focus-ring-shadow-spread",
    "borderDividerListWidth": "border-divider-list-width",
    "borderDividerSectionWidth": "border-divider-section-width",
    "borderDropdownVirtualOffsetWidth": "border-dropdown-virtual-offset-width",
    "borderFieldWidth": "border-field-width",
    "borderInvalidWidth": "border-invalid-width",
    "borderItemWidth": "border-item-width",
    "borderLineChartDashArray": "border-line-chart-dash-array",
    "borderLineChartLineJoin": "border-line-chart-line-join",
    "borderLineChartWidth": "border-line-chart-width",
    "borderPanelHeaderWidth": "border-panel-header-width",
    "borderPanelTopWidth": "border-panel-top-width",
    "borderRadiusAlert": "border-radius-alert",
    "borderRadiusBadge": "border-radius-badge",
    "borderRadiusButton": "border-radius-button",
    "borderRadiusCalendarDayFocusRing": "border-radius-calendar-day-focus-ring",
    "borderRadiusCodeEditor": "border-radius-code-editor",
    "borderRadiusContainer": "border-radius-container",
    "borderRadiusControlCircularFocusRing": "border-radius-control-circular-focus-ring",
    "borderRadiusControlDefaultFocusRing": "border-radius-control-default-focus-ring",
    "borderRadiusDropdown": "border-radius-dropdown",
    "borderRadiusDropzone": "border-radius-dropzone",
    "borderRadiusFlashbar": "border-radius-flashbar",
    "borderRadiusItem": "border-radius-item",
    "borderRadiusInput": "border-radius-input",
    "borderRadiusPopover": "border-radius-popover",
    "borderRadiusTabsFocusRing": "border-radius-tabs-focus-ring",
    "borderRadiusTiles": "border-radius-tiles",
    "borderRadiusToken": "border-radius-token",
    "borderRadiusTutorialPanelItem": "border-radius-tutorial-panel-item",
    "borderTableStickyWidth": "border-table-sticky-width",
    "borderLinkFocusRingOutline": "border-link-focus-ring-outline",
    "borderLinkFocusRingShadowSpread": "border-link-focus-ring-shadow-spread",
    "motionDurationExtraFast": "motion-duration-extra-fast",
    "motionDurationExtraSlow": "motion-duration-extra-slow",
    "motionDurationFast": "motion-duration-fast",
    "motionDurationModerate": "motion-duration-moderate",
    "motionDurationRefreshOnlyAmbient": "motion-duration-refresh-only-ambient",
    "motionDurationRefreshOnlyFast": "motion-duration-refresh-only-fast",
    "motionDurationRefreshOnlyMedium": "motion-duration-refresh-only-medium",
    "motionDurationRefreshOnlySlow": "motion-duration-refresh-only-slow",
    "motionDurationRotate180": "motion-duration-rotate-180",
    "motionDurationRotate90": "motion-duration-rotate-90",
    "motionDurationShowPaced": "motion-duration-show-paced",
    "motionDurationShowQuick": "motion-duration-show-quick",
    "motionDurationSlow": "motion-duration-slow",
    "motionDurationTransitionQuick": "motion-duration-transition-quick",
    "motionDurationTransitionShowPaced": "motion-duration-transition-show-paced",
    "motionDurationTransitionShowQuick": "motion-duration-transition-show-quick",
    "motionEasingEaseOutQuart": "motion-easing-ease-out-quart",
    "motionEasingRefreshOnlyA": "motion-easing-refresh-only-a",
    "motionEasingRefreshOnlyB": "motion-easing-refresh-only-b",
    "motionEasingRefreshOnlyC": "motion-easing-refresh-only-c",
    "motionEasingRefreshOnlyD": "motion-easing-refresh-only-d",
    "motionEasingRotate180": "motion-easing-rotate-180",
    "motionEasingRotate90": "motion-easing-rotate-90",
    "motionEasingShowPaced": "motion-easing-show-paced",
    "motionEasingShowQuick": "motion-easing-show-quick",
    "motionEasingTransitionQuick": "motion-easing-transition-quick",
    "motionEasingTransitionShowPaced": "motion-easing-transition-show-paced",
    "motionEasingTransitionShowQuick": "motion-easing-transition-show-quick",
    "motionEasingResponsive": "motion-easing-responsive",
    "motionEasingSticky": "motion-easing-sticky",
    "motionEasingExpressive": "motion-easing-expressive",
    "motionDurationResponsive": "motion-duration-responsive",
    "motionDurationExpressive": "motion-duration-expressive",
    "motionDurationComplex": "motion-duration-complex",
    "motionKeyframesFadeIn": "motion-keyframes-fade-in",
    "motionKeyframesFadeOut": "motion-keyframes-fade-out",
    "motionKeyframesStatusIconError": "motion-keyframes-status-icon-error",
    "motionKeyframesScalePopup": "motion-keyframes-scale-popup",
    "sizeCalendarGridWidth": "size-calendar-grid-width",
    "sizeControl": "size-control",
    "sizeIconBig": "size-icon-big",
    "sizeIconLarge": "size-icon-large",
    "sizeIconMedium": "size-icon-medium",
    "sizeIconNormal": "size-icon-normal",
    "sizeTableSelectionHorizontal": "size-table-selection-horizontal",
    "sizeVerticalInput": "size-vertical-input",
    "sizeVerticalPanelIconOffset": "size-vertical-panel-icon-offset",
    "spaceAlertActionLeft": "space-alert-action-left",
    "spaceAlertHorizontal": "space-alert-horizontal",
    "spaceAlertMessageRight": "space-alert-message-right",
    "spaceAlertVertical": "space-alert-vertical",
    "spaceButtonFocusOutlineGutter": "space-button-focus-outline-gutter",
    "spaceButtonIconFocusOutlineGutterVertical": "space-button-icon-focus-outline-gutter-vertical",
    "spaceButtonIconOnlyHorizontal": "space-button-icon-only-horizontal",
    "spaceButtonInlineIconFocusOutlineGutter": "space-button-inline-icon-focus-outline-gutter",
    "spaceButtonModalDismissVertical": "space-button-modal-dismiss-vertical",
    "spaceCalendarGridFocusOutlineGutter": "space-calendar-grid-focus-outline-gutter",
    "spaceCalendarGridSelectedFocusOutlineGutter": "space-calendar-grid-selected-focus-outline-gutter",
    "spaceCardHorizontal": "space-card-horizontal",
    "spaceCodeEditorStatusFocusOutlineGutter": "space-code-editor-status-focus-outline-gutter",
    "spaceContainerContentTop": "space-container-content-top",
    "spaceContainerHeaderVertical": "space-container-header-vertical",
    "spaceContainerHorizontal": "space-container-horizontal",
    "spaceContentHeaderPaddingBottom": "space-content-header-padding-bottom",
    "spaceDarkHeaderOverlapDistance": "space-dark-header-overlap-distance",
    "spaceExpandableSectionIconOffsetTop": "space-expandable-section-icon-offset-top",
    "spaceFieldHorizontal": "space-field-horizontal",
    "spaceFieldIconOffset": "space-field-icon-offset",
    "spaceFilteringTokenDismissButtonFocusOutlineGutter": "space-filtering-token-dismiss-button-focus-outline-gutter",
    "spaceFilteringTokenOperationSelectFocusOutlineGutter": "space-filtering-token-operation-select-focus-outline-gutter",
    "spaceFlashbarActionLeft": "space-flashbar-action-left",
    "spaceFlashbarDismissRight": "space-flashbar-dismiss-right",
    "spaceFlashbarHorizontal": "space-flashbar-horizontal",
    "spaceGridGutter": "space-grid-gutter",
    "spaceLayoutContentBottom": "space-layout-content-bottom",
    "spaceLayoutToggleDiameter": "space-layout-toggle-diameter",
    "spaceLayoutTogglePadding": "space-layout-toggle-padding",
    "spaceModalContentBottom": "space-modal-content-bottom",
    "spaceModalHorizontal": "space-modal-horizontal",
    "spacePanelNavLeft": "space-panel-nav-left",
    "spacePanelSideLeft": "space-panel-side-left",
    "spacePanelSideRight": "space-panel-side-right",
    "spacePanelSplitTop": "space-panel-split-top",
    "spaceSegmentedControlFocusOutlineGutter": "space-segmented-control-focus-outline-gutter",
    "spaceTableHeaderFocusOutlineGutter": "space-table-header-focus-outline-gutter",
    "spaceTabsContentTop": "space-tabs-content-top",
    "spaceTableHorizontal": "space-table-horizontal",
    "spaceTableHeaderHorizontal": "space-table-header-horizontal",
    "spaceTableContentBottom": "space-table-content-bottom",
    "spaceTableContentTop": "space-table-content-top",
    "spaceTableEmbeddedContentBottom": "space-table-embedded-content-bottom",
    "spaceTableEmbeddedHeaderTop": "space-table-embedded-header-top",
    "spaceTableFooterHorizontal": "space-table-footer-horizontal",
    "spaceTabsFocusOutlineGutter": "space-tabs-focus-outline-gutter",
    "spaceTextGridVertical": "space-text-grid-vertical",
    "spaceScaled2xNone": "space-scaled-2x-none",
    "spaceScaled2xXxxs": "space-scaled-2x-xxxs",
    "spaceScaled2xXxs": "space-scaled-2x-xxs",
    "spaceScaled2xXs": "space-scaled-2x-xs",
    "spaceScaled2xS": "space-scaled-2x-s",
    "spaceScaled2xM": "space-scaled-2x-m",
    "spaceScaled2xL": "space-scaled-2x-l",
    "spaceScaled2xXl": "space-scaled-2x-xl",
    "spaceScaled2xXxl": "space-scaled-2x-xxl",
    "spaceScaled2xXxxl": "space-scaled-2x-xxxl",
    "spaceScaledNone": "space-scaled-none",
    "spaceScaledXxxs": "space-scaled-xxxs",
    "spaceScaledXxs": "space-scaled-xxs",
    "spaceScaledXs": "space-scaled-xs",
    "spaceScaledS": "space-scaled-s",
    "spaceScaledM": "space-scaled-m",
    "spaceScaledL": "space-scaled-l",
    "spaceScaledXl": "space-scaled-xl",
    "spaceScaledXxl": "space-scaled-xxl",
    "spaceScaledXxxl": "space-scaled-xxxl",
    "spaceStaticXxxs": "space-static-xxxs",
    "spaceStaticXxs": "space-static-xxs",
    "spaceStaticXs": "space-static-xs",
    "spaceStaticS": "space-static-s",
    "spaceStaticM": "space-static-m",
    "spaceStaticL": "space-static-l",
    "spaceStaticXl": "space-static-xl",
    "spaceStaticXxl": "space-static-xxl",
    "spaceStaticXxxl": "space-static-xxxl",
    "spaceNone": "space-none",
    "spaceXxxs": "space-xxxs",
    "spaceXxs": "space-xxs",
    "spaceXs": "space-xs",
    "spaceS": "space-s",
    "spaceM": "space-m",
    "spaceL": "space-l",
    "spaceXl": "space-xl",
    "spaceXxl": "space-xxl",
    "spaceXxxl": "space-xxxl",
    "shadowContainer": "shadow-container",
    "shadowContainerStacked": "shadow-container-stacked",
    "shadowContainerActive": "shadow-container-active",
    "shadowDropdown": "shadow-dropdown",
    "shadowDropup": "shadow-dropup",
    "shadowFlashCollapsed": "shadow-flash-collapsed",
    "shadowFlashSticky": "shadow-flash-sticky",
    "shadowModal": "shadow-modal",
    "shadowPanel": "shadow-panel",
    "shadowPanelToggle": "shadow-panel-toggle",
    "shadowPopover": "shadow-popover",
    "shadowSplitBottom": "shadow-split-bottom",
    "shadowSplitSide": "shadow-split-side",
    "shadowSticky": "shadow-sticky",
    "shadowStickyEmbedded": "shadow-sticky-embedded",
    "shadowStickyColumnFirst": "shadow-sticky-column-first",
    "shadowStickyColumnLast": "shadow-sticky-column-last"
  },
  "propertiesMap": {
    "colorAmazonOrange": "--color-amazon-orange-ds51uu",
    "colorAwsSquidInk": "--color-aws-squid-ink-offlxo",
    "colorBlack": "--color-black-8fy8e6",
    "colorBlue100": "--color-blue-100-t2lhzw",
    "colorBlue200": "--color-blue-200-9opekl",
    "colorBlue300": "--color-blue-300-5wfo1o",
    "colorBlue400": "--color-blue-400-0n6n1p",
    "colorBlue500": "--color-blue-500-m9fu2o",
    "colorBlue600": "--color-blue-600-l9la6w",
    "colorBlue700": "--color-blue-700-opj1ui",
    "colorBlue800": "--color-blue-800-wkg93v",
    "colorBlue900": "--color-blue-900-sdwoy0",
    "colorBlueOpaque": "--color-blue-opaque-n04eob",
    "colorGreen100": "--color-green-100-bq8xo4",
    "colorGreen500": "--color-green-500-skepgd",
    "colorGreen600": "--color-green-600-b1d30o",
    "colorGreen700": "--color-green-700-mxknm4",
    "colorGreen900": "--color-green-900-mcc3zx",
    "colorGrey100": "--color-grey-100-yub70k",
    "colorGrey125": "--color-grey-125-cl5sjj",
    "colorGrey150": "--color-grey-150-4ycuod",
    "colorGrey200": "--color-grey-200-llwxhx",
    "colorGrey300": "--color-grey-300-gjxrd6",
    "colorGrey400": "--color-grey-400-2awoii",
    "colorGrey450": "--color-grey-450-zjmc9p",
    "colorGrey500": "--color-grey-500-0d24j6",
    "colorGrey550": "--color-grey-550-3fkjjg",
    "colorGrey600": "--color-grey-600-vva6sv",
    "colorGrey650": "--color-grey-650-0z6b0f",
    "colorGrey700": "--color-grey-700-2r7ql2",
    "colorGrey750": "--color-grey-750-nobwrq",
    "colorGrey800": "--color-grey-800-8gx340",
    "colorGrey900": "--color-grey-900-use524",
    "colorGrey950": "--color-grey-950-x9cppo",
    "colorOrange100": "--color-orange-100-2zoo58",
    "colorOrange500": "--color-orange-500-xjpf0w",
    "colorOrange600": "--color-orange-600-nqfiwo",
    "colorOrange700": "--color-orange-700-emjo0v",
    "colorRed100": "--color-red-100-7nqhsu",
    "colorRed500": "--color-red-500-u56w1y",
    "colorRed600": "--color-red-600-5a1e6s",
    "colorRed700": "--color-red-700-xz5w9m",
    "colorRed900": "--color-red-900-kohrwb",
    "colorTransparent": "--color-transparent-b76lky",
    "colorWhite": "--color-white-inj08h",
    "colorChartsRed300": "--color-charts-red-300-taex3d",
    "colorChartsRed400": "--color-charts-red-400-xo1w45",
    "colorChartsRed500": "--color-charts-red-500-8et8sv",
    "colorChartsRed600": "--color-charts-red-600-ej8iox",
    "colorChartsRed700": "--color-charts-red-700-pe7xt7",
    "colorChartsRed800": "--color-charts-red-800-9wqz57",
    "colorChartsRed900": "--color-charts-red-900-fkiox3",
    "colorChartsRed1000": "--color-charts-red-1000-xhb2ma",
    "colorChartsRed1100": "--color-charts-red-1100-zkhjl8",
    "colorChartsRed1200": "--color-charts-red-1200-t42yl7",
    "colorChartsOrange300": "--color-charts-orange-300-uh1x0z",
    "colorChartsOrange400": "--color-charts-orange-400-rg9ft0",
    "colorChartsOrange500": "--color-charts-orange-500-6dcz8x",
    "colorChartsOrange600": "--color-charts-orange-600-psg5i7",
    "colorChartsOrange700": "--color-charts-orange-700-6rlkwo",
    "colorChartsOrange800": "--color-charts-orange-800-aqh9u5",
    "colorChartsOrange900": "--color-charts-orange-900-71d364",
    "colorChartsOrange1000": "--color-charts-orange-1000-p3xy9d",
    "colorChartsOrange1100": "--color-charts-orange-1100-plp0ix",
    "colorChartsOrange1200": "--color-charts-orange-1200-msf9v8",
    "colorChartsYellow300": "--color-charts-yellow-300-zgwohc",
    "colorChartsYellow400": "--color-charts-yellow-400-z6s56e",
    "colorChartsYellow500": "--color-charts-yellow-500-f52bpo",
    "colorChartsYellow600": "--color-charts-yellow-600-gzedvz",
    "colorChartsYellow700": "--color-charts-yellow-700-uq1jq9",
    "colorChartsYellow800": "--color-charts-yellow-800-esbvam",
    "colorChartsYellow900": "--color-charts-yellow-900-e2ugyo",
    "colorChartsYellow1000": "--color-charts-yellow-1000-myf1mq",
    "colorChartsYellow1100": "--color-charts-yellow-1100-fi5c3g",
    "colorChartsYellow1200": "--color-charts-yellow-1200-faeu24",
    "colorChartsGreen300": "--color-charts-green-300-8q7o65",
    "colorChartsGreen400": "--color-charts-green-400-b5efwo",
    "colorChartsGreen500": "--color-charts-green-500-o7urau",
    "colorChartsGreen600": "--color-charts-green-600-8e3las",
    "colorChartsGreen700": "--color-charts-green-700-h4agmh",
    "colorChartsGreen800": "--color-charts-green-800-jp1xwf",
    "colorChartsGreen900": "--color-charts-green-900-czmqk3",
    "colorChartsGreen1000": "--color-charts-green-1000-wrs7fm",
    "colorChartsGreen1100": "--color-charts-green-1100-d8mgjl",
    "colorChartsGreen1200": "--color-charts-green-1200-jyfc23",
    "colorChartsTeal300": "--color-charts-teal-300-egfaot",
    "colorChartsTeal400": "--color-charts-teal-400-ikctdb",
    "colorChartsTeal500": "--color-charts-teal-500-v952sw",
    "colorChartsTeal600": "--color-charts-teal-600-9ffc3q",
    "colorChartsTeal700": "--color-charts-teal-700-nn7a5u",
    "colorChartsTeal800": "--color-charts-teal-800-97l4n7",
    "colorChartsTeal900": "--color-charts-teal-900-zq1u0w",
    "colorChartsTeal1000": "--color-charts-teal-1000-u4e4vv",
    "colorChartsTeal1100": "--color-charts-teal-1100-cdt1d8",
    "colorChartsTeal1200": "--color-charts-teal-1200-3ozaok",
    "colorChartsBlue1300": "--color-charts-blue-1-300-4x8rnx",
    "colorChartsBlue1400": "--color-charts-blue-1-400-owg3dt",
    "colorChartsBlue1500": "--color-charts-blue-1-500-sl8chl",
    "colorChartsBlue1600": "--color-charts-blue-1-600-3824a7",
    "colorChartsBlue1700": "--color-charts-blue-1-700-e3d0uw",
    "colorChartsBlue1800": "--color-charts-blue-1-800-vnypf9",
    "colorChartsBlue1900": "--color-charts-blue-1-900-rs4k5z",
    "colorChartsBlue11000": "--color-charts-blue-1-1000-wjr7hn",
    "colorChartsBlue11100": "--color-charts-blue-1-1100-nmn22x",
    "colorChartsBlue11200": "--color-charts-blue-1-1200-od4mlj",
    "colorChartsBlue2300": "--color-charts-blue-2-300-6yvfip",
    "colorChartsBlue2400": "--color-charts-blue-2-400-iba8cu",
    "colorChartsBlue2500": "--color-charts-blue-2-500-vtdvkt",
    "colorChartsBlue2600": "--color-charts-blue-2-600-tpo4rj",
    "colorChartsBlue2700": "--color-charts-blue-2-700-p6tu56",
    "colorChartsBlue2800": "--color-charts-blue-2-800-08f3pp",
    "colorChartsBlue2900": "--color-charts-blue-2-900-3aq93e",
    "colorChartsBlue21000": "--color-charts-blue-2-1000-6b05hm",
    "colorChartsBlue21100": "--color-charts-blue-2-1100-0014sa",
    "colorChartsBlue21200": "--color-charts-blue-2-1200-tzr398",
    "colorChartsPurple300": "--color-charts-purple-300-yatxj8",
    "colorChartsPurple400": "--color-charts-purple-400-d384pt",
    "colorChartsPurple500": "--color-charts-purple-500-skntta",
    "colorChartsPurple600": "--color-charts-purple-600-8iqvzu",
    "colorChartsPurple700": "--color-charts-purple-700-3qzy9s",
    "colorChartsPurple800": "--color-charts-purple-800-ucyxda",
    "colorChartsPurple900": "--color-charts-purple-900-tlepdb",
    "colorChartsPurple1000": "--color-charts-purple-1000-3pjp6l",
    "colorChartsPurple1100": "--color-charts-purple-1100-t0m9qa",
    "colorChartsPurple1200": "--color-charts-purple-1200-003tqq",
    "colorChartsPink300": "--color-charts-pink-300-0gug9u",
    "colorChartsPink400": "--color-charts-pink-400-jh84a9",
    "colorChartsPink500": "--color-charts-pink-500-c97yed",
    "colorChartsPink600": "--color-charts-pink-600-rpo3pi",
    "colorChartsPink700": "--color-charts-pink-700-mshe2z",
    "colorChartsPink800": "--color-charts-pink-800-bph464",
    "colorChartsPink900": "--color-charts-pink-900-mvfm0y",
    "colorChartsPink1000": "--color-charts-pink-1000-kq8pu0",
    "colorChartsPink1100": "--color-charts-pink-1100-pi0m3u",
    "colorChartsPink1200": "--color-charts-pink-1200-hukz4p",
    "colorChartsStatusCritical": "--color-charts-status-critical-268let",
    "colorChartsStatusHigh": "--color-charts-status-high-vsd25n",
    "colorChartsStatusMedium": "--color-charts-status-medium-371m8g",
    "colorChartsStatusLow": "--color-charts-status-low-lfwc29",
    "colorChartsStatusPositive": "--color-charts-status-positive-2ozsqj",
    "colorChartsStatusInfo": "--color-charts-status-info-l8g84h",
    "colorChartsStatusNeutral": "--color-charts-status-neutral-b4b0p2",
    "colorChartsThresholdNegative": "--color-charts-threshold-negative-y7lrhf",
    "colorChartsThresholdPositive": "--color-charts-threshold-positive-42ybvt",
    "colorChartsThresholdInfo": "--color-charts-threshold-info-kcjduw",
    "colorChartsThresholdNeutral": "--color-charts-threshold-neutral-k14cuc",
    "colorChartsLineGrid": "--color-charts-line-grid-6wil4m",
    "colorChartsLineTick": "--color-charts-line-tick-yidpvu",
    "colorChartsLineAxis": "--color-charts-line-axis-yo865k",
    "colorChartsPaletteCategorical1": "--color-charts-palette-categorical-1-bonb16",
    "colorChartsPaletteCategorical2": "--color-charts-palette-categorical-2-emtquh",
    "colorChartsPaletteCategorical3": "--color-charts-palette-categorical-3-imrqvq",
    "colorChartsPaletteCategorical4": "--color-charts-palette-categorical-4-g31h69",
    "colorChartsPaletteCategorical5": "--color-charts-palette-categorical-5-64f3p2",
    "colorChartsPaletteCategorical6": "--color-charts-palette-categorical-6-msr86m",
    "colorChartsPaletteCategorical7": "--color-charts-palette-categorical-7-kdjms7",
    "colorChartsPaletteCategorical8": "--color-charts-palette-categorical-8-79776a",
    "colorChartsPaletteCategorical9": "--color-charts-palette-categorical-9-s4w3dd",
    "colorChartsPaletteCategorical10": "--color-charts-palette-categorical-10-cuicpx",
    "colorChartsPaletteCategorical11": "--color-charts-palette-categorical-11-no2uu5",
    "colorChartsPaletteCategorical12": "--color-charts-palette-categorical-12-jq9rcw",
    "colorChartsPaletteCategorical13": "--color-charts-palette-categorical-13-4cawsz",
    "colorChartsPaletteCategorical14": "--color-charts-palette-categorical-14-i1n5cl",
    "colorChartsPaletteCategorical15": "--color-charts-palette-categorical-15-9pgabq",
    "colorChartsPaletteCategorical16": "--color-charts-palette-categorical-16-wnvn1q",
    "colorChartsPaletteCategorical17": "--color-charts-palette-categorical-17-y2duhb",
    "colorChartsPaletteCategorical18": "--color-charts-palette-categorical-18-xehfp2",
    "colorChartsPaletteCategorical19": "--color-charts-palette-categorical-19-v1x5n3",
    "colorChartsPaletteCategorical20": "--color-charts-palette-categorical-20-q5g6qv",
    "colorChartsPaletteCategorical21": "--color-charts-palette-categorical-21-z2fito",
    "colorChartsPaletteCategorical22": "--color-charts-palette-categorical-22-mdbc68",
    "colorChartsPaletteCategorical23": "--color-charts-palette-categorical-23-9iyat0",
    "colorChartsPaletteCategorical24": "--color-charts-palette-categorical-24-17kvjc",
    "colorChartsPaletteCategorical25": "--color-charts-palette-categorical-25-c2vakt",
    "colorChartsPaletteCategorical26": "--color-charts-palette-categorical-26-g98tv5",
    "colorChartsPaletteCategorical27": "--color-charts-palette-categorical-27-lo8vzl",
    "colorChartsPaletteCategorical28": "--color-charts-palette-categorical-28-2ppjnc",
    "colorChartsPaletteCategorical29": "--color-charts-palette-categorical-29-68gzom",
    "colorChartsPaletteCategorical30": "--color-charts-palette-categorical-30-9pbejo",
    "colorChartsPaletteCategorical31": "--color-charts-palette-categorical-31-8odgjs",
    "colorChartsPaletteCategorical32": "--color-charts-palette-categorical-32-xug28a",
    "colorChartsPaletteCategorical33": "--color-charts-palette-categorical-33-cr6l8a",
    "colorChartsPaletteCategorical34": "--color-charts-palette-categorical-34-209022",
    "colorChartsPaletteCategorical35": "--color-charts-palette-categorical-35-twgdku",
    "colorChartsPaletteCategorical36": "--color-charts-palette-categorical-36-g2mar5",
    "colorChartsPaletteCategorical37": "--color-charts-palette-categorical-37-9deaq2",
    "colorChartsPaletteCategorical38": "--color-charts-palette-categorical-38-5fg2jv",
    "colorChartsPaletteCategorical39": "--color-charts-palette-categorical-39-c8yeil",
    "colorChartsPaletteCategorical40": "--color-charts-palette-categorical-40-vlagy9",
    "colorChartsPaletteCategorical41": "--color-charts-palette-categorical-41-o49tuv",
    "colorChartsPaletteCategorical42": "--color-charts-palette-categorical-42-5irquw",
    "colorChartsPaletteCategorical43": "--color-charts-palette-categorical-43-8pxo9j",
    "colorChartsPaletteCategorical44": "--color-charts-palette-categorical-44-w3yd1t",
    "colorChartsPaletteCategorical45": "--color-charts-palette-categorical-45-32a8x6",
    "colorChartsPaletteCategorical46": "--color-charts-palette-categorical-46-4ikr9l",
    "colorChartsPaletteCategorical47": "--color-charts-palette-categorical-47-wg3s7g",
    "colorChartsPaletteCategorical48": "--color-charts-palette-categorical-48-7no3ly",
    "colorChartsPaletteCategorical49": "--color-charts-palette-categorical-49-qy0tr5",
    "colorChartsPaletteCategorical50": "--color-charts-palette-categorical-50-gkixcb",
    "colorGreyOpaque25": "--color-grey-opaque-25-c63d8m",
    "colorGreyOpaque40": "--color-grey-opaque-40-aled9j",
    "colorGreyOpaque50": "--color-grey-opaque-50-sgb0cm",
    "colorGreyOpaque70": "--color-grey-opaque-70-jnpu59",
    "colorGreyOpaque80": "--color-grey-opaque-80-g1t061",
    "colorGreyOpaque90": "--color-grey-opaque-90-xhnfbb",
    "colorGreyTransparent": "--color-grey-transparent-ojgu6y",
    "colorGreyTransparentHeavy": "--color-grey-transparent-heavy-i5g50l",
    "colorGreyTransparentLight": "--color-grey-transparent-light-ow0pey",
    "colorBackgroundButtonLinkActive": "--color-background-button-link-active-t13dka",
    "colorBackgroundButtonLinkHover": "--color-background-button-link-hover-69sbpz",
    "colorBackgroundButtonNormalActive": "--color-background-button-normal-active-9lyks0",
    "colorBackgroundButtonNormalDefault": "--color-background-button-normal-default-syw2p1",
    "colorBackgroundButtonNormalDisabled": "--color-background-button-normal-disabled-z5vd4i",
    "colorBackgroundButtonNormalHover": "--color-background-button-normal-hover-c3qbgm",
    "colorBackgroundButtonPrimaryActive": "--color-background-button-primary-active-zh9mp2",
    "colorBackgroundButtonPrimaryDefault": "--color-background-button-primary-default-hovz0v",
    "colorBackgroundButtonPrimaryDisabled": "--color-background-button-primary-disabled-9z381p",
    "colorBackgroundButtonPrimaryHover": "--color-background-button-primary-hover-fw2kwa",
    "colorBackgroundCalendarToday": "--color-background-calendar-today-762czq",
    "colorBackgroundCellShaded": "--color-background-cell-shaded-26ubfj",
    "colorBackgroundCodeEditorGutterActiveLineDefault": "--color-background-code-editor-gutter-active-line-default-p2p8kl",
    "colorBackgroundCodeEditorGutterActiveLineError": "--color-background-code-editor-gutter-active-line-error-lfh0u4",
    "colorBackgroundCodeEditorGutterDefault": "--color-background-code-editor-gutter-default-l5k65m",
    "colorBackgroundCodeEditorLoading": "--color-background-code-editor-loading-4cqamf",
    "colorBackgroundCodeEditorPaneItemHover": "--color-background-code-editor-pane-item-hover-lrigi6",
    "colorBackgroundCodeEditorStatusBar": "--color-background-code-editor-status-bar-qgcwj5",
    "colorBackgroundContainerContent": "--color-background-container-content-i8i4a0",
    "colorBackgroundContainerHeader": "--color-background-container-header-4flbq5",
    "colorBackgroundControlChecked": "--color-background-control-checked-nmj9hq",
    "colorBackgroundControlDefault": "--color-background-control-default-gbrepr",
    "colorBackgroundControlDisabled": "--color-background-control-disabled-vxfgfc",
    "colorBackgroundDropdownItemDefault": "--color-background-dropdown-item-default-e64ycq",
    "colorBackgroundDropdownItemDimmed": "--color-background-dropdown-item-dimmed-qw48ma",
    "colorBackgroundDropdownItemFilterMatch": "--color-background-dropdown-item-filter-match-6ac2mw",
    "colorBackgroundDropdownItemHover": "--color-background-dropdown-item-hover-yzurso",
    "colorBackgroundDropdownItemSelected": "--color-background-dropdown-item-selected-8l4mpk",
    "colorBackgroundHomeHeader": "--color-background-home-header-mgmhsx",
    "colorBackgroundInputDefault": "--color-background-input-default-u57378",
    "colorBackgroundInputDisabled": "--color-background-input-disabled-wu9j6u",
    "colorBackgroundItemSelected": "--color-background-item-selected-ebt4bi",
    "colorBackgroundLayoutMain": "--color-background-layout-main-sfhm4y",
    "colorBackgroundLayoutMobilePanel": "--color-background-layout-mobile-panel-9vweqk",
    "colorBackgroundLayoutPanelContent": "--color-background-layout-panel-content-808qum",
    "colorBackgroundLayoutPanelHover": "--color-background-layout-panel-hover-0bg3gq",
    "colorBackgroundLayoutPanelTriggerActive": "--color-background-layout-panel-trigger-active-uf4o0r",
    "colorBackgroundLayoutToggleActive": "--color-background-layout-toggle-active-d15dki",
    "colorBackgroundLayoutToggleDefault": "--color-background-layout-toggle-default-f9hnkv",
    "colorBackgroundLayoutToggleHover": "--color-background-layout-toggle-hover-gi0e0b",
    "colorBackgroundLayoutToggleSelectedActive": "--color-background-layout-toggle-selected-active-9w7pk3",
    "colorBackgroundLayoutToggleSelectedDefault": "--color-background-layout-toggle-selected-default-e1giv3",
    "colorBackgroundLayoutToggleSelectedHover": "--color-background-layout-toggle-selected-hover-mes33s",
    "colorBackgroundModalOverlay": "--color-background-modal-overlay-17dapf",
    "colorBackgroundNotificationBlue": "--color-background-notification-blue-vqb59v",
    "colorBackgroundNotificationGreen": "--color-background-notification-green-0d9ow8",
    "colorBackgroundNotificationGrey": "--color-background-notification-grey-ua4ep5",
    "colorBackgroundNotificationRed": "--color-background-notification-red-v7js1f",
    "colorBackgroundPopover": "--color-background-popover-mn5o9k",
    "colorBackgroundProgressBarContentDefault": "--color-background-progress-bar-content-default-r4tyyh",
    "colorBackgroundProgressBarContentInFlash": "--color-background-progress-bar-content-in-flash-37g8fy",
    "colorBackgroundProgressBarLayoutDefault": "--color-background-progress-bar-layout-default-9xbpym",
    "colorBackgroundProgressBarLayoutInFlash": "--color-background-progress-bar-layout-in-flash-phmfak",
    "colorBackgroundSegmentActive": "--color-background-segment-active-bl0u6r",
    "colorBackgroundSegmentDefault": "--color-background-segment-default-5k37bj",
    "colorBackgroundSegmentDisabled": "--color-background-segment-disabled-hgka10",
    "colorBackgroundSegmentHover": "--color-background-segment-hover-s3f27a",
    "colorBackgroundStatusError": "--color-background-status-error-pe1hux",
    "colorBackgroundStatusInfo": "--color-background-status-info-usb30e",
    "colorBackgroundStatusSuccess": "--color-background-status-success-xnxxn4",
    "colorBackgroundStatusWarning": "--color-background-status-warning-zz4oi6",
    "colorBackgroundTableHeader": "--color-background-table-header-i1pa1g",
    "colorBackgroundTilesDisabled": "--color-background-tiles-disabled-byt5lx",
    "colorBackgroundToggleCheckedDisabled": "--color-background-toggle-checked-disabled-07lf06",
    "colorBackgroundToggleDefault": "--color-background-toggle-default-w4ftus",
    "colorBorderButtonNormalActive": "--color-border-button-normal-active-zbmaft",
    "colorBorderButtonNormalDefault": "--color-border-button-normal-default-imypd7",
    "colorBorderButtonNormalDisabled": "--color-border-button-normal-disabled-akwzcb",
    "colorBorderButtonNormalHover": "--color-border-button-normal-hover-l1vb7z",
    "colorBorderButtonPrimaryDisabled": "--color-border-button-primary-disabled-5mv989",
    "colorBorderCalendarGrid": "--color-border-calendar-grid-sshunw",
    "colorBorderCalendarGridSelectedFocusRing": "--color-border-calendar-grid-selected-focus-ring-cxqa0s",
    "colorBorderCodeEditorAceActiveLineLightTheme": "--color-border-code-editor-ace-active-line-light-theme-3l07nr",
    "colorBorderCodeEditorAceActiveLineDarkTheme": "--color-border-code-editor-ace-active-line-dark-theme-74siyt",
    "colorBorderCodeEditorDefault": "--color-border-code-editor-default-l9vmjf",
    "colorBorderCodeEditorPaneItemHover": "--color-border-code-editor-pane-item-hover-xephrt",
    "colorBorderContainerDivider": "--color-border-container-divider-4ade7z",
    "colorBorderContainerTop": "--color-border-container-top-srcvx4",
    "colorBorderControlChecked": "--color-border-control-checked-b05kle",
    "colorBorderControlDefault": "--color-border-control-default-m3lmsh",
    "colorBorderControlDisabled": "--color-border-control-disabled-m4cnfp",
    "colorBorderDividerActive": "--color-border-divider-active-t11l9l",
    "colorBorderDividerDefault": "--color-border-divider-default-7s2wjw",
    "colorBorderDividerPanelBottom": "--color-border-divider-panel-bottom-zrjpck",
    "colorBorderDividerPanelSide": "--color-border-divider-panel-side-yjkfcr",
    "colorBorderDropdownContainer": "--color-border-dropdown-container-tyn0js",
    "colorBorderDropdownGroup": "--color-border-dropdown-group-0utpsr",
    "colorBorderDropdownItemDefault": "--color-border-dropdown-item-default-faosd8",
    "colorBorderDropdownItemHover": "--color-border-dropdown-item-hover-tyzq9m",
    "colorBorderDropdownItemDimmedHover": "--color-border-dropdown-item-dimmed-hover-6dhy15",
    "colorBorderDropdownItemSelected": "--color-border-dropdown-item-selected-301bxw",
    "colorBorderDropdownItemTop": "--color-border-dropdown-item-top-xnzq48",
    "colorBorderInputDefault": "--color-border-input-default-e47bkv",
    "colorBorderInputDisabled": "--color-border-input-disabled-x2lopj",
    "colorBorderItemFocused": "--color-border-item-focused-397lya",
    "colorBorderItemPlaceholder": "--color-border-item-placeholder-zzl717",
    "colorBorderItemSelected": "--color-border-item-selected-ols1fr",
    "colorBorderLayout": "--color-border-layout-wf5alz",
    "colorBorderPopover": "--color-border-popover-5pygk7",
    "colorBorderSegmentActive": "--color-border-segment-active-kdy5tm",
    "colorBorderSegmentDefault": "--color-border-segment-default-091088",
    "colorBorderSegmentDisabled": "--color-border-segment-disabled-6v5zlt",
    "colorBorderSegmentHover": "--color-border-segment-hover-9notuw",
    "colorBorderStatusError": "--color-border-status-error-mfrddc",
    "colorBorderStatusInfo": "--color-border-status-info-546i7i",
    "colorBorderStatusSuccess": "--color-border-status-success-cqi45f",
    "colorBorderStatusWarning": "--color-border-status-warning-hg85ut",
    "colorBorderDividerInteractiveDefault": "--color-border-divider-interactive-default-4pf6ra",
    "colorBorderTabsDivider": "--color-border-tabs-divider-69fx5i",
    "colorBorderTabsShadow": "--color-border-tabs-shadow-4lmh2z",
    "colorBorderTabsUnderline": "--color-border-tabs-underline-cl1vvd",
    "colorBorderTilesDisabled": "--color-border-tiles-disabled-dp4h7y",
    "colorBorderTutorial": "--color-border-tutorial-4ioksw",
    "colorForegroundControlDefault": "--color-foreground-control-default-7ajdem",
    "colorForegroundControlDisabled": "--color-foreground-control-disabled-v6a97u",
    "colorShadowDefault": "--color-shadow-default-3se70f",
    "colorShadowLayoutPanelTrigger": "--color-shadow-layout-panel-trigger-t4yazw",
    "colorShadowMedium": "--color-shadow-medium-02bwpe",
    "colorShadowSide": "--color-shadow-side-07co14",
    "colorStrokeCodeEditorResizeHandler": "--color-stroke-code-editor-resize-handler-lop07p",
    "colorStrokeCodeEditorGutterActiveLineDefault": "--color-stroke-code-editor-gutter-active-line-default-xmybrr",
    "colorStrokeCodeEditorGutterActiveLineHover": "--color-stroke-code-editor-gutter-active-line-hover-j2wjq7",
    "colorTextAccent": "--color-text-accent-ojtfw7",
    "colorTextBodyDefault": "--color-text-body-default-ecseex",
    "colorTextBodySecondary": "--color-text-body-secondary-8ac4yc",
    "colorTextBreadcrumbCurrent": "--color-text-breadcrumb-current-mum16s",
    "colorTextBreadcrumbIcon": "--color-text-breadcrumb-icon-mlugp6",
    "colorTextButtonInlineIconDefault": "--color-text-button-inline-icon-default-8jyga9",
    "colorTextButtonInlineIconDisabled": "--color-text-button-inline-icon-disabled-gfhvz7",
    "colorTextButtonInlineIconHover": "--color-text-button-inline-icon-hover-fe1tth",
    "colorTextButtonNormalActive": "--color-text-button-normal-active-ooxh88",
    "colorTextButtonNormalDefault": "--color-text-button-normal-default-knujcb",
    "colorTextButtonNormalHover": "--color-text-button-normal-hover-a42y42",
    "colorTextLinkButtonNormalDefault": "--color-text-link-button-normal-default-3s3bcf",
    "colorTextLinkButtonNormalHover": "--color-text-link-button-normal-hover-pbpksu",
    "colorTextLinkButtonNormalActive": "--color-text-link-button-normal-active-8t2jon",
    "colorTextButtonPrimaryActive": "--color-text-button-primary-active-vems2x",
    "colorTextButtonPrimaryDefault": "--color-text-button-primary-default-340wh6",
    "colorTextButtonPrimaryHover": "--color-text-button-primary-hover-vzqjpi",
    "colorTextCalendarDayHover": "--color-text-calendar-day-hover-9hfyfa",
    "colorTextCalendarDaySelected": "--color-text-calendar-day-selected-g56hdc",
    "colorTextCalendarMonth": "--color-text-calendar-month-elf7e9",
    "colorTextCodeEditorGutterActiveLine": "--color-text-code-editor-gutter-active-line-3r48bk",
    "colorTextCodeEditorGutterDefault": "--color-text-code-editor-gutter-default-q46j79",
    "colorTextCodeEditorStatusBarDisabled": "--color-text-code-editor-status-bar-disabled-6bhuub",
    "colorTextCodeEditorTabButtonError": "--color-text-code-editor-tab-button-error-vez6ll",
    "colorTextColumnHeader": "--color-text-column-header-u472sv",
    "colorTextColumnSortingIcon": "--color-text-column-sorting-icon-q5sr09",
    "colorTextControlDisabled": "--color-text-control-disabled-3z3eul",
    "colorTextCounter": "--color-text-counter-jwdegc",
    "colorTextDisabled": "--color-text-disabled-a2nkh4",
    "colorTextDropdownFooter": "--color-text-dropdown-footer-unoio5",
    "colorTextDropdownGroupLabel": "--color-text-dropdown-group-label-kjw19m",
    "colorTextDropdownHeader": "--color-text-dropdown-header-6e05nm",
    "colorTextDropdownItemDefault": "--color-text-dropdown-item-default-xihoq5",
    "colorTextDropdownItemDimmed": "--color-text-dropdown-item-dimmed-jyqdrs",
    "colorTextDropdownItemDisabled": "--color-text-dropdown-item-disabled-varol7",
    "colorTextDropdownItemFilterMatch": "--color-text-dropdown-item-filter-match-x302if",
    "colorTextDropdownItemHighlighted": "--color-text-dropdown-item-highlighted-h3gt85",
    "colorTextDropdownItemSecondary": "--color-text-dropdown-item-secondary-arh4b3",
    "colorTextDropdownItemSecondaryHover": "--color-text-dropdown-item-secondary-hover-7ii1ru",
    "colorTextEmpty": "--color-text-empty-vgo5nf",
    "colorTextExpandableSectionDefault": "--color-text-expandable-section-default-k03p1p",
    "colorTextExpandableSectionHover": "--color-text-expandable-section-hover-zw62k0",
    "colorTextExpandableSectionNavigationIconDefault": "--color-text-expandable-section-navigation-icon-default-lb9rm0",
    "colorTextFormDefault": "--color-text-form-default-du0w04",
    "colorTextFormLabel": "--color-text-form-label-c1qw2g",
    "colorTextFormSecondary": "--color-text-form-secondary-nt5h82",
    "colorTextGroupLabel": "--color-text-group-label-m0t7up",
    "colorTextHeadingDefault": "--color-text-heading-default-haccta",
    "colorTextHeadingSecondary": "--color-text-heading-secondary-qqur22",
    "colorTextHomeHeaderDefault": "--color-text-home-header-default-1d71y3",
    "colorTextHomeHeaderSecondary": "--color-text-home-header-secondary-2eimth",
    "colorTextIconCaret": "--color-text-icon-caret-akl9cb",
    "colorTextIconSubtle": "--color-text-icon-subtle-bz5b7h",
    "colorTextInputDisabled": "--color-text-input-disabled-oawyzo",
    "colorTextInputPlaceholder": "--color-text-input-placeholder-j53j3c",
    "colorTextInputPlaceholderDisabled": "--color-text-input-placeholder-disabled-6928j8",
    "colorTextInteractiveActive": "--color-text-interactive-active-vol84d",
    "colorTextInteractiveDefault": "--color-text-interactive-default-eg5fsa",
    "colorTextInteractiveDisabled": "--color-text-interactive-disabled-3pbb07",
    "colorTextInteractiveHover": "--color-text-interactive-hover-239dxl",
    "colorTextInteractiveInvertedDefault": "--color-text-interactive-inverted-default-phki5u",
    "colorTextInteractiveInvertedHover": "--color-text-interactive-inverted-hover-g2obc6",
    "colorTextInverted": "--color-text-inverted-821sko",
    "colorTextLabel": "--color-text-label-p7h2rg",
    "colorTextLayoutToggle": "--color-text-layout-toggle-20sb9r",
    "colorTextLayoutToggleSelected": "--color-text-layout-toggle-selected-tzwifo",
    "colorTextLinkDefault": "--color-text-link-default-qcise9",
    "colorTextLinkHover": "--color-text-link-hover-mjrcp5",
    "colorTextLinkInvertedHover": "--color-text-link-inverted-hover-5tnsdi",
    "colorTextLinkButtonUnderline": "--color-text-link-button-underline-8mp92t",
    "colorTextLinkButtonUnderlineHover": "--color-text-link-button-underline-hover-ei09le",
    "colorTextLinkPrimaryUnderline": "--color-text-link-primary-underline-jo8l60",
    "colorTextNotificationDefault": "--color-text-notification-default-2kpcxy",
    "colorTextPaginationPageNumberActiveDisabled": "--color-text-pagination-page-number-active-disabled-sjs1t5",
    "colorTextPaginationPageNumberDefault": "--color-text-pagination-page-number-default-z6gnaa",
    "colorTextSegmentActive": "--color-text-segment-active-gc2jjl",
    "colorTextSegmentDefault": "--color-text-segment-default-bf7rka",
    "colorTextSegmentHover": "--color-text-segment-hover-5pccvg",
    "colorTextLayoutPanelTriggerHover": "--color-text-layout-panel-trigger-hover-yw2kb4",
    "colorTextLayoutPanelTriggerActive": "--color-text-layout-panel-trigger-active-mt4zu0",
    "colorTextSmall": "--color-text-small-le1y42",
    "colorTextStatusError": "--color-text-status-error-5sesl6",
    "colorTextStatusInactive": "--color-text-status-inactive-5ei55p",
    "colorTextStatusInfo": "--color-text-status-info-utupcz",
    "colorTextStatusSuccess": "--color-text-status-success-0fzhv9",
    "colorTextStatusWarning": "--color-text-status-warning-27nlyh",
    "colorTextTopNavigationTitle": "--color-text-top-navigation-title-oypxe3",
    "colorBoardPlaceholderActive": "--color-board-placeholder-active-vaxzdf",
    "colorBoardPlaceholderHover": "--color-board-placeholder-hover-v1s7kq",
    "colorDragPlaceholderActive": "--color-drag-placeholder-active-fkpj7i",
    "colorDragPlaceholderHover": "--color-drag-placeholder-hover-3ohnz1",
    "colorDropzoneBackgroundActive": "--color-dropzone-background-active-g4zi07",
    "colorDropzoneBackgroundHover": "--color-dropzone-background-hover-j98f7z",
    "colorDropzoneTextActive": "--color-dropzone-text-active-aobpir",
    "colorDropzoneTextHover": "--color-dropzone-text-hover-ud2lnq",
    "fontBodyMLineHeight": "--font-body-m-line-height-i7xxvv",
    "fontBodyMSize": "--font-body-m-size-sregvd",
    "fontBodySLetterSpacing": "--font-body-s-letter-spacing-cy0oxj",
    "fontBodySLineHeight": "--font-body-s-line-height-kdsbrl",
    "fontBodySSize": "--font-body-s-size-ukw2p9",
    "fontButtonLetterSpacing": "--font-button-letter-spacing-8y5poz",
    "fontButtonWeight": "--font-button-weight-7rj5fx",
    "fontChartDetailSize": "--font-chart-detail-size-pm0amk",
    "fontDisplayLLetterSpacing": "--font-display-l-letter-spacing-4ff418",
    "fontDisplayLLineHeight": "--font-display-l-line-height-71tnj3",
    "fontDisplayLSize": "--font-display-l-size-03lgcb",
    "fontDisplayLabelWeight": "--font-display-label-weight-m18hjh",
    "fontExpandableHeadingSize": "--font-expandable-heading-size-m2wptt",
    "fontFamilyBase": "--font-family-base-qnistn",
    "fontFamilyMonospace": "--font-family-monospace-iz223z",
    "fontHeaderH2DescriptionLineHeight": "--font-header-h2-description-line-height-gjrb86",
    "fontHeaderH2DescriptionSize": "--font-header-h2-description-size-pqrrui",
    "fontHeadingLLetterSpacing": "--font-heading-l-letter-spacing-f6wvtk",
    "fontHeadingLLineHeight": "--font-heading-l-line-height-gev4n1",
    "fontHeadingLSize": "--font-heading-l-size-otmxys",
    "fontHeadingLWeight": "--font-heading-l-weight-xm7ks9",
    "fontHeadingMLetterSpacing": "--font-heading-m-letter-spacing-r00pg3",
    "fontHeadingMLineHeight": "--font-heading-m-line-height-u3t54f",
    "fontHeadingMSize": "--font-heading-m-size-6e3jmg",
    "fontHeadingMWeight": "--font-heading-m-weight-hi5n0j",
    "fontHeadingSLetterSpacing": "--font-heading-s-letter-spacing-4d69jc",
    "fontHeadingSLineHeight": "--font-heading-s-line-height-5b7f0q",
    "fontHeadingSSize": "--font-heading-s-size-9clg8y",
    "fontHeadingSWeight": "--font-heading-s-weight-k8ys41",
    "fontHeadingXlLetterSpacing": "--font-heading-xl-letter-spacing-9tcsmy",
    "fontHeadingXlLineHeight": "--font-heading-xl-line-height-doxfdj",
    "fontHeadingXlSize": "--font-heading-xl-size-d0vjbk",
    "fontHeadingXlWeight": "--font-heading-xl-weight-772870",
    "fontHeadingXsLineHeight": "--font-heading-xs-line-height-5x131j",
    "fontHeadingXsSize": "--font-heading-xs-size-fryxro",
    "fontHeadingXsWeight": "--font-heading-xs-weight-wwznty",
    "fontBoxValueLargeWeight": "--font-box-value-large-weight-dyt1pj",
    "fontLinkButtonLetterSpacing": "--font-link-button-letter-spacing-58wset",
    "fontLinkButtonWeight": "--font-link-button-weight-4f1hjr",
    "fontLinkPrimaryDecoration": "--font-link-primary-decoration-wfgjh2",
    "fontLinkPrimaryLetterSpacing": "--font-link-primary-letter-spacing-vmsgcx",
    "fontLinkPrimaryWeight": "--font-link-primary-weight-91pybi",
    "fontPanelHeaderLineHeight": "--font-panel-header-line-height-x2226j",
    "fontPanelHeaderSize": "--font-panel-header-size-0vdgjc",
    "fontSmoothingWebkit": "--font-smoothing-webkit-vu3hx4",
    "fontSmoothingMozOsx": "--font-smoothing-moz-osx-nkh1jb",
    "fontTabsDisabledWeight": "--font-tabs-disabled-weight-imwq16",
    "fontTabsLineHeight": "--font-tabs-line-height-qo8cr6",
    "fontTabsSize": "--font-tabs-size-01zslx",
    "fontWayfindingLinkActiveWeight": "--font-wayfinding-link-active-weight-l3fid7",
    "fontWeightHeavy": "--font-weight-heavy-ydka9r",
    "borderActiveWidth": "--border-active-width-ce5ls7",
    "borderCodeEditorStatusDividerWidth": "--border-code-editor-status-divider-width-cf5jzt",
    "borderContainerStickyWidth": "--border-container-sticky-width-i7t7xe",
    "borderContainerTopWidth": "--border-container-top-width-jk6fhm",
    "borderControlFocusRingShadowSpread": "--border-control-focus-ring-shadow-spread-srzyiu",
    "borderControlInvalidFocusRingShadowSpread": "--border-control-invalid-focus-ring-shadow-spread-omt6il",
    "borderDividerListWidth": "--border-divider-list-width-hacikr",
    "borderDividerSectionWidth": "--border-divider-section-width-4wm2it",
    "borderDropdownVirtualOffsetWidth": "--border-dropdown-virtual-offset-width-fzhepk",
    "borderFieldWidth": "--border-field-width-idlekx",
    "borderInvalidWidth": "--border-invalid-width-5jpdqn",
    "borderItemWidth": "--border-item-width-qbbbsa",
    "borderLineChartDashArray": "--border-line-chart-dash-array-4wa4ab",
    "borderLineChartLineJoin": "--border-line-chart-line-join-nan7pn",
    "borderLineChartWidth": "--border-line-chart-width-nj0hc5",
    "borderPanelHeaderWidth": "--border-panel-header-width-6fmoo4",
    "borderPanelTopWidth": "--border-panel-top-width-00mwcl",
    "borderRadiusAlert": "--border-radius-alert-n0skwy",
    "borderRadiusBadge": "--border-radius-badge-x5oehc",
    "borderRadiusButton": "--border-radius-button-axewzv",
    "borderRadiusCalendarDayFocusRing": "--border-radius-calendar-day-focus-ring-a8mlqd",
    "borderRadiusCodeEditor": "--border-radius-code-editor-fuck6b",
    "borderRadiusContainer": "--border-radius-container-gh9ysk",
    "borderRadiusControlCircularFocusRing": "--border-radius-control-circular-focus-ring-qawzn7",
    "borderRadiusControlDefaultFocusRing": "--border-radius-control-default-focus-ring-7661kz",
    "borderRadiusDropdown": "--border-radius-dropdown-ujknaf",
    "borderRadiusDropzone": "--border-radius-dropzone-poqo08",
    "borderRadiusFlashbar": "--border-radius-flashbar-i7jm55",
    "borderRadiusItem": "--border-radius-item-u2ibpi",
    "borderRadiusInput": "--border-radius-input-txq8zy",
    "borderRadiusPopover": "--border-radius-popover-8g1bwn",
    "borderRadiusTabsFocusRing": "--border-radius-tabs-focus-ring-j968on",
    "borderRadiusTiles": "--border-radius-tiles-kl8mtb",
    "borderRadiusToken": "--border-radius-token-wohc9e",
    "borderRadiusTutorialPanelItem": "--border-radius-tutorial-panel-item-5wuccf",
    "borderTableStickyWidth": "--border-table-sticky-width-h1tlxy",
    "borderLinkFocusRingOutline": "--border-link-focus-ring-outline-k2wccv",
    "borderLinkFocusRingShadowSpread": "--border-link-focus-ring-shadow-spread-nv4ahb",
    "motionDurationExtraFast": "--motion-duration-extra-fast-ez8ebq",
    "motionDurationExtraSlow": "--motion-duration-extra-slow-8ks5rs",
    "motionDurationFast": "--motion-duration-fast-nk2ap0",
    "motionDurationModerate": "--motion-duration-moderate-vgx1te",
    "motionDurationRefreshOnlyAmbient": "--motion-duration-refresh-only-ambient-seyrg7",
    "motionDurationRefreshOnlyFast": "--motion-duration-refresh-only-fast-addxjd",
    "motionDurationRefreshOnlyMedium": "--motion-duration-refresh-only-medium-5flen2",
    "motionDurationRefreshOnlySlow": "--motion-duration-refresh-only-slow-6gdedh",
    "motionDurationRotate180": "--motion-duration-rotate-180-ofa1ir",
    "motionDurationRotate90": "--motion-duration-rotate-90-ux18sr",
    "motionDurationShowPaced": "--motion-duration-show-paced-7wspqf",
    "motionDurationShowQuick": "--motion-duration-show-quick-tyaalm",
    "motionDurationSlow": "--motion-duration-slow-0273ow",
    "motionDurationTransitionQuick": "--motion-duration-transition-quick-x85tae",
    "motionDurationTransitionShowPaced": "--motion-duration-transition-show-paced-ai4wlf",
    "motionDurationTransitionShowQuick": "--motion-duration-transition-show-quick-w3nd9c",
    "motionEasingEaseOutQuart": "--motion-easing-ease-out-quart-z687ml",
    "motionEasingRefreshOnlyA": "--motion-easing-refresh-only-a-sy0g8m",
    "motionEasingRefreshOnlyB": "--motion-easing-refresh-only-b-nspng9",
    "motionEasingRefreshOnlyC": "--motion-easing-refresh-only-c-ic6jr0",
    "motionEasingRefreshOnlyD": "--motion-easing-refresh-only-d-j32es6",
    "motionEasingRotate180": "--motion-easing-rotate-180-3rbbga",
    "motionEasingRotate90": "--motion-easing-rotate-90-eoew89",
    "motionEasingShowPaced": "--motion-easing-show-paced-wj4ybn",
    "motionEasingShowQuick": "--motion-easing-show-quick-1fcgbv",
    "motionEasingTransitionQuick": "--motion-easing-transition-quick-lukbd8",
    "motionEasingTransitionShowPaced": "--motion-easing-transition-show-paced-bg1hyg",
    "motionEasingTransitionShowQuick": "--motion-easing-transition-show-quick-uofmlr",
    "motionEasingResponsive": "--motion-easing-responsive-5yj747",
    "motionEasingSticky": "--motion-easing-sticky-yt83ho",
    "motionEasingExpressive": "--motion-easing-expressive-zns6oe",
    "motionDurationResponsive": "--motion-duration-responsive-dvittz",
    "motionDurationExpressive": "--motion-duration-expressive-96gzp7",
    "motionDurationComplex": "--motion-duration-complex-8zbvzy",
    "motionKeyframesFadeIn": "--motion-keyframes-fade-in-9ud20b",
    "motionKeyframesFadeOut": "--motion-keyframes-fade-out-1ayoyt",
    "motionKeyframesStatusIconError": "--motion-keyframes-status-icon-error-ti988k",
    "motionKeyframesScalePopup": "--motion-keyframes-scale-popup-3oea16",
    "sizeCalendarGridWidth": "--size-calendar-grid-width-lxsx0p",
    "sizeControl": "--size-control-n9i4yo",
    "sizeIconBig": "--size-icon-big-cu55wt",
    "sizeIconLarge": "--size-icon-large-9vh494",
    "sizeIconMedium": "--size-icon-medium-fvz0oi",
    "sizeIconNormal": "--size-icon-normal-j1z5fn",
    "sizeTableSelectionHorizontal": "--size-table-selection-horizontal-o8c8gs",
    "sizeVerticalInput": "--size-vertical-input-js5hfh",
    "sizeVerticalPanelIconOffset": "--size-vertical-panel-icon-offset-ti40n4",
    "spaceAlertActionLeft": "--space-alert-action-left-hi50rw",
    "spaceAlertHorizontal": "--space-alert-horizontal-ulbnu9",
    "spaceAlertMessageRight": "--space-alert-message-right-qop1p1",
    "spaceAlertVertical": "--space-alert-vertical-jbva6z",
    "spaceButtonFocusOutlineGutter": "--space-button-focus-outline-gutter-4vaedu",
    "spaceButtonIconFocusOutlineGutterVertical": "--space-button-icon-focus-outline-gutter-vertical-ysj0na",
    "spaceButtonIconOnlyHorizontal": "--space-button-icon-only-horizontal-nidslr",
    "spaceButtonInlineIconFocusOutlineGutter": "--space-button-inline-icon-focus-outline-gutter-f9qjev",
    "spaceButtonModalDismissVertical": "--space-button-modal-dismiss-vertical-r4lx2k",
    "spaceCalendarGridFocusOutlineGutter": "--space-calendar-grid-focus-outline-gutter-v3dwvl",
    "spaceCalendarGridSelectedFocusOutlineGutter": "--space-calendar-grid-selected-focus-outline-gutter-gqgjqz",
    "spaceCardHorizontal": "--space-card-horizontal-di7llb",
    "spaceCodeEditorStatusFocusOutlineGutter": "--space-code-editor-status-focus-outline-gutter-eivtla",
    "spaceContainerContentTop": "--space-container-content-top-fsd8nr",
    "spaceContainerHeaderVertical": "--space-container-header-vertical-zsjhel",
    "spaceContainerHorizontal": "--space-container-horizontal-tlw03i",
    "spaceContentHeaderPaddingBottom": "--space-content-header-padding-bottom-nvqytg",
    "spaceDarkHeaderOverlapDistance": "--space-dark-header-overlap-distance-hfejul",
    "spaceExpandableSectionIconOffsetTop": "--space-expandable-section-icon-offset-top-q2xewd",
    "spaceFieldHorizontal": "--space-field-horizontal-89h2yr",
    "spaceFieldIconOffset": "--space-field-icon-offset-25xih0",
    "spaceFilteringTokenDismissButtonFocusOutlineGutter": "--space-filtering-token-dismiss-button-focus-outline-gutter-itb5fd",
    "spaceFilteringTokenOperationSelectFocusOutlineGutter": "--space-filtering-token-operation-select-focus-outline-gutter-awvnzl",
    "spaceFlashbarActionLeft": "--space-flashbar-action-left-y2z8zt",
    "spaceFlashbarDismissRight": "--space-flashbar-dismiss-right-cbaywa",
    "spaceFlashbarHorizontal": "--space-flashbar-horizontal-ouyk4r",
    "spaceGridGutter": "--space-grid-gutter-0subky",
    "spaceLayoutContentBottom": "--space-layout-content-bottom-kg9l42",
    "spaceLayoutToggleDiameter": "--space-layout-toggle-diameter-hzvqtj",
    "spaceLayoutTogglePadding": "--space-layout-toggle-padding-axl9jr",
    "spaceModalContentBottom": "--space-modal-content-bottom-cecclv",
    "spaceModalHorizontal": "--space-modal-horizontal-ah0xld",
    "spacePanelNavLeft": "--space-panel-nav-left-o5fvw3",
    "spacePanelSideLeft": "--space-panel-side-left-8ozqve",
    "spacePanelSideRight": "--space-panel-side-right-kev4k9",
    "spacePanelSplitTop": "--space-panel-split-top-0y4u4f",
    "spaceSegmentedControlFocusOutlineGutter": "--space-segmented-control-focus-outline-gutter-99x5b9",
    "spaceTableHeaderFocusOutlineGutter": "--space-table-header-focus-outline-gutter-rbx7m7",
    "spaceTabsContentTop": "--space-tabs-content-top-mn4c9x",
    "spaceTableHorizontal": "--space-table-horizontal-mj7h0h",
    "spaceTableHeaderHorizontal": "--space-table-header-horizontal-et2ko8",
    "spaceTableContentBottom": "--space-table-content-bottom-pg6yvn",
    "spaceTableContentTop": "--space-table-content-top-t15dd1",
    "spaceTableEmbeddedContentBottom": "--space-table-embedded-content-bottom-7vc5vt",
    "spaceTableEmbeddedHeaderTop": "--space-table-embedded-header-top-zf07fk",
    "spaceTableFooterHorizontal": "--space-table-footer-horizontal-8o6sk8",
    "spaceTabsFocusOutlineGutter": "--space-tabs-focus-outline-gutter-64zu5e",
    "spaceTextGridVertical": "--space-text-grid-vertical-tj8m1c",
    "spaceScaled2xNone": "--space-scaled-2x-none-5hsg85",
    "spaceScaled2xXxxs": "--space-scaled-2x-xxxs-g2hxk6",
    "spaceScaled2xXxs": "--space-scaled-2x-xxs-40awim",
    "spaceScaled2xXs": "--space-scaled-2x-xs-s844qk",
    "spaceScaled2xS": "--space-scaled-2x-s-9svxjy",
    "spaceScaled2xM": "--space-scaled-2x-m-gikx8n",
    "spaceScaled2xL": "--space-scaled-2x-l-yejodm",
    "spaceScaled2xXl": "--space-scaled-2x-xl-x30c9w",
    "spaceScaled2xXxl": "--space-scaled-2x-xxl-fczkmf",
    "spaceScaled2xXxxl": "--space-scaled-2x-xxxl-lbp35j",
    "spaceScaledNone": "--space-scaled-none-dn9rwf",
    "spaceScaledXxxs": "--space-scaled-xxxs-lo883m",
    "spaceScaledXxs": "--space-scaled-xxs-95dhkm",
    "spaceScaledXs": "--space-scaled-xs-6859qs",
    "spaceScaledS": "--space-scaled-s-cu1hzn",
    "spaceScaledM": "--space-scaled-m-pv0fmt",
    "spaceScaledL": "--space-scaled-l-t03y3z",
    "spaceScaledXl": "--space-scaled-xl-w2t504",
    "spaceScaledXxl": "--space-scaled-xxl-pfgv96",
    "spaceScaledXxxl": "--space-scaled-xxxl-ffokcj",
    "spaceStaticXxxs": "--space-static-xxxs-k3qmdh",
    "spaceStaticXxs": "--space-static-xxs-jy4jgd",
    "spaceStaticXs": "--space-static-xs-9adq92",
    "spaceStaticS": "--space-static-s-phfs7n",
    "spaceStaticM": "--space-static-m-pc0uz7",
    "spaceStaticL": "--space-static-l-t7yjdj",
    "spaceStaticXl": "--space-static-xl-g2lpmk",
    "spaceStaticXxl": "--space-static-xxl-m6qwv3",
    "spaceStaticXxxl": "--space-static-xxxl-66ty0h",
    "spaceNone": "--space-none-5rtv4g",
    "spaceXxxs": "--space-xxxs-k2w98v",
    "spaceXxs": "--space-xxs-ynfts5",
    "spaceXs": "--space-xs-rsr2qu",
    "spaceS": "--space-s-hv8c1d",
    "spaceM": "--space-m-17eucw",
    "spaceL": "--space-l-4vl6xu",
    "spaceXl": "--space-xl-a39hup",
    "spaceXxl": "--space-xxl-2nvmf1",
    "spaceXxxl": "--space-xxxl-bo9z7f",
    "shadowContainer": "--shadow-container-fx563k",
    "shadowContainerStacked": "--shadow-container-stacked-jfo2nn",
    "shadowContainerActive": "--shadow-container-active-l4kuxc",
    "shadowDropdown": "--shadow-dropdown-99h0gz",
    "shadowDropup": "--shadow-dropup-11esug",
    "shadowFlashCollapsed": "--shadow-flash-collapsed-d4s4kz",
    "shadowFlashSticky": "--shadow-flash-sticky-xplpiu",
    "shadowModal": "--shadow-modal-3qhlqt",
    "shadowPanel": "--shadow-panel-gp3bf2",
    "shadowPanelToggle": "--shadow-panel-toggle-3fk0ch",
    "shadowPopover": "--shadow-popover-kzy6rd",
    "shadowSplitBottom": "--shadow-split-bottom-otfetg",
    "shadowSplitSide": "--shadow-split-side-qv353u",
    "shadowSticky": "--shadow-sticky-aijlo6",
    "shadowStickyEmbedded": "--shadow-sticky-embedded-qit8ba",
    "shadowStickyColumnFirst": "--shadow-sticky-column-first-h2plme",
    "shadowStickyColumnLast": "--shadow-sticky-column-last-s13kkz"
  }
};
