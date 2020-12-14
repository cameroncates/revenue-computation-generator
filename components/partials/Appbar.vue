<template>
    <div>
        <nav class="transparent z-depth-0">
            <div class="nav-wrapper">
                <nuxt-link to="/" class="brand-logo text-center text-black">
                    <h2 class="archivo-font mb-0 text-primary text-center">Revenue</h2>
                    <h6 class="text-center">Computation Generator</h6>
                </nuxt-link>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger black-text"><i class="mdi mdi-menu"></i></a>
                <ul class="right hide-on-med-and-down">
                    <li>
                        <a class="text-white transparent btn mdi mdi-magnify btn-flat text-black p-0 mt-1"></a>
                    </li>
                    <li v-for="(link, i) in links" :key="i">
                        <a href="" class="black-text">{{link.name}}</a>
                    </li>
                    <li>
                        <div v-if="user.username" class="d-flex align-items-center mb-4 px-2">
                            <div>
                                <img class="bg-white" :src="profilePhoto" alt="" width="60px">
                            </div>
                            <div class="px-2">
                                <button href='#' 
                                    data-target='appbar-dropdown' 
                                    class="mb-0 btn btn-flat transparent font-weight-bold dropdown-trigger mr-4">Mr. {{ user.username }}</button>
                                <!-- Dropdown Structure -->
                                <ul id='appbar-dropdown' class='dropdown-content'>
                                    <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
                                    <li><nuxt-link to="/">Notification</nuxt-link></li>
                                    <li><a 
                                    data-toggle="modal" data-target="#logout-modal"
                                    href="javascript:void(0)">Logout</a></li>
                                </ul>                                
                            </div>
                        </div>                        
                        <nuxt-link v-else to="/login" class="waves-effect waves-light text-white btn bg-primary px-5">Login</nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <li v-for="(link, i) in links" :key="i">
                <a href="" class="black-text">{{link.name}}</a>
            </li>
        </ul>      
    </div>
</template>

<script>

import profilePhoto from '../../assets/images/user_icon.png'
import logo from "@/assets/svg/logo-dark.svg"
export default {

    head () {
        return {
        }
    },

    data () {
        return {
            profilePhoto: profilePhoto,
            user: {},
            logo: logo,
            links: [
                { name: "Repairs" },
                { name: "About us" },
                { name: "Partnership" },
                { name: "Location" },
                { name: "Support" },
                { name: "Contact us" },
            ]
        }
    },

    methods: {

    },

    mounted () {

        $(document).ready(function(){
        $('.dropdown-trigger').dropdown({ constrainWidth: false });
            $('.sidenav').sidenav();
        });     
        
        if (this.getCookie("rcs-localstorage")) {
            this.user = this.getCookie("rcs-localstorage")
        }

    }
}
</script>

<style>
a:hover {
    text-decoration: none !important;
}
nav.transparent * {
    color: rgba(0,0,0,1);
}
</style>