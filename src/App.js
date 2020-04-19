import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import covid from './covid.png';
 class App extends React.Component{
     state={
         data:{},
         country:'',
     }
     async componentDidMount(){
         const fetchedData = await fetchData();
         if(fetchedData){this.setState({data:fetchedData})};
     };
    handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country);
        if(fetchedData){this.setState({data:fetchedData})};
        this.setState({country})


    }
    render(){
        const {data,country} = this.state;
    return (
        <div className={styles.container}>
             <img className={styles.img} src={covid} alt="covid-19" />
            <Cards data ={data} />
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart country={country} data={data}/>
        </div>
    )
}
    
}
export default App;