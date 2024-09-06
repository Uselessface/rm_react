import './PostsContainer.css'
// eslint-disable-next-line react/prop-types
const PostsContainer = ({variant, children}) => {
    return (
        <div className={`posts_container ${variant}`}>
            {children}
        </div>
    );
};

export default PostsContainer;