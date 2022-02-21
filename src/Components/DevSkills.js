import '../App.css';
import programminglanguages from '../Assets/programminglanguages.png'

function DevSkills() {
    return (            
        <div id="devskills">
                <div class="devskills">
                <div><img src={programminglanguages} alt="programminglanguages"/></div>
                        <div class="grid3devskills">
                            <div>
                                <h2><b>Work Experience</b></h2>
                                <div class="shapecolor"></div>
                                <div class="shapecolor"></div>
                                <div class="shapecolor"></div>
                                <div class="shapewhite"></div>
                                <p><button>HTML</button>
                                <button>CSS</button></p>
                                <p><button>Javascript</button></p>
                                <p><button>Typescript</button></p>
                                <p><button>React.js</button></p>
                                <p><button>API</button></p>
                            </div>
                            <div>
                                <h2><b>Academic Experience</b></h2>
                                <div class="shapecolor"></div>
                                <div class="shapecolor"></div>
                                <div class="shapewhite"></div>
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
                                <div class="shapewhite"></div>
                                <p><button>Phyton</button></p>
                                <p><button>Blockchain</button></p>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default DevSkills;