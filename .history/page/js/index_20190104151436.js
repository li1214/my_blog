var everyDay = new Vue({
    el:'#every_day',
    data(){
        return { content: "仰望星空，看那满天繁星如何为你、为你所做的一切而闪耀。", english: "Look at the stars; look how they shine for you and everything you do." };
    }
})

var blogList = new Vue({
    el:'#blogList',
    data(){
        return { list: [{ title: "四联杀幽门螺杆菌第三天", text:'前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...' }] };
    }
})