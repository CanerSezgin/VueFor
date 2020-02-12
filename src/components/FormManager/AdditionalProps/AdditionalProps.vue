<template>
    <component :is="component" :element="element"></component>
</template>

<script>
import SimpleText from '@/components/FormManager/AdditionalProps/html/SimpleText';
import VTextField from '@/components/FormManager/AdditionalProps/inputs/VTextField';
    export default {
        components: {
            SimpleText,
            VTextField
        },
        props: ["component", "element"],
        data() {
            return {
                VTextField: "VTextField",
                SimpleText: "SimpleText"
            }
        },
    }
</script>