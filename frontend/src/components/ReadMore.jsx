import { useState } from "react";

export default function ReadMore ({text, maxLength = 80}) {
    const [isExpanded, setIsExpanded] = useState(false);

    if (text.length <= maxLength) {
        return <p>{text}</p>
    }

    const displayedText = isExpanded ? text : text.substring(0, maxLength) + "...";

    const handleExpand = () => setIsExpanded(!isExpanded);

    return (
        <p style={{textAlign: "justify", whiteSpace: "pre-line"}}>
            {displayedText}{" "}
            <span style={{cursor: "pointer"}} className="text-secondary" onClick={handleExpand}>{ isExpanded ? "Read Less" : "Read More" }</span>
        </p>
    );
}