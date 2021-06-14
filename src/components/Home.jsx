import React, {useEffect} from 'react'
import Header from "./Header"
import Jobs from "./Jobs"
import Modal from "./Modal"
import { useGlobalContext } from "../provider/context"

const Home = () => {
    const { toggleModal, inputData, onInputChange, filterJobsHandler, filtered } = useGlobalContext();
    
    useEffect(() => {
        // filtered && toggleModal()
    }, [filtered])
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
                        value={inputData.byTitle}
                        onChange={(e) => onInputChange(e)}
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
                    value={inputData.byLocation}
                    onChange={(e) => onInputChange(e)}
                    />
                </div>
                <div className="search-btn">
                    <div className="checkbox-label is_desktop">
                        <input type="checkbox"
                        name="isFulltime"
                        value={inputData.isFulltime}
                        onChange={(e) => onInputChange(e)}
                        />
                        <label htmlFor=""> Full Time Only</label>
                    </div>
                    <button className="btn-search" type="submit" onClick={(e) => filterJobsHandler(e, inputData)}>
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
