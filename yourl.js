import url from 'url'
const urlSt ='http://www.google.com/search?q=oombu';
//URL Object
const urlOO = new URL(urlSt);
console.log (urlOO)

//Format()

console.log (url.format(urlOO))

//fileURLToPath

console.log(fileURLToPath (import.meta.url));



