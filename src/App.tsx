import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import TestRouter from './components/TestRouter';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>리액트 헬멧을 이용한 타이틀 변경</title>
      </Helmet>
      Test 헬멧
      <div>
        <Link to="/test-A">페이지 A</Link><br />
        <Link to="/test-B">페이지 B</Link>
      </div>
      <hr />
      <TestRouter />
    </div>
  )

}

export default App;
