const express = require('express');
const cors = require('cors');
const employeeRouter = require('./route/employee.route');

const app = express();


app.use(cors());
app.use(express.json());
app.use('/app',employeeRouter);

const PORT = process.env.PORT||5050;
app.listen(PORT, ()=>{
    console.log(`its Start on ${PORT}`);
})

