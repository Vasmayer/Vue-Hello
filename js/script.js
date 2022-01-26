/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */
console.log('Vue JS OK',Vue);

Vue.config.devtools = true;

var app5 = new Vue({
    el: '#root',
    data: {
      image: 'https://picsum.photos/200'
    }
    
  })