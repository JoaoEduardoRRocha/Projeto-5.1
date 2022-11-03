3 maneiras de criar e atribuir função a um evento

FORMA 1:
form.onsubmit = () => {}

FORMA 2:
form.onsubmit = handleSubmit
function handleSubmit() {}

FORMA 3:
(foi a utilizada no projeto)
form.onsubmit = event => {
    event.preventDefault()  // evitando padrão submit (enviar formulário e recarrega página)

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight, height)
    console.log(result)
}