const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/api/reviews', async (req, res) => {
  try {
    const response = await axios.get('https://google-reviews-scraper.p.rapidapi.com/', {
      params: {
        id: 'U2FsdGVkX1%2BfrI3BDnE5oJhSOn6fku3Xh4JVv46IwsLlDuyFWTMMuTNcOwy7N80E%2FxDg8KZKmzf7ZWgX3UvtpQ%3D%3D',
        sort: 'highest',
        nextpage: 'false',
      },
      headers: {
        'X-RapidAPI-Key': '2fc9a20b60msh87bc357dd65d8bcp1dd5b1jsnbe16f59048c2',
        'X-RapidAPI-Host': 'google-reviews-scraper.p.rapidapi.com',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// ...

try {
  const response = await axios.request(options);
  console.log(response.data);

  // Exibir os dados na página
  const dataContainer = document.getElementById('data-container');
  dataContainer.textContent = JSON.stringify(response.data, null, 2);

} catch (error) {
  console.error(error);
}

// ...
