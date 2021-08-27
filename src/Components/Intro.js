import '../App.css';
import github from '../Assets/github_purple.png'
import linkedin from '../Assets/linkedin1.png'
import curriculo from '../Assets/curriculo_dev.pdf'


function Intro() {

    return (         
    <div class="intro" id="scene">
        <h1>Jr. Front-End Developer</h1>
        <h3>Full-Stack JavaScript Bootcamp Graduate</h3>
        <br></br>
        <p>and a design thinker with startup experience, business oriented, knowledge of agile methodolog and project management.
        Interest in sustainability, decentralised technologies and innovation.</p>
        <a href="https://github.com/seabravitor" target="_blank" ><img src={github} alt="github_vitor_seabra"/></a>
        <a href="https://www.linkedin.com/in/vitorseabrasansao/" target="_blank"><img src={linkedin} alt="linkedin_vitor_seabra"/></a>
        <p><a href={curriculo} download="CV_Vitor_Seabra">--> Download CV</a></p>
    </div>
    )
}

export default Intro;
