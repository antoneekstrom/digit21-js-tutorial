
// Example of fetching/getting/downloading data from an URL on the web.
async function getSomethingFromAServer() {
   const result = await fetch("theserver.com");
   const data = await result.json();
   return data;
}