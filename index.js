import React from 'react';
import ReactDOM from 'react-dom';
import Count from './components/component1';
import '@fortawesome/fontawesome-free/css/all.min.css';



ReactDOM.render(<Count/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

//when we open chrome it displays hello react app instead hello bcz we r giving in root
