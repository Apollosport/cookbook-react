import React from "react";
import { useState } from "react";
import image from "./cat.webp";

export default function Footer({ setDark }) {
  const [see, setsee] = useState(false);
  function togglePic() {
    setsee((e) => !e);
  }

  return (
    <div className="footer">
      <p className={`${see ? "invisible" : "visible"}`} onClick={togglePic}>
        © Let's Cook International
      </p>
      <img
        src={image}
        alt="Who is there?!"
        onClick={() => togglePic()}
        className={`${see ? "visible" : "invisible"} img`}
      />
      <div id="toggledark">
        <p>Light</p>
        <label class="switch">
          <input id="dark" type="checkbox" />
          <span
            onClick={() => setDark((prev) => !prev)}
            className="slider"
          ></span>
        </label>
        <p>Dark</p>
      </div>
    </div>
  );
}
