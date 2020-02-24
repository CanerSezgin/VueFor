<template>
    <component :is="opts.component" :opts="opts"></component>
</template>

<script>
import SimpleText from '@/components/FormElements/static/SimpleText';

import VTextField from '@/components/FormElements/input/VTextField';
import VTextArea from '@/components/FormElements/input/VTextArea';
import VCombobox from '@/components/FormElements/input/VCombobox';

    export default {
        components: {
            SimpleText,

            VTextField,
            VTextArea,
            VCombobox
        },
        props: ["opts"],
        data() {
            return {
                SimpleText: "SimpleText",

                VTextField: "VTextField",
                VTextArea: "VTextArea",
                VCombobox: "VCombobox"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>