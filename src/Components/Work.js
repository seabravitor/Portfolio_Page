import '../App.css';
import propague from '../Assets/docsync.png'
import restoque from '../Assets/restoque.png'
import moreappLogo from '../Assets/moreapppng.png'
import moreappIphone from '../Assets/moreappiphone.jpg'

function Work() {
    return (            
        <div class="work" id='work'>
        <h1>Professional Background</h1>

        <div class="blue">
                <div class="moreapp">
                            <div>
                                <a href="https://moreapp.com/en/" target="_blank" ><img class="moreappicon" src={moreappLogo} alt=""/></a>
                                <h2>Jr. Front-End Developer (summer position)</h2>
                                <h4>Barcelona (May 2021 - August 2021)</h4>
                                <p>Position focused on training and learning. Immersion in the development of the new app using React and Typescript.</p>
                                <br></br> 
                                <p>Tools: Tools: Jira, BitBucket, IntelliJ, StoryBook, Figma, Google Cloud Platform.</p>
                                <h2>Business Analyst</h2>
                                <h4>Barcelona (September 19 - May 21)</h4>
                                <p>Adapt our product to the Portuguese market and increase market share by conducting researches, interpreting user metrics, and having meetings with stakeholders.</p>
                                <br></br> 
                                <p>Tools: Jira, Confluence, MongoDB, Google Data Studio, Google Ads, Instapage, Freshworks.</p>
                                <h2>Product Genius</h2>
                                <h4>Barcelona (May 19 - September 21)</h4>
                                <p>Identify potential features to improve our product while following up on customers or pitching our solution to leads with data collection and structure issues.</p>
                                <br></br> 
                                <p>Tools: Jira, Confluence, Freshsales, Freshdesk, Freshchat.</p>
                            </div>
                    </div>
                </div>

            <div class="orange">
                <div class="propague">
                <a href="https://docsync.com.br/" target="_blank" ><img src={propague} alt="Logo Propague Doc Sync"/></a>
                    <h2>Assistant of Production / Account Manager.</h2>
                    <h4>Florianópolis, Brazil (August 2014 - April 2015) </h4>
                    <p>As an assistant, my role was to help with the planning and execution of external projects. Later on, as an account manager, I was entirely in charge of the projects, dealing with internal and external negotiations.</p>
                </div>
            </div>

            <div class="restoque">
                <div class="text">
                <a href="https://www.restoque.com.br/" target="_blank" ><img src={restoque} alt=""/></a>
                    <h2>Sales Manager</h2>
                    <h4>Florianópolis, Brazil (September 2015 - Februaru 2016) </h4>
                    <p>At John John store - First work and later leading a small team (6), to beat their targets while keeping a smooth work environment. Besides that, tasks as stock management and cashier. </p>
                </div>
            </div>
        </div>
    )
}

export default Work;