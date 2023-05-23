import { TaskExecutor } from "yajsapi";
// var exec = require('child_process').exec;
import { get_speech } from "./index.js";

(async function main() {
  const executor = await TaskExecutor.create("b4cb575a2010a0ca37a9ea555d8384ea20af6a81580aa6469339ab1f");
  await executor.run(async (ctx) => {
    // TODO execute espeak command
    const query="hi my name is gopal goyal"
    get_speech(query,'2')
    
  });
  await executor.end();
})();


