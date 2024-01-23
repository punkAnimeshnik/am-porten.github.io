<template>
  <div class="skills-list"  >
    <div class="arrow left" @click="scrollList(-250)"><i class="fa-solid fa-chevron-left"></i></div>
    <div class="scene" @mousedown="touchStart($event)" @mousemove="touchScroll($event)" @mouseup="touchEnd($event)">
      <div class="list" ref="list">
        <div class="skill" v-for="item in items">
          <div class="icon" v-bind:style="'color: '+item.color">
            <i v-bind:class="'fa-brands '+item.icon"></i></div>
          <div class="name">
            <h6>{{ item.name }}</h6>
          </div>
          <div class="self-esteem" >
            <i v-for="self in item.selfs" v-bind:class="'fa-'+self+' fa-star'"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="arrow right" @click="scrollList(250)"><i class="fa-solid fa-chevron-right"></i></div>

  </div>
</template>

<script>
export default {
  name: "skillSlider",
  data:()=>{
    return{
      right: 0,
      touch:false,
      touchPoint: 0,

      items:[
        {
          color:"#1C78C0",
          icon:"cu-webpack",
          name:"Webpack",
          selfs:["solid","solid","regular","regular","regular"]
        },
        {
          color:"#FFCA28",
          icon:"cu-firebase",
          name:"Firebase",
          selfs:["solid","solid","regular","regular","regular"]
        },
        {
          color:"#FF5722",
          icon:"fa-html5",
          name:"HTML",
          selfs:["solid","solid","solid","solid","regular"]
        },
        {
          color:"#2B4B7C",
          icon:"fa-less",
          name:"LESS",
          selfs:["solid","solid","solid","solid","regular"]
        },
        {
          color:"#41B883",
          icon:"fa-vuejs",
          name:"VueJS",
          selfs:["solid","solid","solid","solid","regular"]
        },
        {
          color:"#000000",
          icon:"fa-git-alt",
          name:"GIT",
          selfs:["solid","solid","solid","solid","regular"]
        },
        {
          color:"#44883e",
          icon:"fa-node",
          name:"NodeJS",
          selfs:["solid","solid","solid","regular","regular"]
        },
        {
          color:"#7811F7",
          icon:"fa-bootstrap",
          name:"Bootstrap",
          selfs:["solid","solid","solid","regular","regular"]
        },
        {
          color:"#1C78C0",
          icon:"cu-webpack",
          name:"Webpack",
          selfs:["solid","solid","regular","regular","regular"]
        },
        {
          color:"#FFCA28",
          icon:"cu-firebase",
          name:"Firebase",
          selfs:["solid","solid","regular","regular","regular"]
        },
        {
          color:"#FF5722",
          icon:"fa-html5",
          name:"HTML",
          selfs:["solid","solid","solid","solid","regular"]
        },
        {
          color:"#2B4B7C",
          icon:"fa-less",
          name:"LESS",
          selfs:["solid","solid","solid","solid","regular"]
        },

      ]
    }
  },
  methods:{
    touchStart(event){
      this.touch=true
      this.touchPoint = event.clientX
    },

    touchScroll(event){
      if (this.touch){
        this.scrollList((this.touchPoint - event.clientX)/8)
      }
    },
    touchEnd(event){
      this.touch=false
      if (this.touchPoint - event.clientX>125){
        this.right= (Math.ceil(this.right/250))*250
        this.scrollList(0)
      }
      else {
        this.right= ((Math.ceil(this.right/250))-1)*250
        this.scrollList(0)
      }

    },
    scrollList(leng){
      this.right+=leng
      this.$refs.list.setAttribute('style','transition:1s; right: '+this.right+"px;")


      if (this.right<=0){
        setTimeout(()=>{
          this.right=2000
          this.$refs.list.setAttribute('style','transition:0s; right: '+this.right+"px;")
        }, 1000)

      }
      if(this.right>=2000){
        setTimeout(()=>{
          this.right=0
          this.$refs.list.setAttribute('style','transition:0s; right: '+this.right+"px;")
        },1000)

      }
    }
  },
  mounted() {
    this.scrollList(500)
  }
}
</script>

<style scoped lang="less">

@Active: #070707;
@Pasive: #828282;

.skills-list{
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .arrow{
    color:@Active;
    font-size: 36px;
  }
  .arrow:hover{
    cursor: pointer;
    color: black;
  }
  .scene{
    width: 1000px;
    overflow: hidden;
    .list{
      display: flex;
      width: 3000px;
      position: relative;
    }
  }

.skill{
  width: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
.icon{
  font-size: 128px;
img{
  width: 128px;
  height: 128px;
}

}
.name{
  margin: 25px 0 ;
h6{
  font-family: Gilroy-Bold;
  font-size: 14px;
  line-height: 17.33px;
  color: @Pasive;
}
}
.self-esteem{
.fa-solid{
  color: @Active;
}
.fa-regular{
  color: @Pasive;
}

}
}
}

@media screen and (max-width: 1025px) {

  .skills-list{
    .scene{
      width: 750px;
    }
  }


}
@media screen and (max-width: 900px) {

  .skills-list{
    .arrow{
      display: none;
    }

  }


}
@media screen and (max-width: 600px) {

  .skills-list{
    .arrow{
      display: none;
    }
    .scene{
      width: 500px;
    }
  }


}
@media screen and (max-width: 450px) {

  .skills-list{
    .arrow{
      display: none;
    }
    .scene{
      width: 250px;
    }
  }


}

</style>