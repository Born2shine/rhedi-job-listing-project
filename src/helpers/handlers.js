

const findJob = (jobs, slug) => jobs.find((job) => job.slug === slug)

const chunkJob = (jobs) => {
    const itemsPerPage = 1;
    const pages = Math.ceil(jobs.length / itemsPerPage)
    const newJobs = Array.from({ length: pages }, (_, index) => {
        const start = index * itemsPerPage
        // console.log(start)
        return jobs.slice(start, start + itemsPerPage)
    })
    // console.log(newJobs)
    return newJobs
}

export { findJob, chunkJob }
