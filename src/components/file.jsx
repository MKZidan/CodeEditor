import { useContext } from "react";
import CurrentFileContext from "../store/current-file";

export default function File({ item, isChild = false }) {
  const {setCurrentFile}= useContext(CurrentFileContext);

  return (
    <p
      style={{
        background: 'lightgray',
        padding: '2px',
      }}
      className={isChild? 'child' : ''}
      onClick={()=> {
        setCurrentFile(item);
    }}
    >
      &#9781; {item.fileName}
    </p>
  );
}