import audio from '../assets/sound/soundfx.mp3'

const sound =  new Audio(audio)

const timerEndHandler = () => {
    sound.play()

    setTimeout(() => {
        alert('Time is over')
       document.title = "Pomodoro Timer"
    }, 4500)
}

export default timerEndHandler