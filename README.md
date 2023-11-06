# express-esbuild

```
Output: 

npm run app:build

> express-esbuild@1.0.0 app:build 
> rm -rf ./dist && node esbuild.js

Build successful: {
  errors: [],
  warnings: [],
  outputFiles: undefined,
  metafile: {
    inputs: {
      'src/app.process.ts': [Object],
      'src/app.terminator.ts': [Object],
      'src/app.ts': [Object],
      'src/common/builder/error-response.builder.ts': [Object],  
      'src/common/builder/success-response.builder.ts': [Object],
      'src/common/interface/config.interface.ts': [Object],      
      'src/common/interface/route.interface.ts': [Object],       
      'src/config/app/app.dev.ts': [Object],
      'src/config/app/app.pro.ts': [Object],
      'src/config/index.ts': [Object],
      'src/exception/app.exception.ts': [Object],
      'src/exception/custom.exception.ts': [Object],
      'src/exception/handler.exception.ts': [Object],
      'src/exception/interface/exception.interface.ts': [Object],
      'src/exception/response/client.exception.ts': [Object],    
      'src/exception/response/server.exception.ts': [Object],    
      'src/index.ts': [Object],
      'src/module/health/health.controller.ts': [Object],        
      'src/module/health/health.route.ts': [Object],
      'src/route/app.route.ts': [Object]
    },
    outputs: {
      'dist/app.process.js': [Object],
      'dist/app.terminator.js': [Object],
      'dist/app.js': [Object],
      'dist/common/builder/error-response.builder.js': [Object],
      'dist/common/builder/success-response.builder.js': [Object],
      'dist/common/interface/config.interface.js': [Object],
      'dist/common/interface/route.interface.js': [Object],
      'dist/config/app/app.dev.js': [Object],
      'dist/config/app/app.pro.js': [Object],
      'dist/config/index.js': [Object],
      'dist/exception/app.exception.js': [Object],
      'dist/exception/custom.exception.js': [Object],
      'dist/exception/handler.exception.js': [Object],
      'dist/exception/interface/exception.interface.js': [Object],
      'dist/exception/response/client.exception.js': [Object],
      'dist/exception/response/server.exception.js': [Object],
      'dist/index.js': [Object],
      'dist/module/health/health.controller.js': [Object],
      'dist/module/health/health.route.js': [Object],
      'dist/route/app.route.js': [Object]
    }
  },
  mangleCache: undefined
}

$ npm run dev:start

> express-esbuild@1.0.0 dev:start
> cross-env ENV_NAME=DEV node dist/index.js

App listening port : 5000
App listening environment : DEV
Process 20036 received SIGINT

http://localhost:5000/api/health
{"status":"healthy"}

Reference

esbuild : An extremely fast bundler for the web
https://esbuild.github.io/

Better Backend DX: Fastify + ESBuild = ⚡️
https://davipon.hashnode.dev/better-backend-dx-fastify-esbuild

How to get esbuild metafile
https://github.com/vitejs/vite/discussions/8416

Visualizing what code is in your web bundle, and how it got there.
use https://bundle-buddy.com/esbuild to analyses

```

