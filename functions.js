

// functions


function ope(a,b){
    for(i=a;i<=b;i++){
    if(i%2==0 && i%3==0)
    console.log(i+"fizzbuzz")
    else if(i%5==0)
    console.log(i)
    else if(i%3==0)
    console.log(i+"buzz")
    else if(i%2==0)
   console.log(i+"fizz")
    else
    console.log(i+"Abhi")
}
   }
ope(20,40);





function f_sum(sum){
    for(i=1;i<=20;i++){
        if (i%3==0)
        sum=sum+i
    }
    console.log(`${i}= ${sum}`);
}
f_sum(0)




let unit=19;
if(unit>1 && unit<5){
    console.log("0% discount on a product based on the quantity purchased")
}
else if(unit>4 && unit<10){
    console.log("5% discount on a product based on the quantity purchased")
}
else if(unit>9 && unit<20){
    console.log("10% discount on a product based on the quantity purchased")
}
else{
    console.log("15% discount on a product based on the quantity purchased")
}


// // debugger

function units(z){
    if(units>1 && units<5){
        console.log("0% discount on a product based on the quantity purchased")
    }
    else if(units>4 && units<10){
        console.log("5% discount on a product based on the quantity purchased")
    }
    else if(units>9 && units<20){
        console.log("10% discount on a product based on the quantity purchased")
    }
    else{
        console.log("15% discount on a product based on the quantity purchased")
    }
}
units(20)
1




// ---> String <-------

function str(x){
let rev="";
 for(i=x.length-1;i>=0;i--){
     rev=rev+x[i];
 }
if(rev==x){    
    console.log("true")}
else{
    console.log("false")
} }
str("hello")



let characters = ["hello", "world", "abc", "defghi"];
let y=characters.filter((a) => {
 
    return (a.length>5);
  
})
console.log(y)






