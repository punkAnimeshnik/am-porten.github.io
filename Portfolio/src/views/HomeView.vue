<template>
  <div class="home">
    <Header v-if="loading" @locolazing="writhInfo"/>


    <main>
     <div class="aboutMe" v-bind:class="box[0]" ref="aboutMe" v-scroll="handleScroll( 300, 0)" id="aboutMe" >
        <div class="container">
          <div class="row">
            <div class="title">
              <h3>{{ about.title }}</h3>
            </div>
            <div class="discript">
              <p>{{ about.discript_11}} <br> {{ about.discript_12}} </p>
              <p>{{ about.discript_21}} <br>{{ about.discript_22}}</p>
              <p>{{ about.discript_31}}<br>{{ about.discript_32}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="skills" v-bind:class="box[1]" ref="skills" v-scroll="handleScroll( 1000, 1)" id="skills">
        <div class="container">
          <div class="row">
            <div class="title">
              <h3>{{ skills.title }}</h3>
            </div>
            <div class="discript">
              <p>{{ skills.descript }}</p>
            </div>
           <skill-slider/>
          </div>
        </div>
      </div>
      <div class="portfolio" v-bind:class="box[2]" ref="portfolio" v-scroll="handleScroll( 1800, 2)" id="portfolio">
        <div class="container">
          <div class="row">
            <div class="title">
              <h3>{{ portfolio.title }}</h3>
            </div>
            <div class="works-list">
              <div class="work">
                <a v-bind:href="portfolio.items.item1.URL">
                  <div class="photo"><img src="../assets/img/Porten.png" alt=""></div>
                  <div class="discript">
                    <p>{{portfolio.items.item1.discript}}</p>
                  </div>
                </a>
              </div>
              <div class="work">
                <a v-bind:href="portfolio.items.item2.URL">
                  <div class="photo"><img src="../assets/img/GrandTheatre.png" alt=""></div>
                  <div class="discript">
                    <p>{{portfolio.items.item2.discript}}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>

    <Footer v-if="loading" id="contacts" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import skillSlider from "@/components/skillSlider";


export default {
  name: 'HomeView',
  components: {
    Footer,
    Header,
    skillSlider
  },


  data:()=>{
    return{
      box:["unbox","unbox","unbox"],
      loading: false,
      about: {},
      skills: {},
      portfolio: {
        items:{
          item1:{},
          item2:{}

        }
      },

    }
  },



  methods:{
    scrollToSection(sectionId) {
      var section = document.getElementById(sectionId);
      if (section) {
        // Используйте smooth behavior для плавного скролла
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleScroll(start, classBox) {
              setInterval(()=>{
          if (window.scrollY > start) {
            this.box[classBox] = "box"
            }
          else{
            this.box[classBox] = "unbox"
          }
        },1000)
    },


    async writhInfo(){
     await this.$store.dispatch('Loading')
        this.about = this.$store.state.main.About
        this.skills = this.$store.state.main.Skills
        this.portfolio = this.$store.state.main.Portfolio
        this.portfolio = this.$store.state.main.Portfolio
        this.loading = true
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

main{
  .title{
    text-align: center;
    h3{
      margin: 0;
      font-family: Gilroy-Bold;
      font-size: 34px;
      line-height: 42.09px;
      color: @Active;
    }
  }
  .discript{

    text-align: center;
    p{
      margin: 0;
      font-family: Gilroy-Medium;
      font-size: 18px;
      line-height: 21.83px;
      color: @Active;
    }
  }
  .unbox {
    position: relative;
    opacity: 0;
    top: 100px;
    transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }
  .box {
    position: relative;
    opacity: 1;
    top:0;
    transform: translate3d(0, -10px, 0);
    transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  .aboutMe{
    margin: 125px 0 60px;
    padding: 100px;
    .title{
      margin-bottom: 50px;
    }
    .discript{
      p{
        margin: 18px 0 36px;
      }
    }
  }
  .red{
    background: red;
  }
  .skills{
    padding: 50px 0 110px;
    .title{
      margin-bottom: 70px;
    }


  }
  .portfolio{
    padding: 60px 0 0;
    .title{
      margin: 50px;
    }
    .works-list{
      .work{



        .photo{
          img{
            width: 100%;
          }
        }
        .discript{
          a{
            p{
              text-decoration: none;
            }
          }

          margin: 44px 0 100px;
        }
      }
    }
  }
}

@media screen and (max-width: 431px) {
  main{
    position: relative;
    top: -100vh;
    .aboutMe{
      margin: 0 0 50px;
    }
    .skills{
      width: 100vw;
      .skills-list{
        flex-direction: column;
        margin-top: 20px;
        .skill{
          margin: 30px 0;
          .icon{
            img{
              width: 256px;
              height: 256px;
            }
          }
        }
      }
    }
    .portfolio{
      padding: 0;
      width: 100vw;
      text-align: center;
      .title{
        margin: 50px 0;}
    }
  }
}

</style>
