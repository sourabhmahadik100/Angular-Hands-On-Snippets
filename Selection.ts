function sequence()
{
    console.log("Demonstration of Sequence");
    var arr : number[] = [10,20,30,40];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
}

//sequence();

function iteration1()
{
    console.log("Demonstration of Iteration");
    var arr : number[] = [10,20,30,40];
    var iCnt : number = 0,iSum = 0;
    for(iCnt = 0; iCnt < arr.length; iCnt++ )
    {
        iSum = iSum + arr[iCnt];
    }
    console.log("The sum of the numbers in arr is: "+ iSum);
}

//iteration1();

function iteration2()
{
    console.log("Demonstration of Iteration");
    var arr : number[] = [10,20,30,40];
    var iCnt : number = 0,iSum = 0;
    for(iCnt = 0; iCnt < arr.length; iCnt++ )
    {
        iSum = iSum + arr[iCnt];
    }
    console.log("The sum of the numbers in arr is: "+ iSum);
}

//iteration2();

function iteration3()
{
    console.log("Demonstration of Iteration3");
    var arr : number[] = [10,20,30,40];
    var iValue : number = 0,iSum = 0;
    for(iValue of arr)
    {
        iSum = iSum + iValue;
    }
    console.log("The sum of the numbers in arr is: "+ iSum);
}

//iteration3();

function iteration4()
{
    console.log("Demonstration of Iteration4");
    var arr : number[] = [10,20,30,40];
    var iSum : number = 0;
    console.log("Here we deal with Index of array");
    for(var iIndex in arr)
    {
        iSum = iSum + arr[iIndex];
    }
    console.log("The sum of the numbers in arr is: "+ iSum);
}

//iteration4();

function iteration5()
{
    console.log("Demonstration of Iteration5");
    var arr : number[] = [10,20,30,40];
    var iCnt : number = 0,iSum = 0; //1
    // for(iCnt = 0; iCnt < arr.length; iCnt++ )
    // {
    //     iSum = iSum + arr[iCnt];
    // }
    while(iCnt < arr.length)    //2
    {
        iSum = iSum + arr[iCnt];//4
        iCnt++;                 //3
    }
    console.log("The sum of the numbers in arr is: "+ iSum);
}

//iteration5();

function iteration6()
{
    console.log("Demonstration of Iteration6");
    var arr : number[] = [10,20,30,40];
    var iCnt : number = 0,iSum = 0; //1
    // while(iCnt < arr.length)    //2
    // {
    //     iSum = iSum + arr[iCnt];//4
    //     iCnt++;                 //3
    // }
    do
    {
        iSum = iSum + arr[iCnt];//4
        iCnt++;                 //3
    }while(iCnt < arr.length);
    console.log("The sum of the numbers in arr is: "+ iSum);
}

//iteration6();

function Compare(iNo1 : number, iNo2 : number)
{
    if(iNo1 < iNo2)
    {
        console.log("number 1 is less than number 2 ");
    }else if(iNo1 > iNo2)
    {
        console.log("number 1 is greater than number 2 ");
    }else if(iNo1 == iNo2)
    {
        console.log("number 1 is equal to number 2 ");
    }
}

//Compare(100,100);

function MyDate(iNo : number){
    if(iNo == 1)
    {
        console.log("Monday");
    }else if (iNo == 2)
    {
        console.log("Tuesday");
    }else if (iNo == 3)
    {
        console.log("Wednesday");
    }else if (iNo == 4)
    {
        console.log("Thursday");
    }else if (iNo == 5)
    {
        console.log("Firday");
    }else if (iNo == 6)
    {
        console.log("Saturday");
    }else if (iNo == 7)
    {
        console.log("Sunday");
    }else 
    {
        console.log("Invalid input");
    }
}

//MyDate(6);

function MyDate2(iNo : number)
{
    switch(iNo)////Switch case uses JUMP TABLE internally for its execution
    {
        case 1: 
            console.log("Monday");
            break;
        case 2: 
            console.log("Tuesday");
            break;    
        case 3:
            console.log("Wednesday");
            break; 
        case 4:
            console.log("Thursday");
            break; 
        case 5:
            console.log("Friday");   
            break; 
        case 6:
            console.log("Saturday");
            break; 
        case 7:
            console.log("Sunday");    
            break; 
        default:
            console.log("Invalid input");                 
    }
}

MyDate2(6);