import '../App.css';
import blogcomputer from '../Assets/blogcomputer.png';
import calculadoraphone from '../Assets/calculadoraphone.png';
import videoioSwavesapp from "../Assets/wavesappvideo.mp4";
import videowavesapp from '../Assets/wavesvideo.mp4';
import moreapp from '../Assets/moreapponboardingphone.png';
import phytongame from '../Assets/phytongame.png'

function Projects() {
    return (            
    <div class="projects" id='projects'>

        <h1>Portfolio</h1>

            <div class="moreapp">
                <div class="grid2projects" >
                    <img src={moreapp} alt="moreapp"/>
                    <div>
                        <h2>MoreApp - Mobile Application</h2>
                        <p><b>Android and iOS (not available for download)</b></p>
                        <p>Application developed as mobile final project for the react native part of the Full Stack Bootcamp. 
                        With Ripple Waves Forecast application you can find out how are the weather and the waves on your current location or any other city in the world. 
                        For the location we use a Google Places API (https://developers.google.com/maps/documentation/places/web-service/search) and to obtain its forecast we run the StormGlass API (https://stormglass.io/).</p>
                        <br></br> 
                        <p><b>Tools: React Native</b></p>
                        <p><button href="https://moreapp.com/en/">View Code</button></p>
                    </div>
                </div>
            </div>

            <div class="wavesapp">
                <div class="grid2projects" >
                    <div class="backgroundsurf">
                        <h2>Ripple Waves Forecast - Mobile Application</h2>
                        <p><b>Android and iOS (not available for download)</b></p>
                        <p>Application developed as mobile final project for the react native part of the Full Stack Bootcamp. 
                        With Ripple Waves Forecast application you can find out how are the weather and the waves on your current location or any other city in the world. 
                        For the location we use a Google Places API (https://developers.google.com/maps/documentation/places/web-service/search) and to obtain its forecast we run the StormGlass API (https://stormglass.io/).</p>
                        <br></br> 
                        <p><b>Tools: React Native</b></p>
                        <p><button href="https://moreapp.com/en/">View Code</button></p>
                    </div>
                    <video src={videoioSwavesapp} alt="videoapp"></video>
                </div>
            </div>

            <div class="blog">
                <div class="grid2projects" >
                    <img src={blogcomputer} alt="blog"/>
                    <div>
                        <h2>Full Stack Blog Website.</h2>
                        <p><b>Web Solution</b></p>
                        <p>This is a generic blog website, where you will find a home page with blogs written by users or/and you can register to start writing whatever topic you are willing to share with the community.
                        This project was developed as a final project for a Full-Stack Javascript and React Bootcamp hosted by Barcelona Code School.
                        This project uses React and Node as its main technology (see server part here: https://github.com/seabravitor/BootCampProjects_Blog_Server)</p>
                        <p><b>Tools: React and Node.js</b></p>
                        <p><button href="https://moreapp.com/en/">View Code</button></p>
                    </div>
                </div>
            </div>

            <div class="calculadora">
                <div class="grid2projects" >
                    <div>
                        <h2>Calculator Project</h2>
                        <p><b>Mobile Application and Web Solution</b></p>
                        <p>This was simple calculator solution made for a job process. Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        </p>
                        <p><b>Tools: React Native</b></p>
                        <p><button href="https://moreapp.com/en/">View Code</button></p>
                    </div>
                        <img src={calculadoraphone} alt=""/>
                </div>
            </div>

            <div class="phyton">
                <div class="grid2projects" >
                <img src={phytongame} alt="phytongame"/>
                    <div>
                        <h2>Phyton Beginners Game (100 exercises)</h2>
                        <p><b>Mobile Application and Web Solution</b></p>
                        <p>This was simple calculator solution made for a job process. Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                        </p>
                        <p><b>Tools: React Native</b></p>
                        <p><button href="https://moreapp.com/en/">View Code</button></p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Projects;