import Features from "./homePage/features/Features";
import Footer from "./homePage/footer/Footer";
import Header from "./homePage/header/Header";
import InterviewTech from "./homePage/interviewTech/InterviewTech";
import PlansForHiring from "./homePage/plansForHiring/PlansForHiring";
import SuperChargeSection from "./homePage/superChargeSection/SuperChargeSection";
import TheIntelligentFile from "./homePage/theIntelligentSolu/TheIntelligent";

const AIMainFile = () => {
    return (
        <>
            <Header />
            <TheIntelligentFile /> 
            <InterviewTech />
            <Features />
            <PlansForHiring />
            <SuperChargeSection />
            <Footer />
        </>
    )
} 

export default AIMainFile;