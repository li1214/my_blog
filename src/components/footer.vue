<template>
    <el-row class='footer'>
        <ul>
            <li>MsSql</li>
            <li>Express</li>
            <li>Redis</li>
            <li>JavaScript</li>
            <li>Html</li>
            <li>Css</li>
            <li>Node</li>
            <li>Vue</li>
            <li>Webpack</li>
            <li>GitHub</li>
        </ul>
        <p>Copyright © 2019 李恭兆个人博客 All rights reserved. 甘ICP备14017955号站长统计</p>
    </el-row>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.footer{
    box-sizing: content-box;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 60px;
    background: #191919;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
}
.footer ul{
    display: inline-block;
    margin:  0 auto;
    text-align: center;
}
.footer ul li{
    display: inline-block;
    color: #a2a2a2;
    font-size: 14px;
    margin-left: 10px;
    cursor: pointer;
    text-align: center;
}
.footer p {
    margin-top: 10px;
    color: #a2a2a2;
}
</style>