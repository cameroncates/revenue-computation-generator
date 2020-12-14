<template>
    <div>
        <steps :step="0" />
        <offers :backBtn="true" :selectable="true" next='/2/select-device' />
    </div>
</template>

<script>
import Steps from '../../components/partials/Steps'
import Offers from '../../components/partials/Offers'
export default {

    components: {
        "steps": Steps,
        "offers": Offers,
    },

}
</script>

<style>

</style>