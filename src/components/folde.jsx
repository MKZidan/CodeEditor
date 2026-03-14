import { useState } from "react";
import File from "./file";

export default function Folder({ item, isChild = false }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
    <div className={isChild? 'child' : ''}
>
        <p
        style={{
            background: 'lightgray',
            padding: '2px',
            cursor: 'pointer',
        }}

        onClick={()=> setIsExpanded((prevStat) => !prevStat)}
        >
        &#x276D; {item.name}
        </p>
        {
        isExpanded &&
        item.items.map((child, index) => {
            return child.isFolder ? <Folder key={index} item={child} isChild={true} /> : <File key={index} item={child} isChild={true} />;
        })
        }
    </div>
    );
}