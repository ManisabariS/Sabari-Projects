// let arr = ['gokul', 'sabari','saran', 'goav', 'dinesh']


//1.conventional for loop
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }

//2.for of

// for( i of arr)
//     console.log(i)

//3.for in loop for arrays

// for( i in arr)
//         console.log(i,arr[i])

//4.for each loop array.forEach ((value,index)=>{})

// let arr2 = arr.forEach((i,j)=>{
//     console.log(i,j, typeof(i))
//    // return i;
// })
// console.log(typeof(arr2))
// console.log((arr2))


//5.maps array.map((value,key)=>{})

// let arr2 =arr.map((i,j)=>{
//     i = `${i} Team`
//     return i;
// })
// console.log(arr2)
// console.log(typeof(arr2))

//6.Reduce array.reduce  ((accumulator, curr element)+>{})

// let accumulator=1;
// let arr2 = arr.reduce((accumulator, i)=>{
//     accumulator+=i
//     return accumulator;
// })
// console.log(arr2)
// console.log(typeof arr2)
// console.log(accumulator)

//7. Filter

// let arr2 = arr.filter((i)=>{
//     if(i.charAt(0)==='s')
//     {
//         return i;
//     }
// })
// console.log(arr2)

//8. Array declaration using new operator 

// let arr3 = new Array();
// arr3.push("hello")
// arr3.push("world")
// console.log(arr3)



// let numArr = [11,22,33,44,55]
// console.log(numArr)

//9. push add a element at last index
// let numArr2 = numArr;
// numArr.push(6)
// console.log(numArr)
// console.log(numArr2)
// numArr2.push(7)
// console.log(numArr)
// console.log(numArr2)

// console.log(numArr.push(8)) //returns its current length

// let var1 = 5;
// let var2 = var1;
// var2=6;
// console.log(var1,var2)

//10. pop remove a element at last index

// numArr.pop()
// console.log(numArr)
//console.log(numArr.pop()) // returns removed value

//11. shift remove a element at 0th index

// numArr.shift()
// console.log(numArr)
// console.log(numArr.shift())
// console.log(numArr)

//12. Unshift add a element at 0th index
// numArr.unshift(456)
// console.log(numArr)
// console.log(numArr.unshift(123))

// console.log(numArr)

//13.splice remove elements at specific index
// first arg - where from to start
// second arg - how many element want to delete

// numArr.splice(3,1)
// console.log(numArr)
// //numArr.push(44)
// let numArr2 = numArr.splice(2,1)
// console.log(numArr)
// console.log(numArr2)

//14. slice take a copy of element based on arguments passed
// 1st arg- where from to start
//2nd arg - where to stop -1

// let numArr2 =numArr.slice(1,3)
// console.log(numArr)
// console.log(numArr2)

//15. For in loop

// let obj = {'mobile':2,'charger':1,'power bank':2,'headset':4}
// console.log(obj);
// let obj2 = {1:10,2:100,3:1000,4:10000}
// console.log(obj2);

// for (k in obj2)
// {
    
//     console.log(k,obj2[k]);
// }

//ex2

// let prop = 'age';
// let person = {
//     name: 'John',
//     [prop]: 30,  // Computed property name
//     city: 'New York'
// };

// console.log(person.age); // Output: 30
//let str; 
// function task1() 
// {
//     console.log("Task 1");
// }
  
// function task2(str1="no value") 
// {
//     //let str= prompt()
//     setTimeout(() => {
//       console.log(`Task 2 ${str1}(Async)`);
//     }, );
// }
  
//   function task3() {
//     console.log("Task 3");
    
//   }
  
//   task1();
//   task2("mani");
//   task1();
//   task3();


// Destructing

// const colors = ['red'];
// const [firstColor, secondColor = 'green'] = colors;

// // console.log(firstColor);  // Output: red
// // console.log(secondColor); // Output: green
// console.log(colors);

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// };

// const { firstName, lastName, age } = person;

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(age);       // Output: 30

//returning functions 

// function sumSquare(num1, num2)
// {
//     let result = num1 + num2;
//     function square()
//     {
//         console.log(Math.pow(result,2))
//     }
//     return square; // returing functions
// }

// let sqr = sumSquare(5,4)
// sqr()
// let sqr2 = sumSquare(3,2)
// sqr2()
// sqr() // closure sumSquare() is scope finched at 208 line itself but it is remembering the its arguments at 209 line it is closure because the child function is using its parent arguments or parent's variable so it is happened

//event listener

// let id1 = document.getElementById('id1')
// id1.addEventListener('click',()=>{
//     alert('element clciked')
// })
  

let str = "abcdefghijklmnopqrstuvwxyz"
let arr =[]
let max = 0

function foo (s)
{
    for(let i=0;i<s.length;i++)
    {
        if(arr.indexOf(s[i])!=-1)
        {
            arr=[]
        }
        arr.push(s[i])
        max = Math.max(max,arr.length)
    }
    
    return [max,arr];
}

console.log(foo(str));



