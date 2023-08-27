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
                    <p>Born in 1994 and proudly raised in Brazil but for the last 5 years falling everyday in love with Barcelona city.</p>
                    
                    <p>Background in Business Administration with a master of 2:1 honor degree in Digital Transformation Leadership and most recently I have attended to a Full-Stack Javascript Bootcamp to level up my tech/programming skills and get a firsthand experience as a front-end developer.</p>
                    
                    <p>I've got the opportunity to experience challenges among different industries, such as Advertising Agencies, Retail, and SaaS companies.</p>
                    
                    <p>With 5+ years of experience in business development and product management, I'm ready to collaborate and engage cross-functional teams in order to design and deploy solutions, perform A/B tests, and implement go-to-market strategies.</p>
                    
                    <p>With a mix of an analytical and empathetic personality, together with my constant curiosity, I'm totally sold on the idea of using technology to build businesses that are not just scalable but sustainable and meaningful too.</p>
                    
                    <p>Furthermore, I'm a bit of a sports nut – love the thrill. And find very difficult to refuse a beer and billiards invitation after work 🍻🎱</p>

                </div>
                <img class="profilepic" src={profilepic2} alt="Vitor Seabra Graduation Pic"/>
        </div>
    </div> 
    )
}

export default ABOUT;
