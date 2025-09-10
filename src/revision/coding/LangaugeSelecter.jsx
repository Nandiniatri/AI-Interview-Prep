import { LANGUAGE_VERSION } from "../../contants";

const LanguageSelecter = () => {
    const languages = Object.entries(LANGUAGE_VERSION);

    return (
        <>
            <select>
                {languages.map((Languageitem) => {
                    return (
                        <div>
                            <option>{Languageitem}</option>
                        </div>
                    )
                })}
            </select>
        </>
    )
}

export default LanguageSelecter;