import React from 'react'
import secondphoto from '../assets/secondphoto.jpg'
import {Button} from '@/components/ui/button'
import Image from 'react-bootstrap/Image'
import backgroundImage from '../assets/backgroundimage3.jpg'
import ProfilePic from '../assets/ProfilePic2.JPG'

const Hero = () => {
    return (
      <>
        <section className="h-screen" id="LandingPage">
          <div className=" flex w-screen h-screen justify-center item-center " style={{backgroundImage: `url(${backgroundImage}`, backgroundSize:'cover', backgroundPosition:'center', imageRendering:'auto' }}>
            <div className=" text-white flex flex-col justify-center items-center text-center gap-10 flex-1">
              <div className="w-60 h-60 overflow-hidden rounded-full" style={{border:'5px solid white'}} >
                <img
                  src={ProfilePic}
                  alt=""
                  className="w-full h-full object-cover "
           
                  
                />
              </div>
              
              <h1 className="text-4xl ">Michael Kim</h1>
              <p>
                Software Engineer
                <br />
                Full-Stack Developer
                <br />
                AI/ML Grad Student
              </p>
              <a href="#AboutPage" type="button" style={{border:"2px solid white",borderRadius:"25px", padding : '10px'}}>View Portfolio</a>
            </div>
          </div>
        </section>
      </>
    );
}

export default Hero