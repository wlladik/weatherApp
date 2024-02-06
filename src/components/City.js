import sun from '../img/only-sun.svg';
import clouds from '../img/clouds.svg';



function City(props){
    return (<div className="city">
        <h3>{props.city.name}</h3>
        <p>Temperature: {props.city.temp}</p>
        <p>Feels: {props.city.feels}</p>
        {props.city.temp >= 10 && <img src={sun} alt='sun'/>}
        {props.city.temp < 10 && <img src={clouds} alt='clouds'/>}
        <button onClick={() => props.deleteWeather(props.city.name)}>Delete</button>
    </div>)
}

export default City;