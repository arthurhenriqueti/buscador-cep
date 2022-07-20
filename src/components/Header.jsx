import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import "./Header.scss";

const Header = () => {
    const activeLightMode = () => {
        const elementBg = document.getElementsByClassName("home-background")[0];
        elementBg.classList.remove("dark-mode");
        elementBg.classList.add("light-mode");

        const headerBg =
            document.getElementsByClassName("header-background")[0];
        headerBg.style.background = "#cecece";

        const elementLight =
            document.getElementsByClassName("header-light-mode")[0];
        elementLight.style.display = "none";

        const elementDark =
            document.getElementsByClassName("header-dark-mode")[0];
        elementDark.style.display = "block";
    };

    const activeDarkMode = () => {
        const elementBg = document.getElementsByClassName("home-background")[0];
        elementBg.classList.remove("light-mode");
        elementBg.classList.add("dark-mode");

        const headerBg =
            document.getElementsByClassName("header-background")[0];
        headerBg.style.background = "#121212";

        const elementLight =
            document.getElementsByClassName("header-light-mode")[0];
        elementLight.style.display = "block";

        const elementDark =
            document.getElementsByClassName("header-dark-mode")[0];
        elementDark.style.display = "none";
    };

    return (
        <>
            <header className="header-background">
                <div className="header-light-mode" onClick={activeLightMode}>
                    <BsSun size={32} />
                </div>
                <div className="header-dark-mode" onClick={activeDarkMode}>
                    <MdOutlineDarkMode size={32} />
                </div>
            </header>
        </>
    );
};

export default Header;
