let list = ["Audi","Honda","BMW"];
let newList = [...list];//list operator it add all of one array to another here from
let new2=[...list,'Farari'];

console.log(newList);
console.log(new2);

// now in objects

let person={
    name:"aron",
    age: 20
}
let personCity ={
    ...person,
    city:'Dhulikhel',
}
console.log(personCity);


function hello(a,b,c){
    let s =a+b+c;
    console.log(s);

}

hello(1,2,3);

function rest(...all){
    console.log(all);
    let a=1;
    all.forEach(element=>{
        a = a*element
    });
    console.log("Multiply",a);

}

rest(2,3,4,5);
rest(1,2,3);