module.exports = {
  contextSeparator: '_',
  createOldCatalogs: false,
  defaultNamespace: 'translation',
  defaultValue: '',
  indentation: 2,
  keepRemoved: false,
  keySeparator: true,
  lexers: {
    js: ['JsxLexer'], // if you're writing jsx inside .js files, change this to JsxLexer
    default: ['JsxLexer'],
  },
  lineEnding: 'auto',
  locales: ['en', 'de'],
  namespaceSeparator: false,
  output: './public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.js'],
  reactNamespace: false,
  sort: false,
  useKeysAsDefaultValue: false,
  verbose: false,
}
