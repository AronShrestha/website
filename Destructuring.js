//Array Destructuring

let list =['Audi','Bmw','Honda'];
let [car1,car2,car3]  =list;

console.log(car1);

//Object destructuring

const p={
    name :'Aron',
    age:20,
}
console.log(p.age)
let {name ,age} = p
console.log(age)


//Reference(array,object) and primitive type(string,number)

let num1 = 100;
let num2 = num1;
console.log(num1,num2);
num2 = 200;
console.log(num1,num2);
let ar1=['aron','shrestha']
let ar2 = ar1;
console.log(ar1,ar2);
ar2 =['Ashesh','Shrestha'];
console.log(ar1,ar2);

let person ={
    name :"Aron",
}
let person2 = person;
console.log(person,person2);
person2.name='Ashesh';
console.log(person,person2);

let ar3=['aron','shrestha']
let ar4 = ar3;
console.log(ar3,ar4);
ar4[0] =['Ashesh'];
console.log(ar3,ar4);


//map 
let array1 = [2,5,7,10];
let array2 = array1.map(function(x){
    return x*2;
})
let array3 = array1.map((x)=>{
    return x*x;
})
let array4 = array1.map(x=> x*3)
console.log(array2);
console.log(array3);
console.log(array4);
let array6 = array1.filter(function(x){
    if (x%2==0){
        return x;
    }
})
let array5 = array1.filter(x=> x%2 == 0 )
console.log(array5);
console.log(array6);