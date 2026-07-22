from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

from groq import Groq

import requests
import os
import json

# ==========================
# Load Environment Variables
# ==========================

load_dotenv()

API_KEY = os.getenv("OPENWEATHER_API_KEY")

OPENAI_KEY = os.getenv("OPENAI_API_KEY")

client = Groq(
    api_key=OPENAI_KEY
)

CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"
FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"
AQI_URL = "https://api.openweathermap.org/data/2.5/air_pollution"

# ==========================
# Flask App
# ==========================

app = Flask(__name__)
CORS(app)

# =====================================================
# HOME
# =====================================================

@app.route("/")
def home():

    return jsonify({

        "project": "WeatherVoice AI Pro",

        "developer": "Vinay M",

        "backend": "Flask",

        "AI": "Groq Llama 3.3",

        "weather": "OpenWeather API",

        "status": "Running"

    })


# =====================================================
# CURRENT WEATHER
# =====================================================

@app.route("/weather")
def weather():

    city = request.args.get("city")

    if not city:

        return jsonify({

            "error": "City name required"

        }),400

    params = {

        "q": city,

        "appid": API_KEY,

        "units": "metric"

    }

    response = requests.get(

        CURRENT_WEATHER_URL,

        params=params

    )

    data = response.json()

    if response.status_code != 200:

        return jsonify(data),response.status_code

    weather = {

        "city": data["name"],

        "country": data["sys"]["country"],

        "lat": data["coord"]["lat"],

        "lon": data["coord"]["lon"],

        "latitude": data["coord"]["lat"],

        "longitude": data["coord"]["lon"],

        "temperature": data["main"]["temp"],

        "feels_like": data["main"]["feels_like"],

        "minimum_temperature": data["main"]["temp_min"],

        "maximum_temperature": data["main"]["temp_max"],

        "humidity": data["main"]["humidity"],

        "pressure": data["main"]["pressure"],

        "visibility": data.get("visibility",0)/1000,

        "wind_speed": data["wind"]["speed"],

        "wind_degree": data["wind"]["deg"],

        "weather": data["weather"][0]["main"],

        "description": data["weather"][0]["description"],

        "icon": data["weather"][0]["icon"],

        "sunrise": data["sys"]["sunrise"],

        "sunset": data["sys"]["sunset"]

    }

    return jsonify(weather)


# =====================================================
# FORECAST
# =====================================================

@app.route("/forecast")
def forecast():

    city=request.args.get("city")

    if not city:

        return jsonify({

            "error":"City required"

        }),400

    params={

        "q":city,

        "appid":API_KEY,

        "units":"metric"

    }

    response=requests.get(

        FORECAST_URL,

        params=params

    )

    return jsonify(response.json())


# =====================================================
# AQI
# =====================================================

@app.route("/aqi")
def aqi():

    lat=request.args.get("lat")

    lon=request.args.get("lon")

    params={

        "lat":lat,

        "lon":lon,

        "appid":API_KEY

    }

    response=requests.get(

        AQI_URL,

        params=params

    )

    return jsonify(response.json())
# =====================================================
# WEATHER USING GPS LOCATION
# =====================================================

@app.route("/weather/location")
def weather_location():

    lat = request.args.get("lat")
    lon = request.args.get("lon")

    if not lat or not lon:

        return jsonify({
            "error": "Latitude and Longitude required"
        }),400

    url = (
        f"https://api.openweathermap.org/data/2.5/weather"
        f"?lat={lat}"
        f"&lon={lon}"
        f"&appid={API_KEY}"
        f"&units=metric"
    )

    data = requests.get(url).json()

    return jsonify({

        "city": data["name"],
        "country": data["sys"]["country"],

        "latitude": data["coord"]["lat"],
        "longitude": data["coord"]["lon"],

        "temperature": data["main"]["temp"],
        "feels_like": data["main"]["feels_like"],

        "minimum_temperature": data["main"]["temp_min"],
        "maximum_temperature": data["main"]["temp_max"],

        "humidity": data["main"]["humidity"],
        "pressure": data["main"]["pressure"],

        "visibility": data.get("visibility",0)/1000,

        "wind_speed": data["wind"]["speed"],
        "wind_degree": data["wind"]["deg"],

        "weather": data["weather"][0]["main"],
        "description": data["weather"][0]["description"],
        "icon": data["weather"][0]["icon"],

        "sunrise": data["sys"]["sunrise"],
        "sunset": data["sys"]["sunset"]

    })


