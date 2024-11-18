const myImage=document.querySelector("img");
myImage,onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/catie.jpg"){
        myImage.setAttribute("src","images/catie2.webp");
    }
    else{
        myImage.setAttribute("src","image/catie.jpg");
    }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName(){
    const myName=prompt("please enter your name");
    if(!myName){
      setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHeading.textContent=`rip,${myName}`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent=`rip,${storedName}`;
}

myButton.onclick=function(){
    setUserName();
};