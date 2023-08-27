# eslint-config-strict-check
- Strict config for eslint.

## How to use
### Installation

```shell
$ yarn add -D eslint-config-strick-check
```

### Each to use
#### Use for TypeScript

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check"] // or ["strict-check/typescript"]
}
```

#### Use for TypeScript with Jest

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/typescript-max"]
}
```

#### Use for React with TypeScript

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/react"]
}
```

#### Use for React with TypeScript, Jest, Storybook

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/react-max"]
}
```

#### Use for Next.js with TypeScript

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/next"]
}
```

#### Use for Next.js with TypeScript, Jest, Storybook

```javascript
// .eslintrc.js
module.exports = {
    extends: ["strict-check/next-max"]
}
```

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

## License
- [MIT](LICENSE)
- This is includes the work that is distributed in the Apache License 2.0.
