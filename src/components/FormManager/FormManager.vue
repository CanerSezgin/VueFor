<template>
    <div id="form-manager">
        {{error}}
        <v-card dark class="pa-5">
            <v-card-text class="white--text">
                <h3>Form Element Category</h3>
                <v-btn
                    v-show="selectedElement && !updateItem"
                    @click="resetFormManager"
                    color="pink"
                    dark
                    absolute
                    top
                    right
                    fab
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-text>
            <v-row no-gutters>
                <v-col>
                    <div></div>
                    <v-radio-group v-model="category">
                        <v-radio
                            label="Static"
                            color="cyan"
                            value="static"
                        ></v-radio>
                        <v-radio
                            label="Input"
                            color="cyan"
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

            <div v-if="selectedElement" class="mt-5">
                <v-row no-gutters>
                    <v-col cols="12">
                        <h3>Additional Properties</h3>
                    </v-col>
                </v-row>
                <!-- Additional Properties -->
                <AdditionalProps
                    :category="category"
                    :component="selectedElement"
                    :element="element"
                    :error="error"
                />
            </div>
        </v-card>

        <v-card flat class="mt-3" v-if="selectedElement">
            <v-card dark>
                <v-card-title>Preview of The Form Element</v-card-title>
            </v-card>

            <div class="grid-item px-5 py-2">
                <!-- Previev of The Form Element -->
                {{ element }} {{ selectedElement }}
                <FormElements
                    :opts="{
                        ...element,
                        component: selectedElement,
                        isPreview: true
                    }"
                />
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
                                    :min="elementOpts.minH || 1"
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
                        <v-btn
                            @click="
                                updateItem ? submit(element, 'update') : submit(element, 'add')
                            "
                            absolute
                            large
                            right
                            dark
                            color="pink"
                        >
                            <span v-if="updateItem">Update Element</span>
                            <span v-else>Add Element</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        category: {{ category }} <br />
        selectedElement: {{ selectedElement }} <br />
        -------------------------- <br />
        element: {{ element }} <br />
        elementOpts: {{ elementOpts }} <br />
    </div>
</template>

<script>
import FormElements from "@/components/FormElements/FormElements";
import AdditionalProps from "@/components/FormManager/AdditionalProps/AdditionalProps";
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
    input: [
        new FormElementSelection("Text Field", "VTextField"),
        new FormElementSelection("Text Area", "VTextArea")
    ]
};

