import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country)=>{
    let changeableurl = url;
    if (country){
        if(country==='global'){
            changeableurl = url;
        }else{
        changeableurl = `${url}/countries/${country}`;}
    }
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableurl);
        
        return {confirmed,recovered,deaths,lastUpdate}

    } catch (error) {
        
        
    }
}
export const fetchDailyData = async ()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data ? (data.map( dailyData => ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,

        }))) : null 
        return modifiedData

    } catch (error) {
        
        
    }
}
export const countries = async ()=>{
    try {
        const {data} = await axios.get(`${url}/countries`);
        const modifiedData = data.countries.map( country => country.name);
        return modifiedData

    } catch (error) {
        
        
    }
}