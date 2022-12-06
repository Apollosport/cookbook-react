import React from "react";
import { useState } from "react";
import image from "./cat.webp";

export default function Footer() {
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
        alt="May the 1st be with you!"
        onClick={togglePic}
        className={`${see ? "visible" : "invisible"} img`}
      />
    </div>
  );
}
