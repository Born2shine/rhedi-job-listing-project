import React, {useState, useContext, useRef} from "react"
import useJobsData from "../hooks/useFetchJobs";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
const { jobs } = useJobsData();
const { isLoading } = useJobsData()
const elementRef = useRef(null)
const [darkMode, setDarkMode] = useState(false)
const [filter, setFilter] = useState({});
const [filtered, setFiltered] = useState(false)
const [inputData, setInputData] = useState({
    byTitle: '',
    byLocation: '',
    isFulltime: false
})

const ToggleDarkMode = () => {
    
    if(darkMode){
        document.body.classList.remove('dark-mode');
        setDarkMode(false)
    }else{
        document.body.classList.add('dark-mode');
        setDarkMode(true)
    }
}

const getJobs = (data) => {
    let {byTitle, byLocation} = data
    const filteredJobs = jobs.filter((job) => job.location.toLowerCase() === byLocation.toLowerCase())
    if(byTitle){
        const titles = byTitle.split(',');
        const newJobs = [];
        let sortedJobs
        titles.forEach(title => {
            const found = filteredJobs.filter((job) => {
                title = title.toLowerCase();
                return job.tags.includes(title)
            });
            newJobs.push(...found);
            sortedJobs = [...new Set(newJobs)]
        })
        return sortedJobs;
        
    }
    
    return filteredJobs
  }

const filterJobsHandler = (e, data) => {
    e.preventDefault()
    setFiltered(true)
    setFilter(data)
  }

const onInputChange = (e) => {
    let {name, value} = e.target
    if(name === 'isFulltime'){
        value = e.target.checked
    }
    setFiltered(false)
    setInputData(()=>{
        return {...inputData, [name] : value}
    })
}

const toggleModal = () => {
    const modalElement = elementRef.current
    if(modalElement.classList.contains('showModal')){
        modalElement.classList.remove("showModal")
    }else{
        modalElement.classList.add("showModal")
    }
}

const closeModal = () => {
    const modalElement = elementRef.current
    modalElement.classList.remove("showModal")
}
    return (
        <AppContext.Provider
        value={{
            isLoading,
            elementRef,
            darkMode,
            inputData,
            filter,
            jobs,
            filtered,
            toggleModal,
            closeModal,
            ToggleDarkMode,
            onInputChange,
            getJobs,
            filterJobsHandler
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

export {AppContext, AppProvider}