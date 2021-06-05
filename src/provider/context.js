import React, {useState, useContext, useRef} from "react"
import useJobsData from "../hooks/useFetchJobs";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
const {jobs, isLoading } = useJobsData()
const elementRef = useRef(null)
const [darkMode, setDarkMode] = useState(false)

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

const toggleModal = () => {
    const modalElement = elementRef.current
    if(modalElement.classList.contains('showModal')){
        modalElement.classList.remove("showModal")
    }else{
        modalElement.classList.add("showModal")
    }
}
    return (
        <AppContext.Provider
        value={{
            jobs,
            isLoading,
            elementRef,
            darkMode,
            toggleModal,
            ToggleDarkMode
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

export {AppContext, AppProvider}