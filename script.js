let gender;
let activityCoefficient;
let age = 1;
let weigth = 1;
let growth = 1;
let dailyCalorie;

const form = document.forms.main;

const steps = document.querySelectorAll('.step');


document.querySelector('.calculator-gender__items').addEventListener('click', (e) => {
    document.querySelectorAll('.calculator-gender__item').forEach(i =>{
        i.classList.remove('active');
    })
    if(e.target.parentElement.closest('.calculator-gender__item')){
        e.target.parentElement.classList.add('active');
    }
})

document.querySelector('#step-1-btn').addEventListener('click', (e) => {
    e.preventDefault();
    gender = form.gender.value;
    if(gender == ''){
        alert('Выберите пол!')
        return gender
    }
    steps[0].style.display = 'none';
    steps[1].style.display = 'block';
})

document.querySelector('.calculator-activity__items').addEventListener('click', (e) =>{
    document.querySelectorAll('.calculator-activity__item').forEach(i => {
        i.classList.remove('active');
    })
    if(e.target.parentElement.closest('.calculator-activity__item')){
        e.target.parentElement.classList.add('active');
    }
})

document.querySelector('#step-2-btn').addEventListener('click', (e) => {
    e.preventDefault();
    activityCoefficient = form.activity.value;
    if(activityCoefficient == ''){
        alert('Выберите уровень ежедневной активности!')
        return activityCoefficient
    }
    steps[1].style.display = 'none';
    steps[2].style.display = 'block';
})

function check (param){
    if(param.validity.rangeOverflow || param.validity.rangeUnderflow){
        alert('Вы ввели недопустимое значение!')
    }
    return false
}

form.age.addEventListener('blur', (e) => {
    if(!check(e.target)){
        age = e.target.value;
    }

})

form.growth.addEventListener('blur', (e) => {
    if(!check(e.target)){
        growth = e.target.value;
    }
})

form.weightt.addEventListener('blur', (e) => {
    if(!check(e.target)){
        weigth = e.target.value;
    }
})

function getDalyCalorie(){
    if (gender === 'man'){
            return dailyCalorie = ((10 * weigth) + (6.25 * growth) - (5 * age) + (5 * activityCoefficient)).toFixed(2);
        } else {
            return dailyCalorie = ((10 * weigth) + (6.25 * growth) - (5 * age) - (161 * activityCoefficient)).toFixed(2);
        }
}

document.querySelector('#step-result').addEventListener('click', (e) => {
    e.preventDefault();
    if ((age < 0 ) || (weigth < 0) || (growth < 0)){  
        return;
    }
    steps[2].style.display = 'none';
    document.querySelector('.calculator-result').style.display = 'block';
    const index = (Math.pow((weigth / growth), 2) * 100).toFixed(2);
    document.querySelector('#imt-value').innerHTML = index;

    const x = getDalyCalorie();
    document.querySelector('#nc').innerHTML = x;
})

