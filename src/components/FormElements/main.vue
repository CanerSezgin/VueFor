<template>
    <component :is="component" :opts="opts"></component>
</template>

<script>
import SimpleText from '@/components/FormElements/html/SimpleText';
import VTextField from '@/components/FormElements/inputs/VTextField';
    export default {
        components: {
            SimpleText,
            VTextField
        },
        props: ["component", "opts"],
        data() {
            return {
                VTextField: "VTextField",
                SimpleText: "SimpleText"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>