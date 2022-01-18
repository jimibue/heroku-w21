import {useState, useEffect} from 'react'
import axios from 'axios'
import MemeForm from './MemeForm'

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
            <h1>Memes YO BOB F1 FEATURE Branch HERE STill in Progress</h1>
            <p>{JSON.stringify(memes)}</p>
            <MemeForm />
        </div>
    )
}

export default Memes