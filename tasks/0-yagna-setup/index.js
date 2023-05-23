import { TaskExecutor } from "yajsapi";

(async () => {
   const executor = await TaskExecutor.create("529f7fdaf1cf46ce3126eb6bbcd3b213c314fe8fe884914f5d1106d4");

   const taskToRunOnProvider = async (workerContext) => {
      const commandToRunInProviderShell = "node -v";
      const result = await workerContext.run(commandToRunInProviderShell);
      return result.stdout;
   }

   const taskResult = await executor.run(taskToRunOnProvider);
   await executor.end();

   console.log('Task result:', taskResult);
})();