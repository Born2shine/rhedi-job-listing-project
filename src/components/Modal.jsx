import React, { useEffect, useState } from 'react'
import useFilterData from '../hooks/useFilterData';
import { useGlobalContext } from "../provider/context"

const Modal = () => {
    const {elementRef, toggleModal } = useGlobalContext();
    const {filterData, filterDataHandler, filterJobsHandler } = useFilterData()
   
    return (
        <div ref={elementRef} className="search-btn-modal">
            <div className="modal-content">
            <div className="filter-box is_deskto">
                <span className="filter-icon">
                    <i className="fas fa-map-marker-alt"></i>
                </span>
                <input 
                 type="text" placeholder="Filter by location..." 
                 name="byLocation"
                 value={filterData.byLocation}
                 onChange={(e) => filterDataHandler(e)}
                 />
            </div>
                <div className="checkbox-label is_deskto">
                    <input type="checkbox"
                    name="isFulltime"
                    value={filterData.isFulltime}
                    onChange={(e) => filterDataHandler(e)}
                    />
                    <label htmlFor=""> Full Time Only</label>
                </div>
                <button className="btn-search" type="submit" onClick={(e) => filterJobsHandler(e)}>
                    <span className="is_deskto"> Search </span>
                </button>
                <span onClick={toggleModal} className="close-modal"><i className="fa fa-times"></i></span>
            </div>
        </div>
    )
}

export default Modal
