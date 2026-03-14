import { createContext, useState } from "react";

const FilesContentContext = createContext({});

export default FilesContentContext;

export function FilesContentProvider({ children }) {
    const [filesContent, setFilesContent] = useState({});
    const value = {
        filesContent,
        setFilesContent,
    };
    return <FilesContentContext value={value}>
        {children}
    </FilesContentContext>
}
