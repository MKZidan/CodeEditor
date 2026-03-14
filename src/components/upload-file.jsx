import React, { useState, useRef } from 'react';

export default function DirectorySelector({ onFolderSelect }) {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [folderStructure, setFolderStructure] = useState([]);
  const inputRef = useRef(null);

  const handleFolderChange = (event) => {
    const files = Array.from(event.target.files);
    
    if (files.length === 0) return;

    // Get folder name from the first file's path
    const firstFilePath = files[0].webkitRelativePath || files[0].name;
    const folderName = firstFilePath.split('/')[0];

    // Build folder structure with file paths
    const structure = files.map(file => ({
      name: file.name,
      path: file.webkitRelativePath || file.name,
      size: file.size,
      type: file.type
    }));

    setSelectedFolder(folderName);
    setFolderStructure(structure);
    console.log("Selected folder:", folderName);
    console.log("Folder structure:", structure);
    
    // Call parent's callback if provided
    if (onFolderSelect) {
      onFolderSelect({ folderName, structure });
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };
  console.log("Selected folder:", selectedFolder);
  console.log("Folder structure:", folderStructure);
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
