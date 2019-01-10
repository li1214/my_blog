var everyDay = new Vue({
    el:'#every_day',
    data(){
        return { content: "仰望星空，看那满天繁星如何为你、为你所做的一切而闪耀。", english: "Look at the stars; look how they shine for you and everything you do." };
    }
})

var blogList = new Vue({
    el:'#blogList',
    data(){
        return{
            list:[]
        }
    }
})