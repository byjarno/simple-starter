const mix = require('laravel-mix')
const path = require('path')

// Extensions
require('laravel-mix-eslint')
require('laravel-mix-stylelint')

// Browser Sync
mix.browserSync({
    server: true
})

// General
mix.setPublicPath('assets')
    .options({ processCssUrls: false })

// JS
mix.js('src/js/app.js', 'js').eslint({
    overrideConfigFile: path.resolve(__dirname, 'eslint.config.js'),
    configType: 'flat'
})

// CSS
mix.sass('src/scss/app.scss', 'css')
    .stylelint({
        configFile: path.join(__dirname, '.stylelintrc'),
        context: path.join(__dirname, './src/scss')
    })