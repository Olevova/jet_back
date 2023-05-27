import axios from 'axios';
import { getJetTeam } from './parse';

// axios.defaults.baseURL = 'http://localhost:5050/app/employee';


export const postJetEmployee = async () => {
    // const axios = require('axios');
    axios.defaults.baseURL = 'http://localhost:5050/app/employee';
    try {
        const data = await getJetTeam();
        console.log(data);
        await axios.post('/',data);
        console.log("ok"); 
    } catch (error) {
        console.log(error);
    }
     
};
export const getJetEmployee = async () =>{
    try {
        const data = await axios.get('/')
        console.log(data.data.employees, 'date from base');
        return data.data.employees
    } catch (error) {
        console.log(error);
    }
}
// postJetEmployee();
// getJetEmployee();
// postJetEmployee()
