import React from 'react';
import './HeaderLeft.css'
import SearchIcon from '@material-ui/icons/Search';
import './HeaderLeft.css'

const HeaderLeft = () => {
    return (
        <div className="headerLeft">
            <div className="fbLogo">
                <img className="fbLogo" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="Facebook_Clone_Logo" />
            </div>
            <div className="searchFb">
                <div className="searchIcon">
                    <SearchIcon></SearchIcon>
                </div>
                <div className="searchType">
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
        </div>
    );
};

export default HeaderLeft;