import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import TrendingMovies from "../TrendingMovies/TrendingMovies";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <TrendingMovies></TrendingMovies>
        </div>
    );
};

export default Home;