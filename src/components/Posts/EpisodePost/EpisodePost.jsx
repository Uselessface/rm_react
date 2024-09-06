import styles from './EpisodePost.module.css'
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import addIcon from "../../../assets/icons/addIcon.svg";
import useMoreInfoFetching from "../../../hooks/useMoreInfoFetching.js";



// eslint-disable-next-line react/prop-types
const EpisodePost = ({name, air_date, episode, characters}) => {
    const api = `https://rickandmortyapi.com/api/character/`
    const [charactersArray] = useMoreInfoFetching(characters, api);
    return (
        <div className={styles.post}>
            <div className={styles.post_data_container}>
                <div className={styles.post_title_container}>
                    <h4>{name}</h4>
                    <CustomButton text={'Добавить в избранное'} variant={'add'}>
                        <img src={addIcon} alt="+"/>
                    </CustomButton>
                </div>
                <div className={styles.post_info_container}>
                    <div className={styles.main_info}>
                        <div className={styles.info_item}>
                            <p className={styles.info_item_name}>Эпизод: </p>
                            <p className={styles.info_item_value}>{episode}</p>
                        </div>
                        <div className={styles.info_item}>
                            <p className={styles.info_item_name}>Дата выхода: </p>
                            <p className={styles.info_item_value}>{air_date}</p>
                        </div>
                    </div>
                    <div className={styles.secondary_info}>
                        <div className={styles.info_item}>
                            <p className={styles.info_item_name}>Персонажи, участвующие в эпизоде:</p>
                            <p className={styles.info_item_value}>{charactersArray.map(c => {
                                return(
                                    <span key={c.id}>
                                        {`${c.name}, `}
                                    </span>
                                )
                            })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodePost;