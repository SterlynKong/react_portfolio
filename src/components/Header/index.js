// import react
import React from 'react';

// render Header
function Header (props) {
    return (
        <header className="flex-row space-between px-1">
            <h1>Sterlyn Kong</h1>
            {props.children}
        </header>
    );
};


export default Header;