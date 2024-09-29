import "../sass/layout/Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a href="/">
                        <img className="header__logo" src="logo.png" alt="logo" />
                    </a>

                    <nav className="header__nav">
                        <a href="/login" target="self" className="header__nav__login"></a>
                    </nav>
                </div>
            </div>
        </header>
    );
}