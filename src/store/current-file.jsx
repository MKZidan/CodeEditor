import { createContext, useState } from "react";


const CurrentFileContext = createContext({fileName:"", filePath:"", fileContent:""})

export function CurrentFileContentProvider({ children }) {
    const [currentFile, setCurrentFile] = useState({
        fileName:"test",
        filePath:"test",
        fileContent:"// test comment"
    });

    const value = {
        currentFile,
        setCurrentFile,
    };

    return <CurrentFileContext value={value}>
        {children}
    </CurrentFileContext>
}

export default   CurrentFileContext;