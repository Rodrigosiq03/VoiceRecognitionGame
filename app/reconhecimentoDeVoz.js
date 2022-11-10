window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition()

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

const elementoChute = document.querySelector('#chute')
function onSpeak (event) {
    var chute = event.results[0][0].transcript
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    ` 
    verificarChute(chute)
}

recognition.addEventListener('end', () => {
    recognition.start()
})
