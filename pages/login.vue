<template>
    <div class="container">
        <div class="row shadow px-4 my-5 py-5">
            <h2 class="col s12 archivo-font text-center pt-4 pb-5">
                Hello, <span class="text-primary archivo-font">Welcome Back!</span> <br>
                Login to access your account
            </h2>
            <div class="row">
                <div class="col s12 m6 push-m3 bg-light">
                    <div class="input-field border-bottom-0">
                        <input id="username" type="text" class="validate my-0" v-model="username">
                        <label class="pt-1" for="username">Username</label>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col s12 m6 push-m3 bg-light">
                    <div class="input-field border-bottom-0">
                        <input id="password" type="password" class="validate my-0" v-model="password">
                        <label class="pt-1"  for="password">Enter your Password</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <p class="col s12 m6 push-m3 px-0">
                    <label>
                        <input type="checkbox" class="filled-in" />
                        <span>Keep me signed in until I signed out</span>
                    </label>
                </p>      
                <p class="col s12 m3 text-right text-primary text-sm">Forget Password?</p>          
            </div>
            <div class="row">
                <div class="col s12 m6 push-m3">
                    <div v-if="loading" class="progress" style="height:5px">
                        <div class="indeterminate"></div>
                    </div>                    
                    <div v-else>
                        <button
                            :disabled="!username || !password"
                            @click="login()" class="btn btn-block btn-primary waves-effect waves-light">Sign in</button>
                        <p class="w-100 my-4 text-center d-none">Or</p>
                        <button class="btn btn-block red text-white waves-effect waves-light d-none">
                            <span class="mdi mdi-google mx-2"></span>
                            <span>Sign in with Google</span>
                        </button>
                        <button class="btn btn-block indigo darken-1 btn-primary waves-effect waves-light px-0 d-none">
                            <span class="mdi mdi-facebook mx-2"></span>
                            <span>Sign in with Facebook</span>                        
                        </button>
                        <div class="divider my-5"></div>
                        <p class="w-100 my-4 text-center">Don't have an account yet? <nuxt-link to="/register" class="text-primary wave-effect waves-light">Sign up</nuxt-link></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
        
</template>

<script>

import googleLogo from '../assets/svg/google-register.svg'
import facebookLogo from '../assets/svg/facebook-register.svg'

const axios = require('axios')

export default {
    data() {
        return {
            username: null,
            password: null,
            username_: "admin", password_: "admin",
            loading: false,
            
        }
    },
    methods: {
        login() {
            
            if (this.username == this.username_ && this.password == this.password_) {

                M.toast({ html: "Logged In Successfully"})

                this.setCookie("rcs-localstorage", {
                    username: this.username,
                    password: this.password
                })

                setTimeout(() => {
                    location.href = "/dashboard"
                }, 500);

            } else {
                M.toast({ html: "Incorrect Credentials"})

            }


        }
    }
}
</script>

<style>

</style>