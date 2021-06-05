import React from 'react'

const LoadMoreJobs = ({loadMore}) => {
    return (
        <div onClick={loadMore} className="load-more">
            <button className="btn-load">Load More</button>
      </div>
    )
}

export default LoadMoreJobs
