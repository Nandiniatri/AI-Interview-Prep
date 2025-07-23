import Features from "./homePage/features/Features";
import Header from "./homePage/header/Header";
import InterviewTech from "./homePage/interviewTech/InterviewTech";
import PlansForHiring from "./homePage/plansForHiring/PlansForHiring";
import TheIntelligentFile from "./homePage/theIntelligentSolu/TheIntelligent";

const AIMainFile = () => {
    return (
        <>
            <Header />
            <TheIntelligentFile />
            <InterviewTech />
            <Features />
            <PlansForHiring />
        </>
    )
}

export default AIMainFile;