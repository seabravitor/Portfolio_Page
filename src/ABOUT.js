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
                                        
                    <p>Originally from Brazil and currently based in Spain, my background combines business and technology. I hold a degree in Business Administration and a 2:1 honors Master's in Digital Transformation Leadership. Most recently, I attended a Full-Stack JavaScript Bootcamp to enhance my tech and programming skills, gaining firsthand experience as a front-end developer.</p>                    
                    
                    <p>I’ve tackled challenges across Advertising, Retail, and SaaS, bringing over 6 years of experience in digital products, as business developer and product manager. My focus is on collaborating with cross-functional teams to design and deploy solutions, run A/B tests, and implement go-to-market strategies.</p>
                                        
                    <p>With a blend of analytical thinking, empathy, and relentless curiosity, I’m passionate about leveraging technology to build businesses that are not just scalable but also sustainable and meaningful.</p>
                    
                    <p>Outside of work, I’m a sports enthusiast who thrives on competition—and I find it pretty hard to turn down a beer and a game of billiards after work. 🍻🎱</p>

                </div>
                <img class="profilepic" src={profilepic2} alt="Vitor Seabra Graduation Pic"/>
        </div>
    </div> 
    )
}

export default ABOUT;
