const app = Vue.createApp({
data(){
    return{
        title: 'Cookie Run Kingdom ',
        firstName: 'Pantavit' ,
        lastName: 'Hengnalen',
        role: 'Font-End developer',
        follow: 'Follow',
        imgProfile:'https://www.cookierun-kingdom.com/static/f1c6dafc54fd11af37d0f2d744c27054/4797a/pure-vanilla-cookie.png', done: false,
        pics:[{image:'https://yt3.ggpht.com/ytc/AAUvwnjQi01NsCT0G-rbs8hA60aALy89FxZnMvxlIRt1=s900-c-k-c0x00ffffff-no-rj', done: false},
              {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MmoKUx6H-MY708iSykMwbNVrcqYhuO1B4g&usqp=CAU', done: false},
              {image: 'https://trueid-ugc-prod.imgix.net/partner_files/trueidintrend/201299/%E0%B8%84%E0%B8%B8%E0%B8%81%E0%B8%81%E0%B8%B5%E0%B9%89%E0%B8%88%E0%B8%AD%E0%B8%A1%E0%B9%82%E0%B8%88%E0%B8%A3-%E0%B9%80%E0%B8%AB%E0%B8%A1%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A1%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B8%A5%E0%B8%8A%E0%B8%B5%E0%B8%AA%20copy.jpg?auto=format&w=1024', done: false }]
        


    }
    
},
methods:{
    toggleDone(index){
        this.pics[index].done = !this.pics[index].done
    }
},
computed:{
    countLike(){
        return this.pics.filter( p => p.done).length
    }
}

})

app.mount("#app");