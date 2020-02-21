<template>
<div>
    <component :is="component" :element="element"></component>
    <v-radio-group v-model="element.type" v-if="category === 'input'">
        <v-radio label="Regular" color="blue" value="regular"></v-radio>
        <v-radio label="Solo" color="blue" value="solo"></v-radio>
        <v-radio label="Outlined" color="blue" value="outlined"></v-radio>
        <v-radio label="Filled" color="blue" value="filled"></v-radio>
    </v-radio-group>

    {{element}}
</div>
</template>

<script>
import SimpleText from '@/components/FormManager/AdditionalProps/static/SimpleText';

import VTextField from '@/components/FormManager/AdditionalProps/input/VTextField';
import VTextArea from '@/components/FormManager/AdditionalProps/input/VTextArea';

    export default {
        components: {
            SimpleText,

            VTextField,
            VTextArea
        },
        props: ["component", "element", "category"],
        data() {
            return {
                SimpleText: "SimpleText",

                VTextField: "VTextField",
                VTextArea: "VTextArea",

            }
        },
    }
</script>