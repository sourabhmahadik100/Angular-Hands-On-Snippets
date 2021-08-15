class Base 
{
    no1 : number;
    no2 : number;

    constructor()
    {
        console.log("Base class constructor");
        this.no1 = 10;
        this.no2 = 20;
    }

    fun()
    {
        console.log("Inside Base fun");
    }
}

var bObj : Base = new Base();
console.log("No1 : ", bObj.no1);
console.log("No2 : ", bObj.no2);

var bObj2 : Base = new Base();
console.log("No1 2: ", bObj2.no1);
console.log("No2 2: ", bObj2.no2);