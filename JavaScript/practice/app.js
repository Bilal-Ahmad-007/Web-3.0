// alert("hallo ");
// document.write("hallo");
// prompt("hallo");
// console.log("hallo");

// var spec = +prompt("num");
// var spec1 = +prompt("num");
// document.write(spec+spec1)

// var firstNum=  +prompt("give me a first number");
// var SecondNum= +prompt("give me a second number");
// var oprator= prompt("give me a oprator");

// if(oprator ==="+"){
//     document.write ("the addition of these numbers are" +(firstNum+SecondNum));
// }

//     else if(oprator=="-"){
//     document.write("the subtrection of these numbers are"+" " + (firstNum-SecondNum));
// }
// else if(oprator=="*"){
//     document.write ("the multiplication of these numbers are" + (firstNum*SecondNum));
// }
// else if(oprator=="/"){
//     document.write ("the divition of these numbers are" + (firstNum/SecondNum));
// }

// for(var i=0; i<10;i++){
//     document.write("mlik")

// }

// for(var i=0; i<10;i++){
//     for(var j=0; j<10;j++){
//        console.log("bilal")
//     }
// }
// var time= new Date()
// console.log(time)

// var time= new Date()

// console.log(time.getTime()/(1000*60*24*60))

// function greet(){
//     alert("chzy ki hal ny")
// }
// function expand(){
//     document.write(
// "oy aja chalayi khailan ma boht yd kr erya koytya hah nlns baj jsddn "
//     )
// }
// function checkAddress(a){
//     console.log(a)

// }

// function getMail(){
//     var b= document.getElementById("email")
//     console.log(b.value)
// }

// setInterval(function(){
// console.log("bill")

// }, 1000)

// setTimeout(function(){
//     console.log("5")
// },3000)
// let count=0;
//  let interval=setInterval(function(){
//     count++;
//     console.log(count)

// },1000)

// setTimeout(() => {
//    clearInterval(interval)
// }, 10000);

//////////////////////////////////////////// chapter1/////////////////////////////////////////////

// var let const

// var a=12;
// let b="bilal";  //  it can updatebut never declaiir
// var d=null;
// var c=undefined;
// const f="eee"  //const never change or update nor redecair

// {
//     let b="hello"
// }
// console.log(b)

// premitive data type nn ss bb u
// objects are non premitive data type  having key value pair
// const item ={
//     'name': "bilal",
//     "rollNmuber": 34,
//     "marks": 345
// }
// console.log(item["name"])

// practice  chapter

// let a='bilal';
// let b=6;

// console.log(a+b)
// console.log(typeof (a+b))

// const item ={
//         'name': "bilal",
//         "rollNmuber": 34,
//         "marks": 345
//     }

//     item["name"]=6;
//     item["name2"]='bilal';
//     console.log(item)

// const dict={
//     baloon: "gobara",
//     work: "kam ",
//     play: " khailna "
// }

// console.log(dict.work)

////////////////////////////////////// chapter 2///////////////////////////////////////////////////////////////

// arthmatric oprator

// let a= 6;
// let b=4;
// // console.log(++a)
// let c= a+b  // adition   10
// let k= a-b  // substraction   2
// let d= a*b  // multipliction 24
// let e= a/b  // division 1.25
// let f= a%b  // module 2

// let g=a++; //6
// let h=++a //  8  // double plus
// let i= a--    ; //8
// let j= --a ///6 // double minus
// console.log(c,d,e,f,g,h,i,j,k)

// // assignment oprtor
// let x = 8;
// let y=2;
// console.log(x=y) //2
// console.log(x+=y) //4
// console.log(x-=y) //2
// console.log(x*=y) //4
// console.log(x/=y) //2
// console.log(x%=y) //0
// console.log(x**=y) //0

// comaperison oppprator

// let x=6;
// let y=5;
// console.log(x==y) //false
// console.log(x!=y) //true

// console.log(x===y) //false
// console.log(x!==y) //true
// console.log(x>y) //true
// console.log(x>=y) //true
// console.log(x<y) //false
// console.log(x<=y) //false
// // console.log(x?y)

// let a=12;
// let b = 13;

// console.log(a<b && a===12)
// console.log(a<b && a===13)
// console.log(a<b || a===13)

// let x = '<button onclick="getMail()">button</button>';
// let innerValue = x.match(/>(.*?)</)[1];
// console.log(innerValue);

