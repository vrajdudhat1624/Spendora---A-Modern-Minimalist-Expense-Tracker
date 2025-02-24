"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icons = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
exports.Icons = {
    sun: lucide_react_1.Sun,
    moon: lucide_react_1.Moon,
    laptop: lucide_react_1.Laptop,
    logo: (props) => ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "10" }), (0, jsx_runtime_1.jsx)("path", { d: "M16 12h-4V8" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 16l-4-4" })] }))),
    google: lucide_react_1.ChromeIcon,
};
