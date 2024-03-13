const playerContent = document.getElementById("player");
const playerInfo = document.getElementById("playerInfo");
const playerPlay = document.getElementById("playerPlay");
const playerObj = document.getElementById("playerObj");
let time = document.querySelector(".time"); // Take the audio track
let btnPlay = document.querySelector(".play"); // Take the play button
let btnPause = document.querySelector(".pause"); // Take the pause button
let btnPrev = document.querySelector(".prev"); // Take the switch button of the previous track
let btnNext = document.querySelector(".next");

const url ="https://deezerdevs-deezer.p.rapidapi.com/";

const options = {
    method: "GET",
     headers: {
       "X-RapidAPI-Key": "fe6e50a14emsh32a34440c590bc8p11cc7ajsn626ec9a75f8c",
       "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
     },
   };

let playlist = [];

class playerHiden{
    visibile(result){
        playerContent.classList.remove('playerDisactive');
        playerContent.classList.add('player');
        puschTrack(result);
    }
    btnVisibile(){
        btnPlay.classList.remove('playerActive');
        btnPause.classList.remove('playerDisactive');
        btnPlay.classList.add('playerDisactive');
        btnPause.classList.add('playerActive');
    }
    
    btnInvisibile(){
        btnPause.classList.remove('playerActive');
        btnPlay.classList.remove('playerDisactive');
        btnPause.classList.add('playerDisactive');
        btnPlay.classList.add('playerActive');
    }   
}
let visibility=new playerHiden();
playerDestra=()=>{
    const range = document.querySelector(".volume input[type=range]");

    const barHoverBox = document.querySelector(".volume .bar-hoverbox");
    const fill = document.querySelector(".volume .bar .bar-fill");
    range.addEventListener("change", (e) => {
        audio.volume=e.target.value/100;
    });
    const setValue = (value) => {
      fill.style.width = value + "%";
      range.setAttribute("value", value)
      range.dispatchEvent(new Event("change"))
    }
    setValue(range.value);
    const calculateFill = (e) => {
      let offsetX = e.offsetX      
      if (e.type === "touchmove") {
        offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft
      }      
      const width = e.target.offsetWidth - 30;  
      setValue(Math.max( Math.min( (offsetX - 15) / width * 100.0, 100.0 ), 0 ));
    }
    let barStillDown = false;
    barHoverBox.addEventListener("touchstart", (e) => {
      barStillDown = true;
      calculateFill(e);
    }, true);
    barHoverBox.addEventListener("touchmove", (e) => {
      if (barStillDown) {
        calculateFill(e);
      }
    }, true);
    barHoverBox.addEventListener("mousedown", (e) => {
      barStillDown = true;
      
      calculateFill(e);
    }, true);
    
    barHoverBox.addEventListener("mousemove", (e) => {
      if (barStillDown) {
        calculateFill(e);
      }
    });
    barHoverBox.addEventListener("wheel", (e) => {
      const newValue = +range.value + e.deltaY * 0.5;
      setValue(Math.max(Math.min(newValue,100.0),0 ))
      });
    document.addEventListener("mouseup", (e) => {
      barStillDown = false;
    }, true);
    document.addEventListener("touchend", (e) => {
      barStillDown = false;
    }, true);
}

playerSinistra=(track)=>{
    console.log(track.contributors[0].name);
    playerInfo.innerHTML = `<div class='leftPlayer d-flex'>
          <img src="${track.artist.picture_small}" alt="${track.title}">
          <div>
              <h4>${track.title}</h4>
              <h5>${track.contributors[0].name}</h5>
          </div>
          <button class="heart bg-transparent text-white border-0 ms-4">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          </div>`;
}
puschTrack=(canzone)=>{
    playlist.push(canzone);
}
let audio = document.getElementById("audio");
let interval;
startSong=(i)=>{
     switchPlaylist=(i)=>{
    audio.src = playlist[i];
    audio.currentTime =0;
    audio.play();
      
    }
    const progress=document.querySelector('.progress-bar');
    let timeBar = document.getElementById("timeBar");
    visibility.btnVisibile();
   
    switchPlaylist(i);
    timeBar.innerText=Math.round(audio.currentTime);
    interval=setInterval(()=>{
      
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration)
        progress.style.width = (audioTime * 100) / audioLength + '%';
        timeBar.innerText=Math.round(audio.currentTime);
        console.log('da zero'+' '+playlist.length+' '+i);
        if (audioTime===audioLength&&playlist.length-1<=i) {
            i=0;console.log('da zero'+' '+playlist.length+' '+i);
            switchPlaylist(i)
        }else if(audioTime===audioLength){i++; switchPlaylist(i)}
    },500)
}

