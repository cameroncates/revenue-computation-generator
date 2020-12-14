<template>
    <div>
        <div class="row p-4">
            <div class="col m4 px-3 py-5">
                <h4 class="mb-5 font-weight-bold text-center">Resolved Complaints</h4>
                <table class="striped">
                    <thead>
                        <th class="font-weight-bold">#</th>
                        <th class="font-weight-bold text-center">Tollbooth ID</th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1.</td>
                        <td class="text-center">TB# 1607789960148</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td class="text-center">TB# 1607789960148</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td class="text-center">TB# 1607789960148</td>
                    </tr>
                    </tbody>
                </table>            
            </div>
            <div class="col m8 px-3 border-left py-5">
                <h4 class="mb-5 font-weight-bold text-center">Still Active</h4>
                <div v-for="(complaint, i) in complaints" :key="i">
                    <div class="alert alert-dismissible fade show transition" :class="'alert-' + complaint.status" role="alert">
                        {{ complaint.name }}
                        <div class="close p-1 d-flex align-items-center">
                            <p class="d-inline mb-0 pb-0" style="transform:translateY(3px)">
                            <label class="mt-1">
                                <input @click="complaint.status = 'success'" type="checkbox" :disabled="complaint.status == 'success'" />
                                <span></span>
                            </label>
                            </p>                    
                            <button @click="complaint.hideDetails = !complaint.hideDetails" class="btn btn-flat transparent mdi mdi-information-variant p-0 mdi-24px mx-2"></button>
                            <button type="button" class="btn mdi mdi-close btn-flat transparent" data-dismiss="alert" aria-label="Close">
                            </button>                            
                        </div>
                        <div v-if="!complaint.hideDetails" class="animate__animated animate__zoomIn">
                            <hr>
                            <p>{{ complaint.details }}</p>
                        </div>
                    </div>            

                </div>
            </div>
        </div>
    </div>

</template>

<script>

import TitleVue from '../partials/Title.vue'
import CreateTollbooth from '../dashboard/CreateTollbooth.vue'
import TollboothList from './TollboothList.vue'
import DeleteTollbooth from './DeleteTollbooth.vue'
import UpdateTollbooth from './UpdateTollbooth.vue'

export default {

    components: {
        TitleVue,
        CreateTollbooth,
        TollboothList,
        DeleteTollbooth,
        UpdateTollbooth,

    },
    data() {
        return {
            complaints: [],
            crud: ["Resolved", "Still Active"]
        }
    },
    watch: {
    },    

    mounted() {

        this.complaints = [

            {
                name: "TB# 1607789960148", status: "info", hideDetails: true, details: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
            },
            
            {
                name: "TB# 1607789960148", status: "danger", hideDetails: true, details: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
            },
            
            {
                name: "TB# 1607789960148", status: "info", hideDetails: true, details: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
            },
            
            {
                name: "TB# 1607789960148", status: "warning", hideDetails: true, details: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
            },
            {
                name: "TB# 1607789960148", status: "danger", hideDetails: true, details: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
            },
            {
                name: "TB# 1607789960148", status: "info", hideDetails: true, details: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
            },
            {
                name: "TB# 1607789960148", status: "warning", hideDetails: true, details: "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content"
            },
        ]
    }
}
</script>

<style>

</style>