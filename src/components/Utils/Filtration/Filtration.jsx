import './Filtration.css'
import FormInput from "../../UI/FormInput/FormInput.jsx";

// eslint-disable-next-line react/prop-types
const Filtration = ({options}) => {
    return (
        <div className="filtration_container">
            {/* eslint-disable-next-line react/prop-types */}
            {options.map((option) => {
                return (
                    <FormInput
                        key={option.id}
                        title={option.title}
                        placeholder={option.placeholder}
                        type={option.type}
                        label={option.label}
                    />
                )
            })}
        </div>
    );
};

export default Filtration;