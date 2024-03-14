const playerContent = document.getElementById("player");
const playerInfo = document.getElementById("playerInfo");
const playerPlay = document.getElementById("playerPlay");
const playerObj = document.getElementById("playerObj");
let time = document.querySelector(".time"); // Take the audio track
let btnPlay = document.querySelector(".play"); // Take the play button
let btnPause = document.querySelector(".pause"); // Take the pause button
let btnPrev = document.querySelector(".prev"); // Take the switch button of the previous track
let btnNext = document.querySelector(".next");

const url = "https://deezerdevs-deezer.p.rapidapi.com/";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "fe6e50a14emsh32a34440c590bc8p11cc7ajsn626ec9a75f8c",
//     "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//   },
// };

// let playlist = [];

// class playerHiden {
//   visibile(result) {
//     playerContent.classList.remove("playerDisactive");
//     playerContent.classList.add("player");
//     puschTrack(result);
//   }
//   btnVisibile() {
//     btnPlay.classList.remove("playerActive");
//     btnPause.classList.remove("playerDisactive");
//     btnPlay.classList.add("playerDisactive");
//     btnPause.classList.add("playerActive");
//   }

//   btnInvisibile() {
//     btnPause.classList.remove("playerActive");
//     btnPlay.classList.remove("playerDisactive");
//     btnPause.classList.add("playerDisactive");
//     btnPlay.classList.add("playerActive");
//   }
// }
// let visibility = new playerHiden();
// playerDestra = () => {
//   const range = document.querySelector(".volume input[type=range]");

//   const barHoverBox = document.querySelector(".volume .bar-hoverbox");
//   const fill = document.querySelector(".volume .bar .bar-fill");
//   range.addEventListener("change", (e) => {
//     audio.volume = e.target.value / 100;
//   });
//   const setValue = (value) => {
//     fill.style.width = value + "%";
//     range.setAttribute("value", value);
//     range.dispatchEvent(new Event("change"));
//   };
//   setValue(range.value);
//   const calculateFill = (e) => {
//     let offsetX = e.offsetX;
//     if (e.type === "touchmove") {
//       offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft;
//     }
//     const width = e.target.offsetWidth - 30;
//     setValue(Math.max(Math.min(((offsetX - 15) / width) * 100.0, 100.0), 0));
//   };
//   let barStillDown = false;
//   barHoverBox.addEventListener(
//     "touchstart",
//     (e) => {
//       barStillDown = true;
//       calculateFill(e);
//     },
//     true
//   );
//   barHoverBox.addEventListener(
//     "touchmove",
//     (e) => {
//       if (barStillDown) {
//         calculateFill(e);
//       }
//     },
//     true
//   );
//   barHoverBox.addEventListener(
//     "mousedown",
//     (e) => {
//       barStillDown = true;

//       calculateFill(e);
//     },
//     true
//   );

//   barHoverBox.addEventListener("mousemove", (e) => {
//     if (barStillDown) {
//       calculateFill(e);
//     }
//   });
//   barHoverBox.addEventListener("wheel", (e) => {
//     const newValue = +range.value + e.deltaY * 0.5;
//     setValue(Math.max(Math.min(newValue, 100.0), 0));
//   });
//   document.addEventListener(
//     "mouseup",
//     (e) => {
//       barStillDown = false;
//     },
//     true
//   );
//   document.addEventListener(
//     "touchend",
//     (e) => {
//       barStillDown = false;
//     },
//     true
//   );
// };

