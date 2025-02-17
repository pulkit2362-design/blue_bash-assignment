import ChatApp from "./ChatApp";
import React from "react";
// import ReactDOM from "react-dom";

// // use createRoot
// ReactDOM.render(<ChatApp/>, document.getElementById("root"));

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<ChatApp />);
