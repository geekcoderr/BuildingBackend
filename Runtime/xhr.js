const XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;

var xhr = new XMLHttpRequest();
url='https://api.github.com/users/sakshimahi';
// xhr.open('GET',url,true);

// xhr.onload=function(){
//     if(xhr.status>=200 && xhr.status<300){
        
//         console.log(xhr.status);
//         console.log(JSON.parse(xhr.responseText));
        
//     }
//     else{
//         console.log('Error Occured with status '+xhr.statusText+' and CODE '+ xhr.status);
//     }
// }

// xhr.onerror=function(){
//     console.error('Request Error');
// }

// xhr.send();

xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
var data = JSON.stringify({ key: 'value' });
xhr.send(data);
