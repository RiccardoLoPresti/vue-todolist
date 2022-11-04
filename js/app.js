/*
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
      errorMsg2:'',
      newTask:'',
      tasks:[
        {
          text:'Fare i compitini con Vue',
          done: false
        },
        {
          text:'Ascoltare musica senza un domani',
          done: true
        },
        {
          text:'Contemplare il monitor per ore',
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
    },
    addNewTask(){
      //svuoto errorMsg
      this.errorMsg ='';

      //se minore di 5 caratteri si interrompe la funzione
      if(this.newTask.length < 5){
        return this.errorMsg = 'Attenzione! La Task deve essere lunga almeno 5 caratteri!'

        //se più lunga salvo il dato in una const
      }else{

        //con find confronto i task.text di tasks con newTask
        if (this.tasks.find(task => task.text === this.newTask)) {
          this.errorMsg ='Attenzione! La task esiste già!'
        } else {
          const newTaskTodo = {
            text: this.newTask,
            done: false
          }
          this.tasks.unshift(newTaskTodo);
        }
      }
      this.newTask='';
    }
  }
}).mount('#app')