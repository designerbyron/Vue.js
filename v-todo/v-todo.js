var data = {
    titulo: 'Lista de Tareas',
    tareas:[
        {texto:'Aprender Vue.js', terminada:false},
        {texto:'Aprender Angular 2', terminada:false},
        {texto:'Aprender Ionic 2', terminada:false},            
    ],
    nuevaTarea:""
}

Vue.component('titulo',{
    template:'<h1>{{titulo}}</h1>',
    data: function(){
        return { titulo: 'Lista de Tareas'}
    }
}
)

Vue.component('nueva-tarea', {
    template:`
    <div class="input-group">
    <input class="form-control"
      type="text"
      v-model="nuevaTarea"
      v-on:keyup.13="agregarTarea()"
    />
    <span class="input-group-btn">
        <button class="btn btn-primary" v-on:click="agregarTarea()">Agregar tarea</button>
    </span>
  </div>
    `,
    methods:{
        agregarTarea: function(){
            var nuevoTexto = this.nuevaTarea.trim();
            if(nuevoTexto){
                this.tareas.push({
                    texto:nuevoTexto, terminada:false
                })
            }
            }
    },
    data: function(){
        return data;
    }
})

Vue.component('lista-tareas', {
    template: `
    <ul class="list-group">
    <li v-for="(tarea, indice) of tareas" class="list-group-item mt-2" v-bind:class="{terminada: tarea.terminada}">
      {{tarea.texto}}
    <span class="pull-right">
    <button v-on:click="tarea.terminada = !tarea.terminada" type="button" class="btn btn-success btn-xs">Listo</button>
    <button v-on:click="eliminarTarea(indice)" type="button" class="btn btn-danger btn-xs">Eliminar</button>
    </span>
    </li>


  </ul>
    `,
    data: function(){
        return data;
    }
})


const app = new Vue({
    el:".app",
    data:data ,  
  
    methods:{
        eliminarTarea: function(indice){
            this.tareas.splice(indice, 1);
        }
    }
})