import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";
import SECTIONS_DATA from "./sections.data.js";

const Directory = () => {
  const [section, setSection] = useState(SECTIONS_DATA);
  return (
    <div className="directory-menu">
      {section.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};
export default Directory;
