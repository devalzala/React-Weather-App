import React, {useEffect, useState} from 'react';
import './css/style.css';


const Tempapp = () => {

    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=72a1f7fb973fc1a3b598af7c17e2808a`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);

            setCity(resJson.main);
        }
        
        fetchApi();
    }, [search]);
    return(
        <>
            
                <div className='box col-md-7'>
                        <div className='inputData'>
                            <input type="search" className='inputField' onChange={(event) => {
                                setSearch(event.target.value)
                            }} />
                        </div>
            {!city ? (
                <p className='error'>No Data Found, search for another city</p>
            ) : (
                <div>
                    <div className='info'>
                            <h2 className='location'>
                            <i className="fas fa-street-view"></i> {search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp}°Cel
                            </h1>
                            <h3 className='tempmin_max'>
                                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                            </h3>
                        </div>
                        {/* <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div> */}
                    </div>
            )}  
                </div>
            
            <img src="nature.jpg" alt="" className='background_img col-md-7'/>  
                   
            
        </>
    );
}


export default Tempapp;