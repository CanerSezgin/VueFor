<template>

    <div v-if="opts">
        <v-textarea
            :auto-grow="false"
            class="mt-1"
            v-if="!opts.isPreview"
            :label="opts.label"
            v-model="opts.form[opts.key]"

            :outlined="opts.type === 'outlined'"
            :filled="opts.type === 'filled'"
            :solo="opts.type === 'solo'"

        ></v-textarea>

        <!-- Preview -->
        <v-textarea
            :auto-grow="false"
            class="mt-1"
            v-if="opts.isPreview"
            :label="opts.label"

            :outlined="opts.type === 'outlined'"
            :filled="opts.type === 'filled'"
            :solo="opts.type === 'solo'"

        ></v-textarea>

    </div>

</template>

<script>
export default {
    props: ["opts"]
};
</script>

<style lang="scss" scoped></style>
