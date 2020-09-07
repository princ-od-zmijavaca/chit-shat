import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined'
import MicIcon from '@material-ui/icons/Mic'

function Chat({messages}) {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>

            </div>

            <div className="chat__body">

                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                </p>
                ))}

            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonOutlinedIcon />
                </IconButton>
                <form>
                    <input placeholder="Type a message ya donkey" type="text" />
                    <button type="submit">SEND</button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
