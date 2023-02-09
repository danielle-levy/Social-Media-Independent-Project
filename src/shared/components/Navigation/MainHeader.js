import React from "react";

import './MainHeadr.css';

const MainHeader = props => {
    return <header className="main-header">
        {props.children}
    </header>
};

export default MainHeader;