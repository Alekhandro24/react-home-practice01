// function Painting(props) {
//   const { url, title, profileUrl, author, price } = props;
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступність: закінчується або є в наявності</p>
//       <button type="button">Добавити в корзину</button>
//     </div>
//   );
// }

// const Painting = props => {
//   const { imageUrl, title, profileUrl, author, price } = props;
//   return (
//     <div>
//       <img src={imageUrl} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступність: закінчується або є в наявності</p>
//       <button type="button">Добавити в корзину</button>
//     </div>
//   );
// };

// import defaultImage from '/....'
// npm i prop-types
// import PropTypes from 'prop-types';

// const Painting = ({
//   imageUrl = defaultImage,
//   title,
//   profileUrl,
//   author,
//   price,
//   quantity,
// }) => {
//   return (
//     <div>
//       <img src={imageUrl} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступність: {quantity < 10 ? 'закінчується' : 'є в наявності'}</p>
//       <button type="button">Добавити в корзину</button>
//     </div>
//   );
// };

// Painting.propTypes = {
//   imageUrl: PropTypes.string,
//   title: PropTypes.string,
//   author: PropTypes.string,
//   price: PropTypes.number,
//   quantity: PropTypes.number,
// };

// export default Painting;
