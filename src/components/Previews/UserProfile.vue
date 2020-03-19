<template>
    <v-card
        class="px-4 container"
        :style="{
            gridTemplateRows: 'repeat(10, 40px [row-start])',
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
        }"
    >
        <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 5 / 3 / 9' }">
            <h2>User Profile Form</h2>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '3 / 1 / 5 / 6' }">
            <v-text-field
                v-model="form['name']"
                label="First Name"
                regular
            ></v-text-field>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 1 / 7 / 6' }">
            <v-text-field
                v-model="form['surname']"
                label="Last Name"
                regular
            ></v-text-field>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '3 / 7 / 5 / 12' }">
            <v-text-field
                v-model="form['address1']"
                label="Address 1"
                regular
            ></v-text-field>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 7 / 7 / 12' }">
            <v-text-field
                v-model="form['address2']"
                label="Address 2"
                regular
            ></v-text-field>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '7 / 7 / 9 / 10' }">
            <v-select
                v-model="form['city']"
                label="City"
                :items="[
                    'New York',
                    'Los Angeles',
                    'Chicago',
                    'Houston',
                    'Phoenix'
                ]"
                :multiple="false"
                regular
            ></v-select>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '7 / 10 / 9 / 12' }">
            <v-text-field
                v-model="form['zipcode']"
                label="Zip Code"
                regular
            ></v-text-field>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '9 / 7 / 11 / 12' }">
            <v-checkbox
                v-model="form['isPreferred']"
                label="Set as my preferred address"
            ></v-checkbox>
        </div>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        };
    }
};
</script>

<style lang="scss" scoped></style>
