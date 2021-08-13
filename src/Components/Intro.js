import '../App.css';
import github from '../Assets/github_purple.png'
import linkedin from '../Assets/linkedin1.png'

function Intro() {
    return (         
    <div class="intro">
        <h1>Jr. Front-End Developer</h1>
        <h3>Full-Stack JavaScript Bootcamp Graduate</h3>
        <br></br>
        <p>and a multidisciplinary Designer with a startup experience, knowledge of emerging
technologies and interest in sustainability, decentralised production and innovation.</p>
        <a href="https://github.com/seabravitor" target="_blank"><img src={github} alt="github_vitor_seabra"/></a>
        <a href="https://www.linkedin.com/in/vitorseabrasansao/" target="_blank"><img src={linkedin} alt="linkedin_vitor_seabra"/></a> 
    </div>
    )
}

export default Intro;