<template>
    <div class="px-4">
        <div class="mx-0 my-4 shadow px-3 py-3 bg-white" style="overflow-x: auto;">
            <h6 class="font-weight-bold py-3 px-2">{{ title }}:</h6>
            <table class="table table-responsive-md w-100 striped" style="overflow: auto;" v-if="table.length > 0" >
                <thead>
                    <tr>
                        <th class="font-weight-bold border-0 py-4">#</th>
                        <th v-for="(row, col) in table[0]" :key="col" class="font-weight-bold border-0 py-4">{{ col }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, i) in table" :key="i">
                        <td class="py-4">{{ i+1 }}.</td>
                        <td v-for="(rowField, j) in row" :key="j" class="py-4">
                            <span class="text-sm" v-if="rowField.type == 'TEXT'">{{ rowField.name }}</span>
                            <button 
                            :data-toggle="'modal'" :data-target="'#' + rowField.name.toLowerCase() + '-modal'"
                            @click="$emit(rowField.name)" v-else-if="rowField.type == 'BUTTON'" class="btn btn-primary text-sm px-4">{{ rowField.name }}</button>
                            <span class="text-sm" v-else-if="rowField.type == 'STATUS'"> 
                                <span class="text-success" v-if="rowField.status == 'COMPLETED'">{{ rowField.name }}</span>
                                <span class="text-primary lighten-2" v-else-if="rowField.status == 'PENDING'">{{ rowField.name }}</span>
                                <span class="text-danger lighten-2" v-else-if="rowField.status == 'CANCELLED'">{{ rowField.name }}</span>
                            </span>
                            <span v-else-if="rowField.type == 'RATING'" class="d-flex">
                                <button class="btn mdi mdi-star px-0 transparent btn-flat" :key="i" :class="i < rowField.name ? 'text-warning' : 'text-super-light'" v-for="(star, i) in 5"></button>
                            </span>
                        </td>
                        
                    </tr>
                </tbody>
            </table>           
        </div>

    </div>
</template>

<script>
export default {
    props: {
        table: {
            required: true,
            default: []
        },
        title: {
            required: false,
            default: "Recent Details"
        }
    }
}
</script>

<style>

</style>