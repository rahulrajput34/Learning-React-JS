//Custom hook to fetch currency exchange information based on the provided currency code.

import { useEffect, useState } from "react";
function useCurrencyInfo(currency){  
    // state for holding currency data
    const [data, setData] = useState({});  
    // Utilized the useEffect hook to execute the function whenever the dependency changes
    useEffect(() => {
        // Fetching currency data from the API
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`) 
        .then((resp) => (resp.json()))  
        .then((resp) => (setData(resp[currency])))    
    }, [currency])   

    return data;  
}

export default useCurrencyInfo;

