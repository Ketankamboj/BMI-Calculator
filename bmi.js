const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

   const height = document.querySelector('#height').value
   const weight = document.querySelector('#weight').value
   const result = document.querySelector('#result')

   if(height === '' || height < 0){
    result.innerHTML = `Please enter a valid height ${height}`
   }

   else if(weight === '' || weight<0){
    result.innerHTML = `Please enter a valid weight ${weight}`
   }

   else{
   const bmi = (weight/((height*height)/10000)).toFixed(2)
//    result.innerHTML = `<span>The BMI of your data is ${bmi}</span>`

   if(bmi<18.6){
    result.innerHTML = `<span>You Are Under Weight And The BMI of your data is ${bmi}</span>`
   }
   else if(bmi>=18.6 && bmi<=24.9){
    result.innerHTML = `<span>You Are Normal Weight And The BMI of your data is ${bmi}</span>`
   }
   else{
    result.innerHTML = `<span>You Are Over Weight And The BMI of your data is ${bmi}</span>`
   }
   }

})