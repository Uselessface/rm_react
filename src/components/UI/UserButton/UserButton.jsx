import './UserButton.css'

// eslint-disable-next-line react/prop-types
const UserButton = ({variant, text, children}) => {
    return (
        <div className={variant ? `btn ${variant}` : 'btn'}>
            {children && <span>{children}</span>}
            <span>{text}</span>
        </div>
    );
};

export default UserButton;