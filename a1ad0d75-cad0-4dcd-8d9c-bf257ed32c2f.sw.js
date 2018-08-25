var d = new Date();
var _ck = d.getDate()+"-"+ d.getMonth()+"-"+ d.getFullYear()+"-"+ d.getHours();

var swUrl = 'https://v1.zopush.com/a1ad0d75-cad0-4dcd-8d9c-bf257ed32c2f.sw.js';
importScripts (swUrl+"?_="+_ck);
