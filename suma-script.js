const app = new Vue({
    el:".vue",
    data:{
        numero1:0,
        numero2:0,
        numero3:0
    },
    computed:{
        total: function(){
            return this.numero1 + this.numero2 + this.numero3;
        }
    }
})