// for(var i=0; i<=x.length; i++){
//     if(x.charAt(i)==='>'){
//     while(x.charAt(i)!='<'){i++
//         if(x.charAt(i)!="<"){
//           container  +=x.charAt(i)
//         }
//     }
// }
// console.log(container)
// break
// }



// let k1 = "hello world";
// let k2 = "Bilal";
// let x = " <p> 'hello world' </p> <button> Bilal</button>";
// for (let i = 0; i < x.length; i++) {
//   if (x[i] == k1[0]) {
//     console.log(x[i]);
//     console.log(k1.length)
//     let updatedvalue = x.slice(i, i+k1.length);
//     console.log(updatedvalue);
//   }
//   if (x[i] == k2[0]) {
//     console.log(x[i])
//     console.log()
//     let k2value = x.slice(i, i+k2.length);
//     console.log(k2value);
//   }
// }


// let x = '<button onclick="getMail()">button</button> <p>"hello   word how r you"</p><p>"hellllllllll"</p>';

// let insideTag = false;
// let buttonValue = "";

// for (let i = 0; i < x.length; i++) {
//     if (x[i] === "<") {
//         insideTag = true;
//         continue;
//     } else if (x[i] === ">") {
//         insideTag = false;
//         continue;
//     }

//     if (!insideTag) {
//         buttonValue += x[i];
//     }
// }


// console.log(buttonValue); // Output the extracted value

// for(let i=x.length-1; i>=0;i--){

//   console.log(x.charAt(i))
// }

// number.parsint use to convert string to number//////////////////////////////////////////////////////////////

// let a=prompt("enter ur age ?")
// a= Number.parseInt(a)

// if(a>16){
//   console.log("you are eligible")
// }else if(a>10 && a<16){
//   console.log("play less its dangrous")

// }else{
//   console.log("you are not eligible")
// }

// let x="bilal";
// switch(x){
//   case "arslan":
//       console.log(`he is not present`)
//   break;
//   case "asgher":
//     console.log('hello')
//     break;
//   case "bilal":
//     console.log("yees ")
//     break;
//   case "aslam":
//     console.log('wong')
//   break
//   default :
//   console.log('non are present')
//   }

///////////////////////////////chapter 2 exercise  //////////////////////////////////////////////////////

// //////////////////////////////////ch#2 Q1

// let x= prompt("Enter your age :")
// x= Number.parseInt(x);
// if(x>=10 && x<=20){
//   console.log("your age lie between 10 and 20")

// }

// //////////////////////////////////ch#2 Q2

// let value = prompt("enter the value");
// value= Number.parseInt(value);

// let value= 10

// switch (value) {
//     case 30:
//     console.log("value  30 ")

//     break;
//   case 20:
//     console.log("value  20  ")

//     break;

//   case 10:
//     console.log("value  10 ")

//     break;

//   default:

//   console.log('your value is greater then 30')
//     break;
// }

// //////////////////////////////////ch#2 Q3

// let x= prompt("Enter your number :")
// x= Number.parseInt(x);

// if(x%2===0 && x%3==0){
//   console.log('your number is divisible by 2 and three')
// }else{
//   console.log("its is not divisible by 2 and 3")
// }

// //////////////////////////////////ch#2 Q4

// let x= prompt("Enter your number :")
// x= Number.parseInt(x);

// if(x%2===0 || x%3==0){
//   console.log('your number is divisible by 2 or three')
// }else{
//   console.log("its is not divisible by 2 or 3")
// }

// let x= prompt("Enter your number :")
// x= Number.parseInt(x);

// if(x%2===0 && x%3===0){
//   console.log("it is divisble by 2 and 3")
// }
// else if(x%2===0 ){
//   console.log('your number is divisible by 2 ')
// }

// else if(x%3===0){
//   console.log("it is divisble by 3")
// }
// else{
//   console.log("its is not divisible by 2 or 3")
// }

// //////////////////////////////////ch#2 Q5

// let x= prompt("Enter your number :")
// x= Number.parseInt(x);

// console.log("you ", x>=18? "can dive":"cannot dive")

///////////////////////////////chapter 3 loop //////////////////////////////////////////////////////

// let n = prompt('enter value of n')
// n=Number.parseInt(n)
// let sum=0;

// for(let i=1;i<=n;i++){
//   sum+=i
// // console.log(i)

// }
// console.log(`Sum of first ${n} natural numbe is ${sum}`)

// let n = prompt('enter value of n')
// n=Number.parseInt(n)
// let fectorial=1;

