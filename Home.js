import React from 'react';
import championsImg from '../images/champions-18-19.png';
import mclarenImg from '../images/mclaren.png';
import coffeeImg from '../images/coffee.png';
import juniperImg from '../images/juniper.png';

const Home = ({ toggleDarkMode }) => {
  return (
    <div>
      <h1>Welcome to My JS App</h1>

      <div>
        <section>
        <article>
            <p>
                I am currently a Technical Support Specialist by trade, working with schools in the UK for a websites provider,
                and regularly help maintain and update websites using HTML and CSS, some SQL, and helping to set up APIs - amongst other things.<br/>
                <br/>In addition to this, I have the ambition of becoming a developer and have recently enrolled on a course that will help me achieve
                this, and become a BCS-accredited developer.
            </p>
        </article>
    </section>

    <section>
        <article>
            <h2>My Skills</h2>
            <p>
            My working life began with my first full-time role as an apprentice
            Support Specialist for a start-up School Management Information Systems company called Pupil Asset, located
            in Norwich. <br/>There, I had my first experience of coding languages and had my introduction
            to HTML and CSS, which I used to edit report templates for customer use, and became a go-to within the team.<br/><br/>
            Since then I have moveed into a more technical role after Pupil Asset became a part of Juniper Education, and working
            with HTML, CSS and - to a lesser extent - JavaScript have become part of my day-to-day responsibilities. Naturally, in a customer-facing
            role, I have also worked on my relationship management and timekeeping skills, as well as developing a knack for
            explaining relatively complex matters in layman's terms to be more easily understood.
            </p>
            <div className='gallery'>
                <div className='gallery-item'><img src={coffeeImg} alt="A cup of coffee" /></div>
                <div className='gallery-item'><img src={juniperImg} alt="Juniper Education" /></div>
            </div>
        </article>
    </section>

    <section>
        <article>
            <h2>My Hobbies</h2>
            <p>
                I am a lifelong supporter of Norwich City Football Club and have been a season ticket holder since I was 16, spending most of
                my weekends following the club. <br/><br/>I'm passionate about motor racing and have spent much of my life watching Formula 1 (as a long-suffering fan of McLaren), and 
                other forms of motor racing including Super GT; MotoGP; DTM; British Touring Cars and the World Endurance Championship - famous for the 24 Hours of Le Mans.<br/><br/>
                Aside from these I also increasingly fail to find time to make my way through my reading list, although I've found more time in recent years for cooking, baking and to
                become somewhat of a coffee snob!
            </p>
            <div className='gallery'>
                <div className='gallery-item'><img src={mclarenImg} alt="Lando Norris' McLaren; 2025 Australian Grand Prix" /></div>
                <div className='gallery-item'><img src={championsImg} alt="Norwich City becoming 2018/19 EFL Championship winners" /></div>
            </div>
        </article>
      </section>
    </div>

      <iframe
        title="ITonlinelearning Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.8905572458966!2d0.7111857765413041!3d51.349923071777894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df2b34bfee2f19%3A0x2f1c3afb6810c292!2sITonlinelearning!5e0!3m2!1sen!2suk!4v1740570257247!5m2!1sen!2suk"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Home;