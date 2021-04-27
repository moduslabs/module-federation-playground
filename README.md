# Webpack 5 Module Federation Playground

### Getting started

1. Navigate to every app folder and `npm i`
2. Run `npm run serve` for each app
3. Navigate to [https://localhost:3000](https://localhost:3000)

### Detecting version of React

1. Make sure you have React DevTools
2. Start the app. Open the Console
3. Run the following code:

```js
__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers.forEach((r) =>
  console.log(`${r.rendererPackageName}: ${r.version}`)
);
```
