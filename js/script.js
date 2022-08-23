// document.getElementById('shakib').addEventListener('click',function(){
//     const select=document.getElementById('selected');
//      const selectedFinal=select.innerText;
//      const selctedFieldFinal="Shakib AL Hasan";
//      selected.innerText=selctedFieldFinal;
//      document.querySelector('#shakib').disabled = true;
     
    
// })
// document.getElementById('mashrafe').addEventListener('click',function(){
//     const select=document.getElementById('selected');
//      const selectedFinal=select.innerText;
//      const selctedFieldFinal="Mashrafe Mortaza";
//     //  const selctedFieldFinal=selctedFieldFinal+selctedField;
//      selected.innerText=selctedFieldFinal;
//      document.querySelector('#mashrafe').disabled = true;
    
// })

const selected = document.getElementById('selected')
const playerContainer = document.getElementById('player-container');
playerContainer.addEventListener('click',function(e){
    let x;
    if(e.target.nodeName === 'BUTTON'){
        if(selected.childElementCount>4){
            alert("You can't add more than 5 player.")
      return;
        }
       x = e.target.parentElement.parentElement.querySelector('h2').innerText
       createElement(x)
       e.target.setAttribute('disabled','true')
    }
})

function createElement(itemName)
{

    const li = document.createElement('li')
    li.innerText = itemName;
    selected.appendChild(li)

}
// buget calculation

const perPlayerCost=document.getElementById('per-player-cost');
const totalPlayerCost=document.getElementById('total-player-cost');
document.getElementById('player-cost-button').addEventListener('click',function(){
         totalPlayerCost.innerText=
parseFloat(perPlayerCost.value)*selected.childElementCount;
})

const managerCost=document.getElementById('manager');
const coachCost=document.getElementById('coach');
const finalCost=document.getElementById('final-cost');
document.getElementById('calculate-total').addEventListener('click',function(){
    const totalCost=parseFloat(managerCost.value) +parseFloat(coachCost.value) +parseFloat(totalPlayerCost.innerText);
    finalCost.innerText=totalCost;
})
