var os = require('os');

var messege  = 'Here Is Some Information About Your System';

var sysArray = new Array('Type : '+ os.type(),
                         'Node Version : '+ process.version,
                         'Platform : '+ os.platform(),
                         'Host Name : '+ os.hostname(),
                         'Total Memory :'+ os.totalmem(),
                         'Free Memory :'+ os.freemem(),
                         'Up Time :' + os.uptime()
		
			);
                
console.log(messege);

var arrLen = sysArray.length;

var i=0;

while(i < arrLen){
    
    console.log(sysArray[i]);
    i++;
}

