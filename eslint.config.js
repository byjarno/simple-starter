const globals = require('globals')
const js = require('@eslint/js')

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser
            }
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error"
        }
    }
]