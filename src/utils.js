import React from "react";

// The theme context.
export const ThemeContext = React.createContext(null);

// Return one of the values of the array.
export function oneOf(array) {
  return array[Math.floor(Math.random() * Math.floor(array.length))];
}

let uuid = 3;
// Generate 3 items.
export function generateItems() {
  const items = [];
  const random = [];
    function randomNum(){
        return Math.floor(Math.random()*6);
    }

  for (let ran =0; ran <=7; ran++){
    if(ran%2==0){
        do{
           var ran1=randomNum(); 
        }
        while(ran1<5)
        random.push(ran1);
    }
    else{
        var setRandom = Math.floor(Math.random()*6);
        if (random[ran-1]>setRandom){

        }
    }
  }
  console.log(random);
  for (let i = 0; i < 24; i++) {
    const color = oneOf(["green", "blue"]);

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const number ="1234567890";
    const title = oneOf(number) + oneOf(number);
    const id = uuid++;

    items.push({ id, color, title });
  }

  return items;
}
