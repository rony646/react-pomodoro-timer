import audio from '../assets/sound/soundfx.mp3'

const sound =  new Audio(audio)

const timerEndHandler = () => {
    sound.play()

    setTimeout(() => {
        alert('Time is over')
    }, 4500)

    document.title = "Time is over!"
}

export default timerEndHandler