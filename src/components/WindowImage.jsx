export default function WindowImage(props) {
    const { name, source } = props;

    return (
        <div className="window">
            <div className="window__head">
                {source}
            </div>
            <div className="window__body">
                <img src={`window/${source}`} alt={name} />
            </div>
        </div>
    )   
}