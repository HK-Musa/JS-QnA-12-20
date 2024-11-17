//********Chapter 12-13**     Assignment 5 *****   Task 1 **********

// var char=prompt("","Enter a Charater");
//  var convert=char.charCodeAt();
// // alert(convert);
// if(65<=convert && convert<=90){
//     alert("Input '"+char+"' is in Upper Case Letter which ASCII Code is "+convert);
// }else if(97<=convert && convert<=122){
//     alert("Input '"+char+"' is in Lower Case Letter which ASCII Code is "+convert);
// }else{
//     alert("Input '"+char+"' is a Special Key which ASCII Code is "+convert);
// }

//********Chapter 12-13**    Assignment 5 *****   Task 2 **********


// var val1=+prompt("","Enter 1st Value");
// var val2=+prompt("","Enter 2nd Value");
// if(val1===val2){
//     alert("1st Value="+val1+" and 2nd Value="+val2+" both are equal");
// }
// else if(val1<val2){
//     alert("1st Value="+val1+" is less than 2nd Value="+val2);
// }
// else if(val1>val2){
//     alert("1st Value="+val1+" is greater than 2nd Value="+val2);
// }

//********Chapter 12-13**     Assignment 5 *****   Task 3 **********

// var value=+prompt("","Enter a Value");
// if(value===0){
//     alert("Provided Value Equal to "+value);
// }else if(value>0){
//     alert("Provided Value is Positive Number i.e "+value);
// }else if(value<0){
//     alert("Provided Value is Negative Number i.e "+value);
// }

//********Chapter 12-13**     Assignment 5 *****   Task 4 **********

//// a=97 A=65 E=69 e=101 i=105 I=73 O=79 o=111 u=117 U=85
// var char=prompt("","Enter an Alphabet");
// var convert=char.charCodeAt()
// if(convert===97 || convert===65 || convert===69 || convert===101 || convert===105 || convert===73 || convert===79 || convert===111 || convert===117|| convert===85){
//     alert("Vowel! True");
// }else{
//     alert("Consonent! False")
// }

//********Chapter 12-13**     Assignment 5 *****   Task 5 **********

// var passWord=prompt("Enter Your Password","");
// var repassWord=prompt("Enter Your Password to Confirm","");
// console.log(repassWord);
// if(passWord===repassWord){
//     alert("Correct! The Password you entered the original password");
// }else if(passWord!==repassWord){
//     console.log(repassWord);
//     alert("Incorrect password!");
// }
///         question hum khali prompt ko kis trha condition me use kr sakten hen?


//********Chapter 12-13**     Assignment 5 *****   Task 6 **********

// var greeting;
// var hour = 13;
// if (hour < 18){
//     greeting = "Good day";
//     alert(greeting);
// }
// else{
//     greeting = "Good evening";
//     alert(greeting);
// }

//********Chapter 12-13**     Assignment 5 *****   Task 7 **********

// var hours=prompt("Enter Time in 24 standard","");
// if(11.59>=hours){
//     alert("Input "+hours+" = "+ hours+" a.m");
// }else if(23.59>=hours){
//     alert("Input "+hours+" = "+ (hours-12)+" p.m");
// }else{
//     alert("Invalid Time ");
// }

//********Chapter 14-16**     Assignment 5 *****   Task 1 **********

// var studName=[];

//********Chapter 14-16**   Assignment 5 *****   Task 2 **********

//// not understand what question ask

//********Chapter 14-16**     Assignment 5 *****   Task 3 **********

// var array=["Hajira",23,"Karachi"]
// alert(array);

//********Chapter 14-16**     Assignment 5 *****   Task 4 **********

// var array=[];
//  array[0]="Hajira";
//  array[1]="Hhajira";
//  array[2]="Hhhjirra";
// alert(array);

//********Chapter 14-16**     Assignment 5 *****   Task 5 **********

// var found="False";
// var boolean=["Shehla","Ahmer","Hooram"];
// var captain="Hajira";
// for (var i = 0; i < 3; i++)
// {
//     if (captain === boolean[i]){
//         found = "True";
//         alert("Your Captain is Hajira");
//      }
//      if (captain === "False") {
//          alert("Your Captain isn't Hajira");
//      }
// }

//********Chapter 14-16**     Assignment 5 *****   Task 6 **********

//// not understand what question ask

//********Chapter 14-16**     Assignment 5 *****   Task 7 **********

// var eduLevel=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
// document.write("<h1>Qualification:</h1>");
// for(var i=0;i<eduLevel.length;i++)
// {
// document.write((i+1)+")"+eduLevel[i]+"<br>");
// }

