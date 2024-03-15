import episodes from '../assets/99da26ff915d37f5ec47fc1998a5aa3b.png'
import locations from '../assets/dafae3979c3cc729f557b68bfd198228.png'
import characters from '../assets/59021838390253c0c437006778876d13.jpg'


const categoryList = [
    {
        id: 1,
        link: '/characters',
        src: characters,
        title: 'персонажи',
        description: 'Зайди и познакомься со всеми персонажами вселенной'
    },
    {
        id: 2,
        link: '/locations',
        src: locations,
        title: 'локации',
        description: 'Исследуй все локации. Давай же, не будь занудой!'
    },
    {
        id: 3,
        link: '/episodes',
        src: episodes,
        title: 'эпизоды',
        description: 'Узнай чуть больше о карте приключений Рика и Морти'
    },
]

export {categoryList}