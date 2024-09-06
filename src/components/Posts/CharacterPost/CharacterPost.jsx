import  './CharacterPost.css'
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import addIcon from '../../../assets/icons/addIcon.svg'
import useMoreInfoFetching from "../../../hooks/useMoreInfoFetching.js";
// eslint-disable-next-line react/prop-types
const CharacterPost = ({image, title, race, status, origin, location, episode, gender}) => {
    const api = `https://rickandmortyapi.com/api/episode/`

    const [episodes] = useMoreInfoFetching(episode, api)


    let statusValue = ''

    if (status === "Alive") {
        statusValue = 'Живой'
    }
    if (status === "Dead") {
        statusValue = 'Мертв'
    }
    if (status === "unknown") {
        statusValue = 'Неизвестно'
    }
    return (
        <div className={'character_post'}>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
            <div className="post_data_container">
                <div className="post_title_container">
                    <h4>{title}</h4>
                    {status && <div className="post_status">
                        <div className={status}></div>
                        <p>{statusValue}</p>
                    </div>
                    }
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
                        <div className="info_item info_item_big">
                            <p className={'info_item_name'}>Эпизоды:</p>
                            {episodes.length > 0
                                ?
                                <p className={'info_item_value'}>
                                    {episodes.map(e => {
                                        return (
                                            <span key={e.id}>
                                                {`${e.id} ,`}
                                            </span>
                                        )
                                    })}
                                </p>
                                :
                                <p className={'info_item_value'}>
                                    <span>{episodes.id}</span>
                                </p>
                            }
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
    }
;

export default CharacterPost;