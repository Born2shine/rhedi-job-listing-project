import { useEffect, useState } from 'react'

const useFilterData = () => {

    const [ isFiltering, setFiltering ] = useState(false)
    const [filterData, setFilterData] = useState({
        byTitle: '',
        byLocation: '',
        isFulltime: false,
    })
    
    const filterDataHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const getValue = () => (name === 'isFulltime') ? e.target.checked : value
        setFilterData({...filterData, [name]: getValue()})
        if(filterData.byTitle || filterData.byLocation || !filterData.isFulltime){
            setFiltering(true)
        }
        // console.log(filterData)
    }

    useEffect(() => {
        // console.log(filterData)
    }, [filterData])
    

    

    return { filterData, filterDataHandler, isFiltering }
}

export default useFilterData
