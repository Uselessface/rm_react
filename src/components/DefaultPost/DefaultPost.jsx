import './DefaultPost.css'
import CustomButton from "../UI/CustomButton/CustomButton.jsx";
import addIcon from '../../assets/icons/addIcon.svg'
// eslint-disable-next-line react/prop-types
const DefaultPost = ({image, title, race, status, origin, location, episode, gender}) => {
    return (
        <div className={'post'}>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
            <div className="post_data_container">
                <div className="post_title_container">
                    <h4>{title}</h4>
                    <div className="post_status">
                        {status}
                    </div>
                </div>
                <div className="post_info_container">
                    <div className="main_info">
                        <div className="info_item">
                            <p className={'info_item_name'}>Раса: </p>
                            <p className={'info_item_value'}> {race}</p>
                        </div>
                        <div className="info_item">
                            <p className={'info_item_name'}>Место происхождения: </p>
                            <p className={'info_item_value'}>{origin}</p>
                        </div>
                        <div className="info_item">
                            <p className={'info_item_name'}>Последняя локация:</p>
                            <p className={'info_item_value'}>{location}</p>
                        </div>
                    </div>
                    <div className="secondary_info">
                        <div className="info_item">
                            <p className={'info_item_name'}>Пол:</p>
                            <p className={'info_item_value'}>{gender}</p>
                        </div>
                        <div className="info_item">
                            <p className={'info_item_name'}>Эпизоды:</p>
                            <p className={'info_item_value'}>{episode}</p>
                        </div>
                    </div>
                    <CustomButton text={'Добавить в избранное'} variant={'add'}>
                        <img src={addIcon} alt="+"/>
                    </CustomButton>
                </div>

            </div>
        </div>
    )
        ;
};

export default DefaultPost;