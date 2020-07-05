import audio from '../assets/sound/soundfx.mp3'

const timerEndHandler = () => {

    const sound =  new Audio(audio)
    sound.play()
    document.title = 'Time is over!'

    setTimeout(() => {
        alert('Time is over!')
    }, 4500)
}

export default timerEndHandler