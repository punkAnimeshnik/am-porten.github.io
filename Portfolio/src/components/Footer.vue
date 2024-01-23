<template>
  <footer>
    <div class="contacts">
      <div class="container">
        <div class="row">
          <div class="title">
            <h3>{{ title }}</h3>
          </div>
          <div class="discript">
            <p>{{ discript1 }} <br> {{ discript2 }}</p>
          </div>
          <div class="links">
            <a href="https://www.linkedin.com/in/илья-коломиец-130551209/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://t.me/Punk_Animeshnik"><i class="fa-brands fa-telegram"></i></a>
            <a href="https://www.instagram.com/alukard1999/"><i class="fa-brands fa-instagram"></i></a>
            <a href="mailto:ilia.kolomiiets2015@gmail.com"><i class="fa-regular fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data:()=>{
    return{
      title: "",
      discript1:"",
      discript2:""
    }
  },
  methods:{
    writhInfo(){
      setInterval(()=>{
        this.title = this.$store.state.footer.title
        this.discript1 = this.$store.state.footer.discript1
        this.discript2 = this.$store.state.footer.discript2
      },100)

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



footer{
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
  .contacts{
    padding: 120px 0;
    .discript{
      padding: 20px 0 80px;
    }
    .links{

      display: flex;
      justify-content: center;
      a{
        color: @Active;
        font-size: 48px;
        padding: 0 10px;
      }
    }
  }
}



@media screen and (max-width: 431px) {
  footer{
    .contacts{
      position: relative;
      margin-top: -100vh;
      padding: 0 0 50px;
      width: 100vw;
    }
  }
}

</style>