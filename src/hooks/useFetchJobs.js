import { useEffect, useState } from "react";
const useJobsData = () => {
  const [isLoading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  

  useEffect(() => {
    try {
      fetch(`https://raw.githubusercontent.com/ajinkabeer/JSONServerRediSchool/master/jobs.json`)
        .then((res) => res.json())
        .then((data) => {
          data.shift();
          setLoading(false);
          setJobs(data)
          // console.log(data)
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { isLoading, jobs };
};
export default useJobsData;