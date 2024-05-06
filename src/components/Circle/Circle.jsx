export default Contact;

function Contact() {
    return (
        <div>
            <div
                className="Circle"
                style={{
                    backgroundColor: props.boxColor || 'black',
                }}
            >
                <p>{props.text}</p>
            </div>
        </div>
    );
}
