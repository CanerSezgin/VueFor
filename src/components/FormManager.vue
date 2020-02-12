<template>
    <div id="form-manager">
        <v-card dark class="pa-5">
            <v-row>
                <v-col>
                    <div>Form Element Category</div>
                    <v-radio-group v-model="category">
                        <v-radio
                            label="HTML"
                            color="blue"
                            value="html"
                        ></v-radio>
                        <v-radio
                            label="Inputs"
                            color="blue"
                            value="inputs"
                        ></v-radio>
                    </v-radio-group>
                </v-col>
                <v-col>
                    <v-select
                        v-model="isElementSelected"
                        :items="items"
                        item-text="label"
                        item-value="key"
                        label="Form Element"
                        outlined
                    ></v-select>
                </v-col>
            </v-row>

            <div v-if="isElementSelected">
                <v-row>
                    <v-col cols="12">
                        <h3>Additional Properties</h3>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            v-model="element.label"
                            label="Label"
                            required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <!-- TODO: Add Validation: Same Key can not be used -->
                        <!-- TODO: Add Validation: Key can not be null -->
                        <v-text-field
                            v-model="element.key"
                            label="Form Key"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </div>
        </v-card>

        <v-card flat class="mt-3" v-if="isElementSelected">
            <v-card dark>
                <v-card-title>Preview of The Form Element</v-card-title>
            </v-card>

            <div class="grid-item px-5 py-2">
                <v-text-field :label="element.label"></v-text-field>
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
                                />
                            </v-col>
                            <v-col cols="6" class="pr-3">
                                <NumberWithSuffix
                                    label="W"
                                    field="width"
                                    :form="elementOpts"
                                    :min="1"
                                    :max="12"
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
        isElementSelected: {{ isElementSelected }} <br />
        --------------------------  <br />
        element: {{element}} <br>
        elementOpts: {{elementOpts}} <br>
    </div>
</template>

<script>
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
    html: [new FormElementSelection("Paragraph", "p")],
    inputs: [new FormElementSelection("Text Field", "v-text-field")]
};

export default {
    props: [],
    components: {
        NumberWithSuffix
    },
    data() {
        return {
            element: {},
            elementOpts: {
                addToBottom: true,
                width: 12,
                height: 2
            },

            isElementSelected: false,

            // Choose Form Element
            category: null,
            items: []
        };
    },
    created() {
        // Set Form Element Category at the beginning.
        this.category = "html";
    },
    watch: {
        category(val) {
            this.items = formElements[val];
            this.isElementSelected = false;
        }
    },
    methods: {
        resetFormManager() {
            this.element = {};
            this.isElementSelected = false;
        },
        submit(e) {
            this.$emit('addToForm', {
                addToBottom: this.elementOpts.addToBottom,
                x: 0,
                w: parseInt(this.elementOpts.width),
                h: parseInt(this.elementOpts.height),
                element: {...e, desc: "aaaaaaaaaaaaaaaaaaaaaaa", type: "h2"}
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
