import {useState, useEffect} from 'react'
import axios from 'axios'

const Memes = ()=>{
    const [memes, setMemes] = useState([])

    useEffect(()=>{
        getMemes()
    },[])

    const getMemes = async ()=>{
        try{
          let res = await axios.get('/api/memes')
          setMemes(res.data)
        }catch(err){
            console.log('err in getMemes')
        }
    }

    return (
        <div>
            <h1>Memes</h1>
            <p>{JSON.stringify(memes)}</p>
        </div>
    )
}

export default Memes