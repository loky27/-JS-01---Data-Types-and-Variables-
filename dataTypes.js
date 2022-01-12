var  
  val1=false ,
  val2=true ,
  val3=0 ,
  val4=1 ,
  val5="0",
  val6="000",
  val7="1",
  val8=NaN,
  val9=Number.POSITIVE_INFINITY,
  val10=Number.NEGATIVE_INFINITY,
  val11="",
  val12="20",
  val13="Tweenty" ,
  val14= null ,
  val15=undefined ;
console.log(Number(val1))
console.log(String(val1))
console.log(Boolean(val1))

console.log(Number (val2))
console.log(String (val2))
console.log(Boolean(val2))

console.log(Number(val3))
console.log(String(val3))
console.log(Boolean(val3))

console.log(Number(val4))
console.log(String(val4))
console.log(Boolean(val4))

console.log(Number(val5))
console.log(String(val5))
console.log(Boolean(val5))

console.log(Number(val6))
console.log(String(val6))
console.log(Boolean(val6))

console.log(Number(val7))
console.log(String(val7))
console.log(Boolean(val7))

console.log(Number(val8))
console.log(String(val8))
console.log(Boolean(val8))

console.log(Number(val9))
console.log(String(val9))
console.log(Boolean(val9))

console.log(Number(val10))
console.log(String(val10))
console.log(Boolean(val10))

console.log(Number(val11))
console.log(String(val11))
console.log(Boolean(val11))

console.log(Number(val12))
console.log(String(val12))
console.log(Boolean(val12))

console.log(Number(val13))
console.log(String(val13))
console.log(Boolean(val13))

console.log(Number(val14))
console.log(String(val14))
console.log(Boolean(val14))

console.log(Number(val15))
console.log(String(val15))
console.log(Boolean(val15))

function age() {
    var start=prompt("ingresa tu fecha de nacimiento")
    var finish=prompt("año deseado")
    alert("If you were born in "+start+", then in "+finish+" you’ll be " 
    +((finish-start)-1)+" or "+(finish-start)+"(depending on the month in " +finish+")." )
}
function card() {
    var Name=prompt("name"), Location=prompt("location"), Hobby=prompt("hobby");
    alert("Hi, my name is "+Name+". I live in "+Location+ " and enjoy "+Hobby)
}