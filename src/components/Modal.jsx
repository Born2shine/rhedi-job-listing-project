import React, {useEffect} from 'react'
import { useGlobalContext } from "../provider/context"

const Modal = () => {
    const {elementRef, toggleModal, closeModal, inputData, onInputChange, filterJobsHandler, filtered } = useGlobalContext();
   
    useEffect(() => {
       if(filtered)  closeModal()
    }, [filtered, closeModal])
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
                 value={inputData.byLocation}
                 onChange={(e) => onInputChange(e)}
                 />
            </div>
                <div className="checkbox-label is_deskto">
                    <input type="checkbox"
                    name="isFulltime"
                    value={inputData.isFulltime}
                    onChange={(e) => onInputChange(e)}
                    />
                    <label htmlFor=""> Full Time Only</label>
                </div>
                <button className="btn-search" type="submit" onClick={(e) => filterJobsHandler(e,inputData)}>
                    <span className="is_deskto"> Search </span>
                </button>
                <span onClick={toggleModal} className="close-modal"><i className="fa fa-times"></i></span>
            </div>
        </div>
    )
}

export default Modal
