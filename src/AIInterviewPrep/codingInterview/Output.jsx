import { useState } from "react";
import { executeCode } from "../../api";
import Button from "../../componets/Button";

const Output = ({ language, editorRef }) => {
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);


    const runcode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            const { run: result } = await executeCode(language, sourceCode);
            setOutput(result.output)
        } catch (error) {
            console.log('Network Alert');
        } finally {
            setLoading(false);
        }
    }
    // console.log(output);

    return (
        <div className="output-wrapper">
            <div className="output-div">
                {output ? output : 'Click "Run Code" to see the output here'}
            </div>

            <Button
                className="run-btn"
                onClick={runcode}
                disabled={loading}
            >
                {loading ? "Running..." : "Run Code"}
            </Button>
        </div>
    )
}

export default Output;



{/* <div>
    <Button
        loading={loading}
        onClick={runcode}>Run Code</Button>

    <div className="output-div">
        {output ? output : 'Click "Run Code" to see the output here'}
    </div>
</div> */}