const counterEL = document.querySelector('.counter'); 
const increaseButtonEL = document.querySelector('.counter__button--increase');
const decreaseButtonEL = document.querySelector('.counter__button--decrease');
const resetButtonEL = document.querySelector('.counter__reset-button');
const counterTitleEl = document.querySelector('.counter__title');
const counterValyeEL = document.querySelector('.counter__value');


resetButtonEL.addEventListener ('click', function() {

   counterValyeEL.textContent = 0;
counterEL.classList.remove('counter-limit');
counterTitleEl.textContent = 'Fancy Counter';
increaseButtonEL.disabled = false;
decreaseButtonEL.disabled = false;
resetButtonEL.blur ();

} );


decreaseButtonEL.addEventListener ('click', function (){
   var curerentValue = counterValyeEL.textContent; 
   const curerentValueAsNumber = +curerentValue;
let newValue = curerentValueAsNumber - 1;
if(newValue <  0) {
newValue = 0;
};

counterValyeEL.textContent = newValue;

});

function incremantCounter () {
var curerentValue = counterValyeEL.textContent;
const curerentValueAsNumber = +curerentValue;
let newValue = curerentValueAsNumber + 1;

if (newValue > 5) {
   newValue = 5;
   counterEL.classList.add ('counter-limit'); 
   counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >5'
   increaseButtonEL.disabled = true;
   decreaseButtonEL.disabled = true;
}

counterValyeEL.textContent = newValue;
}
increaseButtonEL.addEventListener ('click', incremantCounter);

document.addEventListener('keydown', incremantCounter);