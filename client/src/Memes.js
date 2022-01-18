import {useState, useEffect} from 'react'
import axios from 'axios'
import MemeForm from './MemeForm'

const Memes = ()=>{
    const [memes, setMemes] = useState([])

    useEffect(()=>{
        getMemes()
    },[])

    const addMeme = (meme)=>{
        setMemes([meme, ...memes])
    }

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
            <h1>Memes YO BOB F1 FEATURE Branch HERE DONE KEEP THIS! H1</h1>
            <MemeForm addMeme={addMeme}/>
            {memes.map( meme => {
                return(
                    <div style={{width:'300px', height:'300px', margin:'20px'}}>
                        <h1>{meme.title}</h1>
                        <img  src={meme.image_url} height="200px" width='200px'/>
                    </div>
                )
            })}
           
        </div>
    )
}

export default Memes