# =====================================================
# UV INDEX
# =====================================================

@app.route("/uv")
def uv():

    lat=request.args.get("lat")
    lon=request.args.get("lon")

    url=(
        f"https://api.openweathermap.org/data/3.0/onecall"
        f"?lat={lat}"
        f"&lon={lon}"
        f"&exclude=minutely,hourly,daily,alerts"
        f"&appid={API_KEY}"
    )

    data=requests.get(url).json()

    return jsonify(data)


# =====================================================
# HEALTH CHECK
# =====================================================

@app.route("/health")
def health():

    return jsonify({

        "status":"Running",

        "backend":"Flask",

        "AI":"Groq",

        "weather":"OpenWeather"

    })


# =====================================================
# AI CHAT (Groq)
# =====================================================

@app.route("/ai-chat", methods=["POST"])
def ai_chat():

    try:

        data = request.get_json()

        question = data.get("question","")

        weather = data.get("weather",{})

        prompt = f"""
You are WeatherVoice AI Pro.

Current Weather

City : {weather.get("city")}
Country : {weather.get("country")}

Temperature : {weather.get("temperature")}°C
Feels Like : {weather.get("feels_like")}°C
Humidity : {weather.get("humidity")}%
Pressure : {weather.get("pressure")} hPa
Wind Speed : {weather.get("wind_speed")} m/s
Visibility : {weather.get("visibility")} km
Weather : {weather.get("weather")}
Description : {weather.get("description")}

User Question:

{question}

Rules:

Answer like ChatGPT.

Use weather information.

Give useful advice.

Mention umbrella, clothes, travel,
health or outdoor activities whenever appropriate.

Keep answer under 120 words.
"""

        response = client.chat.completions.create(

            model="llama-3.3-70b-versatile",

            messages=[

                {
                    "role":"system",
                    "content":"You are an expert AI Weather Assistant."
                },

                {
                    "role":"user",
                    "content":prompt
                }

            ],

            temperature=0.7,

            max_tokens=250

        )

        answer=response.choices[0].message.content

        return jsonify({

            "success":True,

            "answer":answer

        })

    except Exception as e:

        import traceback

        traceback.print_exc()

        return jsonify({

            "success":False,

            "error":str(e)

        }),500
   # =====================================================
# RUN FLASK SERVER
# =====================================================
# =====================================================
# AI TRAVEL PLANNER
# =====================================================

@app.route("/ai-travel-planner", methods=["POST"])
def ai_travel_planner():

    try:

        data = request.get_json()

        weather = data.get("weather", {})

        prompt = f"""
You are WeatherVoice AI Pro.

Create a premium travel plan based on the weather.

City: {weather.get("city")}
Temperature: {weather.get("temperature")}°C
Humidity: {weather.get("humidity")}%
Wind Speed: {weather.get("wind_speed")} m/s
Condition: {weather.get("weather")}
Description: {weather.get("description")}

Return ONLY valid JSON.

{{
  "score":95,
  "best_time":"6 AM - 10 AM",
  "avoid":"1 PM - 3 PM",
  "carry":[
    "Cap",
    "Water Bottle",
    "Umbrella",
    "Sunglasses"
  ],
  "activities":{{
    "Beach":5,
    "Walking":5,
    "Photography":4,
    "Dining":4,
    "Cycling":5
  }},
  "advice":"One short travel advice under 50 words."
}}

Return JSON only.
"""

        response = client.chat.completions.create(

            model="llama-3.3-70b-versatile",

            messages=[
                {
                    "role": "system",
                    "content": "You are an expert AI Travel Planner."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],

            temperature=0.5,

            max_tokens=300

        )

        answer = response.choices[0].message.content

        return jsonify({

            "success": True,

            "result": json.loads(answer)

        })

    except Exception as e:

        return jsonify({

            "success": False,

            "error": str(e)

        }),500

if __name__ == "__main__":

    print("=" * 60)
    print("🌦️  WeatherVoice AI Pro Backend")
    print("=" * 60)
    print("✅ Weather API : OpenWeather")
    print("🤖 AI Model    : Groq (Llama 3.3 70B Versatile)")
    print("🌐 Server      : http://127.0.0.1:5000")
    print("💬 AI Chat API : http://127.0.0.1:5000/ai-chat")
    print("=" * 60)

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    ) 