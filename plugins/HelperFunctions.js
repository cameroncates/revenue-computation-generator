import Vue from 'vue'
const path = require('path')
const moment = require('moment')
const mimetype = ["image/jepg", "image/png", "image/jpg", "image/svg+xml"]
Vue.mixin({
    methods:{
        setCookie(name,value,days) {
            value = JSON.stringify(value)
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        },
        getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length,c.length));
            }
            return null;
        },
        eraseCookie(name) {   
            document.cookie = name+'=; Max-Age=-99999999;';  
        },
        
        format_url(str) {
            if(str.split(" ").length > 1) {
                return str.split(" ").join("-").toLowerCase()
            } else {
                return str.toLowerCase()
            }
        },
        date_moment(date) {
            let now = this.date(),
                created = JSON.parse(date),
                start = moment([created.year, created.month, created.day]),
                end = moment([now.year, now.month, now.day])

                console.log(now, start, end, created)
            return start.from(end)
        },
        // posted(post) {
        //     post = post.split("-")
        //     let now = date(),
        //         start = moment([post[0], post[1], post[2]]),
        //         end = moment([now[0], now[1], now[2]])
        //     return start.from(end)
        
        // }        
        date() {
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            return {
                year, month, day
            }
        },
    }
})