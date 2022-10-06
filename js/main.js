function alertFun(){
    alert("hello");
}

const alrt=setTimeout(alertFun,5000);

function mylist(){
    let list=document.getElementById("list");
    list.innerText="kandan";
}

const mytime=setTimeout(mylist, 10000);

function repeatName(){
    let name=document.getElementById("ramm");
    name.innerText="ramm";
}

const reptname=setInterval(repeatName,2000);

var nam=[];

nam[0]="mani";
nam[1]="ranjith";
nam.push("ramm");
nam.unshift("kandan");
nam.splice(1,0,"ramesh","kumar");

console.log(nam);
