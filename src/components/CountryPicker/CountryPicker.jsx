import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries} from '../../api';
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);
    useEffect(()=>{
     const fetchAPI = async () => {
        setFetchedCountries( await countries());

     };
     fetchAPI();},[setFetchedCountries])
    return (
        <FormControl className={styles.formControl}
        >
            <NativeSelect onChange={(e) =>{handleCountryChange(e.target.value)}}>
                <option value="global">Global</option>
                {fetchedCountries ? (fetchedCountries.map((country,i) => (<option key={i} value={country}> {country} </option>))):null}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;