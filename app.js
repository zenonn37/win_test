console.log('testing');



const app2 = Vue.createApp({
    data(){
        return{
            picture:'https://randomuser.me/api/portraits/men/10.jpg',
            firstName:'Chris',
            message:"basic view",
            gender:"male",
        }
    },
    methods:{
        async getUser(){

            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            this.firstName = results[0].name.first
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            console.log(results);
        }
    }
    
})


app2.mount('#app2')