import { useState } from "react"

export default function Team(){
    const [team, setTema] = useState(11);

    const addPlayers =() =>{
        const addNew = team + 1;
        setTema(addNew);
    }
    const removePlayers = () =>{
        setTema(team - 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayers}>Add</button>
            <button onClick={removePlayers}>Remove</button>
        </div>
    )
}