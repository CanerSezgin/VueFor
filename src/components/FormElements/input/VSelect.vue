<template>
<!-- So similar to VSelect, if you make any changes, make sure you have done for the VSelect as well -->
    <div v-if="opts">
        <v-select
            class="mt-1"
            v-if="!opts.isPreview"
            :label="opts.label"
            v-model="opts.form[opts.key]"
            :items="opts.items"
            :multiple="opts.multiple"
            :outlined="opts.type === 'outlined'"
            :filled="opts.type === 'filled'"
            :solo="opts.type === 'solo'"
        ></v-select>

        <!-- Preview -->
        <v-select
            class="mt-1"
            v-if="opts.isPreview"
            :label="opts.label"
            :items="opts.items"
            :multiple="opts.multiple"
            :outlined="opts.type === 'outlined'"
            :filled="opts.type === 'filled'"
            :solo="opts.type === 'solo'"
        ></v-select>
    </div>
</template>

<script>
export default {
    props: ["opts"],
    computed: {
        multiple() {
            return this.opts ? this.opts.multiple : "N.A.";
        }
    },
    watch: {
        multiple(val) {
            if (val !== "N.A.") {
                if (this.opts.form && this.opts.form[this.opts.key]) {
                    this.opts.form[this.opts.key] = val ? [] : "";
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