// playerSinistra = (track) => {
//   console.log(track.contributors[0].name);
//   playerInfo.innerHTML = `<div class='leftPlayer d-flex'>
//           <img src="${track.artist.picture_small}" alt="${track.title}">
//           <div>
//               <h4>${track.title}</h4>
//               <h5>${track.contributors[0].name}</h5>
//           </div>
//           <button class="heart bg-transparent text-white border-0 ms-4">
//             <ion-icon name="heart-outline"></ion-icon>
//           </button>
//           </div>`;
// };
// puschTrack = (canzone) => {
//   playlist.push(canzone);
// };
// let audio = document.getElementById("audio");
// let interval;
// startSong = (i) => {
//   switchPlaylist = (i) => {
//     audio.src = playlist[i];
//     audio.currentTime = 0;
//     audio.play();
//   };
//   const progress = document.querySelector(".progress-bar");
//   let timeBar = document.getElementById("timeBar");
//   visibility.btnVisibile();

//   switchPlaylist(i);
//   timeBar.innerText = Math.round(audio.currentTime);
//   interval = setInterval(() => {
//     let audioTime = Math.round(audio.currentTime);
//     let audioLength = Math.round(audio.duration);
//     progress.style.width = (audioTime * 100) / audioLength + "%";
//     timeBar.innerText = Math.round(audio.currentTime);
//     console.log("da zero" + " " + playlist.length + " " + i);
//     if (audioTime === audioLength && playlist.length - 1 <= i) {
//       i = 0;
//       console.log("da zero" + " " + playlist.length + " " + i);
//       switchPlaylist(i);
//     } else if (audioTime === audioLength) {
//       i++;
//       switchPlaylist(i);
//     }
//   }, 500);
// };

// playerCenter = () => {
//   console.log(playlist);
//   let i = 0;
//   startSong(i);

//   btnPlay.addEventListener("click", function (e) {
//     visibility.btnVisibile();
//     audio.play();
//   });
//   btnPause.addEventListener("click", function (e) {
//     visibility.btnInvisibile();
//     audio.pause();
//   });
// };
// async function playerGet(id) {
//   /* funzione call con id passare anche array di canzoni per il successivo*/
//   console.log("spinto");
//   try {
//     const response = await fetch(url + "track/" + id, options);
//     const result = await response.json();
//     if (playlist.length === 0) {
//       puschTrack(result.preview);
//       playerContent.classList.remove("playerDisactive");
//       playerContent.classList.add("player");
//       playerDestra();
//       playerSinistra(result);
//       playerCenter(result);
//       puschTrack(
//         "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3"
//       );
//     } else {
//       puschTrack(result.preview);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// const artist = [
//   {
//     nome: "Eminem",
//     canzoni: ["Lose Yourself", "Without Me", "Rap God"],
//   },
//   {
//     nome: "Ed Sheeran",
//     canzoni: ["Shape of You", "Perfect", "Thinking Out Loud"],
//   },
//   {
//     nome: "Adele",
//     canzoni: ["Hello", "Someone Like You", "Rolling in the Deep"],
//   },
// ];

// const searchForm = document.querySelector('form[role="search"]');
// const searchInput = document.querySelector('input[type="search"]');

// searchForm.addEventListener("click", function (event) {
//   event.preventDefault();

//   const searchTerm = searchInput.value.trim(); //IL VALORE .TRIM VIENE INSERITO PER L'UTENTE CHE INSERISCE ERRONEAMENTE SPAZZI BIANCHI IN ECCESSO ALL'INIZIO E ALLA FINE DELLA STRINGA; DIVERSAMENTE POSSIAMO UTILIZZARE UNA REGEX CHE DIA LO STESSO RISULTATO, IN QUEL CASO LO SCRIVIAMO COSI': const searchTerm = searchInput.value.replace(/^\s+|\s+$/g, '');

//   if (searchTerm !== "") {
//     searchTrack(searchTerm);
//   }
// });

// async function searchTrack(searchTerm) {
//   try {
//     const response = await fetch(url + `search?q=${searchTerm}`, options);
//     const data = await response.json();

