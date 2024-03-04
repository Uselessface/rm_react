import './Categories.css'

import Category from "../Category/Category.jsx";
import {categoryList} from "../../helpers/categoryList.js";

const Categories = () => {
    return (
        <div className="categories">
            {categoryList.map(item => {
                return <
                    Category
                    link ={item.link}
                    src = {item.src}
                    title = {item.title}
                    description = {item.description}
                />
            })}
        </div>
    );
};

export default Categories;