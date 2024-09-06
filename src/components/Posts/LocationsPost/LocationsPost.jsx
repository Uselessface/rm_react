import styles from './LocationsPost.module.css'
import CustomButton from "../../UI/CustomButton/CustomButton.jsx";
import addIcon from "../../../assets/icons/addIcon.svg";

// eslint-disable-next-line react/prop-types
const LocationsPost = ({dimension,name,residents,type}) => {
    return (
        <div className={styles.post}>
            <CustomButton variant={'add'} position={'top_corner'}>
                <img src={addIcon} alt="+"/>
            </CustomButton>
            <div className={styles.post_data_container}>
                <div className={styles.post_title_container}>
                    <h4>{name}</h4>
                </div>
                <div className={styles.post_info_container}>
                    <div className={styles.main_info}>
                        <div className={styles.info_item}>
                            <p className={styles.info_item_name}>Тип: </p>
                            <p className={styles.info_item_value}>{type}</p>
                        </div>
                        <div className={styles.info_item}>
                            <p className={styles.info_item_name}>Измерение: </p>
                            <p className={styles.info_item_value}>{dimension}</p>
                        </div>
                    </div>
                    <div className={styles.secondary_info}>
                        <div className={styles.info_item}>
                            <p className={styles.info_item_name}>Количество персонажей, которые в последний раз были замечены здесь::</p>
                            <h4>{residents.length}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationsPost;