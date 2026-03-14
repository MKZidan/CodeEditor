import { useState, useRef, useContext } from 'react';
import FilesContentContext from '../store/files-content-context';

const buildFileTree = (fileList) => {
  const root = {};

  Array.from(fileList).forEach(file => {
    // Split the path into parts (e.g., "folder/sub/file.txt" -> ["folder", "sub", "file.txt"])
    const pathParts = file.webkitRelativePath.split('/');
    
    let currentLevel = root;

    pathParts.forEach((part, index) => {
      // If the part doesn't exist at this level, create it
      if (!currentLevel[part]) {
        currentLevel[part] = (index === pathParts.length - 1) 
          ? file // Store the File object if it's the actual file
          : {};   // Store an object if it's a directory
      }
      currentLevel = currentLevel[part];
    });
  });

  return root;
};


const buildFileTree0 = (fileList) => {
  const root = {
    fileName: 'root',
    filePath: '',
    fileContent: '',
    isFolder: true,
    items: []
  };
  Array.from(fileList).forEach(file => {
    // Split the path into parts (e.g., "folder/sub/file.txt" -> ["folder", "sub", "file.txt"])
    const pathParts = file.webkitRelativePath.split('/');
    let currentLevel = root;

    pathParts.forEach((part, index) => {
      const isFile = (index === pathParts.length - 1) ;

      // If the part doesn't exist at this level, create it
      const item = currentLevel.items.find((value)=> 
        value.fileName === part
      );
      if(!item)
      {
        const newValue = isFile
          ? {
              fileName: part,
              filePath: file.webkitRelativePath,
              fileContent : '',
              isFolder: false
          } // Store the File object if it's the actual file
          : {
              fileName: part,
              filePath: file.webkitRelativePath,
              fileContent : '',
              isFolder: true,
              items: []
          };   // Store an object if it's a directory
      currentLevel.items.push(newValue);
      if(isFile && (String(file.webkitRelativePath).endsWith(".js") || String(file.webkitRelativePath).endsWith(".jsx"))){  
        file.text().then(text => {
            newValue.fileContent = text
        });
        }
    }
      currentLevel = currentLevel.items.find((value)=> 
        value.fileName === part
    );
    });
  });

  return root;
};

export default function DirectorySelector({ onFolderSelect }) {
  const inputRef = useRef(null);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const {setCurrentFolderStructure } = useContext(FilesContentContext);

  function handleFolderChange(event) {
    console.log("Folder change event:");
    console.log(event);
    const files = Array.from(event.target.files);


    if (files.length === 0) return;

    // Get folder name from the first file's path
    const firstFilePath = files[0].webkitRelativePath || files[0].name;
    const folderName = firstFilePath.split('/')[0];

    // // Build folder structure with file paths
    // const structure = files.map(file => ({
    //   name: file.name,
    //   path: file.webkitRelativePath || file.name,
    //   size: file.size,
    //   type: file.type
    // }));
    const tree = buildFileTree0(files);

    setSelectedFolder(folderName);
    setCurrentFolderStructure(tree);
    console.log("Selected folder:", folderName);
    console.log("Folder structure:", tree);
    
    // Call parent's callback if provided
    if (onFolderSelect) {
      onFolderSelect({ folderName, tree });
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };
  // console.log("Selected folder:", selectedFolder);
  // console.log("Folder structure:", tree);
  return (
    <div>
      <input 
        ref={inputRef}
        type="file" 
        webkitdirectory="true"
        onChange={handleFolderChange}
        style={{ display: 'none' }}
      />
      <button onClick={handleButtonClick}>
        {selectedFolder ? `Selected: ${selectedFolder}` : 'Select Folder'}
      </button>
    </div>
  );
}
