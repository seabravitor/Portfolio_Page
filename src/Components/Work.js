import '../App.css';
import propague from '../Assets/docsync.png'
import restoque from '../Assets/restoque.png'
import moreappLogo from '../Assets/moreapppng.png'
import transperfect from '../Assets/transperfect.png'

function Work() {
    return (            
        <div class="work" id='work'>

        <div class="transperfect">
            <div class="text">
                <img src={transperfect} alt="Logo Propague Doc Sync"/>
                <h2>Product Manager - Project Director</h2>
                <p><b>Barcelona, Spain <br></br> (October 2021 - moment)</b></p>
                <p>Project Director is a Traslation Management Software (TMS) and my goal as Product manager is to Define product strategy and roadmap with stakeholders; Oversee product development efforts together with our Solution Architects, Software Engineers and Design Team; Drive QA to ensure high quality of our products.
                <br></br>
                <br></br>
                <b>Jira • Confluence • Figma • Jenkins • AWS</b></p>
            </div>
        </div>

        <div class="moreapp">
            <div class="text">
                            <div>
                                <a href="https://moreapp.com/en/"><img class="moreappicon" src={moreappLogo} alt=""/></a>
                                <div class='grid3moreapp'>
                                    <div>
                                        <h2>Jr. Front-End Developer</h2>
                                        <p><b>Barcelona, Spain <br></br>(May 2021 - August 2021</b>)</p>
                                        <p>Summer position focused on training and learning. Immersion in the development of the new app using React and Typescript.</p>
                                        <p><b>Jira • BitBucket • IntelliJ • StoryBook • Figma • Google Cloud Platform.</b></p>
                                    </div>
                                    <div>
                                        <h2>Business Analyst</h2>
                                        <p><b>Barcelona, Spain <br></br>(September 19 - May 21)</b></p>
                                        <p>Adapt our product to the Portuguese market and increase market share by conducting researches, interpreting user metrics, and having meetings with stakeholders.</p>
                                        <p><b>Jira • Confluence • MongoDB • Google Data Studio • Google Ads • Instapage • Freshworks.</b></p>
                                    </div>
                                    <div>
                                        <h2>Product Genius</h2>
                                        <p><b>Barcelona, Spain<br></br>(May 19 - September 21)</b></p>
                                        <p>Identify potential features to improve our product while following up on customers or pitching our solution to leads with data collection and structure issues.</p>
                                        <p><b>Jira • Confluence • Freshsales • Freshdesk • Freshchat.</b></p>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>

                <div class="propague">
                <div class="text">
                <a href="https://docsync.com.br/"><img src={propague} alt="Logo Propague Doc Sync"/></a>
                    <div class='grid2propague'>
                        <div>
                            <h2>Assistant of Production</h2>
                            <p><b>Florianópolis, Brazil <br></br>(August 2014 - October 2014)</b></p>
                            <p>As an assistant of production, my role was to support the account managers and the production team with the planning and execution of external projects. Besides digital advertising project, I was often out of the office dealing with suppliers and helping production to execute and control events to assure its sucessful.</p>
                        </div>
                        <div>
                            <h2>Account Manager</h2>
                            <p><b>Florianópolis, Brazil <br></br>(October 2014 - April 2015)</b></p>
                            <p>As an account manager, I was entirely in charge of 04 accounts and it's external and internal adverstising projects. In contact straight with clients, I found myself often dealing with internal and external negotiations.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="restoque">
                <div class="text">
                <a href="https://www.restoque.com.br/"><img src={restoque} alt=""/></a>
                    <h2>Sales Manager</h2>
                    <p><b>Florianópolis, Brazil<br></br>(September 2015 - February 2016)</b></p>
                    <p>At one of the group many brands, I've got the oportunity to lead a small team (6) at John John store to beat, team's and invidual targets, while keeping a health work environment. My main tasks were stock management, store display, sales, cashier and conflict management </p>
                </div>
            </div>
        </div>
    )
}

export default Work;