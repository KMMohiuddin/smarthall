import { Avatar } from '@mui/icons-material/AccountCircleOutlined'
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React, { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from './firebase'


function MessageSender() {

    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput('')
        setImageUrl('')
    } 


    return (
        <div className = "messageSender">
            <div className = "messageSender__top">
                <Avatar 
                        src = {user.photoURL}

                />
                <form>
                    <input 
                        value = {input}
                        onChange = { (e) => setInput(e.target.value)}
                        className = "messageSender__input"
                        placeholder = {`What's on your mind, ${user.displayName} ?`}
                    />
                    
                    <button onClick = {handleSubmit} type = "submit">Hidden Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MessageSender
