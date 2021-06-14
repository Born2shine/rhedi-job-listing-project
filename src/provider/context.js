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
    // const colorScheme = matchMedia('(prefers-color-scheme: dark)');
    // console.log(colorScheme);

    // const setColorMode = () => {
    //     if (colorScheme.matches) {
    //         document.body.classList.add('dark-mode');
    //       } else {
    //         document.body.classList.remove('dark-mode');
    //       }
    //   }
    //   setColorMode();
    //   colorScheme.onchange = setColorMode;
}

// const hasDelimiter = (data) =>  data.includes(',') ? data.split(',') : data;

const getJobs = (data) => {
    let {byTitle, byLocation} = data
    const filteredJobs = jobs.filter((job) => job.location === byLocation)
    if(byTitle){
        const found = filteredJobs.filter((job) => job.tags.includes(byTitle));
        return found
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