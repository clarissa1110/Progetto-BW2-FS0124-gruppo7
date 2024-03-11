const url='https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=d2fe32319f9a4a7b32ac024136ee642b&track=believe&format=json';
/* d2fe32319f9a4a7b32ac024136ee642b */
window.addEventListener('load',init)
const options = {
	method: 'GET',
};
async function init() {
    try {
      let lod = await fetch(url, {
     
      });
      let response = await lod.json();
      console.log(response);
    } catch (error) {
      console.log(error);
     
    }
  }