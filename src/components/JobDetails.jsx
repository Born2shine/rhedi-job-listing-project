import React, {useState, useEffect } from 'react'
import Header from "./Header"
import Moment from "react-moment";
import { useParams } from "react-router-dom"
import useJobsData from '../hooks/useFetchJobs';
import { findJob } from '../helpers/handlers';
import Loader from './Loader';


const JobDetails = () => {
    const { id } = useParams();
    const { jobs } = useJobsData();
    const [jobDetails, setJobDetails] = useState(null);
    
    useEffect(() => {
        try {
            const foundJob = findJob(jobs, id);
            setJobDetails(foundJob)
            }
         catch (error) {
          console.log(error);
        }
      }, [jobs, id]);

    if(!jobDetails){
        return <Loader/>
    }
    const {company, apply_url, company_logo, date, description, location, position, tags} = jobDetails;
    console.log(jobDetails)
    return (
        <main className="main">
            <Header>
            <div className="company-info" >
                <div className="job-icon">
                    <img src={company_logo} alt={id}/>
                    {/* <i className="fab fa-react"></i> */}
                </div>
                <div className="company-name-link">
                    <h3>{company}.</h3>
                    <div className="company-link">
                        {position}
                    </div>
                </div>
               
                <div className="web-link">
                    <a href={apply_url} target="_blank" rel="noreferrer" className="btn">Company Site</a>
                </div>
               
            </div>
            </Header>
            <section className="job-details">
                <div className="info">
                    <div className="info-header">
                        <aside className="left">
                            <div className="time-role">
                                <span className="time">
                                <Moment fromNow date={date} />
                                </span> . 
                                <span className="time">{tags[0]}</span>
                            </div>
                            <h3>{position}</h3>
                            <div className="location">
                                {location}
                                {/* {tags.map((tag) => {
                                            let newTag = tag+', '
                                            if(newTag.split(",")[2] === undefined){
                                                return newTag
                                            }else{
                                                return newTag.split(",")[3]
                                            }
                                            
                                })} */}
                            </div>
                        </aside>
                        <aside className="right">
                        <a href={apply_url} rel="noreferrer" target="_blank" className="btn btn-apply">Aplly Now</a>
                    </aside>
                    </div>
                    <div className="description" dangerouslySetInnerHTML={{__html: description}}/>
                    <div className="description">
                      
                        {/* <a href="/" className="info-link">See more about our teams here</a> */}

                    {/* <ul className="has-list">
                        <li>Morbi interdum mollis sapien. Sed</li>
                    </ul> */}
                    </div>
                </div>
                <div className="how-to-apply">
                <h3>How to Apply</h3>
                <div className="info">
                    To apply follow the link below

                    <a rel="noreferrer" target="_blank" href={apply_url} className="apply-link">{apply_url}</a>
                </div>
            </div>
            </section>
            <div className="apply-now">
            <div className="job-role is_desktop">
                <h3>{company}</h3>
                <div className="company-name">{position}</div>
            </div>
            <div className="apply-btn">
                <a rel="noreferrer" target="_blank" href={apply_url}>Apply Now</a>
            </div>
        </div>
        </main>
    )
}

export default JobDetails
