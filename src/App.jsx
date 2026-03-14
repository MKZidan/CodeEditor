
import CodeEditor from './components/code-editor';
import FileStructure from './components/file-structure';
import './App.css';
import {FilesContentProvider} from './store/files-content-context.jsx';
import TopBar, { ButtonProps } from './components/top-bar.jsx';
import DirectorySelector from './components/upload-file.jsx';
function App() {
  const btns = [new ButtonProps(()=> console.log("test"), "Test")];
  return(
  <FilesContentProvider>
    <div className='editor-container'>
      <TopBar btns={btns}>
        <DirectorySelector />
      </TopBar>
      <div className='main-body'>
      <FileStructure />
      <CodeEditor />
      </div>
    </div>    
  </FilesContentProvider>
);

}

export default App;