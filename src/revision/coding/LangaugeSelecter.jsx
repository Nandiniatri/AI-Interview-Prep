import { LANGUAGE_VERSION } from "../../contants";

const LanguageSelecter = ({ onSelect, language }) => {
    const languages = Object.entries(LANGUAGE_VERSION);

    return (
        <>
            <select value={language} onChange={(e) => onSelect(e.target.value)}>
                {languages.map(([name, version]) => (
                    <option key={name} value={name}>
                        {name} ({version})
                    </option>
                ))}
            </select>
        </>
    )
}

export default LanguageSelecter;