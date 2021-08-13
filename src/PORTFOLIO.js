import './App.css';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import DevSkills from './Components/DevSkills';


function PORTFOLIO() {
    return (
    <div>
        {/* <div class="sticky"><Navigation /></div> */}
        <Intro/>
        <DevSkills/>
        <Projects/>
    </div>
    )
}

export default PORTFOLIO;