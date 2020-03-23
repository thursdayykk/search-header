<template>
  <div class="searchHeader-wrapper" ref="searchHeader-wrapper" :class="{'hide':!isShow}">
      <div class="search-form" ref="search-form" :class="{'isMore':isMore}">
          <slot />
      </div>
       <div class="btn-group">
            <slot  name="todobtns" />
            <el-button  size="mini" :icon="isMore ? 'el-icon-arrow-up':'el-icon-arrow-down'" @click="isMore = !isMore" v-if="this.showMore"></el-button>
        </div>
  </div>
</template>

<script>
import searchHeader from "./searchHeader"
export default searchHeader
</script>

<style scoped>
.searchHeader-wrapper{
    margin:10px;
    display: flex;
    box-sizing: border-box;
    /* border:1px solid #000; */
}
.search-form{
    display: flex;
    flex:1;
    flex-wrap: wrap;
}
.searchHeader-wrapper.hide{
    height:38px;
    overflow: hidden;
}

.searchHeader-wrapper .btn-group{
    padding:0px 10px;
    /* min-width:130px; */
    height:26px;
    display: flex;
    align-items: center;
     box-sizing: border-box;
}
.searchHeader-wrapper .btn-group .el-button--mini{
    padding:7px 7px;
    height: 26px;
}
</style>