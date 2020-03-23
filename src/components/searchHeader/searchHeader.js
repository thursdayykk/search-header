

let elementResizeDetectorMaker = require("element-resize-detector")
let erd = elementResizeDetectorMaker()
export default{
    data(){
        return {
            isMore:false,

            showMore:false,
            isFirst: true,
            isShow:false,
            
        }
    },
    mounted(){
        let that = this
        let lastWidth = 0
        let timer = null
        // 监听容器宽度的变化
        erd.listenTo(this.$refs["searchHeader-wrapper"], function (element) {
          let width = element.offsetWidth
          clearTimeout(timer)
          if(width !== lastWidth){
            lastWidth = width
            timer = setTimeout(_=>{ //=> 防抖
                that.setSize(width)
            },200)
            
          }
        })
    
    },
    destroyed(){ // => 移除监听
        this.uninstall()
    },
    watch:{
        isMore:{
            handler(val){
                this.isShow = val
            },
            immediate: false
            
        }
    },
    methods:{
        uninstall(){
            erd.uninstall(this.$refs["searchHeader-wrapper"])
        },
        //=> 设置每个input的尺寸
        setSize(curWrapWdith){
            // console.log(curWrapWdith)
            /**
             * > 850px => 25% - 10px 4列
             * 850 ~   720 => 33.3%- 10px 3列
             * < 720 => 50% - 10px 2列
             * 这里的10px 是每个的margin-left（于css对应，）
             * */ 
            // console.log('setSize')
            let  els = Array.from(this.$refs["search-form"].querySelectorAll("span")).filter(el => el.firstChild && el.firstChild.nodeName === "LABEL")
            let dos = {
                "> 850":['25% - 10px','50% - 10px'],
                "850 ~ 720":['33.3% - 10px', '66.6% - 10px'],
                "< 720" : ['50% - 10px' , '100% - 10px']
            }
            let handle = (type) => {
                els.forEach(el => {
                    if(el.className && el.className.split(" ").includes("max")){
                        el.style.width = `calc(${dos[type][1]})`
                    }else{
                      el.style.width = `calc(${dos[type][0]})`
                    }
                    
                })
                // 尺寸变了之后再判断需不需要more按钮
                this.needMore()
                this.isMore = false
            }
            if(curWrapWdith >= 850){
              handle("> 850")
            }else if(curWrapWdith < 850 && curWrapWdith >= 720){
              handle("850 ~ 720")
            }else{
              handle("< 720")
            }
           
        },
        //=> 是否需要more按钮
        needMore(){
            /**
             * 表单换行（wrapSize发生改变的时判断）
             *                      若需要换行
             *                      初始化 isMore => true 元素有hide类的的隐藏
             */
            let pArr = []
            let pOffsetTop = this.$refs["search-form"].offsetTop
            let  els = Array.from(this.$refs["search-form"].querySelectorAll("span")).filter(el => el.firstChild && el.firstChild.nodeName === "LABEL")
            els.forEach(el => {
                pArr.push(new Promise((res,rej)=>{
                    setTimeout(()=>{
                        if(el.offsetTop !== pOffsetTop){
                            rej()  
                        }else{
                            res()
                        }
                    },250)
                }))
            })
            Promise.all([...pArr]).then(_=>{
                this.showMore = false
            },_=>{
                this.showMore = true
            })
        },
        
    }
}