playerCenter=()=>{
    console.log(playlist);
            let i=0;
          startSong(i);
           
          btnPlay.addEventListener("click", function(e) {
              visibility.btnVisibile();
              audio.play();
            });
            btnPause.addEventListener("click", function(e) {
                
                visibility.btnInvisibile();
                  audio.pause();
          });
}
async function playerGet(id) {
  /* funzione call con id passare anche array di canzoni per il successivo*/
 
  try {
    const response = await fetch(url +'track/'+ id, options);
    const result = await response.json();
    if (playlist.length === 0) {
        puschTrack(result.preview);
        playerContent.classList.remove('playerDisactive');
        playerContent.classList.add('player');
        playerDestra();
        playerSinistra(result);
        playerCenter(result);
        puschTrack('https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3');
    }else{
        puschTrack(result.preview);
    }
  } catch (error) {
    console.error(error);
  }
}


const artist = [
    {
        nome: "Eminem",
        canzoni: ["Lose Yourself", "Without Me", "Rap God"]
    },
    {
        nome: "Ed Sheeran",
        canzoni: ["Shape of You", "Perfect", "Thinking Out Loud"]
    },
    {
        nome: "Adele",
        canzoni: ["Hello", "Someone Like You", "Rolling in the Deep"]
    }
];

const searchForm = document.querySelector('form[role="search"]');
const searchInput = document.querySelector('input[type="search"]');

searchForm.addEventListener("click", function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim(); //IL VALORE .TRIM VIENE INSERITO PER L'UTENTE CHE INSERISCE ERRONEAMENTE SPAZZI BIANCHI IN ECCESSO ALL'INIZIO E ALLA FINE DELLA STRINGA; DIVERSAMENTE POSSIAMO UTILIZZARE UNA REGEX CHE DIA LO STESSO RISULTATO, IN QUEL CASO LO SCRIVIAMO COSI': const searchTerm = searchInput.value.replace(/^\s+|\s+$/g, ''); 

    if (searchTerm !== "") {
        searchTrack(searchTerm);
    }
});

async function searchTrack(searchTerm) {
    try {
        const response = await fetch(url+`search?q=${searchTerm}`, options);
        const data = await response.json();

        if (data.data.length > 0) {
            const trackId = data.data[0].id; //La funzione data.data può contenere un array di oggetti, nel nostro caso saranno l'array di canzoni. In questo modo ci permette di accedere ai dati specifici restituiti dalla richiesta API. In questo caso, si suppone che questi dati siano le tracce musicali restituite dalla ricerca effettuata su Deezer. Se data.data.length è <maggiore> di zero, significa che almeno una traccia è stata trovata e restituita dalla ricerca. 
            playerGet(trackId); // Chiama la funzione per ottenere e riprodurre la traccia cercata!
            searchArtist(searchTerm);// Chiama la funzione per ottenere e riprodurre le canzoni dell'artista!
            searchInput.value = "";
            console.log(data);
        } else {
            console.log("Nessuna traccia trovata");
        }
    } catch (error) {
        console.error("Errore durante la ricerca della traccia:", error);
    }
}

async function searchArtist(searchTerm) {
    const songSerch = artist.some(artist => artist.canzoni.includes(searchTerm));

    // Se il termine corrisponde al nome di una canzone, stampa il nome della canzone e restituirà true se almeno uno degli artisti nell'array artist ha una canzone che corrisponde al termine di ricerca (searchTerm). Altrimenti, restituirà false.
    if (songSerch) {
        console.log(searchTerm);
    } else {
        // Se non è stata trovata una canzone, cerca un artista, FONDAMENTALE E' STATO COMPARARE <artist.nome.toLowerCase() === searchTerm.toLowerCase()> POICHE' SOLO IN QUESTO MODO LUI ESEGUE LA RICERCA ALL'INTERNO DELL'ARRAY ARTIST e si interroga se la ricerca effettuata è il nome della canzone o il nome dell'artista!!
        const artistSerch = artist.find(artist => artist.nome.toLowerCase() === searchTerm.toLowerCase()); 

        // Se l'artista è stato trovato, stampa le sue canzoni
        if (artistSerch) {
            console.log(`Canzoni di ${artistSerch.nome}:`);
            artistSerch.canzoni.forEach(song => {
                console.log(song);
            });
        } else {
            console.log("Nessuna canzone o artista trovato.");
        }
    }
}

