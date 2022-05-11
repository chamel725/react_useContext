//context
//context를 사용하면 component를 재사용하기 어려워 질 수 있다.
//prop drilling을 피하기 위한 목적이라면 component composition(컴포넌트합성)을 먼저 고려

import React,{useState} from 'react';
import './App.css';
import Page from './components/Page';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    //자녀 component
    //App component는 Page component에게 isDark와setIsDark를 props로 넘겨줌.
    <Page isDark={isDark} setIsDark={setIsDark}/>
  );
}

export default App;
