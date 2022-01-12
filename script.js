var txt, arrayData="",con=console.log(2)
function hola(){

  var 
   

    archivoTxt=new XMLHttpRequest(),
    fileRuta="./hola.txt";
    
  archivoTxt.open("GET",fileRuta,false);
  
  archivoTxt.send(null);
  txt=archivoTxt.response;

  for (let index = 0; index < txt.length; index++) {
  arrayData= arrayData+(com(txt[index],txt[index-1]));
  
  };
  console.log(archivoTxt)
  alert(arrayData)
}
hola()

function com(para,para1) {
  
  if (para==`<`) {
    return (`{"`)
  }
  if (para=='/') {
    return '"'
  }
  if (para==`:`) {
    return (`":`)
  }
  if (para==`>`){
    return `}`
  }
  return para
}