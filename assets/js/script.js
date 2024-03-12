const playerInfo = document.getElementById("playerInfo");
const playerPlay = document.getElementById("playerPlay");
const playerObj = document.getElementById("playerObj");
let audio = document.getElementById("audio"); // Take the audio element
let time = document.querySelector(".time"); // Take the audio track
let btnPlay = document.querySelector(".play"); // Take the play button
let btnPause = document.querySelector(".pause"); // Take the pause button
let btnPrev = document.querySelector(".prev"); // Take the switch button of the previous track
let btnNext = document.querySelector(".next");


const url =
  "https://deezerdevs-deezer.p.rapidapi.com/track/"; /* url per la traccia specifica */

const options = {
  /* chiave gianluca */ method: "GET",
  headers: {
    "X-RapidAPI-Key": "dbc55fa0b3msh11db0998867bdf0p127d0ejsn427d844c1974",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
window.addEventListener("load", init);

function playerPrint(track) {
    let playlist = [
        track.preview,
        'https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3'
    ];
    console.log(track.contributors[0].name);
  playerInfo.innerHTML = `<div class='leftPlayer d-flex'>
        <img src="${track.artist.picture_small}" alt="${track.title}">
        <div>
            <h4>${track.title}</h4>
            <h5>${track.contributors[0].name}</h5>
        </div>
        </div>`;
        
           // Change the src attribute value
   audio.src = playlist[0];
    // Assign a song time of zero
    audio.currentTime = 0;
    // Play the song
  
    const progress=document.querySelector('.progress-bar');
    let timeBar = document.getElementById("timeBar");
    btnPlay.addEventListener("click", function() {
        audio.play(); // Start the song
      setInterval(()=>{
        let audioTime = Math.round(audio.currentTime);
     
        let audioLength = Math.round(audio.duration)
        progress.style.width = (audioTime * 100) / audioLength + '%';
        console.log(audioTime);
        timeBar.innerText=audioTime;
    },1000);
     
    });


}
async function playerGet(id) {
  /* funzione call con id passare anche array di canzoni per il successivo*/
 
  try {
    const response = await fetch(url + id, options);
    const result = await response.json();
    if (result.length !== 0) {
      playerPrint(result);
    }
  } catch (error) {
    console.error(error);
  }
}
function init() {
//    playerGet('1109731');
}

/*{
    "id": 1109731,
    "readable": true,
    "title": "Lose Yourself",
    "title_short": "Lose Yourself",
    "title_version": "",
    "isrc": "USIR10211559",
    "link": "https://www.deezer.com/track/1109731",
    "share": "https://www.deezer.com/track/1109731?utm_source=deezer&utm_content=track-1109731&utm_term=0_1710190141&utm_medium=web",
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
            "share": "https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1710190141&utm_medium=web",
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
        "share": "https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1710190141&utm_medium=web",
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
}  */

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
    "available_countries": [
        "AE",
        "AF",
        "AG",
        "AI",
        "AL",
        "AM",
        "AO",
        "AQ",
        "AR",
        "AS",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BQ",
        "BR",
        "BT",
        "BV",
        "BW",
        "BY",
        "CA",
        "CC",
        "CD",
        "CF",
        "CG",
        "CH",
        "CI",
        "CK",
        "CL",
        "CM",
        "CO",
        "CR",
        "CU",
        "CV",
        "CW",
        "CX",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "EH",
        "ER",
        "ES",
        "ET",
        "FI",
        "FJ",
        "FK",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GS",
        "GT",
        "GU",
        "GW",
        "HK",
        "HM",
        "HN",
        "HR",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IR",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KP",
        "KR",
        "KW",
        "KY",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MM",
        "MN",
        "MP",
        "MR",
        "MS",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NF",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NU",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PN",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RU",
        "RW",
        "SA",
        "SB",
        "SC",
        "SD",
        "SE",
        "SG",
        "SI",
        "SJ",
        "SK",
        "SL",
        "SN",
        "SO",
        "ST",
        "SV",
        "SX",
        "SY",
        "SZ",
        "TC",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TK",
        "TL",
        "TM",
        "TN",
        "TO",
        "TR",
        "TV",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VG",
        "VI",
        "VN",
        "VU",
        "WS",
        "YE",
        "ZA",
        "ZM",
        "ZW"
    ],
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
