import '../App.css';

function Additional() {
    return (            
        <div class="additional" id="additional">
                <div class="grid2additional">
                <div>
                    <h2>Languages</h2>
                        <p>🇧🇷 <b>Portuguese:</b> Native (C2)</p>
                        <p>🇺🇸 <b>English:</b> Advanced (C1)</p> 
                        <p>🇪🇸 <b>Spanish:</b> Intermediary (B2)</p> 
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Certificates</h2>
                        <p>English for Business - Embassy School</p>
                        <p>Phyton for Beginners - Curso em Video</p>
                        <p>Business Analyst - Udemy</p>
                        <p>Agile Methodologies and Scrum for PSPO I - Udemy</p>
                </div>
                {/* <div class="certificates">
                    <h2>Certificates</h2>                  
                    <p>Bachelor Business Administration</p>
                    <p>Master Digital Transformation</p> 
                    <p>Phyton for Beginners</p> 
                    <p>Full-Stack Javascript</p> 
                    <p>React Native</p> 
                </div> */}
                <div>
                <h2>Volunteer Work</h2>
                        <div>
                        <p><b>Lifeguard</b></p>
                        <p><i>Corpo de bombeiros de Santa Catarina - Florianópolis, Brazil</i></p>
                        <p><i>(Nov 15 - Mar 16 / Nov 17 - Feb 18)</i></p>
                        </div>

                        <div>
                        <p><b>Hostel Staff</b></p>
                        <p><i>Casa d' Alagoa - Faro, Portugal</i></p>
                        <p><i>(Apr 18 - Jun 18)</i></p>
                        <p><i>Fabrizzio's Petit - Barcelona, Spain</i></p>
                        <p><i>(Sep 18)</i></p>
                        </div>

                        <div>
                        <p><b>Content Manager Workshop</b></p> 
                        <p><i>4YFN - 4 Years from Now</i></p>
                        <p><i>(Fev 19)</i></p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Additional;