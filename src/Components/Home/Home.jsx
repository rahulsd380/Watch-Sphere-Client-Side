import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Plans from "../Plans/Plans";
import TrendingMovies from "../TrendingMovies/TrendingMovies";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <TrendingMovies></TrendingMovies>
            <Plans></Plans>
            <Footer></Footer>
        </div>
    );
};

export default Home;