# TypeScript Getting Started


- TypeScript Compiler
- Installing the Compiler
- Configuring the compiler

## Installing the Compiler
```sh
npm install typescript --save-dev
```

The compiler is installed in the `node_modules` directory and can be run with: `npx tsc`.



## Configuring the compiler


You can have TypeScript create `tsconfig.json` with the recommended settings with:

```sh
npx tsc --init
```


```
Created a new tsconfig.json with:
TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
  ```

You can learn more at [https://aka.ms/tsconfig.json](https://aka.ms/tsconfig.json)