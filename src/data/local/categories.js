import charactersImage from '../../assets/assets/characters.jpg'
import locationsImage from '../../assets/assets/locations.png'
import episodesImage from '../../assets/assets/episodes.png'
import {v4} from "uuid";


let categories = [
    {
        id: v4(),
        image: charactersImage,
        title: "Персонажи",
        description: "Зайди и познакомься со всеми персонажами вселенной",
        path: '/characters'
    },
    {
        id: v4(),
        image: locationsImage,
        title: "Локации",
        description: "Исследуй все локации. Давай же, не будь занудой!",
        path: '/locations'
    },
    {
        id: v4(),
        image: episodesImage,
        title: "Эпизоды",
        description: "Узнай чуть больше о карте приключений Рика и Морти",
        path: '/episodes'
    },
]

export default categories