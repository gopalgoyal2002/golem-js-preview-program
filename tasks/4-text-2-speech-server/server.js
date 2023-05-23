import express from 'express'
import { TaskExecutor } from "yajsapi";
// var exec = require('child_process').exec;
import { get_speech } from "./index.js";

const app = express();

const port = 3000;

app.get('/tts', function(req, res){
    // const q = req.query.q; 
    // const query = req.query
    // body=res.body.json()
   
    
    (async function main() {
        
        var query=(req.query)
        var q=req.query.q
        var id="test"
        try{
          id=req.query.id
        }
        catch{
          id="test"
        }
        
        res.send('query: ' +q+id);
        const executor = await TaskExecutor.create("b4cb575a2010a0ca37a9ea555d8384ea20af6a81580aa6469339ab1f");
        await executor.run(async (ctx) => {
          // TODO execute espeak command
          get_speech(q,id)
          
        });
        await executor.end();
      })();
    //   res.send('query: ' +q+id);
        // res.send('query id: ' + query.id);

      
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 