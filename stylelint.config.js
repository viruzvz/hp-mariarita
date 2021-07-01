module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  rules: {
    'max-nesting-depth': 2,
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-max-compound-selectors': 2,
    'selector-max-specificity': '0,2,1',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'at-rule-empty-line-before': [
      'always', {
        except: [
          'first-nested'
        ],
        ignore: ['after-comment', 'blockless-after-blockless']
      }
    ]
  }
}
