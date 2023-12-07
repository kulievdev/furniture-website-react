import { TopNavigation } from "./sections/top-navigation/TopNavigation";
import { Hero } from "./sections/hero/Hero";
import { Features } from "./sections/features/Features";
import { ProductSlider } from "./sections/product-slider/ProductSlider";
import { WorkingProcess } from "./sections/working-process/WorkingProcess";
import { Marketing } from "./sections/marketing/Marketing";
import { Testimonial } from "./sections/testimonial/Testimonial";
import { Newsletter } from "./sections/newsletter/Newsletter";

const Home = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Features />
            <ProductSlider />
            <WorkingProcess />
            <Marketing />
            <Testimonial />
            <Newsletter />
        </>
    );
};

export { Home };