// for(let i=1;i<=n;i++){
//   fectorial *= i
// console.log(i)

// }
// console.log(`Sum of first ${n} fectorial number is ${fectorial}`)

///////////////////for in
// let obj={
//   bilal:34,
//   shri:45
// }
// for(let i in obj){
//   console.log(i)
// }

//////////////////for off use for itrable mean arry or string

// for(let b of "bilal"){
//   console.log(b)
// }

////// /////////////////////while  & do while loop

// // let i = 0;
// while(i<12){
//   console.log(i)
//   i++;
// }

// let i=10;

// do{
//   console.log(i);
//   i++;
// }while(i<9)

/////////////////////////////    function

// function sumOneAvg(x, y) {
//   // console.log("done")
//   return Math.round(1 + (x + y) / 2);
// }
// console.log(sumOneAvg(32, 5));


//////////////////////////////////////////////ch#3 exersise///////////////////////////////////////
////////////////////////q1///////////////
// const marks={
//   bilal: 45,
//   asad: 34,
//   shari:33,
//   tariq:56,
//   umair:90,

// }


// for(let i=0;i<Object.keys(marks).length;i++){
//   // console.log("marks of "+ Object.keys(marks)[i]+"is "+" "+marks[Object.keys(marks)[i]])
//   console.log(`marks of ${ Object.keys(marks)[i]} is ${ marks[Object.keys(marks)[i]]}`)
// }


////////////////////////q2///////////////

// const marks={
  //   bilal: 45,
//   asad: 34,
//   shari:33,
//   tariq:56,
//   umair:90,

// }


// for(let key in marks){
//   console.log(`mark of ${key} is ${marks[key]}`)
// }



////////////////////////q3///////////////

// let guess=45;

// let number=prompt("guess a number")
// number=Number.parseInt(number);

// if(number===guess){
//   console.log("you guess corectly")
// }else{
//   console.log(
//     "try again"
//   )
// }

// let cn=3;
// let i =0;
// while(i != cn){
  //   i= prompt("Enter to guess")
  
  //   i!=cn?alert("try again"):
  //   alert("you guess correct")
// }



  ////////////////////////q4///////////////



  // const mean=(a,b,c,d,e)=>{
  //   return (a+b+c+d+e)/5
  // }

  // console.log(mean(4,5,6,7,8))


  //////////////////////////////////ch4 string///////////////////////////////////////////////



  // let x = 'bil\ral'
  // console.log(x)

  //////////////////////////methods of string/////////////
  
  // let x= "    Bilal Ahmad"
  
  //   console.log(x.length)
  //   console.log(x.toUpperCase())
//   console.log(x.toLowerCase())
//   console.log(x[0])
//   console.log(x[1])
//   console.log(x[2])
//   console.log(x[3])
//   console.log(x.slice(0,4))
//   console.log(x.slice(4))
//   console.log(x.split())
//   console.log(x.replace("Bilal", "bilo"))
//   let y = x.trim()
//   console.log(y)
// let z= "asad"
// console.log(x.concat("  is a friend of ",z,"ok"))


// let name="asad";
// // console.log( name.split("").reverse().toString())
// let container='';
// for(let i=name.length-1;i>=0; i--){
  //   container+=name.charAt(i)
  // }
  // console.log(container)
  


  ////////////////////////// ch4 methods of string exercise//////////////////////////////////////////////


//////////////////////////////////////////q1
  // console.log("bil\"".length)

  //////////////////////////////////////////q2
  
  // let sentence="bilal is going to university for study " 
  // let word="university"
  // console.log(`The word "${word}"${sentence.includes(word)? "is": "not"} present in the sentence   `)

// let x="Bilal"
// console.log(x.startsWith("b"))
// console.log(x.endsWith("l"))

//   //////////////////////////////////////////q3

//  console.log(x.toLowerCase())
//  console.log(x.toUpperCase())

//   //////////////////////////////////////////q4

// let x= "this pen in RS.100"

// let amount= x.slice("this pen in RS.".length)
// amount= Number.parseInt(amount)
// console.log(amount)

//   //////////////////////////////////////////q4
/*

let x= "bilal"

let y= x.split("")
y[3]="r";
console.log(y.join(""))

*/


/////////////////////////////Array//////////////////////////

/*
let arr=[1,2,3,4,null,false,"bilal"]

for(let i=0; i<=arr.length; i++){
  console.log(arr[i])
}
*/
///////////////////////////ch5 array method///////////////////////////////////////////////////////////

