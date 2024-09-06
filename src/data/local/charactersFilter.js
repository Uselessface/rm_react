import {v4} from 'uuid';

export const options = [
    {
        id: v4(),
        type: 'text',
        placeholder: "Введите имя персонажа",
        label: "Поиск по имени",
    },
    {
        id: v4(),
        type: 'text',
        placeholder: "Введите расу персонажа",
        label: "Поиск по расе",
    },
    {
        id: v4(),
        type: 'select',
        placeholder: "Введите статус персонажа",
        label: "Поиск по статусу",
    }
]