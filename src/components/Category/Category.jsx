import './Category.css'
import {Link} from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Category = ({link,src,title,description}) => {
    return (
        <Link to={link} className="category">
            <img src={src} alt=""/>
            <div className="category_info">
                <h3 className="category_header">{title}</h3>
                <span>{description}</span>
            </div>
        </Link>
    );
};

export default Category;