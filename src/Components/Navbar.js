import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "./Lets-Cook-Logo.webp";
import flag1 from "./french1.jpg";
import flag2 from "./french2.webp";
import flag3 from "./india.png";
import flag4 from "./italy.png";
import flag5 from "./Mexico.png";
import flag6 from "./american.webp";
import flag7 from "./japan.webp";

const Navbar = ({ setKitchen }) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div
      className="navbar"
      /* style={{
        backgroundImage: `url(${flag5})`,
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} */
    >
      {/*       <img src={image} alt="Let's Cook!" className={"imgNavbar"} /> */}
      <Link to="/" className="logo">
        <img src={image} alt="Let's Cook!" className={"imgNavbar"} />
      </Link>
      <NavLink
        to="/recipesasi"
        className="links"
        onClick={() => setKitchen("asi")}
      >
        Asian
      </NavLink>
      <NavLink
        to="/recipes"
        className="links"
        onClick={() => setKitchen("eur")}
      >
        European
      </NavLink>
      <NavLink
        to="/recipes"
        className="links"
        onClick={() => setKitchen("sam")}
      >
        South-American
      </NavLink>
      <NavLink
        to="/recipes"
        className="links"
        onClick={() => setKitchen("ind")}
      >
        Indian
      </NavLink>
      <input
        className="search-input"
        type="text"
        size="18"
        placeholder="Search"
        onChange={changeHandler}
        value={input}
      />
    </div>
  );
};

export default Navbar;
