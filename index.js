const review=[
    {
        id: 1,
        person:"Sammer Pertu",
        img: src="./img/pic1.jpg",
        text:"Trip Threads made my first solo trip so smooth! I planned everything in minutes – from hotels to budget. It felt like having a personal travel assistant the whole time. Loved it! ⭐⭐⭐⭐⭐"  ,
    },
    {
        id: 2,
        person:"Alina Grande",
        img: "./img/pic2.jpg",
        text:"Absolutely amazing platform! I used Trip Threads for a group trip to the Northern Areas and the itinerary planner kept us so organized. We didn’t miss a single spot on our bucket list! ⭐⭐⭐⭐",
    },
    {
        id: 3,
        person:"Burak Samen",
        img: "./img/pic3.jpg",
        text: "I’m obsessed with how easy it is to manage trip budgets here! No stress, no overspending – just perfect planning. Trip Threads truly makes travel smarter and easier. ⭐⭐⭐⭐⭐",
    }
]
const img=document.getElementsByClassName("image-tag")[0];
const person=document.getElementsByClassName("name")[0];
const text=document.getElementsByClassName("para")[0];
const prevb=document.querySelector(".left");
const nextb=document.querySelector(".right");
let currentitem=0;
window.addEventListener("DOMContentLoaded",function() {
show();

});
function show(){
    const item=review[currentitem];
    img.src= item.img;
    person.textContent=item.person;
    text.textContent=item.text;
    
    };
nextb.addEventListener("click",function(){ currentitem++;
    if(currentitem>review.length-1){
        currentitem=0;
    }
    show();
});
prevb.addEventListener("click",function(){ 
    currentitem--;
    if(currentitem<0){
        currentitem=review.length-1;
    }
    show();
});
