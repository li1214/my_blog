var everyDay = new Vue({
  el: "#every_day",
  data() {
    return {
      content: "仰望星空，看那满天繁星如何为你、为你所做的一切而闪耀。",
    };
  },
  created() {
    axios.get("/getEveryday").then(res => {
      console.log(res);
    });
  },
});

var blogList = new Vue({
  el: "#blogList",
  data() {
    return {
      list: [
        {
          id: "1",
          title: "四联杀幽门螺杆菌第三天",
          text:
            "前段时间总是干呕嗳气，吃饭很容易饱，饭后恶心想吐，喝咖啡后更剧烈。首次医院门诊，医生说是可能是胃动力不足消化不良，给开了点儿中成药，没要。问医生是否可以做一下钡餐或胃镜检查一下，于是预约了第二天的胃镜。第一次做胃镜，很顺利。胃镜报告显示胃角C2慢性萎缩性胃炎。几天后活检的病理结果显示慢性萎缩性胃炎，中度萎缩，中度炎症，中度活动，中度肠上皮化生，HP++……好...",
          tags: ["幽门螺杆菌", "萎缩性胃炎"],
          time: "2018-12-31",
          reads: "1354"
        },
        {
          id: "2",
          title: "树莓派安装homebridge小记",
          text:
            "doc带格式转文本，如html之前发布过使用antiword把doc文档转出成纯文本，但这个工具的转出是无格式的，下面是我找到的一款工具，说是可以把任何openoffice支持的格式的文档进行互转，我只测试了doc转到html。具体文档见这里：http://dag.wiee.rs/home-made/unoconv/还有这里：https://www.systutorials.com/docs/linux/man/1-unoconv/我在ubuntu下使用sudo apt-get install unoconv可以...",
          tags: ["树莓派", "uncconv"],
          time: "2018-12-28",
          reads: "1124"
        },

        {
          id: "3",
          title: "使用码云git的webhook实现生产环境代码的自动pull",
          text:
            "普通公司小项目，传统更新线上代码是每次ftp/sftp上传，或提交到svn/git后再ssh到线上环境中去手动拉取代码，十分麻烦，虽然用上了版本控制，逼格还是不够高啊！现在的线上仓库都支持hook技术，可以很方便的实现代码的自动化管理。比如我现在使用gitee.com仓库的webhook功能，监听master分支有push动作时，可以自动通过设置的hook通知生产环境中的脚本执行git pull拉取代码，自动更新，非常方便...",
          tags: ["webpack", "github"],
          time: "2018-12-21",
          reads: "21354"
        }
      ]
    };
  },
  filters: {
    tagfliter(d) {
      return d + "   ";
    }
  }
});
