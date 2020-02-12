<template>

    <v-text-field
        v-if="opts"
        v-model="opts.form[opts.key]"
        :label="opts.label"
    ></v-text-field>

</template>

<script>
export default {
    props: ["opts"]
};
</script>

<style lang="scss" scoped></style>
