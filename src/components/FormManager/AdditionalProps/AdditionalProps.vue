<template>
    <component :is="component" :element="element"></component>
</template>

<script>
import SimpleText from '@/components/FormManager/AdditionalProps/static/SimpleText';
import VTextField from '@/components/FormManager/AdditionalProps/input/VTextField';
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