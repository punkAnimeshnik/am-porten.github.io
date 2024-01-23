<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="nav-bar" v-bind:class="scrollClass">
          <nav class="nav-links">
            <ul class="nav-list">
              <li class="nav-item" v-on:mouseover="hoverTo(0)"><a href="#" v-bind:class="hover[0]"><h5 id="0" value=0>{{navList.Home}}</h5></a></li>
              <li class="nav-item" v-on:mouseover="hoverTo(1)"><a v-bind:class="hover[1]" @click="scrollToSection('aboutMe')"><h5 id="1">{{navList.About}}</h5></a></li>
              <li class="nav-item" v-on:mouseover="hoverTo(2)"><a v-bind:class="hover[2]" @click="scrollToSection('skills')"><h5 id="2">{{navList.Skills}}</h5></a></li>
              <li class="nav-item" v-on:mouseover="hoverTo(3)"><a v-bind:class="hover[3]" @click="scrollToSection('portfolio')"><h5 id="3">{{navList.Portfolio}}</h5></a></li>
              <li class="nav-item" v-on:mouseover="hoverTo(4)"><a v-bind:class="hover[4]" @click="scrollToSection('contacts')"><h5 id="4">{{navList.Contacts}}</h5></a></li>
              <li class="nav-icon" ><i class="fa-solid fa-xmark" v-on:click="scrollBTN(false)"></i></li>
            </ul>
          </nav>
        </div>
        <div class="bunner">
          <div class="header">
            <div class="name"><h2>{{ buner.Name }}</h2> <i class="fa-solid fa-bars" v-on:click="scrollBTN(true)"></i></div>
            <div class="info"><p>{{ buner.info.work }} <br>{{ buner.info.age }}, {{ buner.info.city }} </p></div>
            <div class="langs " v-bind:class="scrollClass">
              <ul class="lang-list">
                <li class="lang RU" v-on:click="locolaze('rus')"><a href="#" v-bind:class="rus">RU</a></li>
                <li class="lang ENG" v-on:click="locolaze('eng')"><a href="#" v-bind:class="eng">ENG</a></li>
              </ul></div>
          </div>
          <div class="photo">
            <img src="../assets/img/photo.png" alt="">
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  name: "Header",
  data:()=>{
    return{
      rus: "non",
      eng: "active",
      scroll:false,
      scrollClass:"",
      navList: {},
      hover:["active","","","",""],
      buner:{
        info:{}
      },
    }
  },
  methods:{
    locolaze(lang){
      this.$store.state.lang = lang
      switch (lang){
        case"rus":
          this.rus='active'
          this.eng='pasive'
          this.$emit('locolazing')
         this.writhInfo()
          break;
        case"eng":
          this.eng='active'
          this.rus='pasive'
          this.$emit('locolazing')
          this.writhInfo()
          break;
      }
    },
    writhInfo(){
      setTimeout(()=>{
        this.navList= this.$store.state.header.NavList
        this.buner= this.$store.state.header.Buner
      },200)

    },
    scrollToSection(sectionId) {
      this.scrollBTN(false)
      var section = document.getElementById(sectionId);
      if (section) {
        // Используйте smooth behavior для плавного скролла
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    sleep (milliseconds) {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    },
    async hoverTo(item){
      let a
      for (let i = 0; i < 5; i++) {
        if(this.hover[i] == "active"){
          a=i
        }
      }
      if (a<item){
        for (let i = a; i <= item; i++) {
          this.hover[i] = "active"
          this.hover[i-1] = "pass"
         await this.sleep(50)
        }
      }
      else {
        for (let i = a; i >= item; i--) {
          this.hover[i] = "active"
          this.hover[i+1] = "pass"
          await this.sleep(50)

        }
      }

    },
    scrollBTN(scroll){
      if (scroll){
        this.scrollClass='scroll'
        document.body.style.overflow = 'hidden';

      }
      else{
        this.scrollClass='not'
        document.body.style.overflow = ''

      }
    }
    },
  mounted() {
    this.writhInfo()
  }
}
</script>

<style scoped lang="less">

@Active: #070707;
@Pasive: #828282;

header{
  margin-bottom: 50px;
.nav-bar{
  padding: 32px 0;
  border-bottom: 1px solid #828282;
.nav-list{
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
.nav-item{
  list-style: none;

a{
  color: @Pasive;
  text-decoration: none;
h5{
  font-family: Gilroy-Bold;
  font-size: 18px;
  line-height: 22.28px;
  margin: 0;
}
}
.active{
  color: @Active;
}

}
.nav-icon{

  display: none;
}
}
  .nav-list:hover{
    cursor: pointer;
  }
}
.bunner{
.header{
  margin: 40px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
.name{
  width: 125px;
h2{
  font-family: Gilroy-Bold;
  font-size: 47.34px;
  line-height: 58.61px;
  color: @Active;
}
i{
  display: none;
}
}
.info{
p{
  margin: 0;
  font-family: Gilroy-Medium;
  font-size: 18px;
  line-height: 21.83px;
  color: @Active;
}

}
.langs{
.lang-list{
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  transform: rotate(-90deg);
.RU{
  border-right: 2px solid @Active;
}
.lang{
  padding: 5px;
  list-style: none;
  font-family: Gilroy-Bold;
  font-size: 16px;
  line-height: 19.81px;
a{
  color: @Pasive;
  text-decoration: none;
}
.active{
  color: @Active;
}

}
}
}
}
.photo{
  width: 100%;
  height: 35em;
  overflow: hidden;
img{
  width: 100%;
  height: auto;
  position: relative;
  top: -900px;
}
}
}
}



@media screen and (max-width: 431px) {
  header{
    .nav-bar{
      background: white;
      z-index: 1;
      padding: 30px 28px 57px;
      position: relative;
      transition: 0.5s;
      left: -100vw;
      height: 100vh;
      width: 100vw;
      border: none;
      .nav-list{
        flex-direction: column;
        .nav-item{
          margin: 34px 0;
          a{

            h5{
              font-size: 34px;
              line-height: 42px;
            }
          }
        }
        .nav-icon{
          font-size: 34px;
          color: @Pasive;
          display: block;
          position: relative;
          top: -33rem;
          text-align: right;
        }
      }
    }
    .scroll{
      left: 0;
    }
    .bunner{
      padding-top: 45px;
      position: relative;
      top: -100vh;
      .header{
        margin: 0;
        flex-direction: column;
        align-items: flex-start;
        .name{
          i{
            display: block;
            position: absolute;
            top: 65px;
            left: 350px;
            font-size: 32px;
          }
        }
        .info{
          margin: 23px 0 37px;
        }
        .langs{
          position: absolute;

          left: -100vw;
          .lang-list{
            transform: rotate(-90deg);
            .RU{
              border-right: 5px solid @Active;
            }
            .lang{
              a, h6{
                font-size: 34px;
                line-height: 42px;
              }
            }
          }
        }
        .scroll{
          left: 250px;
          z-index: 2;
          top: 65vh;
        }
      }
      .photo{
        height: 45em;
        img{
          width: 100%;
          top: -150px;
        }
      }

    }


  }
}

</style>