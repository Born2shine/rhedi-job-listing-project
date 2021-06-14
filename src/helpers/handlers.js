

const findJob = (jobs, slug) => jobs.find((job) => job.slug === slug)

const chunkJob = (jobs) => {
    const itemsPerPage = 10;
    const pages = Math.ceil(jobs.length / itemsPerPage)
    const newJobs = Array.from({ length: pages }, (_, index) => {
        const start = index * itemsPerPage
        return jobs.slice(start, start + itemsPerPage)
    })
    return newJobs
}

export { findJob, chunkJob }
