import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import Editor from '@monaco-editor/react';

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

  function showValue() {
    const value = editorRef.current.getValue();
    runJSCode(value);
    alert(editorRef.current.getValue());
  }

  return (
    <>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        width="95vw"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </>
  );
}
export default CodeEditor;