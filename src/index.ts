import axios from "axios";


 console.log("hello world");

 async function getCountries() {
    try {
      const res = await axios.get("https://restcountries.com/v2/all");
        return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getCountriesByRegion() {
    try {
      const res = await axios.get('https://restcountries.com/v2/regionalbloc/pa');
        return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getCountriesByName() {
    try {
      const res = await axios.get('https://restcountries.com/v2/name/peru');
        return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getCountriesByContinent() {
    try {
      const res = await axios.get('https://restcountries.com/v2/continent/asia');
        return res.data;
    } catch (error) {
      console.error(error);
    }
  }


  export default{
      getCountries,
      getCountriesByRegion,
      getCountriesByName,
      getCountriesByContinent
  }