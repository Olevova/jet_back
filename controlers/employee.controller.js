const db = require('../db');
const axios = require('axios');

// хотів вирішити питання кодування в базі данних UTF8 WIN1251 
const replaceUnsupportedChars = (text) => {
  return text.replace(/\xC3\xA0/g, ' ');
}; 
// class UserController { зробив як клас, переробив на функції
const  createEmployee = async (req, res) => {
    try {
      const teamMembers = req.body;
      console.log(teamMembers);
      await db.query('DELETE FROM person');

      

      for (const { name, position, moto } of teamMembers) {
        const convertedName = replaceUnsupportedChars(name);
        const convertedPosition = replaceUnsupportedChars(position);
        const convertedMoto = replaceUnsupportedChars(moto);

        const employee = await db.query(
          'INSERT INTO person (name, position, moto) VALUES ($1, $2, $3) RETURNING *',
          [convertedName, convertedPosition, convertedMoto]
        );
      }

      res.json({ text: 'success add' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

  const  getEmployee = async(req, res) => {
    try {
    const employees = await db.query('SELECT id, name, position, moto FROM person');
    console.log(employees);
    res.json({ employees: employees.rows });
    } catch (error) {
      console.log(error);
    res.status(500).json({ error: 'An error occurred' });
    }
  };
//  звернення до сайта зробив через сервер як прокладку це вирішило помилку з cors
 const  getJetSite = async(req, res) => {
    try {
      const response = await axios.get('https://jetup.digital/team');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  };
// }

module.exports = {getEmployee,getJetSite,createEmployee};