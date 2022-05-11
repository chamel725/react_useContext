import React from 'react';

//isDark와 setIsDark를 props로 전달받고 있다.
const Footer = ({ isDark, setIsDark })=>{
    //isDark가 true면 false로 false면 true로 바꿔주는 함수
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return(
        <footer
        className='footer'
        style={{
            backgroundColor: isDark ? 'black' : "lightgray",
        }}
        >
            <button className='button' onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
};

export default Footer;