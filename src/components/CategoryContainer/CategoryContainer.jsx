import './CategoryContainer.css'
import Category from "../Category/Category";

const CategoryContainer = ({dataArray}) => {
    return (
        <div className="category_container">
            {dataArray.map(el => {
                return (
                    <Category
                        image={el.image}
                        title={el.title}
                        description={el.description}
                        key={el.id}
                        id={el.id}
                        path={el.path}
                    />
                )
            })}
        </div>
    );
};

export default CategoryContainer;