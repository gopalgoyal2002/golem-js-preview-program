// const {exec} = require('child_process')
import {exec} from 'child_process'

function get_speech(query,id){
    // console.log(query)
    exec(`espeak ${query} -w output/result${id}.wav && ffmpeg -i output/result${id}.wav output/result${id}.mp3`,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
}

export {get_speech}