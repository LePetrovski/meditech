import "../sass/layout/Footer.scss";

export default function Footer() {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__content">
                <div className="footer__content__left">
                    <img className="footer__content__left__logo" src="logo.png" alt="logo" />
                    <h3>Get in touch</h3>
                    <p>Feel free to contact us for any questions or inquiries</p>
                </div>
            </div>
        </div>
    </footer>
    );
}