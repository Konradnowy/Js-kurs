
// const specialCoating = true;
// const renovationJob ={
// ovnerName: 'Konrad',
// maximumPrice: 5000,
// category: 'bathroom',
// newShower: true,
// }
// const squareMeters = 100;
// const firsttOptions=['carpet', 'hardwood'];
// console.log(firsttOptions [0]);


// const calculatePrice = (squareMeters) => {
//     const price = 1000 + squareMeters;
//     return price;
// };
// console.log(calculatePrice(10000));

// const result = calculatePrice(squareMeters);
// console.log(result);
// const calculatePrice = (squareMeters) =>  1000 + squareMeters;
//  console.log(calculatePrice(squareMeters));

// const price = 1000
// if (price > 2000){
//     console.log('Hello');
// }else {
// console.log('Niachniach');
// }


// const price = '5000';


// if (price == 2000){
//     console.log('Hello');
// }else {
// console.log('Niachniach');
// }

const price = 1000;


// if (price <= 5000){
//     console.log('Hello');
// }else {
// console.log('Niachniach');
// }

// price > 3000 ? console.log('hello') : console.log('badasdasd')

// const headingEL = document.querySelector('.heading');

// headingEL.textContent= 'Hello hjkhkhkh';

const headingEL = document.querySelector('.heading')

const clickHandler = () => {
    headingEL.style.color = 'blue';
    console.log('changed color');
}

clickHandler();

headingEL.addEventListener('click', clickHandler());