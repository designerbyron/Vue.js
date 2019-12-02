const app = new Vue({
    el:'.vue',
    data:{
        mensaje:'Aprende Vue.js Fácilmente',
        src: 'https://vuejs.org/images/logo.png'
    },
    beforeCreate : function(){
        console.log('Llamando beforeCreate');
    },
    created : function(){
        console.log('Llamando created');
    },
    beforeMount : function(){
        console.log('Llamando beforeMount');
    },
    mounted : function(){
        console.log('Llamando mounted');
    },
    beforeUpdate : function(){
        console.log('Llamando beforeUpdate');
    },
    updated : function(){
        console.log('Llamando updated');
    },
    beforeDestroy : function(){
        console.log('Llamando beforeDestroyed');
    },
    destroyed : function(){
        console.log('Llamando destroyed');
    },
    methods: {
        destruir: function(){
            this.$destroy();
        }
    }
    
})