"use client"
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaCaretDown, FaCaretUp } from "react-icons/fa";

function Summary() {
    const [data, setData] = useState({ timestamp: "", text: "" });
    const [isTopicOpen, setIsTopicOpen] = useState(false);
    const [isTimestampOpen, setIsTimestampOpen] = useState(false);

    const handleBackClick = () => {
    window.history.back();
    };

    const toggleTopic = () => {
        setIsTopicOpen(!isTopicOpen);
    };

    const toggleTimestamp = () => {
        setIsTimestampOpen(!isTimestampOpen);
    };

    return (
        <div className="flex flex-col pl-2 pr-2 pt-3 md:pl-8 md:pr-8">
            <div className="flex flex-row">
                <button onClick={handleBackClick}>
                    <FaAngleLeft className="inline-block ml-1" /> Back
                </button>
            </div>
            <div className="my-2">
                <div
                className="flex flex-row justify-around items-center border border-1 rounded-md p-2"
                onClick={toggleTopic}
                style={{ cursor: "pointer" }}
                >
                    <p className="flex items-center">Topic {isTopicOpen ? <FaCaretDown /> : <FaCaretUp />}</p>
                    <p>Summarize</p>
                </div>
            </div>
            <div className="my-2">
                <div
                className="flex flex-row justify-around items-center border border-1 rounded-md p-2"
                onClick={toggleTimestamp}
                style={{ cursor: "pointer" }}
                >
                    <p className="flex items-center">Timestamp {isTimestampOpen ? <FaCaretDown /> : <FaCaretUp />}</p>
                    <p>Text</p>
                </div>
                
            </div>
        </div>
    );
}

export default Summary;