window.addEventListener("load", init);
function init(e) {
    e.preventDefault(); 
    genera('album');

    }

    class Ceraca {
        constructor(_urlstring) {
          this.urlString = _urlstring;
          this.data={};
        }
        async featchFunction() {
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "2e50c00f75mshfd267fefaec0641p1ad213jsn245f0da85d04",
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            },
          };
      
          try {
            console.log(url + this.urlString);
            const response = await fetch(url + this.urlString, options);
            const date = await response.json();
            this.data=date;
          } catch (error) {
            console.error("Error during fetching data:", error);
          }
        }
        
      }   
      async function getMainAlbum(endpoint) {
        let getMainAlbumObj = new Ceraca('album/'+endpoint);
        await getMainAlbumObj.featchFunction();
        popolaMainAlbum(getMainAlbumObj.data);
      }
    //   async function getHomeAlbum(endpoint) {
    //     let getMainAlbumHome = new Ceraca(endpoint);
    //     await getMainAlbumHome.featchFunction();
    //     popolaHomeAlbum(getMainAlbumHome.data);
    //   }
    //   async function getHomeAlbum2(endpoint) {
    //     let getMainAlbumHome = new Ceraca(endpoint);
    //     await getMainAlbumHome.featchFunction();
    //     popolaHomeAlbum2(getMainAlbumHome.data);
    //   }
    //   async function getHomeArtists(endpoint) {
    //     let getMainAlbumHome = new Ceraca(endpoint);
    //     await getMainAlbumHome.featchFunction();
    //     popolaHomeAlbum(getMainAlbumHome.data);
    //   }
    //   async function getHomeTracks(endpoint) {
    //     let getMainAlbumHome = new Ceraca(endpoint);
    //     await getMainAlbumHome.featchFunction();
    //     popolaHomeAlbum(getMainAlbumHome.data);
    //   }

      let contatoreGenera=0;
      const genera = async (tipo) => {
     
        let random = Math.floor(Math.random() * 1000000);
        let endpoint = `${tipo}/${random}`;
        console.log(endpoint);
        const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "fe6e50a14emsh32a34440c590bc8p11cc7ajsn626ec9a75f8c",
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            },
          };
        const response = await fetch(url + endpoint, options);
        const data = await response.json();
        // console.log('Fetch di prova: ', data);
        if (data.error) {
        //   console.log('Fetch vuota');
          return genera(tipo);
        } else {
        //   console.log('Fetch riuscita');
        //    console.log(data);
        
          if (contatoreGenera<1) {
            getMainAlbum(random);
            contatoreGenera++;
             return genera(tipo);            
          }else  if (contatoreGenera<4) {
            // getHomeAlbum(random);
            popolaHomeAlbum(data)
            contatoreGenera++;
             return genera(tipo);            
          }else  if (contatoreGenera<7) {
            // getHomeAlbum2(random);
            popolaHomeAlbum2(data);
            contatoreGenera++;
             return genera(tipo);            
          }else  if (contatoreGenera<11) {
            // getHomeArtists('artist');
            popolaHomeArtists(data);
            contatoreGenera++;
             return genera(tipo);            
          }else  if (contatoreGenera<15) {
            // getHomeArtists('artist');
            popolaHomeArtists2(data);
            contatoreGenera++;
             return genera(tipo);            
          }else  if (contatoreGenera<21) {
            // getHomeTracks('track');
            popolaHomeTracks(data);
            contatoreGenera++;
             return genera(tipo);            
          }
        }
      }
     

