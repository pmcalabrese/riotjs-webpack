module.exports = {
  // replacePrefix: "riotjs-webpack",
  dynamicUrlToDependencies: {
    '/': [
      'src/index.html',
      'src/navigation/navigation.tag.html',
      'src/navigation/navigation.tag.js',
      'src/app/app.tag.html',
      'src/app/app.tag.js'
    ],
    '/#/': [
      'src/index.html',
      'src/navigation/navigation.tag.html',
      'src/navigation/navigation.tag.js',
      'src/app/app.tag.html',
      'src/app/app.tag.js'
    ],
    '/#/another': [
      'src/index.html',
      'src/navigation/navigation.tag.html',
      'src/navigation/navigation.tag.js',
      'src/another/another.tag.html',
      'src/another/another.tag.js'
    ]
  },
  staticFileGlobs: [
    '**.css',
    '**.chunk.js',
    'bundle.js'
  ]
};