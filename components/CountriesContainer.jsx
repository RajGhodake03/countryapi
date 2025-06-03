import { useState ,useEffect} from "react";
import CountrieListShimmer from "./CountrieListShimmer";
// import CountryData from '../CountryData';
import CountryCard from './CountryCard';

export default function CountriesContainer({query}) {
  const [countryData, setCountriesData] = useState([]);
  // const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data)
    })

    // const intervalId = setInterval(() => {
    //   console.log('running countriesList component');
    // }, [1000])

    // console.log(intervalId);

    // return () => {
    //   clearInterval(intervalId)
    // }
  }, [])


  // useEffect(() => {
  //   console.log('hiii');
  // }, [count])


  return (
    <>  
     {/* <h1>{count}</h1>
     <button onClick={() => setCount(count + 1)}>Increase Count</button> */}
     
     {!countryData.length?
        (<CountrieListShimmer/>):
       <div className="countries-container">
        {countryData.filter((country) =>
          country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
        ).map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        ))}
      </div>}
    </>
  );
}
