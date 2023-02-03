/*
// Task1
let Room2 = {
    groupMembers:"Izabela, Erekle, Davit, Levan",
    groupName:"Avengers",
    sayWhoWeAre:function () {return "We are "+ this.groupMembers + " and our name is " + this.groupName+ "!";}
};

document.write(Room2.sayWhoWeAre());
*/



// Task2

let drinks = [
    { name: "cola", price: 25 },
    { name: "pepsi", price: 20 },
    { name: "fanta", price: 30 },
    ]; 
    drinks.sort(function (a, b){
      if (a.price > b.price){
        return 1;
      }  
      if (a.price < b.price){
        return -1;
      }  
      return 0;
    });
    console.log(drinks.sort());


//davixmaret google :D