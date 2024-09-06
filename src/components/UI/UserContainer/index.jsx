import './index.css'
const UserContainer = (props) => {
    return (
        <div className={'user_container'}>
            {props.children}
        </div>
    );
};

export default UserContainer;