//********Chapter 14-16**     Assignment 5 *****   Task 8 **********

// var stud=["Hajira","Aamir","Sumama"];
// var marksObtained=[355,345,451];
// var totalMarks=500;
// for(var i=0;i<stud.length;i++)
// {
// document.write("Score of "+stud[i]+" is "+ marksObtained[i]+". Percentage: "+((marksObtained[i]/totalMarks)*100)+"%<br>");
// }

//********Chapter 14-16**     Assignment 5 *****   Task 9 **********

// var colors=["Red","Blue","Orange"];
// alert("Provided Colors are "+ colors);
// var conFirm=prompt("Do You want to add color in the Starting","Say Yes or No!");
// if(conFirm==="yes" || conFirm==="Yes"){
// var addstart=prompt("Enter color Name","");
// colors.unshift(addstart);
// alert("Updated Colors are "+ colors);
// }else{
// alert("No Problem! Provided Colors are "+ colors);
// }
// conFirm=prompt("Do You want to add color in the Ending","Say Yes or No!");
// if(conFirm==="yes" || conFirm==="Yes"){
// addstart=prompt("Enter color Name","");
// colors.push(addstart);
// alert("Updated Colors are "+ colors);
// }else{
// alert("No Problem! Provided Colors are "+ colors);
// }
// addstart=prompt("Enter two more colors Name","");
// colors.push(addstart);
// alert("Updated Colors are "+ colors);
// var remcolor=colors.pop(colors);
// alert("After Removing "+remcolor+" Color, Remaining Colors are "+ colors);
// var index=prompt("Enter Position to add Color","");
// addstart=prompt("Enter Color Name","");
// // colors.push(indexof(2))
// colors.splice(index,0,addstart);
// alert("After Adding Color at "+(index)+" Position Updated list is "+colors);
// var index=prompt("Enter Position to delete Colors","");
// addstart=prompt("Enter how many Colors delete","");
// var remcolor=colors.splice(index,addstart);
// alert("After Deleting Colors "+remcolor+" from "+(index)+" to "+addstart+" Updated list is "+colors);

//********Chapter 14-16**     Assignment 5 *****   Task 10 **********

//// not understand how to solve it.

//********Chapter 14-16**     Assignment 5 *****   Task 11 **********

// var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// alert(cities);
// document.write("Cities List<br>"+cities+"<br>");
// var index=prompt("Enter Position to Copy Start.","");
// var copiesNum=prompt("Enter how many Copies.","");
// var copyCities=cities.slice((index-1),copiesNum);   //slice(inclusive,exclusive)
// // console.log(copyCities);
// // alert(copyCities);
// document.write("<br>Selected Cities List<br>"+copyCities);

//********Chapter 14-16**     Assignment 5 *****   Task 12 **********

// var arr = [" This "," is "," my "," cat "];
// document.write("Array:<br>"+arr+"<br>");
// console.log(arr);
// arr.toString();
// document.write("<br>String:<br>"+arr);
// console.log(arr);

//********Chapter 14-16**     Assignment 5 *****   Task 13 **********

// var gadgets=["Keyboard","Mouse","Printer","Monitor"];
// alert("Provided Gadgets are "+ gadgets);
// document.write("<h1>First In First Out (FIFO)</h1><br>Provided Gadgets are "+ gadgets+"<br>");
// gadgets.shift();
// alert("Updated Gadgets are "+ gadgets);
// document.write("<br>Provided Gadgets are "+ gadgets+"<br>");
// gadgets.shift();
// alert("Updated Gadgets are "+ gadgets);
// document.write("<br>Provided Gadgets are "+ gadgets+"<br>");
// gadgets.shift();
// alert("Updated Gadgets are "+ gadgets);
// document.write("<br>Provided Gadgets are "+ gadgets+"<br>");
// gadgets.shift();
// alert("Updated Gadgets are "+ gadgets);
// document.write("<br>Provided Gadgets are Empty"+ gadgets+"<br>");

//********Chapter 14-16**     Assignment 5 *****   Task 14 **********

