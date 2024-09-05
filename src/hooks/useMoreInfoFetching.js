import {useEffect, useState} from "react";

export default function useMoreInfoFetching(info, api) {
    const [infoArray, setInfoArray] = useState([])


    const elementID = info.map((el) => {
        const last = el.lastIndexOf('/')
        el = Number(el.slice(last + 1))
        return el
    }).join(',');

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const result = await fetch(`${api}${elementID}`, {method: 'GET'}).then(res => res.json());
                setInfoArray(result)
            } catch (error) {
                console.log(error)
            }
        };
        fetchInfo();
    }, [api, elementID]);

    return [infoArray];
}


