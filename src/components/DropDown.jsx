import React from "react";

function Dropdown(props) {
  return (
    <div>
      {props.isVisible ? (
        <ul>
          <li className="p-1 sm:p-1.5 text-sm sm:text-base">
            <span className="text-lg sm:text-xl font-mono font-black sm:font-bold">
              Languages:
            </span>
            JavaScript, Java
          </li>
          <li className="p-1 sm:p-1.5 text-sm sm:text-base">
            <span className="text-lg sm:text-xl font-mono font-black sm:font-bold">
              Web Development:
            </span>{" "}
            React.js, HTML, CSS, Tailwind CSS, Bootstrap
          </li>
          <li className="p-1 sm:p-1.5 text-sm sm:text-base">
            <span className="text-lg sm:text-xl font-mono font-black sm:font-bold">
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
