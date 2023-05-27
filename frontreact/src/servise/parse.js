import axios from 'axios';
const cheerio = require('cheerio');

const url = 'http://localhost:5050/app/team';

export async function getJetTeam() {
  try {
    const response = await axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      },
    });
    const html = response.data;
    const $ = cheerio.load(html);
    
    const blocks = $('.text-block-item');
    // console.log(blocks);
    const teamMembers = [];

    blocks.each((_, element) => {
        // console.log($(element).text());
      const name = $(element).find('.user-name').text();
      const position = $(element).find('.position').text();
      const about = $(element).find('.user-text').text();
      
      const member = {
        name: name.trim(),
        position: position.trim(),
        moto: about.trim()
      };
      
      teamMembers.push(member);
    });
    
    console.log(teamMembers);
    return teamMembers
  } catch (error) {
    console.log(error);
  }
  
};

// getJetTeam();

