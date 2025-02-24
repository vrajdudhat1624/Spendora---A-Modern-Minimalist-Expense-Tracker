"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OnboardingPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const icons_1 = require("@/components/icons");
const next_themes_1 = require("next-themes");
function OnboardingPage() {
    const [step, setStep] = (0, react_1.useState)(0);
    const { theme, setTheme } = (0, next_themes_1.useTheme)();
    const onboardingSteps = [
        {
            title: "Welcome to Spendora",
            description: "Track your expenses with ease and gain financial insights.",
        },
        {
            title: "Smart Categorization",
            description: "Our AI automatically categorizes your expenses for you.",
        },
        {
            title: "Detailed Reports",
            description: "Get in-depth analysis of your spending habits.",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-md space-y-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)(icons_1.Icons.logo, { className: "mx-auto h-12 w-12 text-primary" }), (0, jsx_runtime_1.jsx)("h2", { className: "mt-6 font-heading text-3xl font-bold text-gray-900 dark:text-gray-100", children: onboardingSteps[step].title }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-400", children: onboardingSteps[step].description })] }), step === onboardingSteps.length - 1 ? ((0, jsx_runtime_1.jsxs)("div", { className: "mt-8 space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "email", children: "Email address" }), (0, jsx_runtime_1.jsx)(input_1.Input, { id: "email", name: "email", type: "email", autoComplete: "email", required: true, className: "mt-1" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)(input_1.Input, { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "mt-1" })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(button_1.Button, { className: "w-full", onClick: () => console.log("Sign in clicked"), children: "Sign in" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-sm", children: (0, jsx_runtime_1.jsx)("a", { href: "#", className: "font-medium text-primary hover:text-primary/80", children: "Forgot your password?" }) }), (0, jsx_runtime_1.jsx)("div", { className: "text-sm", children: (0, jsx_runtime_1.jsx)("a", { href: "#", className: "font-medium text-primary hover:text-primary/80", children: "Sign up" }) })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", className: "w-full", onClick: () => console.log("Sign in with Google clicked"), children: [(0, jsx_runtime_1.jsx)(icons_1.Icons.google, { className: "mr-2 h-4 w-4" }), "Sign in with Google"] }) })] })) : ((0, jsx_runtime_1.jsx)(button_1.Button, { className: "mt-8 w-full", onClick: () => setStep(step + 1), children: "Next" })), (0, jsx_runtime_1.jsx)("div", { className: "mt-4 flex justify-center", children: onboardingSteps.map((_, index) => ((0, jsx_runtime_1.jsx)("div", { className: `mx-1 h-2 w-2 rounded-full ${index === step ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"}` }, index))) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-8 text-center", children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", size: "sm", onClick: () => setTheme(theme === "light" ? "dark" : "light"), children: [(0, jsx_runtime_1.jsx)(icons_1.Icons.sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }), (0, jsx_runtime_1.jsx)(icons_1.Icons.moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Toggle theme" })] }) })] }) }));
}
