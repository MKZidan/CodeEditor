import { createContext, useState } from "react";

const FilesContentContext = createContext({});

export default FilesContentContext;

export function FilesContentProvider({ children }) {
    const [currentFolderStructure, setCurrentFolderStructure] = useState({});
    const value = {
        currentFolderStructure,
        setCurrentFolderStructure,
    };
    return <FilesContentContext value={value}>
        {children}
    </FilesContentContext>
}
