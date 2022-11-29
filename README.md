# Mars Rover (vue edition, version 2)  🪐🤖
Website Link: https://mars-rover-vue-v2.netlify.app/

*I'm part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. This is an API that translates the commands sent from earth to instructions that are understood by the rover.*


Questa è l'interfaccia front-end creata con Vue per visualizzare e muovere il rover su marte (attraverso le mars-rover-api).
A differenza della [versione 1](https://github.com/CastenettoA/mars-rover-vue-v1) questa 2° versione utilizza Typescript e le Composition Api.

## Tech Stack
* Netlify come hosting (in CD con git. A ogni 'git push' l'app viene pubblicata nuovamente)
* Vue - Versione 3 con Composition Api e Typescript, Vue Router, Vuex come state manager (utilizzato per creare un componente Toast globale)
* SCSS, TailWind e Flowbite per la parte grafica

## Nota
Mentre l'utilizzo delle **Composition API** di Vue è pienamente completato, il refractoring del codice per utilizzare pienamente le feature di TypeScript non è ancora completato.


## Project setup
```sh
npm install
npm run serve
npm run build # for production
```

## Programs Requirements
*You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover receives a character array of commands.
Implement commands that move the rover forward/backward (f,b).
Implement commands that turn the rover left/right (l,r).
Implement wrapping from one edge of the grid to another. (planets are spheres after all)
Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.*
