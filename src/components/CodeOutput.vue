<template>
    <div>
<v-card class="px-4 container" :style="{ 
    gridTemplateRows: 'repeat(2, 40px [row-start])',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
}">
    <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 1 / 3 / 13'}">
    
            <v-text-field
                v-model="form['sdf sdfdsf sdfds']"
                label="qqqqq"
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

    switch (element.component) {
        case 'VTextField':
            FormElementStr = `
            <v-text-field
                v-model="form['${element.key}']"
                label="${element.label}"
            ></v-text-field>
            `
            break;

        case 'SimpleText': 
            FormElementStr = `
            <${element.type}>${element.desc}</${element.type}>
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
            layout:   [ { "x": 0, "w": 12, "h": 2, "minH": 2, "maxH": 2, "element": { "key": "sdf sdfdsf sdfds", "label": "qqqqq", "category": "input", "component": "VTextField" }, "i": 0, "y": 0, "moved": false } ],
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
