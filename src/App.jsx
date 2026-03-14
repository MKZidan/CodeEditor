import './App.css';
import {FilesContentProvider} from './store/files-content-context.jsx';
import EditorContainer from './components/editor-container.jsx';
import { CurrentFileContentProvider } from './store/current-file.jsx';
function App() {
  return(
  <FilesContentProvider>
    <CurrentFileContentProvider>
      <EditorContainer/>
    </CurrentFileContentProvider>
  </FilesContentProvider>
);

}

export default App;