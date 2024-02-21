 let keys=document.querySelectorAll(".keys");
let input=document.querySelector("input");
let str="";

let arr=Array.from(keys);
arr.forEach((b)=>{
    b.addEventListener("click",(e)=>{
        if(e.target.innerText=="="){
            str=eval(str);
            input.value=str;
        }
        else if(e.target.innerText=="DEL"){
            str=str.substring(0,str.length-1);
            input.value=str;
        }
        else if(e.target.innerText=="AC"){
            str="";
            input.value=str;
        }
        
        else{
            str+=e.target.innerText;
            input.value=str;
        }
    })
})