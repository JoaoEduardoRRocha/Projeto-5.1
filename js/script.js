// Outras Maneiras de Import

// import { Modal } from './modal';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = event => {
    event.preventDefault()  // evitando padrão submit (enviar formulário e recarrega página)

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }
    AlertError.close()

    const result = calculateIMC(weight, height)
    const message = `seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
}



