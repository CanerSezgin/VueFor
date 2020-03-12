<template>
    <div>
        <FormGenerator :layout="layout" />
    </div>
</template>

<script>
import FormGenerator from '@/components/FormGenerator'
import PreMadeLayoutsJson from '@/data/PreMadeLayouts'

    export default {
        components: {
            FormGenerator
        },
        data() {
            return {
                PreMadeLayoutsJson,
                layout: []
            }
        },
        created() {
            const name = this.$route.params.layout
            this.layout = this.PreMadeLayoutsJson[name].layout
        },

    }
</script>

<style lang="scss" scoped>

</style>