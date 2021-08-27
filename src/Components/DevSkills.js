import '../App.css';
// import html from '../Assets/html.png'
// import javascript from '../Assets/javascript.png'
// import typescript from '../Assets/typescript.png'
// import css from '../Assets/css.png'
// import react from '../Assets/react.png'
// import phyton from '../Assets/phyton.png'
// import mongodb from '../Assets/mongoDB.png'
import programminglanguages from '../Assets/programminglanguages.png'

function DevSkills() {
    return (            
        <div id="devskills">
                <div class="devskills">
                    <h1>Development Skills</h1>
                        <div class="grid3devskills">
                            <div>
                                <h2><b>Work Experience</b></h2>
                                <div class="shapecolor"></div>
                                <div class="shapecolor"></div>
                                <div class="shapecolor"></div>
                                <p><button>HTML</button>
                                <button>CSS</button></p>
                                <p><button>Javascript</button></p>
                                <p><button>Typescript</button></p>
                                <p><button>React</button></p>
                            </div>
                            <div>
                                <h2><b>Academic Experience</b></h2>
                                <div class="shapecolor"></div>
                                <div class="shapecolor"></div>
                                <div class="shapewhite"></div>
                                <p><button>React Native</button></p>
                                <p><button>Express.js</button></p>
                                <p><button>Node.js</button></p>
                                <p><button>MongoDB</button></p>
                            </div>
                            <div>
                                <h2><b>Short Courses</b></h2>
                                <div class="shapecolor"></div>
                                <div class="shapewhite"></div>
                                <div class="shapewhite"></div>
                                <p><button>Phyton</button></p>
                            </div>
                        </div>
                        {/* <img src={html} alt="html"/>
                        <img src={css} alt="css"/>
                        <img src={javascript} alt="javascript" class="javascript"/>
                        <img src={typescript} alt="typescript" class="typescript"/>
                        <img src={react} alt="react"/>
                        <img src={mongodb} alt="mongodb"/>
                        <img src={phyton} alt="phyton"/> */}
                </div>
                <div class="devskillslogo"><img src={programminglanguages} alt="programminglanguages"/></div>
        </div>
    )
}

export default DevSkills;