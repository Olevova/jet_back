import { useEffect, useState } from "react";
import {postJetEmployee, getJetEmployee} from '../servise/fetch'


export const EmployeeList = () => {
    const [employee, setEmployee] = useState([]);
    const [employeelist, setEmployeelist] = useState('');

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

    const dataFoRender = employee.filter((({name}) => name.toLowerCase().includes(employeelist)))
    console.log(employee, "list", dataFoRender);
    return(
        <>
        <form >
            <input type="text" value={employeelist} onChange={onHandel}/>
        </form>
        {dataFoRender.map(({id, name, position, moto})=>
        <div key={id} style={{display:"flex",flexDirection:"column"}}>
        <h1>{name}</h1>
        <h2>{position}</h2>
        <p>{moto}</p>
        </div>
        )}
        </>
    )
}