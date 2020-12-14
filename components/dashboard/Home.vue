<template>
    <div class="px-4">
        <h1 class="archivo-font">Order Details</h1>
        <div class="row mx-0 my-4">
            <div class="col l3 m6 s6 p-2" v-for="(ana, i) in analytics" :key="i">
                <div class="shadow px-2 py-4 bg-white border-radius-5">
                    <h5 class="text-center">{{ ana.name }}</h5>
                    <h1 class="text-primary text-center font-weight-bold"> #100 </h1>
                </div>
            </div>
        </div>        
        <div class="mx-0 my-4 px-3 py-3 bg-white">
            <div class="row">
                <div class="col l6 m12 s12 transition">
                    <div class="shadow">
                        <!--       Chart.js Canvas Tag -->
                        <canvas id="multiLineChart"></canvas>
                    </div>
                </div>
                <div class="col l3 m12 s12 transition">
                    <h5>Complaints</h5>
                    <div class="row mx-0" style="max-height:500px;overflow-y:auto">
                        <div class="col s12 p-2" v-for="(ana, i) in analytics" :key="i">
                            <div class="shadow px-3 py-4 bg-white border-radius-5">
                                <p class="text-sm text-center border-bottom pb-4">River is the best place for chilling out too . and this place is ussualy used for summer camp and you can fishing while summer campRiver is</p>
                                <h5 class="text-primary text-center font-weight-bold"> {{ana.value}} </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col l3 m12 s12 transition">
                    <div class="shadow">
                        <p>Active Tool Booths</p>
                    </div>
                </div>
            </div>
        </div>

        <vechile-record :table="dataTableOfVechileRecords()" title="Recently Detected Vechiles" @Details="$emit('details')" />

    </div>
</template>

<script>
import Table from '../partials/Table.vue';
export default {

    components: {
        "vechile-record": Table,
    },

    data() {
        return {
            analytics: [
                { name: "Total Vechiles", value: "TB# 1607789960148" },
                { name: "Total Tax Collected", value: "TB# 1607789960148" },
                { name: "Pending Complaints", value: "TB# 1607789960148" },
                { name: "Total Toll Booths", value: "TB# 1607789960148" },
            ]            
        }
    },
    methods: {
    },

    mounted() {



        this.createCrossChart({
            labels: ["January", "February", "March", "April", "May"],
            datasets: [{
                label: "Series A",
                data: [10, 30, 20, 40, 10],
                borderColor: "rgba(0,0,255,0.8)",
                backgroundColor: "rgba(0,0,255,0.5)"
            }, {
                label: "Series B",
                data: [25, 40, 10, 40, 30],
                borderColor: "rgba(255,0,0,0.8)",
                backgroundColor: "rgba(255,0,0,0.5)"
            }]
        })


        
    }
}
</script>

<style>

body{
  /* background-color: #666; */
}

#multiLineChart{
  background-color: wheat;
  border-radius: 6px;
}


</style>