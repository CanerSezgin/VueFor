<template>

    <div v-if="opts">
        <v-text-field
            class="mt-1"
            v-if="!opts.isPreview"
            :outlined="opts.type === 'outlined'"
            :filled="opts.type === 'filled'"
            :solo="opts.type === 'solo'"
            v-model="opts.form[opts.key]"
            :label="opts.label"
        ></v-text-field>

        <!-- Preview -->
        <v-text-field
            v-if="opts.isPreview"
            :outlined="opts.type === 'outlined'"
            :filled="opts.type === 'filled'"
            :solo="opts.type === 'solo'"
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
