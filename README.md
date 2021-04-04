## How to use me:

The following npm scripts are available:

```
"start": "node ./src/server/app.js",
"start:dev": "nodemon --ignore 'www/' --exec npm run build:dev",
"build": "webpack --config ./config/webpack.config.js",
"build:dev": "webpack --config ./config/webpack.config.js && node ./src/server/app.js",
"test": "jest --forceExit"
```

#### before you can run the app it needs to be build.
run ```npm run build``` first or simply start with ```npm run start:dev```

After the initial build a www folder is created. 
Now a ```npm start``` will work too.