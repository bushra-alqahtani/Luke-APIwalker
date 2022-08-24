
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [catigory, setCatigory] = useState ('');
  const [catigoryId, setCatigoryId] = useState('');
  const navigate = useNavigate();


  const onSubmitHandler=(e)=>{
    e.preventDefault();
    navigate(navigate("/"+catigory+"/"+catigoryId)
    );
  }
  return (
   
    <div>
    <form onSubmit={onSubmitHandler}>
    <label >Choose :</label>
    <select onChange={(e)=>setCatigory(e.target.value)} >
        <option>chose one...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
   
    </select>

    <div>
        <label >Id: </label>
        <input onChange={(e)=>setCatigoryId(e.target.value)} type="number" />
    </div>
    <div>
        <button>Search</button>
    </div>
      </form>
    </div>
  )
}

export default Home;