import React, { useState, useEffect } from "react";

function DataList(data,setData,currentIndex,setCurrentIndex, dataToFetch) {
    // const [data, setData] = useState([]);
    // const [currentIndex, setCurrentIndex] = useState(0);

    async function getData() {
        try {
            const response = await fetch(dataToFetch);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        async function fetchData() {
            const json = await getData();
            setData(json);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (currentIndex < data.length) {
            const currentTime = new Date("2023-01-06T09:28:00");
            const nextTime = new Date(data[currentIndex].timestamp).getTime();
            if (currentTime >= nextTime) {
                setCurrentIndex(currentIndex + 1);
            }
            const timer = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
            }, nextTime - currentTime);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, data]);

    return (
        <div>
            {data.length > 0 && currentIndex < data.length && (
                <div>
                    <h2>{data[currentIndex].name}</h2>
                    <p>{data[currentIndex].description}</p>
                </div>
            )}
        </div>
    );
}

export default DataList;
