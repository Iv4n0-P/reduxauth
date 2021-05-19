import { combineReducers } from 'redux'
import auth from './auth'
import { reducer as formReducer } from 'redux-form' 
//čisto renejmamo ono što importiramo, da nas ne buni

//imat ćemo auth reducer koji će imat 2 stvari, authenticated i error.
//error je za error poruke a authenticated neće bit boolean nego string, jer ćemo napravit trik, u njega ćemo stavit JSON web token
//dakle, ako sadrži token onda je user autenticirat, tako ćemo
export default combineReducers({
    auth,
    form: formReducer
})