// var gadgets=["Keyboard","Mouse","Printer","Monitor"];
// alert("Provided Gadgets are "+ gadgets);
// document.write("<h1>Last In First Out (FIFO)</h1><br>Provided Gadgets are "+ gadgets+"<br>");
// gadgets.pop();
// alert("Updated Gadgets are "+ gadgets);
// document.write("<br>Provided Gadgets are "+ gadgets+"<br>");
// gadgets.pop();
// alert("Updated Gadgets are "+ gadgets);
// document.write("<br>Provided Gadgets are "+ gadgets+"<br>");
// gadgets.pop();
// alert("Updated Gadgets are "+ gadgets);
// document.write("<br>Provided Gadgets are "+ gadgets+"<br>");
// gadgets.pop();
// alert("Updated Gadgets are "+ gadgets);
// document.write("<br>Provided Gadgets are Empty"+ gadgets+"<br>");

//********Chapter 14-16**     Assignment 5 *****   Task 15 **********

// var phoneBrand=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select>")
// for(var i=0; i<phoneBrand.length; i++){
//     document.write("<option>"+phoneBrand[i]+"</option>");
// }
// document.write("</select>")

//********Chapter 17-20**     Assignment 5 *****   Task 1

// var columns=[0,1,2,3];
// var rows=[0,1,2];

//********Chapter 17-20**     Assignment 5 *****   Task 2

// var columns=[0,1,2,3];
// var rows=[0,1,2];
// // alert(columns)
// for(var i=0;i<rows.length;i++)
// {
        // for(var j=i;j<columns.length;j++)
        // {
        // // alert(columns)
        // document.write("<br>"+columns);
        // }
// }
//********Chapter 17-20**     Assignment 5 *****   Task 3

// for(var i=1; i<=10; i++){
//     document.write(i+"<br>");
// }

//********Chapter 17-20**     Assignment 5 *****   Task 4

// var taBle=prompt("Enter Value to Generate Table","");
// var lenGth=prompt("Enter Length of the Table","");
// document.write("Table of "+taBle+"<br>Length "+lenGth+"<br>");
// for(i=1;i<=lenGth;i++)
//     {
//         document.write("<br>"+taBle+" * "+i+" = "+(i*taBle));

//     }

//********Chapter 17-20**     Assignment 5 *****   Task 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br>");
// }
// for(var i=0;i<fruits.length;i++){
//     document.write("<br>Element at index "+i+" is "+fruits[i]);
// }

//********Chapter 17-20**     Assignment 5 *****   Task 6

// document.write("<br>Counting:<br><br>");
// for(var i=0;i<=10;i++){
//     document.write(i+"<br>");
// }
// document.write("<br>Reverse Counting: <br><br>");
// for(var i=10;i>=0;i--){
//     document.write(i+"<br>");
// }
// document.write("<br>Even:<br><br>");
// for(var i=0;i<=20;i+=2){
//     document.write(i+"<br>");
// }
// document.write("<br>Odd:<br><br>");
// for(var i=1;i<=20;i+=2){
//     document.write(i+"<br>");
// }
// document.write("<br>Series:<br><br>");
// for(var i=2;i<=20;i+=2){
//     document.write(i+"k<br>");
// }

//********Chapter 17-20**     Assignment 5 *****   Task 7

// var A=["cake", "apple pie", "cookie", "chips", "patties"]
// var check=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?","");
// if(A.indexOf(check) !==-1){
//     alert("Yes! Is available in our bakery");
// }else{
//     alert("We are sorry! is not available in our bakery");

// }

//********Chapter 17-20**     Assignment 5 *****   Task 8

// var A=[24, 53, 78, 91,77,100,12,10101,34];
// document.write("Array items: "+A+"<br>");
// b=A.length;
// // document.write(b);
// var temp=[];
// for(var i=0;i<A.length;i++){
//     if(A[i]>A[i+1]){
//          temp[i]=A[i];
//         A[i]=A[i+1];
//         A[i+1]=temp[i];
//     }
// }
// document.write("Array After sourt items: "+A+"<br>");
// document.write("The Largest number is "+A[b-1]);

//********Chapter 17-20**     Assignment 5 *****   Task 9

// var A=[24, 78, 91, 12,77,100,10101,34];
// document.write("Array items: "+A+"<br>");
// b=A.length;
// // document.write(b);
// var temp=[];
// for(var i=0;i<A.length;i++){
//     if(A[i]<A[i+1]){
//          temp[i]=A[i];
//         A[i]=A[i+1];
//         A[i+1]=temp[i];
//     }
// }
// document.write("Array after sourt items: "+A+"<br>");
// document.write("The Largest number is "+A[b-1]);

//********Chapter 17-20**     Assignment 5 *****   Task 10

var taBle=prompt("Enter Value to Generate Multiple of it","");
for(i=1;(i*taBle)<=100;i++)
    {
        document.write(i*taBle+" , ");

    }
