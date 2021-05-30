import React from 'react'
import './chat.css'
import {Avatar, IconButton} from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className = "chat"> 
            <div className="chat_header">
                <Avatar />
                <div className="chatheader__info">
                    <h2>Room Name</h2>
                    <p>Last Seen Today</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <AttachFileIcon/>

                    </IconButton>
                    <IconButton>
                        <SearchOutlinedIcon/>

                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>

                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                <span className="chat__name">Sonny</span>                    
                This is the message
            <span className="chat__time">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__reciever">
                <span className="chat__name">Sonny</span>                    
                This is the message
            <span className="chat__time">{new Date().toUTCString()}</span>
                </p>

                
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon/>
                </IconButton>
                <form>
                    <input placeholder="type a message" type="text" />

                    <button type="submit">Send Message</button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
