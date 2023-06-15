const data = {
  cod: "200",
  message: 0,
  cnt: 7,
  list: [
    {
      dt: 1686765600,
      main: {
        temp: 299.13,
        feels_like: 299.13,
        temp_min: 299.13,
        temp_max: 299.14,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1014,
        humidity: 77,
        temp_kf: -0.01,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 5.54,
        deg: 88,
        gust: 7,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.61,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-14 18:00:00",
    },
    {
      dt: 1686776400,
      main: {
        temp: 298.42,
        feels_like: 299.12,
        temp_min: 298.06,
        temp_max: 298.42,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 81,
        temp_kf: 0.36,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 21,
      },
      wind: {
        speed: 5.46,
        deg: 98,
        gust: 6.86,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        "3h": 2.18,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-14 21:00:00",
    },
    {
      dt: 1686787200,
      main: {
        temp: 298.22,
        feels_like: 298.9,
        temp_min: 298.22,
        temp_max: 298.22,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1016,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 4.47,
        deg: 92,
        gust: 6.04,
      },
      visibility: 10000,
      pop: 0.83,
      rain: {
        "3h": 2.23,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-15 00:00:00",
    },
    {
      dt: 1686798000,
      main: {
        temp: 297.94,
        feels_like: 298.64,
        temp_min: 297.94,
        temp_max: 297.94,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1016,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 4.01,
        deg: 98,
        gust: 5.03,
      },
      visibility: 10000,
      pop: 0.77,
      rain: {
        "3h": 2,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-15 03:00:00",
    },
    {
      dt: 1686808800,
      main: {
        temp: 297.62,
        feels_like: 298.29,
        temp_min: 297.62,
        temp_max: 297.62,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1015,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 3.87,
        deg: 92,
        gust: 4.78,
      },
      visibility: 8093,
      pop: 0.77,
      rain: {
        "3h": 3.37,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-06-15 06:00:00",
    },
    {
      dt: 1686819600,
      main: {
        temp: 297.61,
        feels_like: 298.23,
        temp_min: 297.61,
        temp_max: 297.61,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1016,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 30,
      },
      wind: {
        speed: 3.1,
        deg: 82,
        gust: 3.72,
      },
      visibility: 10000,
      pop: 0.78,
      rain: {
        "3h": 3.28,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-15 09:00:00",
    },
    {
      dt: 1686830400,
      main: {
        temp: 298.5,
        feels_like: 299.08,
        temp_min: 298.5,
        temp_max: 298.5,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1017,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 32,
      },
      wind: {
        speed: 1.66,
        deg: 63,
        gust: 2.48,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 1.56,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-06-15 12:00:00",
    },
  ],
  city: {
    id: 3450554,
    name: "Salvador",
    coord: {
      lat: -12.9711,
      lon: -38.5108,
    },
    country: "BR",
    population: 2711840,
    timezone: -10800,
    sunrise: 1686732799,
    sunset: 1686773719,
  },
};

// Today data
export const todayData = {
  city: data.city.name,
  temperature: data.list[0].main.temp,
  weather: data.list[0].weather[0].main,
};

// Week data
export const nextHoursData = [
  {
    min: data.list[1].main.temp_min,
    max: data.list[1].main.temp_max,
    time: data.list[1].dt_txt,
    icon: data.list[1].weather[0].icon,
  },
  {
    min: data.list[2].main.temp_min,
    max: data.list[2].main.temp_max,
    time: data.list[2].dt_txt,
    icon: data.list[2].weather[0].icon,
  },
  {
    min: data.list[3].main.temp_min,
    max: data.list[3].main.temp_max,
    time: data.list[3].dt_txt,
    icon: data.list[3].weather[0].icon,
  },
  {
    min: data.list[4].main.temp_min,
    max: data.list[4].main.temp_max,
    time: data.list[4].dt_txt,
    icon: data.list[4].weather[0].icon,
  },
  {
    min: data.list[5].main.temp_min,
    max: data.list[5].main.temp_max,
    time: data.list[5].dt_txt,
    icon: data.list[5].weather[0].icon,
  },
  {
    min: data.list[6].main.temp_min,
    max: data.list[6].main.temp_max,
    time: data.list[6].dt_txt,
    icon: data.list[6].weather[0].icon,
  },
];

// Sunrise and sunset data

export const sunData = {
  sunrise: data.city.sunrise,
  sunset: data.city.sunset,
};

// local data
export const localData = {
  feelsLike: data.list[0].main.feels_like,
  humidity: data.list[0].main.humidity,
  windSpeed: data.list[0].wind.speed,
  pressure: data.list[0].main.pressure,
};