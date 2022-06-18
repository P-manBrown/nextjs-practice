import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import { ParentMemo } from './components/ParentMemo';
import { CountCallback } from './components/CountCallback';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Message />
    <Parent />
    <Page />
    <Counter initialValue={100} />
    <CounterReducer initialValue={10} />
    <ParentMemo />
    <CountCallback />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
