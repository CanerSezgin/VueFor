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
import VSwitch from '@/components/FormElements/input/VSwitch';
import VRadioButton from '@/components/FormElements/input/VRadioButton';

    export default {
        components: {
            SimpleText,

            VTextField,
            VTextArea,
            VCombobox,
            VSelect,
            VCheckbox,
            VSwitch,
            VRadioButton
        },
        props: ["opts"]
    }
</script>

<style lang="scss" scoped>

</style>