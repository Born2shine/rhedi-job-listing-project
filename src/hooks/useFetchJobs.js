import { useEffect, useState } from "react";
import useFilterData from "../hooks/useFilterData";
const useJobsData = () => {
  const { filterData, isFiltering } = useFilterData()
  const [isLoading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const filterJobsHandler = (e) => {
    e.preventDefault()
    // if(isFiltering){
        // console.log(filterData)
    // }
}

  useEffect(() => {
    try {
      const url = "https://remoteok.io/api";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          data.shift();
          setLoading(false);
          setJobs(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { isLoading, jobs, filterJobsHandler };
};
export default useJobsData;