import './UserButton.css'

// eslint-disable-next-line react/prop-types
const UserButton = ({variant, text, children, clickHandler}) => {
    return (
        <button
            className={variant ? `btn ${variant}` : 'btn'}
            onClick={clickHandler}
        >
            {children && <span>{children}</span>}
            <span>{text}</span>
        </button>
    );
};

export default UserButton;