/***Descrizione:**
Rifare l’esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- `text`, una stringa che indica il testo del todo
- `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
Steps:
1. avere un elenco di task da fare o fatti
2. stamparli in pagina
3. al click del task fare il toggle del task fatto o meno
4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”
BONUS
- Verificare se il task è già presente e nel caso mostrare l’errore
- ... il limite è la fantasia ;-)
Buon lavoro e buon divertimento! :congapartyparrot:
ps la grafica proposta è solo indicativa, potete svilupparla come credete ma sempre in modo funzionale
*/

const {createApp} = Vue;

createApp({
  data(){
    return{
      errorMsg:'',
      tasks:[
        {
          text:'Fare i compitini con Vue!',
          done: false
        },
        {
          text:'Ascoltare musica senza un domani!',
          done: true
        },
        {
          text:'Contemplare il monito per per ore!',
          done: false
        },
      ]
    }
  },
  methods:{
    removeTask(index){
      this.errorMsg ='';
      if(this.tasks[index].done === false){
        this.errorMsg = 'Attenzione! Devi prima effetuare la Task per poterla eliminare!'
      }else{
        this.tasks.splice(index,1);
      }
    }
  }
}).mount('#app')