import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import './HeaderCenter.css'

const HeaderCenter = () => {
    return (
        <div className="headerCenter">
            <div className="headerCenterItem">
                <HomeIcon></HomeIcon>
            </div>
            <div className="headerCenterItem">
                <FlagIcon></FlagIcon>
            </div>
            <div className="headerCenterItem">
                <SubscriptionsIcon></SubscriptionsIcon>
            </div>
            <div className="headerCenterItem">
                <StorefrontIcon></StorefrontIcon>
            </div>
            <div className="headerCenterItem">
                <SupervisedUserCircleIcon></SupervisedUserCircleIcon>
            </div>
        </div>
    );
};

export default HeaderCenter;