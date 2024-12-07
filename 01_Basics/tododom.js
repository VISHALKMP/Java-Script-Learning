let btn = document.querySelector('button');
let inp = document.querySelector("input")
let ul = document.querySelector("ul");


btn.addEventListener("click" , function (){

    var item = document.createElement('li')
    item.innerText = inp.value;
    item.setAttribute("style","color:black; font-size:36px;")
var delBtn = document.createElement('button');
delBtn.innerText = "delete";
delBtn.classList.add("delete");

delBtn.addEventListener("click", function(){

ul.removeChild(item);

});
item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";   
})

let btndel = document.querySelectorAll('.delete');
for(delBtn of btndel){
    delBtn.addEventListener("click", function (){
     let par = this.parentElement;
  
     par.remove();
     
    })
    
};
