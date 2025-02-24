"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./globals.css");
const google_1 = require("next/font/google");
const theme_provider_1 = require("@/components/theme-provider");
const inter = (0, google_1.Inter)({ subsets: ["latin"], variable: "--font-sans" });
const poppins = (0, google_1.Poppins)({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-heading",
});
exports.metadata = {
    title: "Expense Tracker",
    description: "A modern expense tracking app",
};
function RootLayout({ children, }) {
    return ((0, jsx_runtime_1.jsx)("html", { lang: "en", suppressHydrationWarning: true, children: (0, jsx_runtime_1.jsx)("body", { className: `${inter.variable} ${poppins.variable} font-sans`, children: (0, jsx_runtime_1.jsx)(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, children: children }) }) }));
}
