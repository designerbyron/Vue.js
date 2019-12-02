/* const app = new Vue({
    el:".vue",
    data:{
        paises:['Nicaragua', 'Mexico', 'Colombia', 'Venezuela']
    }
})  */
const app = new Vue({
    el:".vue",
    data:{
        usuarios:[
            {nombre:'Byron Vanegas', telefono: 88860130, email:'bvanegas@lifecodedesign.com'},
            {nombre:'Raul Manzanarez', telefono: 88860130, email:'bvanegas@lifecodedesign.com'},
            {nombre:'Alberto Noboa', telefono: 88860130, email:'bvanegas@lifecodedesign.com'},
        ],
        nuevoUsuario:"",
        advertencia:""
    },
    methods:{
        agregarUsuario(){
            if(this.nuevoUsuario==""){
                this.advertencia=true;
            }else{
                this.usuarios.push({
                    nombre:this.nuevoUsuario,
                    telefono:84427642,email:'mantaspublicitariasnic@gmail.com'
                });
                this.advertencia=false;
            }

        }
    }
    
})