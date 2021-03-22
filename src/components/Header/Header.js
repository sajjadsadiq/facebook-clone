import React from 'react';
import HeaderCenter from './HeaderCenter/HeaderCenter';
import HeaderLeft from './HeaderLeft/HeaderLeft';
import HeaderRight from './HeaderRight/HeaderRight';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter></HeaderCenter>
            <HeaderRight></HeaderRight>
        </div>
    );
};

export default Header;