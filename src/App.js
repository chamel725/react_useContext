//context
//context를 사용하면 component를 재사용하기 어려워 질 수 있다.
//prop drilling을 피하기 위한 목적이라면 component composition(컴포넌트합성)을 먼저 고려

import React,{useState} from 'react';
import './App.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <UserContext.Provider value={'사용자'}>
    {/* ThemeContext.Provider가 감싸는 하위 component들은 isDark와setIsDark에 접근가능. */}
    <ThemeContext.Provider value={{isDark,setIsDark}}>
   {/* 자녀 component
    App component는 Page component에게 isDark와setIsDark를 props로 넘겨줌. */}
    <Page/>
    </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
