new Vue({
    el:".vue",
    data:{
        contador:0
    },
    methods:{
        sumar1: function(){
            this.contador+=1;
        },
        restar1: function(){
            this.contador-=1;
        }
    }
})