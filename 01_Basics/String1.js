let str = "hello world";
let upperStr ="";

for(let i=0; i<str.length;i++){
    let char = str[i];
    let code = char.charCodeAt[0];
     if(code>=97 && code<=122){
        upperStr+=String.fromCharCode(code-32);
     }
     else{
        upperStr +=char
     }
}
console.log(upperStr);
