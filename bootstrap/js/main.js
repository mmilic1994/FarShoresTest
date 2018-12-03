document.addEventListener('DOMContentLoaded',()=>{
  let totalPrice = document.getElementById('total_price');
  totalPrice.innerHTML = `<h5>Total: $${total}.00</h5>`;
});

let total = 0;
let subTotal = [0,0,0]

function buyTire(i) {
    let val = document.getElementById('quantity_tire'+i).value;
    total = 0;

  let priceTyre = document.getElementById("price_tire" +i).innerHTML;
   priceEach = parseInt(priceTyre.substr(1,priceTyre.length));
  let totalPrice = document.getElementById('total_price');
  
  
  price = parseInt(val) * priceEach;
  subTotal[i-1] = price;
  for(var i=0;i<subTotal.length;i++){
      total += subTotal[i];
      }

  return totalPrice.innerHTML = `<h5>Total: $${total}.00</h5>`; 
}


let buttonClick1 = document.getElementById('buy_tire1');
buttonClick1.addEventListener('click',function(){
    buyTire(1);
}, false);

let buttonClick2 = document.getElementById('buy_tire2');
buttonClick2.addEventListener('click', function(){
    buyTire(2);
}, false); 
let buttonClick3 = document.getElementById('buy_tire3');
buttonClick3.addEventListener('click', function(){
    buyTire(3);
}, false);