
import { useContext } from "react";
import "../styles/file-structure.css";
import File from "./file";
import Folder from "./folde";
import FilesContentContext from "../store/files-content-context";

const folderStructureData = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'index.html',
      isFolder: false,
    },
    {
      name: 'app',
      isFolder: true,
      items: [
        {
          name: 'app.js',
          isFolder: false,
        },
        {
          name: 'src',
          isFolder: true,
          items: [
            {
              name: 'main.jsx',
              isFolder: false,
            },
            {
              name: 'utils.js',
              isFolder: false,
            },
          ],
        },
        {
          name: 'app.css',
          isFolder: false,
        },
      ],
    },
  ],
};

// function renderFolderContent(items) {
//   items.map((item) => {
//     return item.isFolder ? <Folder item={item} /> : <File item={item} />;
//   });
// }
export default function FileStructure() {
    const {currentFolderStructure } = useContext(FilesContentContext);
    console.log("Current folder structure:");
    console.log(currentFolderStructure);
  return (
    <div className='file-structure-container'>   
        {currentFolderStructure.items && currentFolderStructure.items.map((item) => {
        return item.isFolder ? <Folder item={item} /> : <File item={item} />;
      })}
    </div>
 );
}