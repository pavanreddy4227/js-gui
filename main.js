

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const k = parseInt(document.querySelector('#thirdNumber').value)
    const ans = i*j*k;
    document.querySelector('#result').innerHTML = ans
  
}


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})
