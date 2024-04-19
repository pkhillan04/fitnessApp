export const localApiOptions = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
};

export const fetchData = async (url) => {
  try {
      const response = await fetch(url, localApiOptions);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.error("Fetch error: " + error.message);
      return null; // or handle error more specifically if required
  }
};
