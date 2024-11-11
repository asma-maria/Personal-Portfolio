
import Banner from "../shared/Banner";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "../shared/Skills";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;