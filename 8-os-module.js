const os = require('os');
const { uptime } = require('process');

//info about current user

const user = os.userInfo()
console.log(user)
//method returns system uptime in sec
console.log(`the system uptime is: ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)