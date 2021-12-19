import React,{useState, useEffect} from 'react'
import './SidebarChat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat( { id, name, addNewChat}) {
    const [seed, setSeed] = useState('');

    useEffect(() => { 
       setSeed(Math.floor(Math.random() * 5000));
    }, []);
    const createChat = () => {
        const roomName = prompt("Please enter name for Chat");
        if(roomName) {
            // do some stuff
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            {/* <h1>Hey</h1> */}
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last Message</p>
            </div>
            
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat
