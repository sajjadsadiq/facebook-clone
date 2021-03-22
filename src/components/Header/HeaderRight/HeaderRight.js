import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './HeaderRight.css'

const HeaderRight = () => {
    return (
        <div className="headerRight">
            <div className="profileInfo">
                <Avatar></Avatar>
                <h4>Sajjad Sadiq</h4>
            </div>
            <div className="headerRightItem">
                <IconButton>
                    <AddIcon></AddIcon>
                </IconButton>
                <IconButton>
                    <ForumIcon></ForumIcon>
                </IconButton>
                <IconButton>
                    <NotificationsIcon></NotificationsIcon>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon></ExpandMoreIcon>
                </IconButton>
            </div>
        </div>
    );
};

export default HeaderRight;