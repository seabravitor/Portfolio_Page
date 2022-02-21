import '../App.css';
import techpass from '../Assets/codigo.png'
import analytic from '../Assets/estatisticas.png'
import handShake from '../Assets/aperto-de-mao.png'
import recycleIcon from '../Assets/reciclar.png'

function SoftSkills() {
    return (            
        <div class="softskills" >
        <div class="grid4soft">
             <div>
                <img src={techpass} alt="techpass"/>
                <h3>Tech Passionated</h3>
                <p>Enthusiastic about new technologies. Always seeking to learn and be up to date with market trends.</p>
            </div>
            <div>
                <img src={analytic} alt="analytic"/>
                <h3>Data Driven</h3>
                <p>Observer, analytic and strategic.</p>
            </div>
            <div>
                <img src={handShake} alt="problemsolver"/>
                <h3>Problem Solver</h3>
                <p>Creative and decision maker with professional experiences in business.</p>
            </div>
            <div>
                <img src={recycleIcon} alt="adaptive"/>
                <h3>Adaptive</h3>
                <p>Empathetic, mediator and team worker.</p>
            </div>
        </div>
        </div>
    )
}

export default SoftSkills;