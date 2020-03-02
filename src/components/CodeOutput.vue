<template>
    <div>

<v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(8, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 1 / 7 / 3'}">
    
            <v-checkbox
                v-model="form['w']"
                label="aqqq asas dsfdsddd dddddddddd sadasddsa sadas sad sdsadsadsad asdsad asdsad saasdsadasdasdas dasdsad adasd as"
            ></v-checkbox>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 3 / 7 / 12'}">
    
            <h4>sadasdasasd</h4>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '7 / 1 / 9 / 8'}">
    
            <v-combobox
                v-model="form['wqewq']"
                label="sadsa"
                :items='["dfsdf","vcxcxv","ewrewr","fsd"]'
                :multiple="true"
                filled
            ></v-combobox>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '7 / 10 / 9 / 13'}">
    
            <h3>dfsdfdsdfs</h3>
            
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
            layout:   [ { "x": 0, "w": 2, "h": 6, "minH": 1, "maxH": 12, "element": { "label": "aqqq asas dsfdsddd dddddddddd sadasddsa sadas sad sdsadsadsad asdsad asdsad saasdsadasdasdas dasdsad adasd as", "key": "w", "category": "input", "component": "VCheckbox" }, "i": 0, "y": 0, "moved": false }, { "x": 2, "w": 9, "h": 6, "minH": 1, "maxH": 12, "element": { "type": "h4", "desc": "sadasdasasd", "category": "static", "component": "SimpleText" }, "i": 1, "y": 0, "moved": false }, { "x": 0, "w": 7, "h": 2, "minH": 2, "maxH": 2, "element": { "type": "filled", "items": [ "dfsdf", "vcxcxv", "ewrewr", "fsd" ], "multiple": true, "label": "sadsa", "key": "wqewq", "category": "input", "component": "VCombobox" }, "i": 2, "y": 6, "moved": false }, { "x": 9, "w": 3, "h": 2, "minH": 1, "maxH": 12, "element": { "type": "h3", "desc": "dfsdfdsdfs", "category": "static", "component": "SimpleText" }, "i": 3, "y": 6, "moved": false } ],
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
