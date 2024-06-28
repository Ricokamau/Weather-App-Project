document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'fb843f7a4aee404b92c85304242806'; // Replace with your actual WeatherAPI key
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    console.log(`Fetching weather data for: ${city}`);
    console.log(`Request URL: ${url}`);

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data);
            if (data) {
                document.getElementById('location').innerText = `${data.location.name}, ${data.location.country}`;
                document.getElementById('description').innerText = data.current.condition.text;
                document.getElementById('temperature').innerText = `${data.current.temp_c}°C`;
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred. Please try again later.');
        });
});
