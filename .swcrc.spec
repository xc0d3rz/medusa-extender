{
  "test": [".*.ts$"],
  "exclude": ["node_modules/", "dist", ".*.js$", ".*.map$"],
  "sourceMaps": true,
  "inlineSourcesContent": true,
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": false,
      "decorators": true,
      "dynamicImport": true,
      "minify": false
    },
    "target": "es2017",
    "keepClassNames": true,
    "transform": {
      "legacyDecorator": true,
      "decoratorMetadata": true
    },
    "baseUrl": "."
  },
  "module": {
    "type": "commonjs",
    "strict": true,
    "strictMode": true,
    "lazy": false,
    "noInterop": true
  }
}