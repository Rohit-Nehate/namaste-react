import { useEffect, useState } from "react";
import urlData from "./constant";

// Hook to fetch restaurant data by ID
const useRestaurentData = (resIDs) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(resIDs);
  }, [resIDs]);

  const fetchData = async (id) => {
   

      const fetchUrl = `${encodeURIComponent(`${urlData.MENU_URl}${id}`)}`;

      const response = await fetch(fetchUrl);
     
      
     const data = await response.json();
      console.log("Fetched data:", data);
    
  };

  return { resInfo, error };
};

export default useRestaurentData;
