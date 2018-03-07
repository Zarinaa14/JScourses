 var str = "<select>+375445096322 d 80445472035 https://ssl.mango.com/by , Kizhevatov 21, https://www.mustang-jeans.com/de-DE/ <a></a> <form> <input/> http://ssl.mango.com/by  , Miroshnichenko 2 ,<br/> ,Брыля 24 5096411 Platonova 8"
var telephone = str.match (/(\80)?(\+375)?\s?[\s\(]?(29|33|44|25)?[\s\)]?\s?([0-9]{3})[\s-]?([0-9]{2})[\s-]?([0-9]{2})/g);
var site =  str.match( /[\https\http\ftp]{3,5}[\:]?[\.]?[\//]?[\a-z\.\/\-]{2,}[\.]?[a-z\/\-\A-Z]{2,}/g);
var teg = str.match(/(\<)(\/)?[a-z]{1,}(\/)?(\>)/g);
var adress = str.match(/[a-zA-Z]{1}[a-z]{1,}[\ ]?[\ ]?[0-9]{1,2}/g);
console.log(telephone);
console.log(teg);
console.log(adress);
console.log(site);