const fetchJobHandler = () => {
    const url = "https://remoteok.io/api"
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data.shift();
        return data;
        // setLoading(false)
        // setJobs(data)
    })
    .catch((error) => console.log(error))
}

const findJob = (jobs, slug) => jobs.find((job) => job.slug === slug)



export { findJob, fetchJobHandler }
// export default FetchJobs
