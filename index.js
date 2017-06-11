module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "angular",
        "react"
    ],
    "env":{
      "browser":true,
      "node":true,
      "commonjs":true,
      "jquery":true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
        }
      },
    "rules":{
      "indent": ["error", 2,{"SwitchCase":1}],
        "quotes": ["error","single"],
      "semi":["error","always"],
      "space-before-function-paren": ["error", {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "ignore"
                }],
        //"no-useless-escape":false ,
      "one-var":["error","never"],
        "no-useless-constructor": 0,

      //angular rules
      "angular/controller-as-vm":["error","always"],
      "angular/controller-as":2,

        // react rules
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/sort-comp": [2, {
            "order": [
                "static-methods",
                "lifecycle",
                "/^handle.+$/",
                "rendering"
            ],
            "groups": {
                "lifecyle": [
                      "displayName",
                      "propTypes",
                      "contextTypes",
                      "childContextTypes",
                      "mixins",
                      "statics",
                      "defaultProps",
                      "constructor",
                      "getDefaultProps",
                      "getInitialState",
                      "state",
                      "getChildContext",
                      "componentWillMount",
                      "componentDidMount",
                      "componentWillReceiveProps",
                      "shouldComponentUpdate",
                      "componentWillUpdate",
                      "componentDidUpdate",
                      "componentWillUnmount"
                ],
                "rendering": [
                    "/^render.+$/",
                    "render"
                ]
            }
        }],
        "react/jsx-handler-names": ["off", {
            "eventHandlerPrefix": "handle",
            "eventHandlerPropPrefix": "on"
        }],
        "react/jsx-key": "off",
        "react/jsx-pascal-case": ["error", {
            "allowAllCaps": true,
            "ignore": []
        }]
    },
    "globals":{
      "angular":true,
        "React": true,
        "$": true,
        "lib": true,
        "ReactDOM": true,
        "ReactRedux": true,
        "ReactRouter": true,
        "Redux": true,
        "jsonData": true,
        "JSON_DATA": true,
        "Swiper": true,
        "process": true,
        "NEJsbridge": true
    },
    "setting":{
      "angular": 2,
        "react": {
            "createClass": "createClass", // Regex for Component Factory to use, default to "createClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "15.0" // React version, default to the latest React stable release
        }
    }
}