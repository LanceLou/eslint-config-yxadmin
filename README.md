# eslint-config-yxadmin

This package provides yx's .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules，including ECMAScript 6+ react and Angular(not 2)。It requires eslint, babel-eslint, eslint-config-standard, eslint-plugin-react, eslint-plugin-standard, eslint-plugin-import, eslint-plugin-node, eslint-plugin-promise.

It's too much, yeah? not bad。 

***first***, you can run npm info to show the correct versions of each package.

```
npm info "eslint-config-yxadmin" peerDependencies
```

***and then***, just one commant required:

```
(
  export PKG=eslint-config-yxadmin;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

***maybe***, there are also some packages required by eslint-plugin-angular, some commant to you。

```
npm install --save-dev eslint-plugin-import eslint-plugin-node eslint-plugin-promise
```

have fun!