// let arr=[11,2,9,4,55,6,77]


// console.log(arr.toString())
// console.log(arr.join("_"))
// console.log(arr.pop())
// console.log(arr.push(4))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.unshift(99))
// console.log(arr)
// delete arr[0]
// console.log(arr.length)


// let arr2=[12,13,14,15]
// let arr3=[126,135,144,153]
// let newArr=arr.concat(arr2,arr3)
// let compare=(a,b)=>{
//   return a-b;
// }
// console.log(arr.sort(compare))


// console.log(arr.reverse())

// console.log(arr.slice(0,4))


// console.log(arr.splice(start dalete, how many dlete ,add,add,add,add))
// console.log(arr.splice(0,4,22,1023,1023,1044))




///////////////////////////////////////loop with array.//////////////////

// let arr=[1,2,3,4];
// for(let i=0;i<arr.length;i++){
  
//   console.log( arr[i])
// }

// arr.forEach((e)=>{
//   console.log(e*e)
// // })
// let name="bilal"
// let narr=Array.from(name)
// console.log(narr)
// console.log(name.split(''))



// for(let i of arr ){
//   console.log(i)
// }

// for(let i in arr ){
//   console.log(arr[i])
// }

///////////////////////////////map filtr reduce///////////////////////////


// let arr=[1,2,3,4,5,6]

// let ar2= arr.map((value,index,array)=>{
//         console.log(value,index, array)
//         return (value+2)

// })
// console.log(ar2)


// let arr=[1,2,3,4,5,6]

// let ar2= arr.filter((value,index,array)=>{
//         console.log(value,index, array)
//         return (value>2)

// })
// console.log(ar2)

// let arr=[1,2,3,4,5,6]

// let ar2= arr.reduce((first,second)=>{
//         // console.log(first,second)
//         return (first+second)

// })
// console.log(ar2)

////////////////////////////////////////////////ch5 exercise array//////////////////////////////////////////////


/////////////////////q1

// let arr = [1,"hello", null,23]

// let input= prompt("input your arry item")
//   input= Number.parseInt(input)
// console.log( arr.push(input))
// console.log( arr)


///////////////////////////q2

// let arr = [1,"hello", null,23]
// let input;
// do{
//    input= prompt("input your arry item")
//     input= Number.parseInt(input)

//     arr.push(input)
  
    
    

//   }while(input!=0)  
//   console.log( arr)


///////////////////////////q3


// let arr= [1,2,3,4,10]

// let arr2=arr.filter((val,i,arr)=>val%10===0)
// console.log(arr2)

// ///////////////////////////q4
// let arr3=arr2.map((val)=>val*val)
// console.log(arr3)

// ///////////////////////////q5


// let arr4=arr.reduce((acc,val)=> acc*val,1)
// console.log(arr4)


///////////////////////////////////////////////// random number guess game ///////////////////////////


// let x= Math.floor( Math.random()*100);
// console.log(x)
// let before=0
// let score=100-before;
// for(let i=0; i<100;i++){

//   let guess= prompt("Guess  a number ")
//   guess=Number.parseInt(guess)

//     if(guess===x){
//       alert(`CONGRATULATION you guess  a number with score ${score}`)
//       break
//     }else if(guess<x){
//       alert("try again guess number is too low")
//     }
//     else if(guess>x){
//       alert("try again guess number is too high")
//     }

//     before+=i
// }
  

   //////////////////////////////exercise ch6////////////////////////////////

  //  /////////////////////////q1///////////////////

  //  let age = prompt("enter your age :")
  //  age= Number.parseInt(age)

  //  if (age>=18) {
  //   alert("you can drive")
    
  //  }else{
  //   alert("your age is less then 18 you can't  drive")
  //  }


   /////////////////////////q2///////////////////
   
   //  let age = prompt("Enter your age:");
   //  age = Number.parseInt(age);
   
   //  if (confirm("Do you want to see the prompt?")) {
     //    if (age >= 18) {
  //      alert("You can drive.");
  //    } else {
  //      alert("Your age is less than 18. You can't drive.");
  //    }
  //  }
   
  
  
  // let again=true;
  // while(again){   
    //   let age = prompt("Enter your age:");
    //   age = Number.parseInt(age);
    
    //    if (age >= 18) {
      //      alert("You can drive.");
      //    }
      //    else {
  //      alert("Your age is less than 18. You can't drive.");
  //    }

  //   again=confirm("Do you want to see the prompt again?");
  // }
  


  // /////////////////////////q3///////////////////
  // let again=true;
  // while(again){   
  //   let age = prompt("Enter your age:");
  //   age = Number.parseInt(age);
    
  //    if (age >= 18) {
  //      alert("You can drive.");
  //    }else if(age<0){
  //     console.error("Your value is negtive so please give the right age")

  //    }
  //    else {
  //      alert("Your age is less than 18. You can't drive.");
  //    }
  //   again=confirm("Do you want to see the prompt again?");
  // }
  
  
  // /////////////////////////q4///////////////////
  

  // let num = prompt("enter a number ")
  // num=Number.parseInt(num)
  // if (num>4){
  //   location.href="http://google.com"
  // }
  
  
  /////////////////////////q5///////////////////
  

  // let color = prompt("enter a color ")

  // document.body.style.background=`${color}`
  

