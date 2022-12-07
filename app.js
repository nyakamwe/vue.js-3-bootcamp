const app = Vue.createApp({
    data(){
        return {
            title: 'Aimable',
            age: 25,
            Leader: true,
            x: 0,
            y: 0,
        }
    },
    methods: {
        showLeader(){
            this.Leader = !this.Leader
        },
        handleEvent(e){
            console.log(e, e.type)
        },
        handleMouseMove(e){
            this.x = e.offsetX,
            this.y = e.offsetY
        }
    }
}) 

app.mount('#app') // it helps vue app to controll all actions 
                  //took place in mounted using DOM
