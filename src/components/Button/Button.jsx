import './Button.css';

const Button = ({ onClick, style, children }) => {
    return (
        <button className="btn" onClick={onClick} style={style}>
            {children}
        </button>
    );
};

export default Button;
