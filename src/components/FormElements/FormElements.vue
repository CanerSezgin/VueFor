<template>
    <component :is="opts.component" :opts="opts"></component>
</template>

<script>
import SimpleText from '@/components/FormElements/static/SimpleText';

import VTextField from '@/components/FormElements/input/VTextField';
import VTextArea from '@/components/FormElements/input/VTextArea';
import VCombobox from '@/components/FormElements/input/VCombobox';
import VSelect from '@/components/FormElements/input/VSelect';
import VCheckbox from '@/components/FormElements/input/VCheckbox';

    export default {
        components: {
            SimpleText,

            VTextField,
            VTextArea,
            VCombobox,
            VSelect,
            VCheckbox
        },
        props: ["opts"],
        data() {
            return {
                SimpleText: "SimpleText",

                VTextField: "VTextField",
                VTextArea: "VTextArea",
                VCombobox: "VCombobox",
                VSelect: "VSelect",
                VCheckbox: "VCheckbox"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>