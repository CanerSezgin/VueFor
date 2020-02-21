<template>
    <component :is="opts.component" :opts="opts"></component>
</template>

<script>
import SimpleText from '@/components/FormElements/static/SimpleText';

import VTextField from '@/components/FormElements/input/VTextField';
import VTextArea from '@/components/FormElements/input/VTextArea';
    export default {
        components: {
            SimpleText,

            VTextField,
            VTextArea
        },
        props: ["opts"],
        data() {
            return {
                SimpleText: "SimpleText",

                VTextField: "VTextField",
                VTextArea: "VTextArea",
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>