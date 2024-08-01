import { useEffect, useState } from "react"
import { useContext } from "react";
import PageContext from "@/Context/PageContext";
export default function Pagination({totalPages}){

    // const { currentPage, setCurrentPage } = useContext(PageContext);
    const[pageList,setPageList] = useState([])
    const currentPage = 14;
    useEffect(()=>{
        const pageOptions = [];
        let count = 0;
        for(let i = 7;i >= 0; i--){
            if(currentPage - i > 0){
                pageOptions.push(currentPage - i);
            }
        }
        for(let i = currentPage; i < currentPage+6;i++){
            if(currentPage + i < totalPages){
                pageOptions.push(currentPage + i);
            }
        }
        console.log(pageOptions);
        
    },[currentPage])
    return(
    <div style={{
        width:"20px",
        height:"20px",
        backgroundColor:"red"
    }}>
    </div>
    )
}