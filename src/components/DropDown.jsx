import React from "react";

function Dropdown(props) {
  return (
    <div>
      {props.isVisible ? (
        <ul>
          <li className="p-1.5">
            <span className="text-xl font-mono font-bold">Languages:</span>
            JavaScript, Java
          </li>
          <li className="p-1.5">
            <span className="text-xl font-mono font-bold">
              Web Development:
            </span>{" "}
            React.js, HTML, CSS, Tailwind CSS, Bootstrap
          </li>
          <li className="p-1.5">
            <span className="text-xl font-mono font-bold">
              Other Expertise:
            </span>{" "}
            Data structures and algorithms, SQL, GitHub
          </li>
        </ul>
      ) : null}
    </div>
  );
}

export default Dropdown;
