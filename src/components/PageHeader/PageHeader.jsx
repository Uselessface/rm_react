import BackButton from "../UI/BackButton/BackButton.jsx";
import './PageHeader.css'

const PageHeader = ({pageTitle}) => {
    return (
        <div className={'page_header'}>
            <BackButton/>
            <h2 className={'page_title'}>{pageTitle}</h2>
        </div>
    );
};

export default PageHeader;