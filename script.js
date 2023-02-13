// let pro = new Promise();
let cityName = "kashipur";

// fetch(
//   `https://api.weatherapi.com/v1/current.json?key=596d919f63e343e5ba960858231302&q=${cityName}`
// )
//   .then((obj) => obj.json())
//   .then((data) => {console.log(data.current.temp_c);})
//   .catch((error) => console.log(error));



const getData =async (event)=>{
    const fetchData = await fetch( `https://api.weatherapi.com/v1/current.json?key=596d919f63e343e5ba960858231302&q=${cityName}`);

    const orgData = await fetchData.json();
    let data = orgData;
    console.log(data);
    console.log(data.current);
}

getData();
