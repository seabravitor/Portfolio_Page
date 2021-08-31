import '../App.css';
import blogcomputer from '../Assets/blogcomputer.png';
import calculadoraphone from '../Assets/calculadoraphone.png';
import videowavesappmp4 from '../Assets/wavesappvideo.mp4';
import videowavesappgif from '../Assets/wavesappvideo.gif';
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
                        <p><b>Android and iOS</b></p>
                        <p>Summer experience assisting the development of the new MoreApp application (under development).</p>
                        <p>MoreApp is a Saas company with users in more than 140 countries, using its solution to digitise processes through digital forms via app and web.</p>
                        <p>The new application will be released with a new interface, several improvements and new features.</p>
                        <br></br> 
                        <p><b>Tools: React, Typescript,</b> MongoDB, Google Cloud Platform, StoryBook, Jira, Bitbucket</p>
                        <p><a href="https://apps.apple.com/us/app/moreapp-forms/id839543670" target="_blank"><button>iOS</button></a>
                        <a href="https://play.google.com/store/apps/details?id=com.moreapp&hl=en_US&gl=US" target="_blank"><button>Android</button></a></p>
                        {/* <a href="https://apps.apple.com/us/app/moreapp-forms/id839543670" target="_blank"><img src={googleplay} alt="googleplay"/></a>
                        <a href="https://play.google.com/store/apps/details?id=com.moreapp&hl=en_US&gl=US" target="_blank"><img src={applestore} alt="applestore"/></a> */}
                    </div>
                </div>
            </div>

            <div class="wavesapp">
                <div class="grid2projects" >
                    <div class="backgroundsurf">
                        <h2>Ripple Waves Forecast - Mobile Application</h2>
                        <p><b>Android and iOS (not available for download)</b></p>
                        <p>Application developed as mobile final project for the react native part of the Full Stack Bootcamp.</p>
                        <p>With Ripple Waves Forecast application you can find out how are the weather and the waves on your current location or any other city in the world.</p>
                        <p>For the location we use a Google Places API (https://developers.google.com/maps/documentation/places/web-service/search) and to obtain its forecast we run the StormGlass API (https://stormglass.io/).</p>
                        <br></br> 
                        <p><b>Tools: React Native</b></p>
                        <p><a href="https://github.com/seabravitor/BootCampProjects_WavesForecastApp_ReactNative" target="_blank"><button>View Code</button></a></p>
                    </div>
                    <img src={videowavesappgif}/>
                </div>
            </div>

            <div class="blog">
                <div class="grid2projects" >
                    <img src={blogcomputer} alt="blog"/>
                    <div>
                        <h2>Full Stack Blog Website.</h2>
                        <p><b>Web Solution</b></p>
                        <p>This is a beta version generic blog website, where you will find a home page with blogs written by users or/and you can register to start writing whatever topic you are willing to share with the community.</p>
                        <p>This project was developed as a final project for a Full-Stack Javascript and React Bootcamp hosted by Barcelona Code School.</p>
                        <p><b>Tools: React and Express.js</b></p>
                        <p><a href="https://project-blog-client.herokuapp.com/" target="_blank"><button>Live Website</button>
                        <button href="https://github.com/seabravitor/BootCampProjects_Blog_Client" target="_blank">View Code</button></a></p>
                    </div>
                </div>
            </div>

            <div class="calculadora">
                <div class="grid2projects" >
                    <div>
                        <h2>Calculator Project</h2>
                        <p><b>Web Solution</b></p>
                        <p>This is a simple calculator solution made for a job recruitment process</p>
                        <p>The Calculator project makes possible to do operations as sum, minimize, division, multiplication, percentage and rest</p>
                        <p></p>
                        <p><b>Tools: React Native</b></p>
                        <p><a href="https://github.com/seabravitor/Calculator_App" target="_blank"><button>View Code</button></a></p>
                    </div>
                        <img src={calculadoraphone} alt=""/>
                </div>
            </div>

            <div class="phyton">
                <div class="grid2projects" >
                <img src={phytongame} alt="phytongame"/>
                    <div>
                        <h2>Phyton (100 exercises)</h2>
                        <p>This is a compilation of exercises made for an introduction to phyton certification</p>
                        <p>In this compilation you will find several logical exercises, use of several phtyon librariess for exercises involving user interactions, such as AI reproduction and games like: Cassino, Paper Scissor and Rock, Magic, etc.. </p>
                        <p><b>Tools: Phyton</b></p>
                        <p><a href="https://github.com/seabravitor/Phyton_100_Exercises" target="_blank"><button>View Code</button></a></p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Projects;