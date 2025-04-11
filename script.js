document.getElementById('speak').onclick = function() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase();
        document.getElementById('output').innerText = `You said: ${command}`;
        respondToCommand(command);
    };

    function respondToCommand(command) {
        const output = document.getElementById('output');

        if (command.includes('time')) {
            const currentTime = new Date().toLocaleTimeString();
            output.innerText = `The time is ${currentTime}`;
            speak(`The time is ${currentTime}`);
        } else if (command.includes('open google')) {
            window.open('https://www.google.com', '_blank');
            speak('Opening Google');
        } else if (command.includes('open youtube')) {
            window.open('https://www.youtube.com', '_blank');
            speak('Opening YouTube');
        } else if (command.includes('who are you')) {
            const response = 'I am your web-based assistant.';
            output.innerText = response;
            speak(response);
        } else if (command.includes('weather')) {
            getWeather();
        } else if (command.includes('wikipedia')) {
            const query = command.replace('wikipedia', '').trim();
            searchWikipedia(query);
        } else if(command.includes('boyfriends name')){
            const response = 'Samir';
            output.innerText = response;
            speak(response);
        }else {
            const response = "Sorry, I can't do that yet.";
            output.innerText = response;
            speak(response);
        }
    }

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function getWeather() {
        const city = prompt("Enter the city name");
        const apiKey = "880291598dfb453673e88f8f212c7da2";
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod !== 404) {
                    const temp = data.main.temp;
                    const humidity = data.main.humidity;
                    const description = data.weather[0].description;
                    const weatherInfo = `Temperature: ${temp} K, Humidity: ${humidity}%, Description: ${description}`;
                    document.getElementById('output').innerText = weatherInfo;
                    speak(weatherInfo);
                } else {
                    const notFound = "City not found.";
                    document.getElementById('output').innerText = notFound;
                    speak(notFound);
                }
            });
    }

    function searchWikipedia(query) {
        const url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&format=json`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const result = data[2][0];
                document.getElementById('output').innerText = result;
                speak(result);
            });
    }
};