////////////////////////////////////////snack water gun game genrting///////



// let win=0;
// let lose=0;
// let loop=0;;
// let tryAgain=true;
// while(tryAgain){

//   let randomNumber = Math.floor(Math.random() * 3);
//   let randomCharCode = ["s","w","g"];
//   let randomCharacter = randomCharCode[randomNumber];
//   console.log(randomCharacter)
// let inp = prompt("Enter your word for snack enter 's' for water enter 'w' for gun enter 'g' : ")

// if(inp!=randomCharacter){

//   if( inp==='s' && randomCharacter==='w' || inp==='w' && randomCharacter==='g'||inp==='g' && randomCharacter==='s')
//   {
//     alert("CONGRATULATION you won ")
//     win+=1


//   }else{
//     alert (" you lose try again")
//     lose+=1
//   }
// }else{
//   alert("this is tie")
//   lose+=0.5;
//   win+=0.5;
// }
// tryAgain=confirm("IF You want to stay then slect  confirm")
// loop+=1
// }
// console.log(`you tries ${loop} times and you win ${win} times and you lose ${lose} and your score is ${win-lose} out of ${loop}`)



   ///////////////////////////////////dom manuplation ///////////////////////


// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)
// console.log(document.body.childNodes[1])
// let arr=Array.from(document.body.childNodes)  ///convert to rray from nodes list
// let arr=Array.from(document.body.firstElementChild.firstElementChild)
// console.log(arr)  

///////////////////////////////// dom collection

// document.getElementById
// document.getElementsByClassName
//  document.querySelectorAll(.cards-title) //it get all element by css selector
//  document.querySelector(.cards-title) //it get first element by css selector


// document.getElementsByTagName()  //it get  element by html tags
// document.getElementsByName()   //it get all element by name


// document.getElementById("id1").matches(".box")


////////////////////////////////////////////////////ch 7 practice////////////////////////


///////////////////////////////////////////q1/////////////////////////

// let ele= document.body.firstElementChild
// ele.firstElementChild.style.color="red"
/////////////////////////////////////////////q3////////////////

// ele.firstElementChild.style.color="green"
// ele.lastElementChild.style.color="green"

///////////////////////////////////////////////q4

// let ele1=document.body.getElementsByTagName("li")
// console.log(ele1)
// Array.from(ele1).forEach((E)=>{
//   E.style.backgroundColor="cyan" 
// })

//////////////////////////////////////////////////////tel me jok/////////////////


  
// let jokes=[` What’s blue and smells like red paint? Blue paint.`,`Where do vampires keep their money? A blood bank.`,` How do porcupines kiss? Carefully!`,`Why are fish so intelligent? Because they live in schools!`,` What kind of music do bubbles hate? Pop.`,` What do you call a dog magician? A labracadabrador.`,` What did the triangle say to the circle? You’re pointless!`,` What kind of fish loves going to war? A swordfish.`,` Why can’t your hand be 12 inches long? Because then it’d be a foot.`,` Why couldn't the pony sing a lullaby? She was a little horse.`,` What’s a parent’s favorite Christmas carol? Silent Night.`,` Where do woodland birds invest their money? The stork-market.`,` What do you call a bear with no teeth? A gummy bear.`,` What do you call a fake noodle? An impasta.`,` Can February March? No, but April May!`]



// let randomJoke=()=>{
//   let random=Math.floor(Math.random()*(jokes.length-1))
//   document.getElementById("random").innerHTML=`${jokes[random]}`
  
// }



