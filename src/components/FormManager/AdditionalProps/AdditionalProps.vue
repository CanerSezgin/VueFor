<template>
    <div>
        <component
            :is="component"
            :element="element"
            :error="error"
        ></component>
        <v-radio-group v-model="element.type" v-if="category === 'input'">
            <v-row>
                <v-col cols="6">
                    <v-radio
                        label="Regular"
                        color="cyan"
                        value="regular"
                    ></v-radio>
                    <v-radio label="Solo" color="cyan" value="solo"></v-radio>
                </v-col>
                <v-col cols="6">
                    <v-radio
                        label="Outlined"
                        color="cyan"
                        value="outlined"
                    ></v-radio>
                    <v-radio
                        label="Filled"
                        color="cyan"
                        value="filled"
                    ></v-radio>
                </v-col>
            </v-row>
        </v-radio-group>
        {{ error }}

        {{ element }}
    </div>
</template>

<script>
import SimpleText from "@/components/FormManager/AdditionalProps/static/SimpleText";

import VTextField from "@/components/FormManager/AdditionalProps/input/VTextField";
import VTextArea from "@/components/FormManager/AdditionalProps/input/VTextArea";
import VCombobox from "@/components/FormManager/AdditionalProps/input/VCombobox";
import VSelect from "@/components/FormManager/AdditionalProps/input/VSelect";

export default {
    components: {
        SimpleText,

        VTextField,
        VTextArea,
        VCombobox,
        VSelect
    },
    props: ["component", "element", "category", "error"],
    data() {
        return {
            SimpleText: "SimpleText",

            VTextField: "VTextField",
            VTextArea: "VTextArea",
            VCombobox: "VCombobox"
        };
    }
};
</script>
