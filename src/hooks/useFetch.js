import { useState, useEffect } from "react";

function useFetch(url) {
  //Custom hook name, always use the word "use" infront when using hook or custom hooks
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    //1. Use the Fetch API to fetch the data from the URL stated in initial state of useState(), it can change dynamically
    //2. then get the response and convert it to JSON data
    //3. then get the converted JSON data and set the trips with this data
    //4. Setting the useState variable "url", if this url changes usEffect() will run again
    //5. When the data is loading set isPending to true, to display message to use in the Component
    //6. Data is done loading, so it will set isPending back to false to remove loading message

    setPending(true); //5.

    fetch(url) //1.
      .then((response) => response.json()) //2.
      //3.
      .then((json) => {
        setPending(false); //6.
        setData(json);
      });
  }, [url]); //4.
  return { data, isPending }; //Return the data in a form of object, its either Array or Object.
}

export { useFetch }; //Export the function
