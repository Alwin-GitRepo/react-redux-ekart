import { useEffect, useState } from "react"


const useFetch = (url) => {

    const [data,setData] = useState([])

    useEffect(() =>  {
        fetch(url).then((res)=> {
            res.json().then((result)=>{
                console.log(result.products);
                setData(result.products)
            })
        })
    },[url])
    return data
}

export default useFetch