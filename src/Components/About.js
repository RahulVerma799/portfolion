import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
    
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
    Hi, my name is <b>Rahul Verma</b> and I am a <b>MERN stack developer</b>. I have completed my MCA and recently finished an internship as a <b>software developer</b>. <br/><br/>
    I am passionate about coding and I am looking to gain more freelancing experience in the field. I love creating projects that are both functional and beautifully designed. You can check out some of my work in the projects section.<br/><br/>
    I am <b>open</b> to new collaborations and work opportunities where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
    Apart from coding, I enjoy playing <b>cricket</b> and spending time in the <b>gym</b>. It's a great way for me to stay active and refreshed.<br/>
</p>

        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
    </>
  )
}

export default About