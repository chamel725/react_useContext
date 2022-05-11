import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

//isDark와 setIsDark를 props로 받아온다
const Page = ({isDark, setIsDark}) => {
    return(
        //3개의 자녀 component에게 props전달
        <div className = "page">
            <Header isDark={isDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/>
        </div>
    );
};

export default Page;