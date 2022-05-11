import React from 'react';

//isDark를 props로 전달 받음.
const Header = ({ isDark })=>{
    return(
        <header
        className="header"
        style={{
            //isDark가 true면 black,white false: lightgray,black
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black',
        }}
        >
            <h1>Welcome 홍길동!</h1>
        </header>
    );
};

export default Header;