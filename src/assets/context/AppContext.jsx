import { createContext, useState } from "react";


export const MyContext = createContext();

const AppContext = ({children}) => {

   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

   const infos = {activeSlideIndex, setActiveSlideIndex};

   return(
    <div>
        <MyContext.Provider value={infos}>
{children}
        </MyContext.Provider>
    </div>
   )

}

export default AppContext;