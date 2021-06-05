import React from 'react'
import Header from "./Header"
import Jobs from "./Jobs"
import Modal from "./Modal"
import { useGlobalContext } from "../provider/context"
import useFilterData from '../hooks/useFilterData';
import useJobsData from '../hooks/useFetchJobs'

const Home = () => {
    const { toggleModal } = useGlobalContext();
    const { filterData, filterDataHandler} = useFilterData()
    const { filterJobsHandler } = useJobsData();
    return (
        <main className="main">
            <Header> 
            <div className="search-box">
              <form action="">
                <div className="filter-box">
                        <span className="filter-icon">
                            <i className="fas fa-search"></i>
                        </span>
                        <input type="text" placeholder="Filter by title..." 
                        name="byTitle"
                        value={filterData.byTitle}
                        onChange={(e) => filterDataHandler(e)}
                        />
                </div>
                <div onClick={toggleModal} className="filter-box filter-fa is_mobile" id="toggle-filter">
                         <span className="filter-icon"> <i className="fas fa-filter"></i> </span>
                </div>
                {/* desktop */}
                <div  className="filter-box is_desktop">
                    <span  className="filter-icon">
                          <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <input type="text" placeholder="filter by location..."
                    name="byLocation"
                    value={filterData.byLocation}
                    onChange={(e) => filterDataHandler(e)}
                    />
                </div>
                <div className="search-btn">
                    <div className="checkbox-label is_desktop">
                        <input type="checkbox"
                        name="isFulltime"
                        value={filterData.isFulltime}
                        onChange={(e) => filterDataHandler(e)}
                        />
                        <label htmlFor=""> Full Time Only</label>
                    </div>
                    <button className="btn-search" type="submit" onClick={(e) => filterJobsHandler(e)}>
                        <i className="fas fa-search is_mobile"></i>
                        <span className="is_desktop"> Search </span>
                    </button>
                </div>
                {/* end desktop */}
              </form>
            </div>
            </Header> 
            <Jobs/>
            <Modal/>
        </main>
    )
}

export default Home
