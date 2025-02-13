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
                <p>Project Director is a Translation Management System (TMS) utilized by industry leaders across various countries. Some of my daily tasks include:
                <br></br>
                <br></br>
                - Defining the product strategy and roadmap
                <br></br>
                - Engaging with stakeholders
                <br></br>
                - Collaborating with the UX/UI team from discovery to delivery
                <br></br>
                - Assisting in overseeing product development efforts with software engineers
                <br></br>
                - Conducting regular competitive analysis for our products
                <br></br>
                - Leading the QA effort to ensure the high quality of our products
                <br></br>
                <br></br>
                I have Led a B2B product design and infrastructure relaunch, with a 40% increase in dev velocity while reducing tech debt by 20%. Conducted client migration and assisted in 10+ six-figure new enterprise deals.
                <br></br>
                <br></br>
                <b>Jira • Confluence • Figma • Jenkins • TestRail • Postman • Sumo • Rundeck</b></p>
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
                                        <p>Temporary role gaining hands-on experience with front-end engineering tasks in React Native, creating minor components and contributing to two production releases.</p>
                                        <p><b>Jira • BitBucket • IntelliJ • StoryBook • Figma • Google Cloud Platform</b></p>
                                    </div>
                                    <div>
                                        <h2>Business Developer</h2>
                                        <p><b>Barcelona, Spain <br></br>(September 19 - May 21)</b></p>
                                        <p>Led a small team to develop marketing strategies, increasing registered leads by 120% resulting in over 80 paid new clients, 2k+ freemium users. Assisted in the product migration from credit-based to subscription model.</p>
                                        <p><b>Jira • Confluence • MongoDB • Google Data Studio • Google Ads • Instapage • Freshworks • Stripe</b></p>
                                    </div>
                                    <div>
                                        <h2>Product Specialist</h2>
                                        <p><b>Barcelona, Spain<br></br>(May 19 - September 21)</b></p>
                                        <p>Conducted product demos for new leads and assisted in setting up over 30 new clients. Provided first-line support in Portuguese, Spanish, and English, resulting in key insights for product development and growth.</p>
                                        <p><b>Jira • Confluence • Freshsales • Freshdesk • Freshchat</b></p>
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
                            <p>As an assistant of production, my role was to support the account managers and the production team with the planning and execution of external projects. Besides digital advertising project, I was often out of the office dealing with suppliers and helping production to execute and guarantee quality of delivery.</p>
                        </div>
                        <div>
                            <h2>Account Manager</h2>
                            <p><b>Florianópolis, Brazil <br></br>(October 2014 - April 2015)</b></p>
                            <p>As an Account Manager, I was fully responsible for managing four accounts and overseeing their internal and external advertising projects. Working directly with clients, I frequently handled both internal and external negotiations.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="restoque">
                <div class="text">
                <a href="https://www.restoque.com.br/"><img src={restoque} alt=""/></a>
                    <h2>Sales Manager</h2>
                    <p><b>Florianópolis, Brazil<br></br>(September 2015 - February 2016)</b></p>
                    <p>At John John, one of the group's many brands, I had the opportunity to lead a small team of six at the John John store, driving both team and individual sales targets while maintaining a healthy work environment. My key responsibilities included stock management, store display, sales, cashier operations, and conflict resolution.</p>
                </div>
            </div>
        </div>
    )
}

export default Work;