import audio from '../assets/sound/soundfx.mp3'

const sound =  new Audio(audio)

const timerEndHandler = () => {

    
    sound.play()
    document.title = 'Time is over!'

    setTimeout(() => {
        alert('Time is over!')
        document.title = 'React App'
    }, 4500)
}

export default timerEndHandler