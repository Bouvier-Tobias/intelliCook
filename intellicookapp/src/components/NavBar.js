import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar">
      <Link to="/">
        <img src="./icones/Icone-Home-White.svg" alt=""></img>
        Home
      </Link>
      <Link to="/catalogue">
        <img src="./icones/Icone-Book-White.svg" alt=""></img>Catalogue
      </Link>
      <Link to="/favorites">
        <img src="./icones/Icone-Heart-White.svg" alt=""></img>
        Favoris
      </Link>
    </nav>
  );
}

export default Navbar;