//     if (data.data.length > 0) {
//       const trackId = data.data[0].id; //La funzione data.data può contenere un array di oggetti, nel nostro caso saranno l'array di canzoni. In questo modo ci permette di accedere ai dati specifici restituiti dalla richiesta API. In questo caso, si suppone che questi dati siano le tracce musicali restituite dalla ricerca effettuata su Deezer. Se data.data.length è <maggiore> di zero, significa che almeno una traccia è stata trovata e restituita dalla ricerca.
//       playerGet(trackId); // Chiama la funzione per ottenere e riprodurre la traccia cercata!
//       searchArtist(searchTerm); // Chiama la funzione per ottenere e riprodurre le canzoni dell'artista!
//       searchInput.value = "";
//       console.log(data);
//     } else {
//       console.log("Nessuna traccia trovata");
//     }
//   } catch (error) {
//     console.error("Errore durante la ricerca della traccia:", error);
//   }
// }

// async function searchArtist(searchTerm) {
//   const songSerch = artist.some((artist) =>
//     artist.canzoni.includes(searchTerm)
//   );

//   // Se il termine corrisponde al nome di una canzone, stampa il nome della canzone e restituirà true se almeno uno degli artisti nell'array artist ha una canzone che corrisponde al termine di ricerca (searchTerm). Altrimenti, restituirà false.
//   if (songSerch) {
//     console.log(searchTerm);
//   } else {
//     // Se non è stata trovata una canzone, cerca un artista, FONDAMENTALE E' STATO COMPARARE <artist.nome.toLowerCase() === searchTerm.toLowerCase()> POICHE' SOLO IN QUESTO MODO LUI ESEGUE LA RICERCA ALL'INTERNO DELL'ARRAY ARTIST e si interroga se la ricerca effettuata è il nome della canzone o il nome dell'artista!!
//     const artistSerch = artist.find(
//       (artist) => artist.nome.toLowerCase() === searchTerm.toLowerCase()
//     );

//     // Se l'artista è stato trovato, stampa le sue canzoni
//     if (artistSerch) {
//       console.log(`Canzoni di ${artistSerch.nome}:`);
//       artistSerch.canzoni.forEach((song) => {
//         console.log(song);
//       });
//     } else {
//       console.log("Nessuna canzone o artista trovato.");
//     }
//   }
// }


let playlist = [];
class Ceraca {
  constructor(_urlstring) {
    this.urlString = _urlstring;
    this.data={};
  }
  async featchFunction() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "adbbad1c37msha7f3201ca42e850p12c2aejsn066c0fe20dfa",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      //  console.log(url + this.urlString);
      const response = await fetch(url + this.urlString, options);
      const date = await response.json();
      this.data=date;
    } catch (error) {
      console.error("Error during fetching data:", error);
    }
  }
  
}   


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

playerSinistra=(track)=>{/* modificare grandezze css */
    // console.log(track.contributors[0].name);
    playerInfo.innerHTML = `<div class='leftPlayer d-flex'>
          <img src="${track.album.cover_small}" alt="imgCover">
          <div>
              <h5>${track.title_short}</h5>
              <h6>${track.artist.name}</h6>
          </div>
          <button class="heart bg-transparent text-white border-0 ms-4">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
          </div>`;
}
puschTrack=async(canzone)=>{
  let playerSongC = new Ceraca('track/'+canzone);
  await playerSongC.featchFunction();
 
    playlist.push(playerSongC.data.preview);
    console.log(playlist);
}

class playerHiden{
  constructor(){
    this.audio = document.getElementById("audio");
    this.progress=document.querySelector('.progress-bar');
    this.timeBar = document.getElementById("timeBar");
    this.counterPlaylist=0;
    this.clearinterval;
  }
  visibile(){
      playerContent.classList.remove('playerDisactive');
      playerContent.classList.add('player');
      playerDestra();
  }
  btnPlayVisibile(){
      btnPlay.classList.remove('playerActive');
      btnPause.classList.remove('playerDisactive');
      btnPlay.classList.add('playerDisactive');
      btnPause.classList.add('playerActive');
  }
  
