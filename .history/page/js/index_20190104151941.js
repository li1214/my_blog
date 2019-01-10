var everyDay = new Vue({
    el:'#every_day',
    data(){
        return { content: "仰望星空，看那满天繁星如何为你、为你所做的一切而闪耀。", english: "Look at the stars; look how they shine for you and everything you do." };
    }
})

var blogList = new Vue({
    el:'#blogList',
    data(){
        return { 
            list:
                [
                    { 
                        title: "四联杀幽门螺杆菌第三天",
                        text: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
                        tags: ['幽门螺杆菌','萎缩性胃炎'],
                        time:'2018-12-31',
                        reads:'1354'
                     },
                    {
                        title: "树莓派安装homebridge小记",
                        text: "doc带格式转文本，如html之前发布过使用antiword把doc文档转出成纯文本，但这个工具的转出是无格式的，下面是我找到的一款工具，说是可以把任何openoffice支持的格式的文档进行互转，我只测试了doc转到html。具体文档见这里：http://dag.wiee.rs/home-made/unoconv/还有这里：https://www.systutorials.com/docs/linux/man/1-unoconv/我在ubuntu下使用sudo apt-get install unoconv可以...",
                        tags: ['树莓派', 'uncconv'],
                        time: '2018-12-31',
                        reads: '1124'
                    },
                    
                    {
                        title: "四联杀幽门螺杆菌第三天",
                        text: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
                        tags: ['幽门螺杆菌', '萎缩性胃炎'],
                        time: '2018-12-31',
                        reads: '1354'
                    },
                    {
                        title: "四联杀幽门螺杆菌第三天",
                        text: "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
                        tags: ['幽门螺杆菌', '萎缩性胃炎'],
                        time: '2018-12-31',
                        reads: '1354'
                    }
                ]
        };
    }
})