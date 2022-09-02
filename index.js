const BASE_URL = 'https://api.harvardartmuseums.org';
const KEY = 'apikey=8edb4786-68a2-4144-b048-d333ad223bae'; // USE YOUR KEY HERE

async function fetchObjects() {
    const url = `${ BASE_URL }/object?${ KEY }`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      console.log(data);
    } catch (error) { // how to handle the error that is "caught"
      console.error(error);
    }
  }
  
  fetchObjects();