  btnPauseVisibile(){
      btnPause.classList.remove('playerActive');
      btnPlay.classList.remove('playerDisactive');
      btnPause.classList.add('playerDisactive');
      btnPlay.classList.add('playerActive');
  }
  stopPlay(){
    this.audio.pause();
    this.btnPauseVisibile();
    clearInterval(this.clearinterval);
  }
  startPlay(){
    this.audio.play();
    this.btnPlayVisibile();
    this.intervallo();
  }
  switchPlay(){
    this.audio.pause();
    audio.src = playlist[this.counterPlaylist];
    audio.currentTime =0;
    this.btnPlayVisibile();
    this.audio.play();
    clearInterval(this.clearinterval);
     this.intervallo();
  }
    async intervallo(){


   this.clearinterval= setInterval(()=>{
        let audioTime = Math.round(this.audio.currentTime);
        let audioLength = Math.round(this.audio.duration);
        this.progress.style.width = (audioTime * 100) / audioLength + '%';
        this.timeBar.innerText=Math.round(this.audio.currentTime);
        console.log(playlist.length+'   '+this.counterPlaylist);
        if ((this.audio.currentTime===this.audio.duration) && (this.counterPlaylist<playlist.length-1)) {
          console.log('entra'+playlist.length);
          this.counterPlaylist++;
          this.switchPlay();
        }else if(this.audio.currentTime===this.audio.duration&&this.counterPlaylist>=playlist.length-1){
          this.progress.style.width=0+'%';
          this.timeBar.innerText=0+'/'+Math.round(this.audio.duration);
          this.stopPlay();
        }
    },250);
   }
  
  playlistAutoPlay(data){
    this.currentTime=0;
    clearInterval(this.clearinterval);
    playerSinistra(data);
    this.audio.pause();
    audio.src = data.preview;
    audio.currentTime =22;
    this.btnPlayVisibile();
    this.audio.play();
    this.intervallo();
  } 
}
let play= new playerHiden();
btnPlay.addEventListener("click", function(e) {
  play.startPlay();
});
btnPause.addEventListener("click", function(e) {
  play.stopPlay();

});
btnNext.addEventListener("click", function(e) {
  if (playlist.length-1>play.counterPlaylist) {
    play.counterPlaylist++;
    play.switchPlay();
  }

});
btnPrev.addEventListener("click", function(e) {
  if (playlist.length-1<=play.counterPlaylist) {
    play.counterPlaylist--;
    play.switchPlay();
  }
});
async function playerGet(id) {
  playlist=[];
  
  console.log('spinto');
  let playerSong = new Ceraca('track/'+id);/* ricerco la traccia */
   await playerSong.featchFunction();
  //  console.log(playerSong.data);
    puschTrack(playerSong.data.id);
    play.visibile();
    play.playlistAutoPlay(playerSong.data);
}






window.addEventListener("load", init);
async function init(e) {
  e.preventDefault();
  for (let i = 0; i < 21; i++) {
    await genera("album", i);
  }
}

// class Ceraca {
//   constructor(_urlstring) {
//     console.log(_urlstring);
//     this.urlString = _urlstring;
//     console.log(this.urlString);
//     this.data = {};
//   }
//   async featchFunction() {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "fe6e50a14emsh32a34440c590bc8p11cc7ajsn626ec9a75f8c",
//         "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url + this.urlString, options);
      
//       if (!response.ok) {
//         // Gestione degli errori HTTP
//         console.error("HTTP error:", response.status);
//         return false;
//       }
      
//       const data = await response.json();
      
//       if (data.error) {
//         console.error("Error in response data:", data.error);
//         return false;
//       }
      
