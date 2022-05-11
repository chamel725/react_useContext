import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

//isDark와 setIsDark를 props로 받아온다
const Page = () => {
    //useContext로 ThemeContex에 관한 정보를 받아왔는대 상위에서 해당 context를 provider로
    //감싸주지 않았다면 ThemeContext로 인자로 넘겨준 초기값을 받아온다.
    // const data = useContext(ThemeContext);
    // console.log(data);
    //context로 전달한 정보를 받아오려면 useContext
    // const data = useContext(ThemeContext);
    // console.log('data: ', data);
    return(
        //3개의 자녀 component에게 props전달
        <div className = "page">ß
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;