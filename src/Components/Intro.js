import '../App.css';
import github from '../Assets/github-logo.png'
import linkedin from '../Assets/linkedin1.png'
import curriculo from '../Assets/curriculo.pdf'
import curriculo_vitae from '../Assets/curriculum-vitae.png'
import PSPO from '../Assets/scrum-pspo.png'



function Intro() {

    return (         
    <div class="intro" id="scene">
        {/* <h1>Certified Product Owner</h1> */}
        <h1>Product Manager</h1>
        <h3>Bachelor in Business Administration - BBA</h3>
        <h3>Master in Digital Transformation Leadership</h3>
        <h3>Full-Stack JavaScript Bootcamp Graduate</h3>
        <br></br>
        <p>A business-oriented design thinker by nature, certified product owner, code lover with experience in both startup and corporate environments. Interested in sustainability, decentralized technologies, and innovation.</p>
        <a href="https://github.com/seabravitor"><img src={github} title="Github" alt="github_vitor_seabra"/></a>
        <a href="https://www.linkedin.com/in/vitorseabrasansao/"><img src={linkedin} title="Linkedin" alt="linkedin_vitor_seabra"/></a>
        <a href={curriculo} download="CV_Vitor_Seabra"><img src={curriculo_vitae} title="Download CV" alt="curriculo_vitor_seabra"/></a>
        <a href="https://www.credly.com/badges/d5d5cb3b-cde5-4ca9-b796-f9ff8e1b6f9f/public_url"><img src={PSPO} title="Product Owner - Scrum certification" alt="credly_PSPO_vitor_seabra"/></a>
    </div>
    )
    }

export default Intro;
