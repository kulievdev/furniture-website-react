import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Features } from "./sections/features/Features";

const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Features />
        </>
    );
};

export { Home };
