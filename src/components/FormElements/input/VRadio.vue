<template>
    <div v-if="opts">
         <v-radio-group 
            class="mt-1"
            v-if="!opts.isPreview"
            v-model="opts.form[opts.key]"
            :label="opts.label"
        >
            <v-radio
                v-for="(item, index) in opts.items"
                :key="index"
                :label="`${item}`"
                :value="item"
            ></v-radio>
            <v-alert v-if="!opts.items.length" type="error">
                There is no selected item in this "<b>Radio Box</b>"
            </v-alert>
        </v-radio-group>

        <!-- Preview -->
        <v-radio-group 
            v-if="opts.isPreview"

            :label="opts.label"
        >
            <v-radio
                v-for="(item, index) in opts.items"
                :key="index"
                :label="`${item}`"
                :value="item"
            ></v-radio>
        </v-radio-group>
    </div>
</template>

<script>
export default {
    props: ["opts"]
};
</script>

<style lang="scss" scoped></style>
