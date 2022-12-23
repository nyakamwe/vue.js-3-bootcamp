const app = Vue.createApp({
    data(){
        return {
            title: 'Aimable',
            age: 25,
            Leader: true,
            x: 0,
            y: 0,
            books: [
                {title: 'Canon the babalion', author: 'Geremy houseberg', isFav:true},
                {title: 'Rise of Empire', author: 'Antonio Rudoruph', isFav: false}
            ]
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
        },
        toogleFav(book){
            book.isFav = !book.isFav
        }
    }
}) 

app.mount('#app') // it helps vue app to controll all actions 
                  //took place in mounted using DOM
