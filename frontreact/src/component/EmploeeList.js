import { useEffect, useState } from "react";
import {postJetEmployee, getJetEmployee} from '../servise/fetch';
import { SearchForm } from "./SearchForm";
import style from './EmploeeList.module.css'


export const EmployeeList = () => {
    const [employee, setEmployee] = useState([]);
    const [serchText, setEmployeelist] = useState('');

    const onHandel = (e)=>{
        setEmployeelist(e.currentTarget.value.toLowerCase())
    }

    useEffect(()=>{ 
        const fetchData = async () => {
            await postJetEmployee();
            setEmployee(await getJetEmployee());
          };
      
          fetchData();
    },[])

    const dataFoRender = employee.filter((({name}) => name.toLowerCase().includes(serchText)))
    console.log(employee, "list", dataFoRender);
    return(
        <div className={style.container}>
            <h2>Filter By Name</h2>
        <SearchForm serchText={serchText} func = {onHandel}/><p>Please start type name</p>
        {/* <form >
            <input type="text" value={employeelist} onChange={onHandel}/>
        </form> */}
        <div className={style.list}>
        {dataFoRender.length>0?dataFoRender.map(({id, name, position, moto})=>
        <div className={style.card} key={id} style={{display:"flex",flexDirection:"column"}}>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <p>{moto}</p>
        </div>
        ):<p>Sorry we do not have such employees </p>}
            </div>
            </div>
    )
}