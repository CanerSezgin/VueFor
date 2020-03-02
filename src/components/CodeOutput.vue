<template>
    <div>

<v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(13, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 1 / 6 / 5'}">
    
            <h1>gfhhgf</h1>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 5 / 3 / 13'}">
    
            <v-text-field
                v-model="form['dfdsf']"
                label="ewrewr"
                filled
            ></v-text-field>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '6 / 1 / 8 / 5'}">
    
            <v-combobox
                v-model="form['erwe']"
                label="dsf"
                :items='["cxvsdf","fgddfg","ewrwer","dfgdfg fdg"]'
                :multiple="false"
                outlined
            ></v-combobox>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '8 / 1 / 14 / 5'}">
    
            <v-switch
                v-model="form['657567']"
                label="hujtyu"
            ></v-switch>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '3 / 6 / 5 / 13'}">
    
            <v-checkbox
                v-model="form['hgjghj']"
                label="8767"
            ></v-checkbox>
            
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
            layout:    [ { "x": 0, "w": 4, "h": 5, "minH": 1, "maxH": 12, "element": { "type": "h1", "desc": "gfhhgf", "category": "static", "component": "SimpleText" }, "i": 0, "y": 0, "moved": false }, { "x": 4, "w": 8, "h": 2, "minH": 2, "maxH": 2, "element": { "type": "filled", "label": "ewrewr", "key": "dfdsf", "category": "input", "component": "VTextField" }, "i": 1, "y": 0, "moved": false }, { "x": 0, "w": 4, "h": 2, "minH": 2, "maxH": 2, "element": { "type": "outlined", "items": [ "cxvsdf", "fgddfg", "ewrwer", "dfgdfg fdg" ], "multiple": false, "label": "dsf", "key": "erwe", "category": "input", "component": "VCombobox" }, "i": 2, "y": 5, "moved": false }, { "x": 0, "w": 4, "h": 6, "minH": 1, "maxH": 12, "element": { "label": "hujtyu", "key": "657567", "category": "input", "component": "VSwitch" }, "i": 3, "y": 7, "moved": false }, { "x": 5, "w": 7, "h": 2, "minH": 1, "maxH": 12, "element": { "label": "8767", "key": "hgjghj", "category": "input", "component": "VCheckbox" }, "i": 4, "y": 2, "moved": false } ],
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
