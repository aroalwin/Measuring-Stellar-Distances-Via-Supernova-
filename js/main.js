let run=()=>{

  let x=document.getElementById('x-val').value;
  let y= document.getElementById('y-val').value;
  let z= document.getElementById('z-val').value;
  if(x.length==0){

alert('Enter X Value');

  }else if(y.length==0){
    alert('Enter Y Value');

  }else if(z.value==0){
    alert('Enter Z Value');

  }
//else if(x.value!=='0'||x.value!=='1'){
//     alert('Enter Number X value Between 0 and 1')
//  }else if(y.value!=='0'||y.value!=='1'){
//   alert('Enter Number Y value Between 0 and 1')
//   }else if(z.value!=='0'||z.value!=='1'){
//     alert('Enter Number Z value Between 0 and 1')
//  }

  if(x=="0" && y=="0"&&z=='0'){
    document.getElementById('title').innerText=`x value is ${x} And Y value is ${y} and Z value is ${z}`;
document.getElementById('img').src="img/1.jpg";

  }
  else if(x=="0" && y=="0"&&z=='1'){
    document.getElementById('title').innerText=`x value is ${x} And Y value is ${y} and Z value is ${z}`;
document.getElementById('img').src="img/2.jpg";

  }
 else  if(x=="0" && y=="1"&&z=='0'){
    document.getElementById('title').innerText=`x value is ${x} And Y value is ${y} and Z value is ${z}`;
document.getElementById('img').src="img/3.jpg";

  }
 else  if(x=="0" && y=="1"&&z=='1'){
    document.getElementById('title').innerText=`x value is ${x} And Y value is ${y} and Z value is ${z}`;
document.getElementById('img').src="img/4.jpg";

  }
 else  if(x=="1" && y=="0"&&z=='0'){
    document.getElementById('title').innerText=`x value is ${x} And Y value is ${y} and Z value is ${z}`;
document.getElementById('img').src="img/5.jpg";

  }
  else if(x=="1" && y=="0"&&z=='1'){
    document.getElementById('title').innerText=`x value is ${x} And Y value is ${y} and Z value is ${z}`;
document.getElementById('img').src="img/6.jpg";

  }
 else  if(x=="1" && y=="1"&&z=='0'){
    document.getElementById('title').innerText=`x value is ${x} And Y value is ${y} and Z value is ${z}`;
document.getElementById('img').src="img/7.jpg";

  }
  else if(x=="1" && y=="1"&&z=='1'){
    document.getElementById('title').innerText=`x value is ${x} And Y value is ${y} and Z value is ${z}`;
document.getElementById('img').src="img/8.jpg";

  }
 
  
}


let cal=()=>{
  
let im = document.getElementById('m-val').value;
if(im.length==0){

  alert('Enter m Value')
}else{
im= parseFloat(im);
console.log(im+5);
let M= 19.3;
let f= im +5;
 let re=M+f;
 let result=re/5;
//  result=Math.log(result)
 result=Math.pow(10,result)
// 
document.getElementById('ans').style.color="green";
document.getElementById('ans').innerText=`d = ${result}`;
//  console.log(result);

//for calculate ligt year
let ly= result*3.26;
console.log('orginal :'+ly);
ly=ly.toString();
ly=ly.substring(0,3)
ly=parseInt(ly);
console.log(ly);
document.getElementById('lightyear').style.color="red";
document.getElementById('lightyear').innerText=`d = ${ly} million Light Year`;
}


}



