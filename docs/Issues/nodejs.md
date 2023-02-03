# nodejs 问题记录

- 问题描述: `SyntaxError: Cannot use import statement outside a module`

  - 解决方案: 在 package.json 文件添加 `type:"module"` 配置
  - 参考资料 1: https://juejin.cn/post/6898738304754286605
  - 参考资料 2: https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module
  - 参考资料 3: https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js
  - 参考资料 4: https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import

  ```txt
  [摘自参考2]

  Verify that you have the latest version of Node.js installed (or, at least 13.2.0+). Then do one of the following, as described in the documentation:

  Option 1
  In the nearest parent package.json file, add the top-level "type" field with a value of "module". This will ensure that all .js and .mjs files are interpreted as ES modules. You can interpret individual files as CommonJS by using the .cjs extension.

  // package.json
  {
    "type": "module"
  }

  Option 2
  Explicitly name files with the .mjs extension. All other files, such as .js will be interpreted as CommonJS, which is the default if type is not defined in package.json.

  -----

  [摘自参考3]

  Node.js >= v13
  It's very simple in Node.js 13 and above. You need to either:
  Save the file with .mjs extension, or
  Add { "type": "module" } in the nearest package.json.
  You only need to do one of the above to be able to use ECMAScript modules.

  Node.js <= v12
  If you are using Node.js version 9.6 - 12, save the file with ES6 modules with .mjs extension and run it like:
  node --experimental-modules my-app.mjs

  -----

  [摘自参考4]

  Node 13+ Since Node 13, you can use either the .mjs extension, or set {"type": "module"} in your package.json. You don't need to use the --experimental-modules flag. Modules is now marked as stable in node.js

  Node 12 Since Node 12, you can use either the .mjs extension, or set "type": "module" in your package.json. And you need to run node with the --experimental-modules flag.

  Node 9 In Node 9, it is enabled behind a flag, and uses the .mjs extension.
  node --experimental-modules my-app.mjs
  ```
