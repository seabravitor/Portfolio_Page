import '../App.css';
import github from '../Assets/github_purple.png'
import linkedin from '../Assets/linkedin1.png'
import curriculo from '../Assets/curriculo.pdf'


function Intro() {

    return (         
    <div class="intro" id="scene">
        {/* <h1>Certified Product Owner</h1> */}
        <h1>Product Manager</h1>
        <h3>Bachelor in Business Administration - BBA</h3>
        <h3>Master in Digital Transformation Leadership</h3>
        <h3>Full-Stack JavaScript Bootcamp Graduate</h3>
        <br></br>
        <p>and a business oriented design thinker by nature, with agile methodology and project management experience in startup and corporation enviroment.
        Interest in sustainability, decentralised technologies and innovation.</p>
        <a href="https://github.com/seabravitor" target="_blank" ><img src={github} alt="github_vitor_seabra"/></a>
        <a href="https://www.linkedin.com/in/vitorseabrasansao/" target="_blank"><img src={linkedin} alt="linkedin_vitor_seabra"/></a>
        <p><a href={curriculo} download="CV_Vitor_Seabra">--> Download CV</a></p>
    </div>
    )
}

export default Intro;
