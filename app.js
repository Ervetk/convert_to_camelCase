const userInput = document.querySelector('input')
const result = document.querySelector('.result__text span')
let arr = []
let arr1 = []


const convertResult = function () {
  if (!userInput.value.includes('ä')) {
    let stringArr = userInput.value.split(' ')
    arr = [stringArr[0].slice(0, 1).toLowerCase() + stringArr[0].slice(1)]
    // loop
    for (let i = 1; i < stringArr.length; i++) {
      arr += stringArr[i].slice(0, 1).toUpperCase() + stringArr[i].slice(1).toLowerCase()
    }
    result.textContent = arr
    userInput.value = ''

    if (result.textContent !== '') {
      arr1.push(result.textContent)
      document.querySelector('.memory-list').innerHTML += (`${result.textContent}, `);
    }
  }
}


// Button vajutades:
document.querySelector('button').addEventListener('click', convertResult)
// Enterile vajutades: 
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter')
    convertResult()
  //  })
})
