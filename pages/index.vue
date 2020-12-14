<template>
    <div>
        <steps :step="0" />
        <!-- <offers /> -->
        <about />
        <reviews />
        <contact />
        <get-started />
    </div>
</template>

<script>
import Steps from '../components/partials/Steps'
import Offers from '../components/partials/Offers'
import About from '../components/partials/AboutUs'
import Reviews from '../components/partials/Reviews'
import Contact from '../components/partials/ContactUs'
import GetStarted from '../components/partials/GetStarted.vue'
export default {

    components: {
        "steps": Steps,
        "offers": Offers,
        "about": About,
        "reviews": Reviews,
        "contact": Contact,
        "get-started": GetStarted
    },

    layout: 'LandingPage'
}
</script>

<style>

</style>