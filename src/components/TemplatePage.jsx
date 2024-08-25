import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function TemplatePage(props) {
    return (
    <>
        <Header />
            <div className="wrapper">
                {props.children}
            </div>
        <Footer />
    </>
    );
}