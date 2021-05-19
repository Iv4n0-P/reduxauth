import { AUTH_USER } from './types'
import axios from 'axios'

//CORS in a nutshell
/* 
ako je ajax request upućen sa različite domene, subdomene ili drugog porta, kao što je to ovde slučaj, sa localhost:3000 želimo postat na localhost:3090
browseri u sebi imaju hardkodirano da onda rade preflight request tj. inicijalni request prije ovog našeg requesta i pitaju server jeli ok da se ovaj spoji
ovaj će to naravno odbit i dobijemo cors error u konzoli browsera
dakle browser je jedini koji to radi i to se ne može zaobić nekako
npr. kad browser tako pita postamana jeli ok da se spoji, postman odgovara briga me, ja nisam ustvari browser, radi šta oćeš 

rješenje je konfigurirat server da dopušta requestove from anywhere, tako kad ga browser pita jeli od da se spoji, da mu kaže je slobodno
server/index.js
npm install cors
const cors = require('cors')
app.use(cors())
//ne trebamo dopustit sve, možemo ovaj cors konfigurirat da dopusti samo spajanje sa localhost:3000
*/

export const signup = (formProps) => {
     return async (dispatch) => {
        const response = await axios.post('http://localhost:3090/signup', formProps)
        //za uspješne podatke dobijemo od servera token koji ćemo sačuvat u reduceru. Kraj priče.
        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        })
     }
}

/* 
ili destrukturiramo email i pass iz formProps objekta pa ga dole opet ubacimo u objekt, što je nepotrebno, samo ostavimo formProps objekt i dole ga prosljedimo u call
export const signup = ({email, pass}) => {
    axios.post('http://localhost:3090/signup', {
        email, pass
    })
} */