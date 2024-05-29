# eslint-config-strict-check
- Strict config for eslint.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-strict-check
```

### Each to use for `eslint.config.mjs`

<details>

#### Use for TypeScript

```javascript
// eslint.config.mjs
import eslintConfigStrictCheck from "eslint-config-strict-check"

export default [
    ...eslintConfigStrictCheck.config.typescript,
]
```

#### Use for TypeScript with Jest

```javascript
// eslint.config.mjs
import eslintConfigStrictCheck from "eslint-config-strict-check"

export default [
    ...eslintConfigStrictCheck.config.typescriptMax,
]
```

#### Use for React with TypeScript

```javascript
// eslint.config.mjs
import eslintConfigStrictCheck from "eslint-config-strict-check"

export default [
    ...eslintConfigStrictCheck.config.react,
]
```

#### Use for React with TypeScript, Jest, Storybook

```javascript
// eslint.config.mjs
import eslintConfigStrictCheck from "eslint-config-strict-check"

export default [
    ...eslintConfigStrictCheck.config.reactMax,
]
```

#### Use for Next.js with TypeScript

This is the same settings as react config currently.<br>
Because, have an error when extends eslint-config-next.

```javascript
// eslint.config.mjs
import eslintConfigStrictCheck from "eslint-config-strict-check"

export default [
    ...eslintConfigStrictCheck.config.next,
]
```

#### Use for Next.js with TypeScript, Jest, Storybook

This is the same settings as reactMax config currently.<br>
Because, have an error when extends eslint-config-next.

```javascript
// eslint.config.mjs
import eslintConfigStrictCheck from "eslint-config-strict-check"

export default [
    ...eslintConfigStrictCheck.config.nextMax,
]
```

</details>

### Each to use for `.eslintrc.js`

<details>

#### Use for TypeScript

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/legacy"] // or ["strict-check/legacy-typescript"]
}
```

#### Use for TypeScript with Jest

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/legacy-typescript-max"]
}
```

#### Use for React with TypeScript

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/legacy-react"]
}
```

#### Use for React with TypeScript, Jest, Storybook

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/legacy-react-max"]
}
```

#### Use for Next.js with TypeScript

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/legacy-next"]
}
```

#### Use for Next.js with TypeScript, Jest, Storybook

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/legacy-next-max"]
}
```

### Each to use for `eslint.config.js`

</details>

## Used config, plugin ( alphabetical )
### config
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)

### plugin
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-storybook](https://www.npmjs.com/package/eslint-plugin-storybook)
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
- [eslint-plugin-strict-check](https://www.npmjs.com/package/eslint-plugin-strict-check)

## Recommended, but not includes
### plugin
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)

## License
- [MIT](LICENSE)
- This is includes the work that is distributed in the Apache License 2.0.
