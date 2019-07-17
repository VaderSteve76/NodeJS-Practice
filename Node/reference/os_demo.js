const os = require('os');

// Get which os info
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Home Dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());