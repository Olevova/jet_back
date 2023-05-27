const db = require('../db');
const axios = require('axios');

class UserController {
  async createEmployee(req, res) {
    try {
      const teamMembers = req.body;
      console.log(teamMembers);
      await db.query('DELETE FROM person');

      const replaceUnsupportedChars = (text) => {
        return text.replace(/\xC3\xA0/g, ' ');
      };

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

  async getEmployee(req, res){
    try {
    const employees = await db.query('SELECT id, name, position, moto FROM person');
    console.log(employees);
    res.json({ employees: employees.rows });
    } catch (error) {
      console.log(error);
    res.status(500).json({ error: 'An error occurred' });
    }
  };
  async getJetSite (req, res){
    try {
      const response = await axios.get('https://jetup.digital/team');
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  };
}

module.exports = new UserController();