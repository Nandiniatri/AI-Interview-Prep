import Button from "../../componets/Button";

const Output = ({language , editorRef}) => {
    const runcode = async() => {
        const sourceCode = editorRef.current.getValue();
        if(!sourceCode) return;
        try{

        }catch(error){
            console.log('Network Alert');
            
        }
    }

    return (
        <div>
            <Button onClick={runcode}>Run Code</Button>

            <div style={{height:'400px' , background:"black"}}>
                Text
            </div>
        </div>
    )
}

export default Output;