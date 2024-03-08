import React, { useEffect, useRef } from 'react'
import s from './Weather.module.scss'
import { gsap } from "gsap";
import { FaSun } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


const Weather = () => {
  const weather = useRef()
  useEffect(() => {
    gsap.from((".current_weather"), {opacity: 0, y: 100,})
    
    gsap.to((".current_weather"), {opacity: 1, y: 0, duration: .8, delay: 1});

    gsap.from((".other_weathers_wrap"), {opacity: 0, x: 100,})

    gsap.to((".other_weathers_wrap"), {opacity: 1, x: 0, duration: .8, delay: 1});
  }, [])

  return (
    <div className={s.Weather}>
      <div className={s.container}>
        <div className='current_weather'>
          <div className={s.current_weather_data}>
            <div className={s.current_weather_temp}><FaSun  color='#FCC54C'/> 29</div>
            <div className="current_weather_location">New York, NY <br />Wednesday 04:00</div>
          </div>
          <div className={s.diagram}>diagram</div>
          <div className={s.days}>
            <div className={s.day}>
              <div className={s.day_title}>Tue</div>
              <div className={s.day_icon}><FaSun /></div>
              <div className={s.day_time}><div>29</div><div>16</div></div>
            </div>
            <div className={s.day}>
              <div className={s.day_title}>Wed</div>
              <div className={s.day_icon}><FaSun /></div>
              <div className={s.day_time}><div>29</div><div>16</div></div>
            </div>
            <div className={s.day}>
              <div className={s.day_title}>Thu</div>
              <div className={s.day_icon}><FaSun /></div>
              <div className={s.day_time}><div>29</div><div>16</div></div>
            </div>
            <div className={s.day}>
              <div className={s.day_title}>Fri</div>
              <div className={s.day_icon}><FaSun /></div>
              <div className={s.day_time}><div>29</div><div>16</div></div>
            </div>
            <div className={s.day}>
              <div className={s.day_title}>Sat</div>
              <div className={s.day_icon}><FaSun /></div>
              <div className={s.day_time}><div>29</div><div>16</div></div>
            </div>
            <div className={s.day}>
              <div className={s.day_title}>Sun</div>
              <div className={s.day_icon}><FaSun /></div>
              <div className={s.day_time}><div>29</div><div>16</div></div>
            </div>
            <div className={s.day}>
              <div className={s.day_title}>Mon</div>
              <div className={s.day_icon}><FaSun /></div>
              <div className={s.day_time}><div>29</div><div>16</div></div>
            </div>
            <div className={s.day}>
              <div className={s.day_title}>Tue</div>
              <div className={s.day_icon}><FaSun /></div>
              <div className={s.day_time}><div>29</div><div>16</div></div>
            </div>
          </div>
        </div>
        <div className="other_weathers_wrap">
          <div className={s.other_weathers}>
            <div className={s.location_weather}>
              <div className={s.location_data}>
                <div className={s.data}>
                  <div>Precipitation: 10%</div>
                  <div>Humidity: 44%</div>
                  <div>Wind: 14 km/h</div>
                </div>
                <div className={s.location}>
                  <div>location</div>
                  <p className={s.date}>date</p>
                  </div>
              </div>
              <div className={s.temperature}><FaSun /> -13</div>
            </div>
            <div className={s.location_weather}>
              <div className={s.location_data}>
                <div className={s.data}>
                  <div>Precipitation: 10%</div>
                  <div>Humidity: 44%</div>
                  <div>Wind: 14 km/h</div>
                </div>
                <div className={s.location}>
                  <div>location</div>
                  <p className={s.date}>date</p>
                  </div>
              </div>
              <div className={s.temperature}><FaSun /> -13</div>
            </div> <br />
            <div className={s.location_weather}>
              <div className={s.location_data}>
                <div className={s.data}>
                  <div>Precipitation: 10%</div>
                  <div>Humidity: 44%</div>
                  <div>Wind: 14 km/h</div>
                </div>
                <div className={s.location}>
                  <div>location</div>
                  <p className={s.date}>date</p>
                  </div>
              </div>
              <div className={s.temperature}><FaSun /> -13</div>
            </div>
            <div className={s.location_weather}>
              <div className={s.location_data}>
                <div className={s.data}>
                  <div>Precipitation: 10%</div>
                  <div>Humidity: 44%</div>
                  <div>Wind: 14 km/h</div>
                </div>
                <div className={s.location}>
                  <div>location</div>
                  <p className={s.date}>date</p>
                  </div>
              </div>
              <div className={s.temperature}><FaSun /> -13</div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Weather