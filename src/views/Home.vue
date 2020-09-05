<template>
  <div class="home">
    <nav-bar></nav-bar>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in cateGory" :key="index" :title="item.title">
        <van-list
          :immediate-check="false"
          v-model="item.loading"
          :finished="item.finished"
          finished-text="我也是有底线的"
          @load="onLoad">
          <div class="detaitem">
            <detail class="item" :detailitem="categoryitem" v-for="(categoryitem,categoryindex) in item.list"
                    :key="categoryindex"></detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import NavBar from "../components/navBar/NavBar";
  import Detail from '../components/content/Detail'

  export default {
    name: "Home",
    components: {
      NavBar,
      Detail
    },
    data() {
      return {
        active: 0,
        cateGory: []
      }
    },
    methods: {
      selectCategory() {
        this.$http.get('/category').then(res => {
          this.changeCategory(res.data)
        })
      },
      changeCategory(res) {
        const category1 = res.map((item) => {
          item.list = []
          item.page = 0
          item.pagesize = 10
          item.loading = false
          item.finished = false
          return item
        })
        this.cateGory = category1
        this.selectArticle()
      },
      selectArticle() {
        const item = this.categoryItem();
        this.$http.get('/detail/' + item._id, {
          params: {
            page: item.page,
            pagesize: item.pagesize
          }
        }).then(res => {
          item.list.push(...res.data)
          item.loading = false
          if(res.data.length < item.pagesize ){
            item.finished = true
          }
        })
      },
      categoryItem() {
        const item = this.cateGory[this.active]
        return item
      },
      onLoad(){
         const item =this.categoryItem()
        item.page += 1
        setTimeout(() => {
          this.selectArticle()
        },1000)
      }
    },
    created() {
      this.selectCategory()
    },
    watch: {
      active() {
        this.selectArticle()
      }
    }
  }
</script>

<style lang="less" scoped>
  .detaitem {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .item {
      width: 45%;
      margin: 5px 0;
    }
  }

  .home {
    background-color: white;
  }


</style>