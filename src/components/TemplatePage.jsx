import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Experience from "../experience/Experience";

export default function TemplatePage(props) {
    return (
    <>
        <Header />
            <div className="experience">
                <Experience />
            </div>
            <div className="frontPage">
                {props.children}
            </div>
        <Footer />
    </>
    );
}