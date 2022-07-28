
let select = document.querySelector(".select");
let views = document.querySelectorAll(".views")
let cost = document.querySelector('.amount');
let checkbox = document.querySelector(".checkbox");
let monthOrYear = document.querySelector(".month-or-year");
let checkboxClicks = 0;
let costs=[0,8,12,16,24,32];
cost.innerHTML = costs[1].toFixed(2);
select.addEventListener("change",()=>{
  let selectValue = select.value;
views[0].innerHTML = Math.round(selectValue/1000);
views[1].innerHTML = Math.round(selectValue/1000);
if(selectValue < 10000){
  cost.innerHTML = costs[0].toFixed(2);
}else if(selectValue >=10000 && selectValue<50000){
  cost.innerHTML = costs[1].toFixed(2);
}else if(selectValue >=50000 && selectValue<100000){
  cost.innerHTML = costs[2].toFixed(2);
}else if(selectValue >=100000 && selectValue<500000){
  cost.innerHTML = costs[3].toFixed(2);
}else if(selectValue >=500000 && selectValue<1000000){
  cost.innerHTML = costs[4].toFixed(2);
}else if(selectValue >=1000000){
  cost.innerHTML = costs[5].toFixed(2);
}
if(checkboxClicks == 1){
cost.innerHTML = cost.innerHTML * 12 *0.75;
}
})

checkbox.addEventListener('click', () => {
if(checkboxClicks == 0){
  let yearCost =  cost.innerHTML * 0.75*12
  cost.innerHTML = yearCost.toFixed(2);
  checkboxClicks = 1;
  monthOrYear.innerHTML = 'year';
}else{
  let monthCost = cost.innerHTML / 12 / 0.75
  cost.innerHTML = monthCost.toFixed(2);
  checkboxClicks = 0;
  monthOrYear.innerHTML = 'month';
}
})

