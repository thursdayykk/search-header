<template>
    <span class="search-form-item" :class="max ? 'max':''">
        <label v-if="label">{{label}}</label>
        <slot />
    </span>
</template>

<script>
export default {
    props:["label","max"]
}
</script>

<style scoped>
.search-form-item {
    /* width:calc(25% - 10px); */
    display: flex;
    height: 28px;
    border:1px solid  #e5e6ec;
    margin-right:10px;
    margin-bottom:10px;
    box-sizing: border-box;
    transition: all 0.2s linear;
}
.search-form-item > label{
    font-size:12px;
    color:#999;
    font-weight: 400;
    line-height: 26px;
    box-sizing: border-box;
    padding-left:5px;
}
.search-form-item > .el-input,
.search-form-item > .el-select{
    flex:1;
    display: inline-block;
    height: 26px;
}
>>> .el-input__inner{
    height: 26px;
    line-height: 26px;
    border:none;
    font-size:12px;
    padding:0 7px;
}
>>> .el-input__prefix, .el-input__suffix{
    top:0px;
}
>>>.el-input__prefix{
    left:0px;
}
>>>.el-range__icon{
    line-height: 26px;
}
>>>.el-input--prefix .el-input__inner{
    padding:0 25px;
}
>>>.el-input__icon{
    line-height: 26px;
}
>>>.el-range-separator,
>>>.el-range-input{
    line-height: 26px;
    color:#999;
    font-size:12px;
}
</style>