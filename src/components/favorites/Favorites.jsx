import { useSelector, useDispatch } from "react-redux";
import Cards from "../cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import Select from "../select/Select";
import { useState } from "react";

const Favorites = () => {
  const dispatch = useDispatch();
  // const { myFavorites } = useSelector((state) => state);
  const myFavorites = useSelector((state) => state.myFavorites);

  const [aux, setAux] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "filter") {
      dispatch(filterCards(event.target.value));
    } else {
      dispatch(orderCards(event.target.value));
      setAux(true);
    }
  };

  return (
    <div>
      <Select
        name="order"
        options={["Ascendente", "Descendente"]}
        handleChange={handleChange}
      />
      <Select
        name="filter"
        options={["Male", "Female", "Genderless", "unknown"]}
        handleChange={handleChange}
      />
      <Cards characters={myFavorites} />
    </div>
  );
};

export default Favorites;

// this works fine
// import { connect } from "react-redux";
// import Cards from "../cards/Cards";
// import { filterCards, orderCards } from "../../redux/actions";
// import { useState } from "react";
// import Select from "../select/Select";

// const Favorites = (props) => {
//   const { myFavorites,filterCards,orderCards } = props;
//   const [aux, setAux] = useState(false);

//   const handleChange = (event) => {
//     if (event.target.name === "filter") {
//       filterCards(event.target.value);
//     } else {
//       orderCards(event.target.value);
//       setAux(true);
//     }
//   };

//   return (
//     <div>
//       <Select
//         name="order"
//         options={["Ascendente", "Descendente"]}
//         handleChange={handleChange}
//       />
//       <Select
//         name="filter"
//         options={["Male", "Female", "Genderless", "unknown"]}
//         handleChange={handleChange}
//       />

//       <Cards characters={myFavorites} />
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
//     filterCards:(gender) => dispatch(filterCards(gender)),
//     orderCards:(orden) => dispatch(orderCards(orden)),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

// I think the following works well too
// import { connect } from "react-redux";
// import Cards from "../cards/Cards";
// import Select from "../select/Select";
// import { filterCards, orderCards } from "../../redux/actions";
// import { useState } from "react";

// const Favorites = ({ myFavorites, filterCards, orderCards }) => {
//   const [aux, setAux] = useState(false);

//   const handleChange = (event) => {
//     if (event.target.name === "filter") {
//       filterCards(event.target.value);
//     } else {
//       orderCards(event.target.value);
//       setAux(true);
//     }
//   };

//   return (
//     <div>
//       <Select
//         name="order"
//         options={["Ascendente", "Descendente"]}
//         handleChange={handleChange}
//       />
//       <Select
//         name="filter"
//         options={["Male", "Female", "Genderless", "unknown"]}
//         handleChange={handleChange}
//       />
//       <Cards characters={myFavorites} />
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   myFavorites: state.myFavorites,
// });

// const mapDispatchToProps = {
//   filterCards,
//   orderCards,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
