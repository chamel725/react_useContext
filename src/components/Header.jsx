import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

//isDark를 props로 전달 받음.
const Header = ()=>{
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    console.log(isDark);
    console.log(user);
    return(
        <header
        className="header"
        style={{
            //isDark가 true면 black,white false: lightgray,black
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black',
        }}
        >
            <h1>Welcome {user}!</h1>
        </header>
    );
};

export default Header;