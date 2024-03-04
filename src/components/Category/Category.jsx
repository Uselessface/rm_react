import './Category.css'

// eslint-disable-next-line react/prop-types
const Category = ({link,src,title,description}) => {
    return (
        <a href={link} className="category">
            <img src={src} alt=""/>
            <div className="category_info">
                <h3 className="category_header">{title}</h3>
                <span>{description}</span>
            </div>
        </a>
    );
};

export default Category;