
let target  = "kathmandu";

let temperaturefield= document.querySelector(".weather1");

let cityField = document.querySelector(".weather2 p");
let dateField = document.querySelector(".weather2 span");
let iconField= document.querySelector(".weather3 img");
let weatherField= document.querySelector(".weather3 span");
let form = document.querySelector("form");
let input = document.querySelector("#searchField");

const fetchdData = async(target)=>{
    try{

const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=5f1f6961ac4946bcb1124552240408&q=${target}`);

const data = await res.json();

const{current:{temp_c,last_updated,condition:{text,icon}},location:{name,localtime}}=data;

temperaturefield.innerHTML=` ${temp_c}&deg;C`;
cityField.innerHTML= name;

const exactTime = localtime.split(" ")[1];
const exactDate = localtime.split(" ")[0];

const date = new Date();
const day = getDay(date.getDay());



dateField.innerHTML=`${exactTime} ${day} ${exactDate}`;
weatherField.innerHTML= text;
iconField.src= icon;

    }catch(err){
        console.log(err);
    }
}


fetchdData(target);



function getDay(num){
 switch(num){
    case 0:
        return "Sunday";
    case 1:
        return "Monday";
    case 2:
        return "Tuesday";
    case 3:
        return "Wednesday";
    case 4:
        return "Friday";
    case 5:
        return "Saturday"
 }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input.value.trim()==""){
        alert("Enter Location");
    }else{
        target = input.value;
        fetchdData(target);
    }
    
})