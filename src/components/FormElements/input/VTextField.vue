<template>

    <div v-if="opts">

        <v-text-field
            v-if="!opts.isPreview"
            v-model="opts.form[opts.key]"
            :label="opts.label"
        ></v-text-field>

        <!-- Preview -->
        <v-text-field
            v-if="opts.isPreview"
            :label="opts.label"
        ></v-text-field>

    </div>

</template>

<script>
export default {
    props: ["opts"]
};
</script>

<style lang="scss" scoped></style>
