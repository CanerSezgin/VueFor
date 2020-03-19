<template>
    <v-card
        class="px-4 container"
        :style="{
            gridTemplateRows: 'repeat(21, 40px [row-start])',
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
        }"
    >
        <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 1 / 2 / 13' }">
            <h2>Website Survey</h2>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '2 / 1 / 3 / 13' }">
            <h4>
                Please take a moment to complete this brief survey. Your
                response will greatly help us improve our website
            </h4>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '8 / 1 / 13 / 13' }">
            <v-radio-group
                v-model="form['browser']"
                label="What browser do you use ?"
            >
                <v-radio
                    v-for="(item, index) in [
                        'Google Chrome',
                        'Firefox',
                        'IE',
                        'Safari',
                        'Opera'
                    ]"
                    :key="index"
                    :label="item"
                    :value="item"
                ></v-radio>
            </v-radio-group>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '3 / 1 / 8 / 13' }">
            <v-radio-group
                v-model="form['hear']"
                label="How did you hear about this website ?"
            >
                <v-radio
                    v-for="(item, index) in [
                        'Social Media',
                        'Advertising',
                        'Search Engine',
                        'Friend'
                    ]"
                    :key="index"
                    :label="item"
                    :value="item"
                ></v-radio>
            </v-radio-group>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '13 / 1 / 17 / 13' }">
            <v-radio-group
                v-model="form['device']"
                label="Which device did you use to access this website ?"
            >
                <v-radio
                    v-for="(item, index) in [
                        'Desktop / Laptop',
                        'Pad Devices',
                        'Mobile Devices'
                    ]"
                    :key="index"
                    :label="item"
                    :value="item"
                ></v-radio>
            </v-radio-group>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '17 / 1 / 22 / 13' }">
            <v-radio-group
                v-model="form['satisfied']"
                label="Are you satisfied that you found out the website ?"
            >
                <v-radio
                    v-for="(item, index) in [
                        'Very Satisfied',
                        'Satisfied',
                        'Neutral',
                        'Unsatisfied',
                        'Very Unsatisfied'
                    ]"
                    :key="index"
                    :label="item"
                    :value="item"
                ></v-radio>
            </v-radio-group>
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
