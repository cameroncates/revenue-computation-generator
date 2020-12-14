<template>
  <div>
    <div class="py-2 pl-4 pr-2">
      <div class="py-4 px-2 shadow round-bottom-left  px-md-4 tranasition">
        <default-header />
        <div class="row mt-5">
          <div class="col s12 m6 push-m1 p-2">
            <h1 class="archivo-font mt-5 mt-md-0 font-100 text-center text-md-left text-md">
                <span class="position-relative">
                    <img :src="textRect" class="position-absolute d-none d-lg-block" style="bottom: 0px;">
                    <span class="text-primary text-md archivo-font font-100 position-relative " style="z-index: 100;">Here</span>
                </span> 
                when you
                <p class="position-relative d-inline-block p-0 m-0 ">
                    <img :src="textRect" class="position-absolute d-none d-lg-block" alt="" style="bottom: 0px;">
                    <span class="text-primary archivo-font text-md font-100 position-relative " style="z-index: 100;">need</span>
                </p> 
                us
            </h1>    
            <p class="my-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>        
            <button class="btn btn-primary shadow px-5">Repair Now <span class="mdi mdi-arrow-right ml-2"></span></button>
          </div>
          <div data-aos="fade-up" class="col s12 m5 d-none d-sm-block push-m1 text-center p-2">
            <img :src="toolBooth" alt="" style="width: 500px;">            
          </div>
        </div>
      </div>
    </div>
    <nuxt />

    <default-footer />
  </div>
</template>

<script>

import default_header from '@/components/partials/Appbar.vue'
import textRect from '../assets/svg/text-rect.svg'
import toolBooth from '../assets/images/tool-booth.jpg'
import AppFooter from '../components/partials/AppFooter.vue'
export default {
  components: {
    "default-header": default_header,
    "default-footer": AppFooter
  },
  data() {
    return {
      textRect: textRect,
      toolBooth: toolBooth
    }
  },
  mounted() {
    AOS.init();    
  }
}
</script>

<style>
</style>
