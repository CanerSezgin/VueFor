<template>
<div>
    <component :is="component" :element="element" :error="error"></component>
    <v-radio-group v-model="element.type" v-if="category === 'input'">
        <v-radio label="Regular" color="cyan" value="regular"></v-radio>
        <v-radio label="Solo" color="cyan" value="solo"></v-radio>
        <v-radio label="Outlined" color="cyan" value="outlined"></v-radio>
        <v-radio label="Filled" color="cyan" value="filled"></v-radio>
    </v-radio-group>
    {{error}}

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
        props: ["component", "element", "category", "error"],
        data() {
            return {
                SimpleText: "SimpleText",

                VTextField: "VTextField",
                VTextArea: "VTextArea",

            }
        },
    }
</script>