import Features from "./homePage/features/Features";
import Header from "./homePage/header/Header";
import InterviewTech from "./homePage/interviewTech/InterviewTech";
import TheIntelligentFile from "./homePage/theIntelligentSolu/TheIntelligent";

const AIMainFile = () => {
    return (
        <>
            <Header />
            <TheIntelligentFile />
            <InterviewTech />
            <Features />
        </>
    )
}

export default AIMainFile;