async function popolaMainAlbum(data) {
const mainTopSection = document.getElementById('mainTopSection');
mainTopSection.innerHTML = `
<div class="col-3 p-4" id="contenitoreImmagineTopSection">
  <img src="${data.cover_big}" class="rounded" id="imagineTopMain" />
</div>
<div class="col-9 container-fluid">
  <div class="row h-100 d-flex align-items-around">
    <div class="col-12 h-75 align-content-stretch" id="contenitoreTestoTopSection">
      <p class="text-white fs-4 my-2" id="tipoPlaylist">${data.type}</p>
      <h1 class="m-0 col-12 text-start text-white display-1 fw-bold my-3" id="nomePlaylist">${data.title}
      </h1>
      <h2 class="col-12 text-start text-white m-0 my-2" id="descrizionePlaylist">Data di uscita: 
        ${data.release_date}
        </h2>
    </div>
    <div class="col-12 h-25 align-content-center">
      <button class="btn btn-success rounded-5 fs-3 px-5 py-3 text-black fw-bold"
        id="btnPlayTopSection" onclick='changeToAlbum("68346981")'>Play</button>
      <button class="btn btn-outline-light rounded-5 fs-3 px-5 py-3 fw-bold mx-3" id="btnSegui" onclick='changeToArtist("416239")'>Segui</button>
      <div class="dropdown d-inline-block">
        <button type="button" class="btn bg-transparent" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
            class="bi bi-three-dots text-white" viewBox="0 0 16 16">
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>
        </button>
        <ul class="dropdown-menu bg-black">
          <li><a class="dropdown-item bg-black text-white fs-4" href="#">Aggiungi alla tua libreria</a>
          </li>
          <li><a class="dropdown-item bg-black text-white fs-4" href="#">Aggiungi in coda</a></li>
          <li><a class="dropdown-item bg-black text-white fs-4" href="#">Segnala</a></li>
          <li><a class="dropdown-item bg-black text-white fs-4" href="#">Scarica</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>`

   
}

 function popolaHomeAlbum(data) {
    console.log(data.title);
    const homeAlbumContainer = document.getElementById('homeAlbumContainer');
    homeAlbumContainer.innerHTML += ` 
    <div class="col-3 container-fluid rounded-2 mb-4 mx-3 bg-dark homeAlbum">
                        <div class="row">
                          <div class="col-3 ps-0">
                            <img src="${data.cover}" class="w-100 rounded-3">
                          </div>
                          <div class="col-9 d-flex align-items-center">
                            <h6 class="text-white">${data.title}</h6>
                          </div>
                        </div>
                      </div>
    `}
    function popolaHomeAlbum2(data) {
        console.log(data);
    const homeAlbumContainer2 = document.getElementById('homeAlbumContainer2');
    homeAlbumContainer2.innerHTML += ` 
    <div class="col-3 container-fluid rounded-2 mb-4 mx-3 bg-dark homeAlbum" >
    <div class="row">
      <div class="col-3 ps-0">
        <img src="${data.cover}" class="w-100 rounded-3">
      </div>
      <div class="col-9 d-flex align-items-center">
        <h5 class="text-white">${data.title}</h5>
      </div>
    </div>
  </div>
//     `
   
}



function popolaHomeArtists(data) {
    const homeArtistsContainer = document.getElementById('homeArtistsContainer');
    homeArtistsContainer.innerHTML += `
    <div class="card bg-transparent homeArtist py-5">
                        <img src="${data.cover}" class="card-img-top w-75 align-self-center">
                        <div class="card-body">
                          <h4 class="card-title text-white">${data.title}</h4>
                          <p class="card-text text-white-50 fs-5">${data.name}</p>

                        </div>
                      </div>
    `
}
function popolaHomeArtists2(data) {
    
    const homeArtistsContainer2 = document.getElementById('homeArtistsContainer2');
    homeArtistsContainer2.innerHTML += `
    <div class="card bg-transparent homeArtist py-5">
    <img src="${data.cover}" class="card-img-top w-75 align-self-center">
    <div class="card-body">
      <h4 class="card-title text-white">Card title</h4>
      <p class="card-text text-white-50 fs-5">Artista</p>

    </div>
  </div>
    `
}



function popolaHomeTracks(data) {
    const homeTracksContainer = document.getElementById('homeTracksContainer');
    homeTracksContainer.innerHTML += `
    <div class="col-4 container-fluid rounded-2 braniHome mb-4">
                    <div class="row">
                      <div class="col-3 p-0 d-flex align-items-center">
                        <img src="assets/img/image-11.jpg" class="img-fluid me-2 rounded-2">
                      </div>
                      <div class="col-6 container">
                        <div class="row d-flex align-items-center h-100">
                          <h3 class="col-12 text-white">Titolo titolo</h3>
                          <p class="col-12 m-0 fs-4 text-white">1.22</p>
                          <p class="col-12 m-0 fs-5 text-white">55486431</p>
                        </div>
                      </div>
                      <div class="col-3 p-0 d-flex align-items-center">
                        <button class="btn rounded-circle bg-transparent border-0 p-0 me-3 w-100 h-100 buttonPlayBrani">
                          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                            class="bi bi-play-circle-fill text-success w-100" viewBox="0 0 16 16">
                            <path
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
    `
}


