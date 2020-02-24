<template>
    <div v-if="opts">
        <v-combobox
            class="mt-1"
            v-if="!opts.isPreview"
            :label="opts.label"
            v-model="opts.form[opts.key]"
            :items="opts.items"
            :multiple="false"
            :outlined="opts.type === 'outlined'"
            :filled="opts.type === 'filled'"
            :solo="opts.type === 'solo'"
        ></v-combobox>

        <!-- Preview -->
        <v-combobox
            class="mt-1"
            v-if="opts.isPreview"
            :label="opts.label"
            :items="opts.items"
            :multiple="false"
            :outlined="opts.type === 'outlined'"
            :filled="opts.type === 'filled'"
            :solo="opts.type === 'solo'"
        ></v-combobox>
    </div>
</template>

<script>
export default {
    props: ["opts"]
};
</script>

<style lang="scss" scoped></style>