//       this.data = data;
//       // console.log(this.data);
//       return true;
//     } catch (error) {
//       console.error("Error during fetching data:", error);
//       return false;
//     }
//   }
// }
async function getMainAlbum(endpoint) {
  let getMainAlbumObj = new Ceraca("album/" + endpoint);
  let ricerca = await getMainAlbumObj.featchFunction();
  if (ricerca) {
    popolaMainAlbum(getMainAlbumObj.data);
  } else {
    genera("track");
  }
}
async function getHomeAlbum(endpoint, contatore) {
  let getMainAlbumHome = new Ceraca("album/" + endpoint);
  let ricerca = await getMainAlbumHome.featchFunction();
  if (ricerca) {
    console.log("popolato");
    popolaHomeAlbum(getMainAlbumHome.data);
  } else {
    genera("track", contatore);
  }
}
async function getHomeAlbum2(endpoint) {
  let getMainAlbumHome = new Ceraca(endpoint);
  await getMainAlbumHome.featchFunction();
  popolaHomeAlbum2(getMainAlbumHome.data);
}
async function getHomeArtists(endpoint) {
  let getMainAlbumHome = new Ceraca(endpoint);
  await getMainAlbumHome.featchFunction();
  popolaHomeAlbum(getMainAlbumHome.data);
}
async function getHomeTracks(endpoint) {
  console.log(endpoint);
  let getMainAlbumHome = new Ceraca(endpoint);
  await getMainAlbumHome.featchFunction();
  popolaHomeTracks(getMainAlbumHome.data);
}

const genera = async (tipo, contatoreGenera = 0) => {
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
    // console.log('Fetch riuscita');
    // console.log(data);
    //loop(contatoreGenera, data);
    // contatoreGenera++;
    // return genera(tipo);
  }
};

function loop(contatoreGenera, data) {
  console.log(data);
  if (contatoreGenera < 1) {
    getMainAlbum(data.id);
  } else if (contatoreGenera < 4) {
    getHomeAlbum(data.id, contatoreGenera); 
    } else if (contatoreGenera < 7) {
      getHomeAlbum2(data.id, contatoreGenera);
      // popolaHomeAlbum2(random);
    } else if (contatoreGenera < 11) {
      getHomeArtists("artist");
      // popolaHomeArtists(random);
    } else if (contatoreGenera < 15) {
      getHomeArtists("artist");
      // popolaHomeArtists2(random);
    } else if (contatoreGenera < 21) {
      getHomeTracks(`album/${ data.id}`, contatoreGenera);
    }
  }
