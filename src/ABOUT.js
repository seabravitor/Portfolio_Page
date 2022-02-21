import './App.css';
import Intro from './Components/Intro';
import profilepic2 from './Assets/profilepic2.jpeg'

function ABOUT() {
    return (        
    <div class="about">           
        <Intro/>
        <div class="grid2about" >
                <div>
                    <h1>Hola!</h1>
                    <p>My name is Vitor ;)</p>
                    <p>Born in 1994 and proudly raised in Brazil but for the last 4 years falling everyday in love with Barcelona city.</p>
                    
                    <p>Background in Business Administration with a master of 2:1 honor degree in Digital Transformation Leadership and most recently attended a Full-Stack Javascript Bootcamp to strengthen my tech skills and understand, in first-hand how the product development world works.</p>
                    
                    <p>I've got the opportunity to move in different industries, such as Advertising Agencies, Retail, and SaaS companies.</p>
                    
                    <p>With 4+ years of experience in business development and product management, I'm ready to engage cross-functional teams to deploy solutions, perform A/B testing, and implement go-to-market strategies.</p>
                    
                    <p>Analytical, empathetic, and constantly willing to learn, my goal is to guarantee fluency communication between stakeholders' product demands with development teams' reality.</p>
                    
                    <p>Besides, I am a sports enthusiast and can't resist an invitation to a round of beer and billiards.</p>
                </div>
                <img class="profilepic" src={profilepic2} alt="Vitor Seabra Graduation Pic"/>
        </div>
    </div> 
    )
}

export default ABOUT;
