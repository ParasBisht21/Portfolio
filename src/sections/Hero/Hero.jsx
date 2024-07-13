import styles from './HeroStyles.module.css'
import heroImg from '../../assets/me.png'
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import gitHubLight from "../../assets/github-light.svg"
import gitHubDark from "../../assets/github-dark.svg"
import linkedinIconLight from "../../assets/linkedin-light.svg"
import linkedinIconDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/Paras_Bisht_Resume.pdf"
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const {theme,toggleTheme}=useTheme();
    const twitterIcon= theme==='light'?twitterLight:twitterDark;
    const githubIcon= theme==='light'?gitHubLight:gitHubDark;
    const linkedinIcon= theme==='light'?linkedinIconLight:linkedinIconDark;
    const themeIcon= theme==='light'?sun:moon;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero}
            src={heroImg}
            alt="Profile picture of Paras Bisht"
            />
            <img className={styles.colorMode}
            src={themeIcon}
            alt="color mode icon"
            onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
            <h1>Paras
                <br></br>
                Bisht
            </h1>
            <h2 className={styles.glitch}>Frontend Developer</h2>
            <span>
                <a href="https://www.instagram.com/parasb21/" target='_blank'>
                <img src={twitterIcon} alt="Insta Icon"></img>
                </a>
                <a href="https://github.com/ParasBisht21" target='_blank'>
                <img src={githubIcon} alt="GitHub Icon"></img>
                </a>
                <a href="https://www.linkedin.com/in/paras-bisht-79290824b/" target='_blank'>
                <img src={linkedinIcon} alt="LinkedIn Icon"></img>
                </a>
            </span>
            <p className={styles.description}>Transforming innovative ideas into impactful digital experiences with precision and creativity.</p>
            <a href={CV}>
                <button className='hover' download>Resume</button>
            </a>
        </div>
        </section>
  )
}

export default Hero
