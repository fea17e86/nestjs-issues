This repository shows how module injection, based on the [@nestjs/mongoose](https://github.com/nestjs/mongoose) solution, results in an exception:

```
[ExceptionHandler] Nest can't resolve dependencies of the TWEETS_RECEIVER (?). Please make sure that the argument at index [0] is available in the MessagingModule context.

Error: Nest can't resolve dependencies of the TWEETS_RECEIVER (?). Please make sure that the argument at index [0] is available in the MessagingModule context.
     at Injector.lookupComponentInExports (C:\Workspace\fea17e86\nestjs-issues\node_modules\@nestjs\core\injector\injector.js:180:19)
     at processTicksAndRejections (internal/process/next_tick.js:81:5)
     at process.runNextTicks [as _tickCallback] (internal/process/next_tick.js:51:3)
     at Function.Module.runMain (internal/modules/cjs/loader.js:804:11)
     at internal/main/run_main_module.js:21:11
```

In the [tutorial on how to use Mongoose](https://docs.nestjs.com/techniques/mongodb) you can see the same pattern, while MongooseModule.forRoot = MessagingModule.forConnection and MongooseModule.forFeature = MessagingModule.forReceiver.