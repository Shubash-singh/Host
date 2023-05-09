document.getElementById("parent").innerHTML=("something Else");
document.getElementById("parent").style.cssText=("background-color:red; color:black; text-align:centre");
document.getElementsByClassName("exercise")[0].innerHTML=("i am class selector");
document.getElementsByClassName("parent1")[0].style.cssText=("background-color:aque; color:brewn");
document.getElementsByClassName("exercise")[2].innerHTML=("i am ok");
document.getElementsByTagName("h1")[0].style.cssText=("background-color:pink; color:white");

document.querySelector("h2").style.cssText=("text-align:center; text-transform:uppercase")

const change =  document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("i am Shubash Singh");
}

function myFunction(){
    document.open();
    document.write("<h1>Hello world</h1>");
    document.close();
}