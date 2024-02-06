import City from './City'

function Weather(props){

    const data = props.cities.length === 0 ?
        (<p>You don't have a search history...</p>) : (<div>  
            {props.cities.map(el => (
            <City key={el.name} city = {el} deleteWeather={props.deleteWeather}/>
            ))}
        </div>)

    return(<div>
        <h1>Cities from your history:</h1>
        {data}
    </div>)
}

export default Weather;