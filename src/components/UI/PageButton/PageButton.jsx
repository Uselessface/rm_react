import './pageButton.css'
import pageArrow from '../../../assets/icons/pageArrow.svg'

const PageButton = ({rotate, clickHandler, text}) => {

    return (
        <button className="arrow_button" onClick={clickHandler}>
            <img
                src={pageArrow}
                alt="prev_arrow"
                className={rotate ? `rotated` : ''}
            /> <span>{text}</span>
        </button>
    );
};

export default PageButton;