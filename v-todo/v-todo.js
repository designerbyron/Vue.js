const app = new Vue({
    el:".app",
    data:{
        titulo: 'Lista de Tareas',
        tareas:[
            {texto:'Aprender Vue.js', terminada:false},
            {texto:'Aprender Angular 2', terminada:false},
            {texto:'Aprender Ionic 2', terminada:false},            
        ],
        nuevaTarea:""
    },
    methods:{
        agregarTarea: function(){
            var nuevoTexto = this.nuevaTarea.trim();
            if(nuevoTexto){
                this.tareas.push({
                    texto:nuevoTexto, terminada:false
                })
            }
            }
    }
})