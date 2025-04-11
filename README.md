# AI Personal Assistant - G-One

**G-One** is an AI-based personal assistant built with Python that integrates voice recognition, text-to-speech, and web-based functionalities. It allows users to interact with their system via voice commands to perform tasks such as opening websites, fetching weather information, answering computational or geographical queries, and more.

---

## Features

- **Voice Recognition**: Listen to voice commands through the microphone.
- **Text-to-Speech**: Respond with audio feedback.
- **Web Actions**: Open websites like YouTube, Google, Gmail, Stack Overflow, etc.
- **Weather Information**: Fetch the current weather information for any city.
- **Wikipedia Search**: Retrieve summaries from Wikipedia.
- **Time**: Provide the current time.
- **News**: Get the latest news headlines from Times of India.
- **Camera Access**: Take a photo using the webcam.
- **Computational Queries**: Answer questions using the WolframAlpha API.
- **Log Off**: Shut down or log off your PC via voice command.

---

## Tech Stack

- **Python 3.x**: Programming language used for the assistant.
- **Speech Recognition (speech_recognition)**: For listening to commands.
- **pyttsx3**: A library for text-to-speech functionality.
- **wikipedia**: Fetch Wikipedia summaries for queries.
- **wolframalpha**: API integration for answering computational and geographical questions.
- **requests**: For making HTTP requests, such as fetching weather data from OpenWeatherMap.

---

## Prerequisites

Before running the assistant, make sure you have Python 3.x installed on your system. You will also need the following libraries:

- **speech_recognition**
- **pyttsx3**
- **wikipedia**
- **wolframalpha**
- **requests**
- **ecapture**

You can install the necessary libraries using the following command:

```bash
pip install -r requirements.txt

```
You can create a requirements.txt file for the project as follows:

nginx
Copy
Edit
speechrecognition
pyttsx3
wikipedia
wolframalpha
requests
ecapture

## Usage
# 1.Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/yourusername/AI-Personal-Assistant.git
cd AI-Personal-Assistant

# 2.Install Dependencies

Install the required Python libraries:
pip install -r requirements.txt

# 3.Run the Assistant

Execute the main script:
python assistant.py
This will start the personal assistant, and it will begin listening for voice commands.

## Commands
The assistant can respond to a wide variety of voice commands. Some of the supported commands include:

**Time**: "What is the time?"

**Weather**: "What's the weather like in [city]?"

**Open Website**: "Open YouTube", "Open Google", "Open Gmail", etc.

**Search Wikipedia**: "Search Wikipedia for [topic]"

**News**: "Show me the latest news"

**Take a Photo**: "Take a photo"

**WolframAlpha**: "What is [computational question]?"

## How It Works
**Speech Recognition**: The assistant listens to the user's commands via the microphone using the speech_recognition library.

**Text-to-Speech**: Once the assistant recognizes the command, it responds using the pyttsx3 library, converting text into speech.

**Web Actions**: The assistant can open websites like Google, YouTube, and Gmail by recognizing commands like "open Google" or "open YouTube".

**Weather**: The assistant fetches weather data from OpenWeatherMap using the OpenWeather API, based on the city name provided by the user.

**Wikipedia Search**: It retrieves summaries from Wikipedia based on the user's voice command.

**WolframAlpha**: Computational questions are processed using the WolframAlpha API.

**News**: Fetches and displays the latest news headlines from Times of India.

**Camera**: The assistant can capture a photo using the webcam through the ecapture library.

**Log Off**: The assistant can log off or shut down your system using voice commands like "log off" or "sign out".

## APIs Used
**WolframAlpha API**: To answer computational and geographical questions.

**OpenWeatherMap API**: To get the weather information of a city.

**Wikipedia API**: To search and get summaries from Wikipedia.

## Setting Up APIs
# 1. WolframAlpha API:
Create an account at WolframAlpha and obtain an API key.
Add the key to your project:
app_id = "YOUR_WOLFRAMALPHA_API_KEY"

# 2. OpenWeatherMap API:
Sign up at OpenWeatherMap to get an API key.
Add the key to your project:
api_key = "YOUR_OPENWEATHERMAP_API_KEY"

# 3. Gemini API (Optional):
Create a Google Gemini account and obtain the API key.


