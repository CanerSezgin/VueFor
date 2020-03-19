<template>
    <div>
        <v-btn color="pink" dark @click="getTemplate">Get Source Code</v-btn>
        <SourceCode 
            @closeDialog="dialog = false"
            :code="code" :dialog="dialog" />
    </div>
</template>

<script>

const getElementStr = item => {
    let FormElementStr;
    const element = item.element

    // Input Types
    const inputType = (element.category === 'input' && element.type) ? `${element.type}` : ''

    switch (element.component) {
        // Inputs
        case 'VTextField':
            FormElementStr = `
            <v-text-field
                v-model="form['${element.key}']"
                label="${element.label || ""}"
                ${inputType}
            ></v-text-field>
            `
            break;

        case 'VTextArea':
            FormElementStr = `
            <v-textarea
                v-model="form['${element.key}']"
                label="${element.label || ""}"
                :auto-grow="false"
                ${inputType}
            ></v-textarea>
            `
            break;

        case 'VCheckbox':
            FormElementStr = `
            <v-checkbox
                v-model="form['${element.key}']"
                label="${element.label || ""}"
            ></v-checkbox>
            `
            break;

        case 'VSwitch':
            FormElementStr = `
            <v-switch
                v-model="form['${element.key}']"
                label="${element.label || ""}"
            ></v-switch>
            `
            break;

        // TODO: Separate items from html template (put in data)
        case 'VCombobox':
            FormElementStr = `
            <v-combobox
                v-model="form['${element.key}']"
                label="${element.label || ""}"
                :items='${JSON.stringify(element.items)}'
                :multiple="${element.multiple}"
                ${inputType}
            ></v-combobox>
            `
            break;

        // TODO: Separate items from html template (put in data)
        case 'VSelect':
            FormElementStr = `
            <v-select
                v-model="form['${element.key}']"
                label="${element.label || ""}"
                :items='${JSON.stringify(element.items)}'
                :multiple="${element.multiple}"
                ${inputType}
            ></v-select>
            `
            break;
        
        // TODO: Separate items from html template (put in data)
        case 'VRadioButton':
            FormElementStr = `
            <v-radio-group 
                v-model="form['${element.key}']"
                label="${element.label || ""}"
            >
                <v-radio
                    v-for='(item, index) in ${JSON.stringify(element.items)}'
                    :key="index"
                    :label="item"
                    :value="item"
                ></v-radio>
            </v-radio-group>
            `
            break;

        // Statics
        case 'SimpleText': 
            FormElementStr = `
            <${element.type}>${element.desc || ""}</${element.type}>
            `
            break;

        default:
            break;
    }

    return `<div class="item-a ma-1 px-5" :style="{ gridArea: '${item.y+1} / ${item.x+1} / ${item.y+1+item.h} / ${item.x+1+item.w}'}">
    ${FormElementStr}
    </div>
    `
}

import SourceCode from '@/components/SourceCode'
export default {
    components: {
        SourceCode
    },
    props: ['layout'],
    data() {
        return {
            code: '',
            dialog: false
        };
    },
    methods: {
        getTemplate() {
            const lastRow = this.getLastRow()
            let response = ""; 
            this.layout.forEach(item => {
                response += getElementStr(item)
            });

            this.code = `<v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(${lastRow}, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    ${response}
</v-card>
`
            this.dialog = true
        },
        getLastRow() {
            let lastRow = 0
            this.layout.forEach(item => {
                if(item.y + item.h > lastRow){
                    lastRow = item.y + item.h
                }
            });
            return lastRow
        }
    },
};
</script>
