🌦️ Weather App (React + Material UI)

A simple Weather Application built using React, Material UI, and OpenWeather API that allows users to search real-time weather data by city name.

🚀 Features

🔍 Search weather by city

🌡️ Shows:

Current Temperature

Min & Max Temperature

Humidity

Feels Like Temperature

Weather Description

🎨 Dynamic UI:

🌧️ Rain (Humidity > 80)

☀️ Hot (Temp > 15°C)

❄️ Cold (Otherwise)

🖼️ Dynamic weather images

⚡ Real-time API data

❌ Error handling for invalid cities

🛠️ Tech Stack

React (Hooks - useState)

Material UI (MUI Components & Icons)

OpenWeather API

CSS

📂 Components Used
1️⃣ WeatherApp.jsx

Main component

Stores weather data using useState

Passes data to child components

2️⃣ SearchBox.jsx

Takes city input

Calls OpenWeather API

Sends data to parent using updateInfo

3️⃣ InfoBox.jsx

Displays weather data in a card

Uses Material UI components

Shows icons and images based on weather

⚙️ Installation & Setup
1️⃣ Clone project
git clone https://github.com/your-username/weather-app.git
cd weather-app
2️⃣ Install dependencies
npm install
3️⃣ Run project
npm run dev
🔑 API Setup

This project uses OpenWeather API.

Replace your API key in SearchBox.jsx:

const API_KEY = "YOUR_API_KEY";

Get API key from:
👉 https://openweathermap.org/api

🧠 Working Flow

User enters city name

SearchBox fetches weather data

Data is passed to WeatherApp

InfoBox displays data dynamically

🎨 UI Logic
image = humidity > 80 ? rain
      : temp > 15 ? hot
      : cold

Icons:

🌧️ Rain → Thunderstorm Icon

☀️ Hot → Sun Icon

❄️ Cold → Snow Icon

❗ Error Handling

If city is invalid:

No such place exists
📌 Known Issues

API key is exposed (should use .env in production)

No loading spinner

💡 Future Improvements



👨‍💻 Author

Kuldeep

⭐ Support

If you like this project, give it a ⭐ on GitHub 😊
