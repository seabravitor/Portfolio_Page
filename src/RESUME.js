import './App.css';
import SoftSkills from './Components/SoftSkills';
import Work from './Components/Work';
import Academic from './Components/Academic';
import Additional from './Components/Additional';


function PORTFOLIO() {
    return (
    <div class="portfolio">
        <SoftSkills/>
        <Work/>
        <Academic/>
        <Additional/>
    </div>
    )
}

export default PORTFOLIO;