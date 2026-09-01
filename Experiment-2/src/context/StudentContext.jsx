import { createContext, useContext } from "react";


const StudentContext=createContext();

const student={
    name:"Priya",
    email:"priyarajput.com",
    year:"3rd Year"
}

export function StudentProvider({children}){
    return(
        <StudentContext.Provider value={student}>
            {children}
        </StudentContext.Provider>
    )
}

export function useUser(){
    const student=useContext(StudentContext)
    return student;
}