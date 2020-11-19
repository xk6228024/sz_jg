<!-- 空图片显示组件 -->
<template>
    <div id="EmptyImage">
        <span></span>
        <img src="@/assets/images/audit/default_icon_photo.png" class="img">
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    components: {
    }
}
</script>

<style lang='less' scoped>
#EmptyImage {
    background: #e7e7e7;
    background: linear-gradient(#f9f9f9,#e7e7e7);
    text-align: center;
    height:100%;
    span{
        height:100%;
        display:inline-block;
        vertical-align:middle;
    }
    .img {
        vertical-align: middle;
        height: 36%;
    }
}
</style>