async function popolaMainAlbum(data) {
  const mainTopSection = document.getElementById("mainTopSection");
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
        id="btnPlayTopSection" onclick='loadAlbum(${data.id})'>Play</button>
      <button class="btn btn-outline-light rounded-5 fs-3 px-5 py-3 fw-bold mx-3" id="btnSegui" onclick='loadArtist()'>Segui</button>
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
</div>`;
}

function popolaHomeAlbum(data) {
  console.log(data.title);
  const homeAlbumContainer = document.getElementById("homeAlbumContainer");
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
    `;
}
function popolaHomeAlbum2(data) {
  console.log(data);
  const homeAlbumContainer2 = document.getElementById("homeAlbumContainer2");
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
    `;
}

function popolaHomeArtists(data) {
  const homeArtistsContainer = document.getElementById("homeArtistsContainer");
  homeArtistsContainer.innerHTML += `
    <div class="card bg-transparent homeArtist py-5">
                        <img src="${data.cover}" class="card-img-top w-75 align-self-center">
                        <div class="card-body">
                          <h4 class="card-title text-white">${data.title}</h4>
                          <p class="card-text text-white-50 fs-5">${data.name}</p>

                        </div>
                      </div>
    `;
}
function popolaHomeArtists2(data) {
  const homeArtistsContainer2 = document.getElementById(
    "homeArtistsContainer2"
  );
  homeArtistsContainer2.innerHTML += `
    <div class="card bg-transparent homeArtist py-5">
    <img src="${data.cover}" class="card-img-top w-75 align-self-center">
    <div class="card-body">
      <h4 class="card-title text-white">Card title</h4>
      <p class="card-text text-white-50 fs-5">Artista</p>

    </div>
  </div>
    `;
}
function popolaHomeTracks(data) {
  console.log(data);
  const homeTracksContainer = document.getElementById("homeTracksContainer");
  homeTracksContainer.innerHTML += `
    <div class="col-4 container-fluid rounded-2 braniHome mb-4">
                    <div class="row">
                      <div class="col-3 p-0 d-flex align-items-center">
                        <button onclick="puschTrack(${JSON.stringify(data)})" ><img src="${data.cover}" class="img-fluid me-2 rounded-2"></button>
                      </div>
                      <div class="col-6 container">
                        <div class="row d-flex align-items-center h-100">
                          <h3 class="col-12 text-white">${data.title}</h3>
                          <p class="col-12 m-0 fs-4 text-white">1.22</p>
                          <p class="col-12 m-0 fs-5 text-white">55486431</p>
                        </div>
                      </div>
                      <div class="col-3 p-0 d-flex align-items-center">
                        <button onclick='playerGet(${data.id})' class="btn rounded-circle bg-transparent border-0 p-0 me-3 w-100 h-100 buttonPlayBrani ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor"
                            class="bi bi-play-circle-fill text-success w-100" viewBox="0 0 16 16">
                            <path
                              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
    `;
}

/* {
    "id": 960640, track
    "readable": true,
    "title": "Downtown",
    "title_short": "Downtown",
    "title_version": "",
    "isrc": "USRC19205519",
    "link": "https://www.deezer.com/track/960640",
    "share": "https://www.deezer.com/track/960640?utm_source=deezer&utm_content=track-960640&utm_term=0_1710404973&utm_medium=web",
    "duration": 312,
    "track_position": 10,
    "disk_number": 1,
    "rank": 184505,
    "release_date": "2001-11-05",
    "explicit_lyrics": false,
    "explicit_content_lyrics": 0,
    "explicit_content_cover": 2,
    "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8f154449f19920456a0c30891f42840f-7.mp3",
    "bpm": 166,
    "gain": -13,
    "available_countries": [
      
    ],
    "contributors": [
        {
            "id": 2380,
            "name": "SWV",
            "link": "https://www.deezer.com/artist/2380",
            "share": "https://www.deezer.com/artist/2380?utm_source=deezer&utm_content=artist-2380&utm_term=0_1710404973&utm_medium=web",
            "picture": "https://api.deezer.com/artist/2380/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/350963b43e7f27ed0817b6b51b894b4d/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/350963b43e7f27ed0817b6b51b894b4d/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/350963b43e7f27ed0817b6b51b894b4d/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/350963b43e7f27ed0817b6b51b894b4d/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/2380/top?limit=50",
            "type": "artist",
            "role": "Main"
        }
    ],
    "md5_image": "edde54117ec94e9c426fac7c8b7eb8a3",
    "artist": {
        "id": 2380,
        "name": "SWV",
        "link": "https://www.deezer.com/artist/2380",
        "share": "https://www.deezer.com/artist/2380?utm_source=deezer&utm_content=artist-2380&utm_term=0_1710404973&utm_medium=web",
        "picture": "https://api.deezer.com/artist/2380/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/350963b43e7f27ed0817b6b51b894b4d/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/350963b43e7f27ed0817b6b51b894b4d/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/350963b43e7f27ed0817b6b51b894b4d/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/350963b43e7f27ed0817b6b51b894b4d/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/2380/top?limit=50",
        "type": "artist"
    },
    "album": {
        "id": 107698,
        "title": "Best Of SWV",
        "link": "https://www.deezer.com/album/107698",
        "cover": "https://api.deezer.com/album/107698/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/edde54117ec94e9c426fac7c8b7eb8a3/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/edde54117ec94e9c426fac7c8b7eb8a3/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/edde54117ec94e9c426fac7c8b7eb8a3/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/edde54117ec94e9c426fac7c8b7eb8a3/1000x1000-000000-80-0-0.jpg",
        "md5_image": "edde54117ec94e9c426fac7c8b7eb8a3",
        "release_date": "2001-11-05",
        "tracklist": "https://api.deezer.com/album/107698/tracks",
        "type": "album"
    },
    "type": "track"
} */
/* {album
  "id": 274799,
  "readable": false,
  "title": "Introduction (Live)",
  "title_short": "Introduction",
  "title_version": "(Live)",
  "isrc": "FR6V80307491",
  "link": "https://www.deezer.com/track/274799",
  "share": "https://www.deezer.com/track/274799?utm_source=deezer&utm_content=track-274799&utm_term=0_1710404836&utm_medium=web",
  "duration": 42,
  "track_position": 1,
  "disk_number": 1,
  "rank": 26396,
  "release_date": "2006-11-13",
  "explicit_lyrics": false,
  "explicit_content_lyrics": 2,
  "explicit_content_cover": 2,
  "preview": "",
  "bpm": 129.6,
  "gain": -14.2,
  "available_countries": [],
  "contributors": [
      {
          "id": 7042,
          "name": "Henri Dès",
          "link": "https://www.deezer.com/artist/7042",
          "share": "https://www.deezer.com/artist/7042?utm_source=deezer&utm_content=artist-7042&utm_term=0_1710404836&utm_medium=web",
          "picture": "https://api.deezer.com/artist/7042/image",
          "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/ca45d8af657396654f0a6a9a6dfc0365/56x56-000000-80-0-0.jpg",
          "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/ca45d8af657396654f0a6a9a6dfc0365/250x250-000000-80-0-0.jpg",
          "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/ca45d8af657396654f0a6a9a6dfc0365/500x500-000000-80-0-0.jpg",
          "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/ca45d8af657396654f0a6a9a6dfc0365/1000x1000-000000-80-0-0.jpg",
          "radio": true,
          "tracklist": "https://api.deezer.com/artist/7042/top?limit=50",
          "type": "artist",
          "role": "Main"
      }
  ],
  "md5_image": "c0511866f41bd21851559f00a2e7ad78",
  "artist": {
      "id": 7042,
      "name": "Henri Dès",
      "link": "https://www.deezer.com/artist/7042",
      "share": "https://www.deezer.com/artist/7042?utm_source=deezer&utm_content=artist-7042&utm_term=0_1710404836&utm_medium=web",
      "picture": "https://api.deezer.com/artist/7042/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/ca45d8af657396654f0a6a9a6dfc0365/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/ca45d8af657396654f0a6a9a6dfc0365/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/ca45d8af657396654f0a6a9a6dfc0365/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/ca45d8af657396654f0a6a9a6dfc0365/1000x1000-000000-80-0-0.jpg",
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/7042/top?limit=50",
      "type": "artist"
  },
  "album": {
      "id": 45878,
      "title": "Henri Dès Olympia 2003 (Live)",
      "link": "https://www.deezer.com/album/45878",
      "cover": "https://api.deezer.com/album/45878/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/c0511866f41bd21851559f00a2e7ad78/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/c0511866f41bd21851559f00a2e7ad78/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/c0511866f41bd21851559f00a2e7ad78/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/c0511866f41bd21851559f00a2e7ad78/1000x1000-000000-80-0-0.jpg",
      "md5_image": "c0511866f41bd21851559f00a2e7ad78",
      "release_date": "2006-11-13",
      "tracklist": "https://api.deezer.com/album/45878/tracks",
      "type": "album"
  },
  "type": "track"
} */

function showPage(page) {
  const mainSection = document.getElementById("mainSection");
  mainSection.innerHTML = page;
  const footer = document.getElementById("mainFooter");
  footer.innerHTML = ` <div class="row">
  <div class="col-2 container">
      <div class="row">
          <h4 class="col-12 text-white">Azienda</h4>
          <a href="#" class="col-12 ">
              <p class="fs-4">Chi siamo</p>
          </a>
          <a href="#" class="col-12 ">
              <p class="fs-4">Opportunità di lavoro</p>
          </a>
          <a href="#" class="col-12 ">
              <p class="fs-4">For the Record</p>
          </a>
      </div>
  </div>
  <div class="col-2">
      <div class="row">
          <h4 class="col-12 text-white">Community</h4>
          <a href="#" class="col-12 ">
              <p class="fs-4">Per artisti</p>
          </a>
          <a href="#" class="col-12 ">
              <p class="fs-4">Sviluppatori</p>
          </a>
          <a href="#" class="col-12 ">
              <p class="fs-4">Pubblicità</p>
          </a>
          <a href="#" class="col-12 ">
              <p class="fs-4">Investitori</p>
          </a>
          <a href="#" class="col-12 ">
              <p class="fs-4">Venditori</p>
          </a>
      </div>
  </div>
  <div class="col-2">
      <div class="row">
          <h4 class="col-12 text-white">Link utili</h4>
          <a href="#" class="col-12 ">
              <p class="fs-4">Assistenza</p>
          </a>
          <a href="#" class="col-12 ">
              <p class="fs-4">App per cellulare gratuita</p>
          </a>
          <a href="#" class="col-12 ">
              <p class="fs-4">Diritti del consumatore</p>
          </a>
      </div>
  </div>
  <div class="col-3 offset-3">
      <div class="d-flex justify-content-evenly align-items-center">
          <button type="button"
              class="btn btn-dark rounded-5 p-4 fs-3 d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                  class="bi bi-instagram" viewBox="0 0 16 16">
                  <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
          </button>
          <button type="button"
              class="btn btn-dark rounded-5 p-4 fs-3 d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                  class="bi bi-twitter" viewBox="0 0 16 16">
                  <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>
          </button>
          <button type="button"
              class="btn btn-dark rounded-5 p-4 fs-3 d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                  class="bi bi-facebook" viewBox="0 0 16 16">
                  <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
          </button>
      </div>
  </div>
</div>
<hr>
<div class="d-flex justify-content-between">
  <div class="d-flex flex-wrap w-50 my-5">
      <a href="#" class=" px-3 fs-4">
          <p>Informazioni legali</p>
      </a>
      <a href="#" class=" px-3 fs-4">
          <p>Sicurezza e Centro sulla privacy</p>
      </a>
      <a href="#" class=" px-3 fs-4">
          <p>Informativa sulla privacy</p>
      </a>
      <a href="#" class=" px-3 fs-4">
          <p>Impostazioni cookie</p>
      </a>
      <a href="#" class=" px-3 fs-4">
          <p>Info annunci</p>
      </a>
      <a href="#" class=" px-3 fs-4">
          <p>Accessibilità</p>
      </a>
  </div>
  <div class="my-5 me-5">
      <p class="text-white-50 fs-4">&copy; 2024 Spotify AB</p>
  </div>


</div>`;
}

const promise = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest();
  request.open("GET", "home.html");

  request.onload = function () {
    if (request.status == 200) {
      resolve(request.response);
    } else {
      reject("<h3>FILE NON TROVATO!</h3>");
    }
  };
  request.send();
});
promise.then(
  function (value) {
    showPage(value);
  },
  function (error) {
    showPage(error);
  }
);

const btnHome = document.getElementById("btnHome");

btnHome.addEventListener("click", () => {
  loadHome();
  getMainAlbum();
  getHomeAlbum();
  getHomeAlbum2();                    //DA MODIFICARE
  getHomeArtists();
  getHomeTracks();
});

function loadHome() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.status == 200) {
      showPage(this.response);
    }
  };
  xhttp.open("GET", "home.html", true);
  xhttp.send();
}

function loadAlbum() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mainSection").innerHTML = this.response;
    }
  };
  xhttp.open("GET", "album.html", true);
  xhttp.send();
}

function loadArtist() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mainSection").innerHTML = this.response;
    }
  };
  xhttp.open("GET", "artisti.html", true);
  xhttp.send();
}
