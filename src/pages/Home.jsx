import React, { useRef } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import fa from '../images/Fajuyigbe_Character_Plain.png';
import lola from '../images/Woman.png'
import VideoPlayer from '../components/Videoplayer';
import emailjs from '@emailjs/browser'

const Home = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_83gta56', 'template_xyj3sjn', form.current, {
          publicKey: 'JDT8O_FGlRYkEBjJr',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );e.target.reset();
        }
   
      useEffect(() => {
    AOS.init({duration:2000})
    }, [])
  

  return (
    <>
    <div className="hero-segment">
        <div className="container">
            <div className="hero-text">

                <h1 data-aos='fade-down' >GRAY</h1>
                <h1 data-aos='fade-up'>EDGE</h1>
                <h2>studios</h2>
            </div>
        </div>
    </div>

    <div className="sec-section">
        <div className="image-background">

        </div>
        <div className="text-seg">
          <div data-aos='fade-up'  className="cont">
          <p>Lola's Odyssey intertwines past and present in a visually stunning narrative that explores the legacy of knowledge and the mystical connections between generations.
          </p>
          <p>From the divine forests of pre-colonial Ibadan to the bustling streets of modern Lagos, this tale beckons you to embark on a journey of discovery, courage, and destiny.</p>
          <p>Watch the Official Trailer Now and prepare to be captivated by a story that bridges time and transcends reality.    
         </p>
          </div>
         
        </div>
        </div>

  <div className="charr">
   
  <div className="char container">
          <div className="char-img">
            <img  data-aos='fade-up'  src={fa} alt=''/>
          </div>
          <div className="txt">
            <h2>Fàjuyigbé:</h2>
            <p> An elderly sage, Fajuyigbe exudes wisdom
earned through a lifetime of service to his
community. Burdened by the weight of divine
knowledge, his weathered face reflects both
the trials he's endured and the reverence he
holds for his ancestral wisdom. Though
physically frail, his spirit remains unyielding.
embodying resilience</p>
          </div>
        </div>

          
  <div className="char container">
         
          <div className="txt two">
            <h2>Ifálọlá:</h2>
            <p> A descendant of Fajuyigbe, Ifalola is a curious and determined young woman driven by a profound
need to connect her heritage,  Ifalola   seeks to uncover and understand the ancient knowledge
passed down through her lineage, hoping to find and purpose and identity in the process</p>
          </div>
          <div className="char-img">
              <img  data-aos='fade-up'  src={lola} alt=''/>
          </div>
        </div>
  </div>
        
  <div  className="img-grid">
  <div data-aos='fade-up'  className="parent container">
<div className="div1"> </div>
<div className="div2"> </div>
<div className="div3"> </div>
<div className="div4"> </div>
<div className="div5"> </div>
<div className="div6"> </div>
<div className="div7"> </div>
</div>
  </div>
<div>
  <VideoPlayer/>
</div>
       <div className="form-seg">
        <h1>GET IN TOUCH</h1>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='name' required />
            <input type="email" name='email' placeholder='Email' />
            <textarea name="message" rows="7" placeholder='send your message'></textarea>
            <button>SEND</button>
            </form>
        </div>
       </div>
       <footer>
        <div className="link">
       
          <a href='https://x.com/olusesan__tolu'>
          <i className="fa-brands fa-x-twitter" size="xl" style={{color: "#FFD43B",}}></i>
          </a>

       
          <a href="https://www.instagram.com/_grayartist/">
          <i className="fa-brands fa-instagram" size="xl" style={{color: "#FFD43B",}}></i>
          </a>
      
        </div>
       </footer>
    </>
  )
}

export default Home;
