// OS modules

const { log } = require('console');
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user)
//method returns the system uptime in seconds
console.log(`the System Updtime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)