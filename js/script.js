
/**Esercizio di oggi: **Vue Email List**
nome repo: vue-email-list
**Descrizione:**
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
**Bonus**
1. Far comparire gli indirizzi email solamente quando sono stati tutti generati.
2. Predisporre una scritta “Errore” nel caso fallisse la chiamata HTTP
Consigli:
Iniziate a testare una chiamata axios direttamente da mounted.
Analizzate bene i dati in arrivo.
Solo in un secondo momento predisponete la logica delle 10 chiamate */


const app = new Vue({

    el: '#app',

    data: {
        email: '',
        emails: [],
        error: false,
        loading: true
    },

    methods: {
      getEmail(){
          
          this.error = true;
          for(let i = 0; i < 10; i++){
          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
              console.log('ok',response);
              console.log(response.data);
              const data = response.data;
              console.log(data.response);
              this.email = data.response;
              this.emails.push(this.email);
              
          })
          
          .catch((error) => {
              console.log('ko',error);
              this.error = true;
          })
        }
        this.emails = [];
      }
    },


    mounted(){
        this.getEmail();
    }


});