const fs=require('fs')
fs.readFile('n1.txt','utf-8',(err,data)=>{
if(err)
    throw err;
  else
  console.log(data);
})

console.log("chitaa")

fs.readFileSync('n1.txt','utf-8')
console.log(data)

console.log("bagam bag")