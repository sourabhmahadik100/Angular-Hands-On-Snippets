// console.log("Jay Ganesh!!");

// var no : number = 11;
// console.log("value of no is ", no);
// console.log("Datatype of no is ", typeof no);

// var str : string = "Angular";
// console.log(typeof str);
// console.log("Datatype of no is ", typeof str);

// var value : boolean = false;
// console.log("value is ", value);
// console.log("Datatype of no is ", typeof value);

// var val;
// console.log("value is ", val);
// console.log("Datatype of no is ", typeof val);

// //var arrayName : datatypeName = [value/values];
// var batches  = ["PPA","LB",11000,"Angular"];
// console.log("Our array batches has " , batches );
// console.log("First element ",batches[0]," second element ",batches[1], "third element ",batches[2]);
// batches[4] = "Python";
// console.log("Fourth element ", batches[4]);
// batches[4] = "Python22";
// console.log("Fourth element ", batches[4]);
// console.log("Length of the array is  "+ batches.length);
// var arr : any[] = [10,20,30];
// arr[3] = "Hello";
// console.log("Our array is ",arr);

//********************constant arr is mutable *******************************
// const brr : number[] = [10,20,30];

// brr[1] = 33;

// console.log(brr);

//***** How to write a function */
//**Function is considered as a service provider */
// Below function is just a service provider : Doesn't take anything and give anything
// function fun(){
//     console.log("Inside fun");
// }

// fun();

// //Below function  takes 2 params and displays output on console /// ithe khalche params na positional arguments mhantat
// function Addition( num1 : number , num2 : number){
//     var ans: number = 0;
//     ans = num1 + num2 ; 

//     console.log("The Addition is " , ans);
//     console.log(i);
//     console.log(j);
// }
// //Below variables are not limited to any scope hence they can be accessible anywhere //extern variable C mdhe
// var i : number = 10;
// var j : number = 11;
// Addition(i,j);

////****** rest params ==> ellipses in C by Dennis Ritchie in 1960s */
function fun(...data:any[]){
    console.log(data);
}

fun(10,20,30,40,50,"Hello");


