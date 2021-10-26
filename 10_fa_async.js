//syncronous version of fs

const {readFile, writeFile} = require('fs');
// need to provide a callback that says 
// what to do when done
console.log('start')
//because this is a callback, the only way to 
// access the content of the file is within the function
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }else{
        const first = result;
        readFile('./content/second.txt', 'utf8', (err, result)=>{
            if(err){
                console.log(err)
                return;
            }else{
                const second = result;
                writeFile('./content/result-async.txt', 
                `Here is the async result: ${first}, ${second}`, {flag:'a'}, (err, result)=>{
                    if(err){
                        console.log(err)
                        return;
                    }else{
                        console.log('done with this task')
                    }
                })
                
            }
        })
    }
})
// this ends up getting called before "done with this task"
// and opens up the program to do other stuff when it's 
// working on the callback
console.log('starting next task')
