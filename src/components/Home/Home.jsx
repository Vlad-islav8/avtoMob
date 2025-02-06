import styles from './Home.module.css'
import HeroSection from './HereSection/HeroSection';
import CTASection from './CTA/CTA';
import About from './AboutUs/AboutUs';
import FAQSection from './faqSection/faqSection';
import ReviewsSection from './ReviewsSection/ReviewsSection';
import HowWeWork from './HowWeWork/HowWeWork';
function Home() {
    return (
        <div className={styles.Home}>
            <HeroSection />
            <CTASection />
            <About />
            <FAQSection />
            <ReviewsSection />
            <HowWeWork />
        </div>
    );
}

export default Home;
