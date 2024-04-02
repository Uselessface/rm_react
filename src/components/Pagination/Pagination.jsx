import pageArrow from '../../assets/icons/pageArrow.svg'
import './Pagination.css'
import CustomButton from "../UI/CustomButton/CustomButton.jsx";
import ReactPaginate from "react-paginate";
const Pagination = ({clickHandler, page, pageCount}) => {
    /*const next = () => {
      clickHandler(page+1)
    }
    const prev = () => {
        clickHandler(page-1)
    }*/


    /*return (
        <div className={'pagination_container'}>
            <button className="arrow_button" onClick={prev}>
                <img src={pageArrow} alt="prev_arrow"/> <span>Предыдущая</span>
            </button>
            <div className="number_container">
                <CustomButton text={'1'}/>
                <CustomButton text={'2'}/>
                <CustomButton text={'3'}/>
                <CustomButton text={'4'}/>
                <CustomButton text={'5'}/>
            </div>
            <button className="arrow_button" onClick={next}>
                <span>Следующая</span> <img src={pageArrow} style={{transform: `rotate(180deg)`}} alt="prev_arrow"/>
            </button>
        </div>
    );*/
    
    return(
        <ReactPaginate
            className={'pagination_container'}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={0}
            breakLabel={<span/>}
        />
    )
};

export default Pagination;