fetch('https://climate-api.open-meteo.com/v1/climate?latitude=40.8154&longitude=-73.1123&start_date=1950-01-01&end_date=2050-12-31&models=EC_Earth3P_HR&temperature_unit=fahrenheit&disable_bias_correction=true&daily=temperature_2m_mean,temperature_2m_max,temperature_2m_min', {
    headers: {
        'Accept-Encoding': 'gzip'
    }
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(data => {
    console.log(data); // Process the data here
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});