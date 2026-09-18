import React from 'react'
// import Iridescence from './Iridescence';
import TextType from './TextType';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <div id="Home">

        <div id="intro-container">
            <div id='intro-image'>
                <img src={profile} alt="Profile" />
            </div>
            <div id='intro-text'>
                <h1>Welcome Voyager! Khoushik Here</h1>
                <div id='text-type-container'>
                    <TextType 
                    text={["See You @ visual studio code", "Perhaps in the gym?", "Let go for a hackathon!!?", "Coffee date maybe? Lol"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    />
                </div>
                <h3>Aspiring Fullstack developer | MERN Stack, Java Backend , Docker and AWS </h3>
                <p>Full-stack engineer specializing in MERN technologies with strong expertise in SQL databases. Skilled
                in building responsive user interfaces, efficient server-side logic, and reliable data models. Experienced
                in creating robust applications, integrating APIs, and solving real-world problems through clean and
                maintainable code.</p>
            </div>


        </div>
    </div>
  )
}

export default Home
