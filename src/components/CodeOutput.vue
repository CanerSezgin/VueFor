<template>
    <div>

<v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(11, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 1 / 3 / 13'}">
    
            <h4>dsfsdfsdf</h4>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '3 / 1 / 5 / 13'}">
    
            <v-checkbox
                v-model="form['dsfdsfdsafdsf']"
                label="dsfdsaf"
            ></v-checkbox>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 1 / 7 / 7'}">
    
            <v-select
                v-model="form['dsfsfd']"
                label="dsfdsf"
                :items='["erewr","dfssdf","dsfdsf"]'
                :multiple="false"
                regular
            ></v-select>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 9 / 10 / 12'}">
    
            <v-switch
                v-model="form['sddsfdfs']"
                label="dsf"
            ></v-switch>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '10 / 1 / 12 / 13'}">
    
            <v-switch
                v-model="form['wqewqe']"
                label="sdf"
            ></v-switch>
            
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

export default {
    created() {
        console.log(
            this.getTemplate()
        )
    },
    data() {
        return {
            layout: [ { "x": 0, "w": 12, "h": 2, "minH": 1, "maxH": 12, "element": { "type": "h4", "desc": "dsfsdfsdf", "category": "static", "component": "SimpleText" }, "i": 0, "y": 0, "moved": false }, { "x": 0, "w": 12, "h": 2, "minH": 1, "maxH": 12, "element": { "label": "dsfdsaf", "key": "dsfdsfdsafdsf", "category": "input", "component": "VCheckbox" }, "i": 1, "y": 2, "moved": false }, { "x": 0, "w": 6, "h": 2, "minH": 2, "maxH": 2, "element": { "type": "regular", "items": [ "erewr", "dfssdf", "dsfdsf" ], "multiple": false, "label": "dsfdsf", "key": "dsfsfd", "category": "input", "component": "VSelect" }, "i": 2, "y": 4, "moved": false }, { "x": 8, "w": 3, "h": 5, "minH": 1, "maxH": 12, "element": { "label": "dsf", "key": "sddsfdfs", "category": "input", "component": "VSwitch" }, "i": 3, "y": 4, "moved": false }, { "x": 0, "w": 12, "h": 2, "minH": 1, "maxH": 12, "element": { "label": "sdf", "key": "wqewqe", "category": "input", "component": "VSwitch" }, "i": 4, "y": 9, "moved": false } ],
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
