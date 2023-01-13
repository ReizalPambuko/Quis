const jwb1 = document.querySelector('#jwb1');
const jwb2 = document.querySelector('#jwb2');
const jwb3 = document.querySelector('#jwb3');
const jwb4 = document.querySelector('#jwb4');
const jwb5 = document.querySelector('#jwb5');


const hasil1 = document.querySelector('#hasil1');
const hasil2 = document.querySelector('#hasil2');
const hasil3 = document.querySelector('#hasil3');
const hasil4 = document.querySelector('#hasil4');
const hasil5 = document.querySelector('#hasil5');

let poin = 0;

 function hs(){
 let response;
 if(jwb1.checked){
   response = 'jawaban anda benar';
   hasil1.style.color = 'green';
   poin += 20;
 }else{
   response = 'jawaban anda salah';
   hasil1.style.color = 'red';
 }
 
 if (jwb2.checked) {
   response = 'jawaban anda benar';
   hasil2.style.color = 'green';
   poin += 20;
 } else {
   response = 'jawaban anda salah';
   hasil2.style.color = 'red';
 }
 
 if (jwb3.checked) {
    response = 'jawaban anda benar';
    hasil3.style.color = 'green';
    poin += 20;
  } else {
    response = 'jawaban anda salah';
    hasil3.style.color = 'red';
  }
  
  if (jwb4.checked) {
     response = 'jawaban anda benar';
     hasil4.style.color = 'green';
     poin += 20;
   } else {
     response = 'jawaban anda salah';
     hasil4.style.color = 'red';
   }
   
  if(jwb5.checked) {
      response = 'jawaban anda benar';
      hasil5.style.color = 'green';
      poin += 20;
    } else {
      response = 'jawaban anda salah';
      hasil5.style.color = 'red';
    }
    
    hasil1.innerHTML = response;
    hasil2.innerHTML = response;
    hasil3.innerHTML = response;
    hasil4.innerHTML = response;
    hasil5.innerHTML = response;
    nilai.innerHTML = poin;
 };
 
 
 const names = document.querySelector('.names');
 const jawaban = document.querySelector('.jawaban');
 
 
 let res;
 function cekk(re){
   if(names.value){
     res = `Hi ${names.value} selamat datang`;
     jawaban.innerHTML = res;
   }
 }
