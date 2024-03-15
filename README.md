# Seconda Build Week - Gruppo 7 - FS0124

## Home Page
Al caricamento della pagina, la home si presenta già popolata con un "jumbotron" e una fila per album, artisti e brani rispettivamente, inseriti in un carousel automatico. Tutti gli elementi sono cliccabili: la card di un album reindirizzarà alla pagina dell'album, e lo stesso avverrà per un artista, mentre cliccare il play button di un brano farà partire la riproduzione mediante un player che viene attivato sul fondo della pagina.
Sul lato sinistro della pagina si trovano due sezioni: la superiore presenta un pulsante "home" funzionante, seguito da uno spazio di ricerca. La sezione inferiore invece è statica.


## Come funziona
L'intero documento è organizzato in un'unica pagina html, la cui parte centrale viene scambiata all'occorrenza con le pagine dedicate a home, artisti e album. Questa funzione è realizzata grazie a una XMLHttpRequest.

Abbiamo ottenuto i dati utilizzati per popolare le pagine tramite l'utilizzo di richieste fetch mandate a un'API di Deezer.

come funziona il player??? 


## Come si utilizza 
Per rendere l'utilizzo da parte dell'utente facile e intuitivo, abbiamo rispettato il più possibile le funzionalità originali dell'applicazione. Cliccare sul nome di un artista o di un album reindirizza automaticamente alla rispettiva pagina, mentre cliccare il play button di un brano fa partire la riproduzione.

### Player
Il player in basso mostra a sinistra la foto dell'artista, il suo nome e il titolo della canzone, seguiti da un'icona fittizia per aggiungere il brano ai preferiti. In centro il tasto play/pause è funzionante, mentre non è possibile cliccare i tasti per le tracce successiva e precedente. La barra di scorrimento, al contrario, avanza con la riproduzione della musica (si può cliccare???) e mostra a destra il tempo trascorso.
A destra si trova la barra del volume, anch'essa funzionante.

### Ricerca 
Per effettuare una ricerca è sufficiente cliccare sul tasto "cerca" in alto a sinistra, facendo così comparire la barra di ricerca dove scrivere il proprio input. La ricerca viene avviata dal click sul pulsante.


## Autori
- Mishel Cakalli
- Vito Dagnello
- Stefano Fortezza
- Gianluca Giacchetta
- Lucian Andrei Oprica
- Clarissa Piovesan