import './Pagination.css'
import ReactPaginate from "react-paginate";
import PageButton from "../../UI/PageButton/PageButton.jsx";

// eslint-disable-next-line react/prop-types
const Pagination = ({clickHandler, page, pageCount}) => {

    const next = () => {
        if (page >= pageCount){
            return
        }
        clickHandler(page + 1)
    }
    const prev = () => {
        clickHandler(page - 1)
    }
    const goToPage = (data) =>{
        clickHandler(page = data.selected + 1)
    }

    return (
        <ReactPaginate
            className={'pagination_container'}
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={0}
            breakClassName={'no_break'}
            pageClassName={'page_button'}
            activeClassName={'active_page'}
            initialPage={page}
            onPageChange={goToPage}
            nextLabel={<PageButton
                clickHandler={next}
                text={'Следующая'}
                rotate
            />
            }
            previousLabel={<PageButton
                clickHandler={prev}
                text={'Предыдущая'}
            />
            }
        />
    )
};

export default Pagination;