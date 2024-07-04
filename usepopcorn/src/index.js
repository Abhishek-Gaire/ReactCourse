import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './components/starRating';

// function Test(){
//   const [movieRating,setMovieRating] = useState(0);
//   return(
//     <div>
//       <StarRating maxRating={10} onSetRating={setMovieRating}/>
//       <p>The movie is rated {movieRating} stars</p>
//     </div>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Test/>
    <StarRating messages={['Terrible','Okay','Good','Best','Amazing']} defaultRating={3}/> */}
  </React.StrictMode>
);
