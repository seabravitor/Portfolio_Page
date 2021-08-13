import './App.css';
import github from './Assets/github_purple.png'
import linkedin from './Assets/linkedin1.png'

function Intro() {
    return (         
    <div class='background'>
        <div class="footer">
            <p>seabra.vitors@gmail.com</p>
            <p>(+34) 677 823282</p>
            <a href="https://github.com/seabravitor" target="_blank"><img src={github} alt="github_vitor_seabra"/></a>
        <a href="https://www.linkedin.com/in/vitorseabrasansao/" target="_blank"><img src={linkedin} alt="linkedin_vitor_seabra"/></a>         </div>
    </div>
    )
}

export default Intro;