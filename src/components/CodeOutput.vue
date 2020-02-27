<template>
    <div>

<v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(11, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 1 / 3 / 13'}">
    
            <v-select
                v-model="form['dsf']"
                label="dsfsdf"
                :items='["dsf","sdf","fdgfgfd","rewwerr"]'
                :multiple="false"
                outlined
            ></v-select>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '3 / 1 / 5 / 13'}">
    
            <p>dsffsdsdf dsfsdfssf fsdfsd</p>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 1 / 10 / 13'}">
    
            <v-textarea
                v-model="form['wqeqwe ddfdsf']"
                label="sdfsdf"
                :auto-grow="false"
                regular
            ></v-textarea>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '10 / 1 / 12 / 13'}">
    
            <v-select
                v-model="form['dsfs']"
                label="xzcxzcq"
                :items='["dsfsdf","dsfdsf","sad sad","fdg fdgfdg"]'
                :multiple="true"
                solo
            ></v-select>
            
    </div>
    
</v-card>

{{form}}
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

export default {
    created() {
        console.log(
            this.getTemplate()
        )
    },
    data() {
        return {
            layout: [ { "x": 0, "w": 12, "h": 2, "minH": 2, "maxH": 2, "element": { "type": "outlined", "items": [ "dsf", "sdf", "fdgfgfd", "rewwerr" ], "multiple": false, "label": "dsfsdf", "key": "dsf", "category": "input", "component": "VSelect" }, "i": 0, "y": 0, "moved": false }, { "x": 0, "w": 12, "h": 2, "minH": 1, "maxH": 12, "element": { "desc": "dsffsdsdf dsfsdfssf fsdfsd", "type": "p", "category": "static", "component": "SimpleText" }, "i": 1, "y": 2, "moved": false }, { "x": 0, "w": 12, "h": 5, "minH": 5, "maxH": 12, "element": { "type": "regular", "label": "sdfsdf", "key": "wqeqwe ddfdsf", "category": "input", "component": "VTextArea" }, "i": 2, "y": 4, "moved": false }, { "x": 0, "w": 12, "h": 2, "minH": 2, "maxH": 2, "element": { "type": "solo", "items": [ "dsfsdf", "dsfdsf", "sad sad", "fdg fdgfdg" ], "multiple": true, "label": "xzcxzcq", "key": "dsfs", "category": "input", "component": "VSelect" }, "i": 3, "y": 9, "moved": false } ],
            form: {}
        };
    },
    methods: {
        getTemplate() {
            const lastRow = this.getLastRow()
            let response = ""; 
            this.layout.forEach(item => {
                response += getElementStr(item)
            });

            return `<v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(${lastRow}, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    ${response}
</v-card>
`
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
