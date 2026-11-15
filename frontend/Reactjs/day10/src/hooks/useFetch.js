import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const APIfetch = async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data)
        } catch (error) {
            setError("Something went wrong");
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        APIfetch()
    }, [url])

    return { data, loading, error };
}

export default useFetch