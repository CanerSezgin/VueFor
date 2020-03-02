<template>

    <div v-if="opts">
        <v-checkbox
            class="mt-1"
            v-if="!opts.isPreview"
            v-model="opts.form[opts.key]"
            :label="opts.label"
        ></v-checkbox>

        <!-- Preview -->
        <v-checkbox
            v-if="opts.isPreview"
            :label="opts.label"
        ></v-checkbox>

    </div>

</template>

<script>
export default {
    props: ["opts"]
};
</script>

<style lang="scss" scoped></style>
