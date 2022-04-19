import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button'
import { auth, provider} from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result.user)
        })
        .catch((error) => alert(error.message))
    }

    return (
        <div className = "login">
            <div className = "login__logo">
                <img 
                    src = "https://raw.githubusercontent.com/KMMohiuddin/smarthall/master/image_2022-04-07_215828742.png"
                    alt = ""
                />
                
                </div>
            
            <Button className = "login__button" onClick = {signIn} type = "submit">
                Sign In
            </Button>
        </div>
    )
}

export default Login
