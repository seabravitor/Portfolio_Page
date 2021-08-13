import './App.css';
import Navigation from './NAVIGATION';
import profilepic from './Assets/profilepic.jpeg'

function ABOUT() {
    return (        
    <div> 
        <div class="grid2about" >
            <div>
                <h1>About me</h1>
                <h4>Bussiness Development Analyst at MoreApp</h4>
                <h4>Full-Stack JavaScript Student</h4>
                <h5>Brazilian living in Barcelona - Spain</h5>
                <p>(+34) 677 823282</p>
                <p>Digital Industry: Front-end, Back-end, Product Owner. </p>
            </div>
            <img src={profilepic} alt="Vitor Seabra Graduation Pic"/>
        </div>
    </div>   
    )
}

export default ABOUT;
