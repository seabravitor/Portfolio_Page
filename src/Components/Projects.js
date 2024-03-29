import '../App.css';
import blogcomputer from '../Assets/blogcomputer.png';
import calculadoraphone from '../Assets/calculadoraphone.png';
import videowavesappgif from '../Assets/wavesapp_video.gif';
import moreapp from '../Assets/moreapponboardingphone.png';
import phytongame from '../Assets/phytongame.png'

function Projects() {
    return (            
    <div class="projects" id='projects'>
            <div class="moreappacad">
                <div class="grid2projects" >
                    <img src={moreapp} alt="moreapp"/>
                    <div>
                        <h2>MoreApp - Mobile Application</h2>
                        <p><b>Android and iOS</b></p>
                        <p>Summer experience assisting the development of the new MoreApp application (under development).</p>
                        <p>MoreApp is a Saas company with users in more than 140 countries, using its solution to digitise processes through digital forms via app and web.</p>
                        <p>The new application will be released with a new interface, several improvements and new features.</p>
                        <br></br> 
                        <p><b>Tools:</b> React.js, Typescript, MongoDB, Google Cloud Platform, StoryBook, Jira, Bitbucket</p>
                        <p><a href="https://apps.apple.com/us/app/moreapp-forms/id839543670"><button>iOS</button></a>
                        <a href="https://play.google.com/store/apps/details?id=com.moreapp&hl=en_US&gl=US"><button>Android</button></a></p>
                        {/* <a href="https://apps.apple.com/us/app/moreapp-forms/id839543670"><img src={googlestore} alt="googleplay"/></a>
                        <a href="https://play.google.com/store/apps/details?id=com.moreapp&hl=en_US&gl=US"><img src={appstore} alt="applestore"/></a> */}
                    </div>
                </div>
            </div>

            <div class="wavesapp">
                <div class="grid2projects" >
                    <div class="backgroundsurf">
                        <h2>Ripple Waves Forecast - Mobile Application</h2>
                        <p><b>Android and iOS (not available for download)</b></p>
                        <p>Application developed as mobile final project for the React native part of the Full-Stack Bootcamp.</p>
                        <p>With Ripple Waves Forecast application you can find out how are the weather and the waves on your current location or any other city in the world.</p>
                        <p>For the location I have used a Google Places API (https://developers.google.com/maps/documentation/places/web-service/search) and to the wather forecast from the StormGlass API (https://stormglass.io/).</p>
                        <br></br> 
                        <p><b>Framework:</b> React Native</p>
                        <p><a href="https://github.com/seabravitor/BootCampProjects_WavesForecastApp_ReactNative"><button>View Code</button></a></p>
                    </div>
                    <img src={videowavesappgif} alt="gif"/>
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
                        <p><b>Framework:</b> React and Express.js</p>
                        <p><b>Programming languages:</b> Javascript, HTML, CSS, Node.js</p>
                        <p><a href="https://project-blog-client.herokuapp.com/"><button>Live Website</button>
                        <button href="https://github.com/seabravitor/BootCampProjects_Blog_Client">View Code</button></a></p>
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
                        <p><b>Framework:</b> React Native</p>
                        <p><a href="https://github.com/seabravitor/Calculator_App"><button>View Code</button></a></p>
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
                        <p><b>Programming languages:</b> Phyton</p>
                        <p><a href="https://github.com/seabravitor/Phyton_100_Exercises"><button>View Code</button></a></p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Projects;