import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/image1.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import './Story.css';

const images = [
  { src: image5, alt: 'Woman holding a large giraffe stuffed animal' },
  { src: image1, alt: 'Pasta and drinks on a table' },
  { src: image4, alt: 'Woman holding a camera' },
];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const Story = () => {
  return (
    <div className="story-container">
      <motion.section
        className="story-section hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariants}
      >
        <h1>Our Story</h1>
        <p>A collection of moments...</p>
      </motion.section>

      <motion.section
        className="story-section text-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={textVariants}
      >
        <motion.h2>How It Started</motion.h2>
        <motion.p>
          Every great story has a beginning. Ours didn't start with a dramatic movie scene, but with a quiet hello that soon became my favorite sound. Now, it's your loud "HIII" that I couldn't trade for anything in the world. Little by little, I learnt more about you and you learnt more about me. It wasn't long before I learnt that I have never met anyone quite like you and that I probably won't meet anyone like you for the rest of my life. So everyday, I'm grateful to have you in my life, Temi. I could have nothing more.
        </motion.p>
      </motion.section>

      <motion.section
        className="story-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={textVariants}>Our Adventures</motion.h2>
        <motion.p variants={textVariants}>
          From running around Toys R Us to eating Italian. Food Trucks and Camcorders. Every moment I've spent with you has been unforgettable. I look forward to more adventures and side quests with you.
        </motion.p>
        <div className="memory-grid">
          {images.map((image, index) => (
            <motion.div key={index} className="memory-item" variants={imageVariants}>
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="story-section text-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={textVariants}
      >
        <motion.h2>More Than Just Memories</motion.h2>
        <motion.p>
          You are more than just a memory to me. I carry you in my bones. Very often, I've told you that you make my days brighter. Being with you doesn't just change my days, it changes me. You make me softer without breaking me, stronger without hardening me. You don't fix me, you remind me I was never too far gone. When I think of you, I become something better. Someone better. A better man, a better human, a better lover, a better brother, a better son, a better friend. You move through me like light, like breath. Quiet, constant, undeniable. I could go on forever about the way I feel steadier when you're near, like your belief in me holds up the parts I used to hide. You don't realize what you do to me. The way your voice quiets the noise. The way your words reorient my world.
        </motion.p>
      </motion.section>
      
      <motion.section
        className="story-section question-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={textVariants}
      >
        <motion.h2>The Next Chapter</motion.h2>
        <motion.p>
          Our story so far has been my favourite. But I think there's still a missing chapter... one I hope we can write together. It didn't take much thought to make this decision. It's actually been one of the easiest decisions I've ever made, and it's you, Temi. 
        </motion.p>
        <motion.div 
            className="final-question"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3>Temwani Chiwele, Can I be your boyfriend?</h3>
        </motion.div>
        <div className="button-group">
            <Link to="/yes" className='button-link'>
              <button className='button-yes'>Absolutely</button>
            </Link>
            <a href="https://wa.link/dnb7d2" target="_blank" rel="noopener noreferrer">
              <button className='button-no-subtle'>Let's talk...</button>
            </a>
        </div>
      </motion.section>

    </div>
  );
};

export default Story; 
