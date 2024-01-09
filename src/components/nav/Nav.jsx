import SearchBar from "../searchbar/SearchBar";
import Button from "../button/Button";

const Nav = ({ onSearch }) => {
  return (
    <nav>
      <Button link="/home" text="Home" />
      <Button link="/about" text="About" />
      <Button link="/favorites" text="Favorites" />
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;

// import SearchBar from "../searchbar/SearchBar";
// import { Link } from "react-router-dom";

// function Nav({onSearch}) {
//   return (
//     <nav>
//       <Link to="/home"><button>Home</button></Link>
//       <Link to="/about"><button>About</button></Link>
//       <Link to="/favorites"><button>Favorites</button></Link>
//       <SearchBar onSearch={onSearch} />
//     </nav>
//   );
// }

// export default Nav;