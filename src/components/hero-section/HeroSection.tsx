
import styles from './HeroSection.module.css'
import {instrumentSans, italiana} from '@/font';
import Image from 'next/image';
function HeroSection() {
  return (
    <div>
    <section className={styles.hero}>
        <div className={styles.heroLeft}>
            <h1 className={italiana.className}>Discover And <br /> Find Your  <br />Own Fashion</h1>
            <p className={instrumentSans.className}>Explore our curated collection of stylish <br />clothing and accessories trailed to Your <br />unique taste</p>
        <button className={instrumentSans.className}>EXPLORE NOW</button>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroRightImdBackground}>
            <Image src={"/myImage/girl.png"} alt='woman picture' width={190} height={99}></Image>
          </div>
        </div>

    </section>
    </div>
  )
}

export default HeroSection