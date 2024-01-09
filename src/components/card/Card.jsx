import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

const Card = ({ id, name, image, onClose, gender }) => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const { pathname } = useLocation(); // '/favorites'
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, image, onClose, gender }));
      // dispatch(addFav({id: 23, name: 'Dai', image:'img.jpg', onClose: fn(){...}}))
    }
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>💛</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      {pathname !== "/favorites" ? (
        <button onClick={() => onClose(id)}>X</button>
      ) : (
        ""
      )}
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;

// this works
// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { addFav, removeFav } from "../../redux/actions";

// const Card = ({
//   id,
//   name,
//   image,
//   onClose,
//   gender,
//   myFavorites,
//   addFav,
//   removeFav,
// }) => {
//   const { pathname } = useLocation(); // '/favorites'
//   const [isFav, setIsFav] = useState(false);

//   const handleFavorite = () => {
//     if (isFav) {
//       setIsFav(false);
//       removeFav(id);
//     } else {
//       setIsFav(true);
//       addFav({ id, name, image, onClose, gender });
//     }
//   };

//   useEffect(() => {
//     myFavorites.forEach((fav) => {
//       if (fav.id === id) {
//         setIsFav(true);
//       }
//     });
//   }, [myFavorites]);

//   return (
//     <div>
//       {isFav ? (
//         <button onClick={handleFavorite}>💛</button>
//       ) : (
//         <button onClick={handleFavorite}>🤍</button>
//       )}
//       {pathname !== "/favorites" ? (
//         <button onClick={() => onClose(id)}>X</button>
//       ) : (
//         ""
//       )}
//       <Link to={`/detail/${id}`}>
//         <h2>{name}</h2>
//       </Link>
//       <img src={image} alt={name} />
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   myFavorites: state.myFavorites,
// });

// const mapDispatchToProps = {
//   addFav,
//   removeFav,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);

// this works too
// import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { addFav, removeFav } from "../../redux/actions";

// const Card = ({
//   id,
//   name,
//   image,
//   onClose,
//   gender,
//   addFav,
//   removeFav,
//   myFavorites,
// }) => {
  
//   const { pathname } = useLocation(); // '/favorites'
//   const [isFav, setIsFav] = useState(false);

//   const handleFavorite = () => {
//     if (isFav) {
//       setIsFav(false);
//       removeFav(id);
//     } else {
//       setIsFav(true);
//       addFav({ id, name, image, onClose, gender });
//     }
//   };

//   useEffect(() => {
//     myFavorites?.forEach((fav) => {
//       if (fav.id === id) {
//         setIsFav(true);
//       }
//     });
//   }, [myFavorites]);

//   return (
//     <div>
//       {isFav ? (
//         <button onClick={handleFavorite}>💛</button>
//       ) : (
//         <button onClick={handleFavorite}>🤍</button>
//       )}
//       {pathname !== "/favorites" ? (
//         <button onClick={() => onClose(id)}>X</button>
//       ) : (
//         ""
//       )}
//       <Link to={`/detail/${id}`}>
//         <h2 className="card-name">{name}</h2>
//       </Link>
//       <img src={image} alt={name} />
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (character) => {
//       dispatch(addFav(character));
//     },
//     removeFav: (id) => {
//       dispatch(removeFav(id));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);