export default {
    props: ["updateItem", "layout"],
    components: {
        FormElements,
        AdditionalProps,
        NumberWithSuffix
    },
    data() {
        return {
            error: null,
            updating: false,

            element: {},
            elementOpts: {},

            selectedElement: false,

            // Choose Form Element
            category: null,
            items: [],

            // Initials
            initials: {
                additionalProps: {
                    SimpleText: { type: "p" },
                    VTextField: { type: "regular" },
                    VTextArea: { type: "regular" }
                },
                elementOpts: {
                    VTextField: { minH: 2, maxH: 2, disableH: true },
                    VTextArea: { minH: 5, maxH: 12, disableH: false }
                }
            }
        };
    },
    computed: {
        selectedElementKey() {
            return this.category === 'input' ? this.element.key : null;
        },
        updateItemH() {
            return this.updateItem ? this.updateItem.h : null;
        },
        updateItemW() {
            return this.updateItem ? this.updateItem.w : null;
        },
        updateElementOptsH() {
            return this.elementOpts && this.elementOpts.height
                ? this.elementOpts.height
                : null;
        },
        updateElementOptsW() {
            return this.elementOpts && this.elementOpts.width
                ? this.elementOpts.width
                : null;
        }
    },
    created() {
        // Set Form Element Category at the beginning.
        this.category = "static";
        // Set Element Options
        this.resetFormManager();
    },
    watch: {
        category(val) {
            if (val) {
                this.items = formElements[val];
                if (!this.updating) {
                    this.resetFormManager();
                }
            }
        },
        selectedElement(val) {
            if (val) {
                if (!this.updating) {
                    console.log("set initial properties", val);

                    this.element = this.initials.additionalProps[val]
                        ? JSON.parse(
                              JSON.stringify(this.initials.additionalProps[val])
                          )
                        : {};
                }
                this.elementOpts = {
                    ...this.elementOpts,
                    ...this.initials.elementOpts[val]
                };

                if (this.elementOpts.minH > this.elementOpts.height) {
                    this.elementOpts.height = this.elementOpts.minH;
                }

                if (this.elementOpts.maxH < this.elementOpts.height) {
                    this.elementOpts.height = this.elementOpts.maxH;
                }

                console.log(
                    this.elementOpts,
                    val,
                    this.initials.elementOpts[val],
                    this.elementOpts
                );
            }
            if (this.updating) {
                this.updating = false;
            }
        },
        selectedElementKey(val){
            if(val){
                this.error = this.checkInputKey(val)
            }
        },
        updateItem(val) {
            this.updating = true;
            if (val) {
                console.log(val, "update");
                this.updateFormManager(val);
            }
        },
        updateItemW(val) {
            if (val) {
                this.elementOpts.width = val;
            }
        },
        updateItemH(val) {
            if (val) {
                this.elementOpts.height = val;
            }
        },
        updateElementOptsW(val) {
            if (val && this.updateItem) {
                this.$emit("changeWH", {
                    i: this.updateItem.i,
                    type: "w",
                    val: parseInt(val)
                });
            }
        },
        updateElementOptsH(val) {
            if (val && this.updateItem) {
                this.$emit("changeWH", {
                    i: this.updateItem.i,
                    type: "h",
                    val: parseInt(val)
                });
            }
        }
    },
    methods: {
        updateFormManager(val) {
            this.category = val.element.category;
            this.selectedElement = val.element.component;
            this.element = val.element;
            this.elementOpts = {
                addToBottom: true,
                width: val.w,
                height: val.h,
                minH: val.minH,
                maxH: val.maxH
            };
        },
        resetFormManager() {
            console.log("form reset");
            this.element = {};
            this.selectedElement = false;
            this.resetElementOpts();
        },
        resetElementOpts() {
            this.elementOpts = {
                addToBottom: true,
                width: 12,
                height: 2
            };
        },
        checkInputKey(key){
            let sameKey;
            if(this.updateItem){
                sameKey = this.layout.find(item => item.i !== this.updateItem.i && item.element.key === key) ? true : false;
            } else {
                sameKey = this.layout.find(item => item.element.key === key) ? true : false;
            }

            if(sameKey){
                return "Form contains already same 'key'. Use unique key."
            }

            return null
        },
        submit(element, action) {
            if(this.category === 'input'){
                if(!this.error){
                    if(this.element.key){
                        this[action](element)
                    } else {
                        this.error = "Form Key can not be empty."
                    }
                }
            } else {
                this[action](element)
            }
        },
        add(e) {
            this.$emit("addToForm", {
                addToBottom: this.elementOpts.addToBottom,
                x: 0,
                w: parseInt(this.elementOpts.width),
                h: parseInt(this.elementOpts.height),
                minH: parseInt(this.elementOpts.minH) || 1,
                maxH: parseInt(this.elementOpts.maxH) || 12,
                element: {
                    ...e,
                    key:
                        this.category === "input" && !e.key
                            ? `label${this.layout.length}`
                            : e.key,
                    category: this.category,
                    component: this.selectedElement
                }
            });
            this.resetFormManager();
        },

        update(e) {
            this.$emit("updateElement", {
                ...this.updateItem,
                h: parseInt(this.elementOpts.height),
                w: parseInt(this.elementOpts.width),
                minH: parseInt(this.elementOpts.minH) || 1,
                maxH: parseInt(this.elementOpts.maxH) || 12,
                element: {
                    ...e,
                    key:
                        this.category === "input" && !e.key
                            ? `label${this.updateItem.i}`
                            : e.key,
                    category: this.category,
                    component: this.selectedElement
                }
            });
            this.resetFormManager();
        }
    }
};
</script>

<style lang="css" scoped>
.grid-item {
    background: #b2dfdb;
    border: 1px dashed #6d4c41;
}
</style>
