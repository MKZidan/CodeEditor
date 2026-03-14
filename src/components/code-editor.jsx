import React, { useRef, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

import Editor from '@monaco-editor/react';
import '../styles/code-editor.css';
import TopBar, { ButtonProps } from './top-bar';
import DirectorySelector from './upload-file';

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
function CodeEditor() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    console.log('Editor mounted.');
    console.log(editor);
  }

  return (
    <div className='editor'>
      <Editor
        height="90vh"
        width="95vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
export default CodeEditor;