import './Container.css';
const Container = (props) => {
    return (
        <div className='container'>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </div>
    );
};

export default Container;