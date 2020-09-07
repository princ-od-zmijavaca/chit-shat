import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined'
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
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
                <p className="chat__message">
                    <span className="chat__name">Ivan Knezovic</span>
                    Hello World!

                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">World</span>
                    Eat shit cunt!

                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Ivan Knezovic</span>
                    Hello World!

                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__bot3000">
                    <span className="chat__name">ChatBot3000</span>
                    Eat shit cunt!

                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">World</span>
                    Eat shit cunt!

                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Ivan Knezovic</span>
                    Hello World!

                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">World</span>
                    Eat shit cunt!

                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

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
