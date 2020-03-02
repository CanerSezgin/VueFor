<template>
<!-- So similar to VCheckbox, if you make any changes, make sure you have done for the VCheckbox as well -->
    <div v-if="opts">
        <v-switch
            class="mt-1"
            v-if="!opts.isPreview"
            v-model="opts.form[opts.key]"
            :label="opts.label"
        ></v-switch>

        <!-- Preview -->
        <v-switch
            v-if="opts.isPreview"
            :label="opts.label"
        ></v-switch>

    </div>

</template>

<script>
export default {
    props: ["opts"]
};
</script>

<style lang="scss" scoped></style>