// let track={
//     "id": 1109731,
//     "readable": true,
//     "title": "Lose Yourself",
//     "title_short": "Lose Yourself",
//     "title_version": "",
//     "isrc": "USIR10211559",
//     "link": "https://www.deezer.com/track/1109731",
//     "share": "https://www.deezer.com/track/1109731?utm_source=deezer&utm_content=track-1109731&utm_term=0_1710190141&utm_medium=web",
//     "duration": 326,
//     "track_position": 6,
//     "disk_number": 1,
//     "rank": 982936,
//     "release_date": "2005-11-21",
//     "explicit_lyrics": true,
//     "explicit_content_lyrics": 1,
//     "explicit_content_cover": 0,
//     "preview": "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
//     "bpm": 171.6,
//     "gain": -8.3,
    
//     "contributors": [
//         {
//             "id": 13,
//             "name": "Eminem",
//             "link": "https://www.deezer.com/artist/13",
//             "share": "https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1710190141&utm_medium=web",
//             "picture": "https://api.deezer.com/artist/13/image",
//             "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
//             "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
//             "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
//             "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
//             "radio": true,
//             "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
//             "type": "artist",
//             "role": "Main"
//         }
//     ],
//     "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
//     "artist": {
//         "id": 13,
//         "name": "Eminem",
//         "link": "https://www.deezer.com/artist/13",
//         "share": "https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1710190141&utm_medium=web",
//         "picture": "https://api.deezer.com/artist/13/image",
//         "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
//         "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
//         "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
//         "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
//         "radio": true,
//         "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
//         "type": "artist"
//     },
//     "album": {
//         "id": 119606,
//         "title": "Curtain Call: The Hits",
//         "link": "https://www.deezer.com/album/119606",
//         "cover": "https://api.deezer.com/album/119606/image",
//         "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
//         "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
//         "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
//         "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
//         "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
//         "release_date": "2005-01-01",
//         "tracklist": "https://api.deezer.com/album/119606/tracks",
//         "type": "album"
//     },
//     "type": "track"
// }  

// getMusic();
/* { canzone
    "id": 1109731,
    "readable": true,
    "title": "Lose Yourself",
    "title_short": "Lose Yourself",
    "title_version": "",
    "isrc": "USIR10211559",
    "link": "https://www.deezer.com/track/1109731",
    "share": "https://www.deezer.com/track/1109731?utm_source=deezer&utm_content=track-1109731&utm_term=0_1710189607&utm_medium=web",
    "duration": 326,
    "track_position": 6,
    "disk_number": 1,
    "rank": 982936,
    "release_date": "2005-11-21",
    "explicit_lyrics": true,
    "explicit_content_lyrics": 1,
    "explicit_content_cover": 0,
    "preview": "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
    "bpm": 171.6,
    "gain": -8.3,
    "contributors": [
        {
            "id": 13,
            "name": "Eminem",
            "link": "https://www.deezer.com/artist/13",
            "share": "https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1710189607&utm_medium=web",
            "picture": "https://api.deezer.com/artist/13/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
            "type": "artist",
            "role": "Main"
        }
    ],
    "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
    "artist": {
        "id": 13,
        "name": "Eminem",
        "link": "https://www.deezer.com/artist/13",
        "share": "https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1710189607&utm_medium=web",
        "picture": "https://api.deezer.com/artist/13/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
        "type": "artist"
    },
    "album": {
        "id": 119606,
        "title": "Curtain Call: The Hits",
        "link": "https://www.deezer.com/album/119606",
        "cover": "https://api.deezer.com/album/119606/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
        "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
        "release_date": "2005-01-01",
        "tracklist": "https://api.deezer.com/album/119606/tracks",
        "type": "album"
    },
    "type": "track"
} */
/* {                                      serach 
    "id": 1109731,
    "readable": true,
    "title": "Lose Yourself",
    "title_short": "Lose Yourself",
    "title_version": "",
    "link": "https://www.deezer.com/track/1109731",
    "duration": 326,
    "rank": 982936,
    "explicit_lyrics": true,
    "explicit_content_lyrics": 1,
    "explicit_content_cover": 0,
    "preview": "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
    "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
    "artist": {
        "id": 13,
        "name": "Eminem",
        "link": "https://www.deezer.com/artist/13",
        "picture": "https://api.deezer.com/artist/13/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
        "type": "artist"
    },
    "album": {
        "id": 119606,
        "title": "Curtain Call: The Hits",
        "cover": "https://api.deezer.com/album/119606/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
        "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
        "tracklist": "https://api.deezer.com/album/119606/tracks",
        "type": "album"
    },
    "type": "track"
} */

