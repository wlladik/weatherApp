import { useState } from "react";

function Form(props){
    const [city, setCity] = useState('')

    const getWeather = (city) => {
        props.getWeather(city.trim())
        setCity('')
    }

    return(
        <div>
            <h1>Get information about <br/> weather in your city: </h1>
            <form>
                <input placeholder="Your city" value={city} onChange={e => setCity(e.target.value)}/>
                <button type='button' onClick={() => getWeather(city)}>Go</button>        
            </form>
        </div>
    )
}

export default Form;