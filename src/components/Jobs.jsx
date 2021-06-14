import React, {useState, useEffect } from 'react'
// import { slice, concat } from "lodash";

import { Link } from "react-router-dom"
import Moment from "react-moment";
import useFetchJobs  from "../hooks/useFetchJobs";
import Loader from './Loader';
// import LoadMoreJobs from './LoadMoreJobs';
import { useGlobalContext } from '../provider/context';


const Jobs = () => {
    const { isLoading } = useFetchJobs();    
    const {jobs: Jobs, filter, getJobs, filtered } = useGlobalContext()
    const [currentJobs, setCurrentJobs] = useState([])
    const [searching, setSearching] = useState(false)
  
   
    // const LIMIT = 15;
    // const [showMore, setShowMore] = useState(true);
    // const [list, setList] = useState(slice(currentJobs, 0, LIMIT));
    // const [index,setIndex] = useState(LIMIT);
    // const LENGTH = currentJobs.length;
    

    // const loadMore = () =>{
    //         const newIndex = index + LIMIT;
    //         const newShowMore = newIndex < (LENGTH - 1);
    //         const newList = concat(list, slice(currentJobs, index, newIndex));
    //         setIndex(newIndex);
    //         setList(newList);
    //         setShowMore(newShowMore); 
    // }

    useEffect(() => {
        if(Jobs){
            setCurrentJobs(Jobs)
        }
        if(filtered){
            setSearching(true)
            setCurrentJobs(getJobs(filter))
        }
        setTimeout(() => {
            setSearching(false)
        }, 1000);
        clearTimeout()
    }, [Jobs, filter, filtered, getJobs])

    if(currentJobs.length === 0 && !isLoading){
        return (
            <div className="empty-search">
                <p className="icon">
                <img width="70px" src="https://image.flaticon.com/icons/png/512/3077/3077325.png" alt="" />
                </p>
                <h2>Oops! No Job Found</h2>
            </div>
        )
    }
    return (
        <>
        <section className="jobs">
            {isLoading && ( <Loader/> )}
        {
          searching || currentJobs.length === 0 ? ( <Loader/> ) :  currentJobs.map((job) => {
                const { slug, date, position, company, tags, logo } = job;
                return (
                    
                    <div key={job.id} className="single-job">
                        <Link to={`/job-details/${slug}`}>
                            <div className="job-icon">
                                <img src={logo} alt={job.id}/>
                                {/* <i className="fab fa-react"></i> */}
                            </div>
                            <div className="job-info">
                                <ul className="posted">
                                    <li className="time">
                                        {<Moment fromNow date={date}/>}
                                    </li> . 
                                    <li className="role">Full Time</li>
                                </ul>
                                <h3>{`${position.split(" ")[2] === undefined ? position : position.slice(0, 20) + '...'}`}</h3>
                                <div className="company-name"> {company}
                                {/* <img src={company_logo} alt=""/> */}
                                </div>
                                <div className="location">
                                    {tags.map((tag) => {
                                        let newTag = tag+', '
                                        if(newTag.split(",")[2] === undefined){
                                            return newTag
                                        }else{
                                            return newTag.split(",")[3]
                                        }
                                        
                                    })}
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
      </section>
      {
        // showMore && <LoadMoreJobs loadMore={loadMore}/>
        }
        </>
    )
}

export default Jobs
