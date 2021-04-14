export default {
  getSearchResults: async function (q: string) {
    const response = await fetch(`/api/search?q=${q}`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const results = await response.json();
    return results;
  },
};
