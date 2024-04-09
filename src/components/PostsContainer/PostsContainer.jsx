import './PostsContainer.css'
const PostsContainer = ({variant, children}) => {
    return (
        <div className={`posts_container ${variant}`}>
            {children}
        </div>
    );
};

export default PostsContainer;