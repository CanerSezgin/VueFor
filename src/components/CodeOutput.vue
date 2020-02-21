<template>
    <div>

<v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(13, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 1 / 11 / 13'}">
    
            <v-textarea
                v-model="form['label0']"
                label=""
                filled
            ></v-textarea>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '11 / 1 / 12 / 13'}">
    
            <h3></h3>
            
    </div>
    <div class="item-a ma-1 px-5" :style="{ gridArea: '12 / 1 / 14 / 13'}">
    
            <v-text-field
                v-model="form['label2']"
                label=""
                outlined
            ></v-text-field>
            
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
                ${inputType}
            ></v-textarea>
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
            layout: [ { "x": 0, "w": 12, "h": 10, "minH": 5, "maxH": 12, "element": { "type": "filled", "key": "label0", "category": "input", "component": "VTextArea" }, "i": 0, "y": 0, "moved": false }, { "x": 0, "w": 12, "h": 1, "minH": 1, "maxH": 12, "element": { "type": "h3", "category": "static", "component": "SimpleText" }, "i": 1, "y": 10, "moved": false }, { "x": 0, "w": 12, "h": 2, "minH": 2, "maxH": 2, "element": { "type": "outlined", "key": "label2", "category": "input", "component": "VTextField" }, "i": 2, "y": 11, "moved": false } ],
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
