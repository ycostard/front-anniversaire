const apiBaseUrl = process.env.REACT_APP_API_URL;

export const getTodaysBirthday = async () => {
  let queryUrl = `${apiBaseUrl}/getBirthday`;

  try {
    return await (await fetch(queryUrl)).json();
  } catch (error) {
    return false;
  }
};

export const getRandomQuote = async () => {
  let queryUrl = `${apiBaseUrl}/getQuote`;

  try {
    return await (await fetch(queryUrl)).json();
  } catch (error) {
    return false;
  }
};

export const importBirthdays = async (formData) => {
  let queryUrl = `${apiBaseUrl}/importBirthdays`;

  try {
    return await (await fetch(queryUrl, {
      method: 'POST',
      body: formData,
    })).json();
  } catch (error) {
    return false;
  }
}

export const importQuotes = async (formData) => {
  let queryUrl = `${apiBaseUrl}/importQuotes`;
  
  try {
    return await (await fetch(queryUrl, {
      method: 'POST',
      body: formData,
    })).json();
  } catch (error) {
    return false;
  }
}