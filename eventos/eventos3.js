const app = new Vue({
    el:".vue",
    data:{
        x:0,
        y:0
    },
    methods:{
        mostrarUbicacion: function(e){
            this.x= e.clientX;
            this.y= e.clientY;
        }
    }
})