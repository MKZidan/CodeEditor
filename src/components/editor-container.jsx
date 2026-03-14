

import CodeEditor from './code-editor';
import FileStructure from './file-structure';
import '../styles/editor-container.css';

import TopBar, { ButtonProps } from './top-bar.jsx';
import DirectorySelector from './upload-file.jsx';
import { useContext } from 'react';
import CurrentFileContext from '../store/current-file.jsx';

const runJSCode = (codeString) => {
  try {
    // Create a new function from the string
    const dynamicFunction = new Function(codeString);
    // Execute the function
    dynamicFunction();
  } catch (error) {
    console.error("Error running dynamic code:", error);
  }
};

export default function EditorContainer(){

    const {currentFile} = useContext(CurrentFileContext)

    console.log("CurrentFile : ");
    console.log(currentFile)
    const name = currentFile? currentFile.fileName : " current File"
    const btns = [
        new ButtonProps(
            ()=> {
                if ( currentFile){
                    runJSCode(currentFile.fileContent);
                }
            }
            , "run " + name
        )
    ];

    return (
    <div className='editor-container'>
      <TopBar btns={btns}>
        <DirectorySelector />
      </TopBar>
      <div className='main-body'>
      <FileStructure />
      <CodeEditor />
      </div>
    </div>    
    );
}