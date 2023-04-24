
export const Button = (props) => {
    const { id, className, type, style, onClick, text } = props;

    return (
        <button
            id={id}
            className={className}
            type={type}
            style={style}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

