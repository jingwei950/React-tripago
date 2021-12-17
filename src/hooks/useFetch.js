import { useState, useEffect } from "react";

function useFetch(url) {
  //Custom hook name, always use the word "use" infront when using hook or custom hooks
  const [data, setData] = useState(null);

  useEffect(() => {
    //1. Use the Fetch API to fetch the data from the URL stated in initial state of useState(), it can change dynamically
    //2. then get the response and convert it to JSON data
    //3. then get the converted JSON data and set the trips with this data
    //4. Setting the useState variable "url", if this url changes usEffect() will run again
    fetch(url) //1.
      .then((response) => response.json()) //2.
      .then((json) => setData(json)); //3.
  }, [url]); //4.

  return { data }; //Return the data in a form of object
}

export { useFetch }; //Export the function
