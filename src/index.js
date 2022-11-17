// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const data = {
//   id: 'id-1',
//   url: 'https://pixabay.com/photos/bird-owl-wildlife-animal-3732867/',
//   title: 'Github profile',
//   price: 500,
//   author: {
//     tag: 'rectapopulous',
//     url: 'https://github.com/Alekhandro24',
//   },
//   quantity: 10,
// };

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступність: закінчується або є в наявності</p>
//     <button type="button">Добавити в корзину</button>
//   </div>
// );

// ReactDOM.render(painting, document.querySelector('#root'));

// import ReactDOM from 'react-dom';
// import App from './App';

// const painting = paintings[0];

// ReactDOM.render(<App />, document.querySelector('#root'));

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
