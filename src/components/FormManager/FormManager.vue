<template>
    <div id="form-manager">
        <v-card dark class="pa-5">
            <v-row>
                <v-col>
                    <div>Form Element Category</div>
                    <v-radio-group v-model="category">
                        <v-radio
                            label="Static"
                            color="blue"
                            value="static"
                        ></v-radio>
                        <v-radio
                            label="Input"
                            color="blue"
                            value="input"
                        ></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col>
                    <v-select
                        v-model="selectedElement"
                        :items="items"
                        item-text="label"
                        item-value="key"
                        label="Form Element"
                        outlined
                    ></v-select>
                </v-col>
            </v-row>

            <div v-if="selectedElement">
                <v-row no-gutters>
                    <v-col cols="12">
                        <h3>Additional Properties</h3>
                    </v-col>
                </v-row>
                <!-- Additional Properties -->
                <AdditionalProps :component="selectedElement" :element="element"/> 

            </div>
            
        </v-card>

        <v-card flat class="mt-3" v-if="selectedElement">
            <v-card dark>
                <v-card-title>Preview of The Form Element</v-card-title>
            </v-card>

            <div class="grid-item px-5 py-2">
                <!-- Previev of The Form Element -->
                <FormElements :opts="{...element, component: selectedElement, isPreview: true}" />
            </div>

            <v-card-text style="position: relative">
                <v-row>
                    <v-col cols="9">
                        <v-row no-gutters>
                            <v-col cols="12">
                                <v-switch
                                    v-model="elementOpts.addToBottom"
                                    :label="
                                        `Add To ${
                                            elementOpts.addToBottom
                                                ? 'Bottom'
                                                : 'Top'
                                        }`
                                    "
                                ></v-switch>
                            </v-col>
                            <v-col cols="6" class="pr-3">
                                <NumberWithSuffix
                                    label="H"
                                    field="height"
                                    :form="elementOpts"
                                    :min="1"
                                    :max="12"
                                    :disabled="elementOpts.disableH"
                                />
                            </v-col>
                            <v-col cols="6" class="pr-3">
                                <NumberWithSuffix
                                    label="W"
                                    field="width"
                                    :form="elementOpts"
                                    :min="1"
                                    :max="12"
                                    :disabled="elementOpts.disableW"
                                />
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    v-on="on"
                                    @click="submit(element)"
                                    absolute
                                    fab
                                    medium
                                    right
                                    dark
                                    color="pink"
                                >
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </template>
                            <span>Add Element to Form</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        category: {{ category }} <br />
        selectedElement: {{ selectedElement }} <br />
        --------------------------  <br />
        element: {{element}} <br>
        elementOpts: {{elementOpts}} <br>
    </div>
</template>

<script>
import FormElements from '@/components/FormElements/FormElements'
import AdditionalProps from '@/components/FormManager/AdditionalProps/AdditionalProps'
import NumberWithSuffix from "@/components/NumberWithSuffix";

class FormElementSelection {
    /**
     * @param {string} label
     * @param {string} key
     */
    constructor(label, key) {
        this.label = label;
        this.key = key;
    }
}

const formElements = {
    static: [new FormElementSelection("Simple Text", "SimpleText")],
    input: [new FormElementSelection("Text Field", "VTextField")]
};

export default {
    props: [],
    components: {
        FormElements,
        AdditionalProps,
        NumberWithSuffix
    },
    data() {
        return {
            element: {},
            elementOpts: {},

            selectedElement: false,

            // Choose Form Element
            category: null,
            items: [],
            
            // Initials
            initials: {
                additionalProps: {
                    SimpleText: {type: 'p'}
                },
                elementOpts: {
                    VTextField: {minH: 2, maxH: 2, disableH: true}
                }
            }
        };
    },
    created() {
        // Set Form Element Category at the beginning.
        this.category = "static";
        // Set Element Options
        this.resetFormManager();
    },
    watch: {
        category(val) {
            this.items = formElements[val];
            this.resetFormManager();
        },
        selectedElement(val){
            if(val){
                console.log("set initial properties", val)
                
                this.element = this.initials.additionalProps[val] ? 
                    JSON.parse(JSON.stringify(this.initials.additionalProps[val])) : 
                    {}

                this.elementOpts = {...this.initials.elementOpts[val], ...this.elementOpts}
            }
        }
    },
    methods: {
        resetFormManager() {
            console.log("form reset")
            this.element = {};
            this.selectedElement = false;
            this.resetElementOpts();
        },
        resetElementOpts() {
            this.elementOpts = {
                addToBottom: true,
                width: 12,
                height: 2
            }
        },
        submit(e) {
            this.$emit('addToForm', {
                addToBottom: this.elementOpts.addToBottom,
                x: 0,
                w: parseInt(this.elementOpts.width),
                h: parseInt(this.elementOpts.height),
                minH: parseInt(this.elementOpts.minH) || 1,
                maxH: parseInt(this.elementOpts.maxH) || 12,
                element: {...e, component: this.selectedElement}
            })
            this.resetFormManager()
        }
    }
};
</script>

<style lang="css" scoped>
.grid-item {
    background: greenyellow;
}
</style>
