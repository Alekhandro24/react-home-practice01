// import Painting from './components/Painting';
// import paintings from './paintings.json';

// export default function App() {
//   return (
//     <div>
//       <Painting
//         imageU
//         rl={painting.url}
//         title={painting.title}
//         author={painting.author.tag}
//         profileUrl={painting.author.url}
//         price={painting.price}
//       />
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       {paintings.map(painting => (
//         <Painting
//           imageUrl={painting.url}
//           title={painting.title}
//           author={painting.author.tag}
//           profileUrl={painting.author.url}
//           price={painting.price}
//         />
//       ))}
//     </div>
//   );
// }

import { Alert } from './Alert';

export const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
};
