"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
const Home_1 = __importDefault(require("./pages/Home"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Settings_1 = __importDefault(require("./pages/Settings"));
const Buttons_1 = __importDefault(require("./pages/Buttons"));
const Spinner_1 = __importDefault(require("./pages/Spinner"));
const Particles_1 = __importDefault(require("./pages/Particles"));
const Tether_1 = __importDefault(require("./pages/Tether"));
const Switches_1 = __importDefault(require("./pages/Switches"));
const Ball_1 = __importDefault(require("./pages/Ball"));
const Keyboard_1 = __importDefault(require("./pages/Keyboard"));
const App = () => {
    const [page, setPage] = (0, react_1.useState)('Buttons');
    let CurrentPage;
    switch (page) {
        case 'Home':
            CurrentPage = Home_1.default;
            break;
        case 'Settings':
            CurrentPage = Settings_1.default;
            break;
        case 'Buttons':
            CurrentPage = Buttons_1.default;
            break;
        case 'Spinner':
            CurrentPage = Spinner_1.default;
            break;
        case 'Particles':
            CurrentPage = Particles_1.default;
            break;
        case 'Tether':
            CurrentPage = Tether_1.default;
            break;
        case 'Switches':
            CurrentPage = Switches_1.default;
            break;
        case 'Ball':
            CurrentPage = Ball_1.default;
            break;
        case 'Keyboard':
            CurrentPage = Keyboard_1.default;
            break;
        default:
            CurrentPage = Home_1.default;
    }
    window.loadPage = (page) => {
        setPage(page);
    };
    return react_1.default.createElement(CurrentPage, null);
};
const attachEventListeners = () => {
    const clickType = "mousedown";
    const homeButton = document.getElementById('homeButton');
    const settingsButton = document.getElementById('settingsButton');
    const buttonsPageButton = document.getElementById('buttonspageButton');
    const spinnerPageButton = document.getElementById('spinnerpageButton');
    const particlesPageButton = document.getElementById('particlespageButton');
    const tetherPageButton = document.getElementById('tetherpageButton');
    const switchesPageButton = document.getElementById('switchespageButton');
    const ballPageButton = document.getElementById('ballpageButton');
    const keyboardPageButton = document.getElementById('keyboardpageButton');
    if (homeButton) {
        homeButton.addEventListener(clickType, () => window.loadPage('Home'));
    }
    if (settingsButton) {
        settingsButton.addEventListener(clickType, () => window.loadPage('Settings'));
    }
    if (buttonsPageButton) {
        buttonsPageButton.addEventListener(clickType, () => window.loadPage('Buttons'));
    }
    if (spinnerPageButton) {
        spinnerPageButton.addEventListener(clickType, () => window.loadPage('Spinner'));
    }
    if (particlesPageButton) {
        particlesPageButton.addEventListener(clickType, () => window.loadPage('Particles'));
    }
    if (tetherPageButton) {
        tetherPageButton.addEventListener(clickType, () => window.loadPage('Tether'));
    }
    if (switchesPageButton) {
        switchesPageButton.addEventListener(clickType, () => window.loadPage('Switches'));
    }
    if (ballPageButton) {
        ballPageButton.addEventListener(clickType, () => window.loadPage('Ball'));
    }
    if (keyboardPageButton) {
        keyboardPageButton.addEventListener(clickType, () => window.loadPage('Keyboard'));
    }
};
document.addEventListener('DOMContentLoaded', attachEventListeners);
// document.addEventListener('DOMContentLoaded', () => {
//  attachEventListeners();
const container = document.getElementById('root');
const root = (0, client_1.createRoot)(container);
root.render(react_1.default.createElement(App, null));
const navbarContainer = document.getElementById('navbarRoot');
if (navbarContainer) {
    const navbarRoot = (0, client_1.createRoot)(navbarContainer);
    navbarRoot.render(react_1.default.createElement(Navbar_1.default, null));
}
// });
