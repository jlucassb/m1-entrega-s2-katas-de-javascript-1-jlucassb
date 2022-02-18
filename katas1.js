function oneThroughTwenty() {   
  
  let numeros = []
  for(let i = 1; i <= 20; i++){
    numeros.push(i)
  }
  return numeros
}

console.log(oneThroughTwenty())

function evensToTwenty() {
    
  let numerosPares = []
  for(let i = 1; i <=20; i++){
    if(i % 2 === 0){
      numerosPares.push(i)
    }
  }
  return numerosPares    
}

console.log(evensToTwenty())

function oddsToTwenty() {
    
  let numerosImpares = []
  for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
      numerosImpares.push(i)
    }
  }
  return numerosImpares
}

console.log(oddsToTwenty())

function multiplesOfFive() {
    
  let multiplosdecinco = []
  for(let i = 5; i <= 100; i++){
    if(i % 5 === 0){
      multiplosdecinco.push(i)
    }
  }
  return multiplosdecinco
}

console.log(multiplesOfFive())

function squareNumbers() {
    
  let numerosquadrados = []
  for(let i = 1; i <= 10; i++){
    numerosquadrados.push(i * i)
    }
  return numerosquadrados  
}

console.log(squareNumbers())

function countingBackwards() {
    
  let numeroscontrario = []
  for(let i = 20; i >= 1; i--){
    numeroscontrario.push(i)
  }
  return numeroscontrario
}

console.log(countingBackwards())

function evenNumbersBackwards() {
    
 let numerosParescontrario = []
 for(let i = 20; i >= 1; i--){
   if(i % 2 === 0){
     numerosParescontrario.push(i)
   }
 }
 return numerosParescontrario
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
  let numerosImparescontrario = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 !== 0){
      numerosImparescontrario.push(i)
    }
  }
  return numerosImparescontrario
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    
  let multiplosdecincocontrario = []
  for(let i = 100; i >= 5; i--){
    if(i % 5 === 0){
      multiplosdecincocontrario.push(i)
    }
  }
  return multiplosdecincocontrario
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
    
   let numerosquadradoscontrario = []
   for(let i = 10; i >= 1; i--){
     numerosquadradoscontrario.push(i * i)
   }
   return numerosquadradoscontrario
}

console.log(squareNumbersBackwards())