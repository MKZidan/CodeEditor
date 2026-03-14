import React, { useRef, useCallback, useMemo, useContext } from 'react';
import ReactDOM from 'react-dom';

import Editor from '@monaco-editor/react';
import '../styles/code-editor.css';
import TopBar, { ButtonProps } from './top-bar';
import DirectorySelector from './upload-file';
import CurrentFileContext from '../store/current-file';


function CodeEditor() {
  const editorRef = useRef(null);
  const {currentFile, setCurrentFile} = useContext(CurrentFileContext)

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    console.log('Editor mounted.');
    console.log(editor);

        // Add a command to capture Ctrl+S (Windows/Linux) or Cmd+S (Mac)
    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
      function () {
        // Your save logic goes here
        const value = editor.getValue();
        console.log("Saving content:", value);
        alert("Content saved!");
        setCurrentFile((prev)=> {
          return {...prev, fileContent: value}
        })
      },
    );
  }
  

  return (
    <div className='editor'>
      <Editor
        height="90vh"
        width="95vw"
        defaultLanguage="javascript"
        defaultValue={currentFile? currentFile.fileContent : "// some comment"}
        value={currentFile.fileContent}
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
export default CodeEditor;