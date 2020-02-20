<template>
    <div>
        {{preview}}
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
        this.showForm();
    },
    data() {
        return {
            preview: "",
            layout:  [ { "x": 4, "w": 6, "h": 2, "minH": 2, "maxH": 2, "element": { "label": "fgfdg", "key": "dfgdfg", "category": "input", "component": "VTextField" }, "i": 0, "y": 2, "moved": false }, { "x": 0, "w": 8, "h": 1, "minH": 1, "maxH": 12, "element": { "type": "h2", "desc": "fdsgfds fdsgfdsgfd fdsgsfdg", "category": "static", "component": "SimpleText" }, "i": 1, "y": 4, "moved": false }, { "x": 0, "w": 12, "h": 2, "minH": 2, "maxH": 2, "element": { "label": "eewrwer", "key": "xcvxcv", "category": "input", "component": "VTextField" }, "i": 2, "y": 0, "moved": false }, { "x": 1, "w": 6, "h": 5, "minH": 1, "maxH": 12, "element": { "type": "h6", "desc": "dsfgfdg", "category": "static", "component": "SimpleText" }, "i": 3, "y": 5, "moved": false } ],
            form: {}
        };
    },
    methods: {
        showForm() {
            this.preview = this.getTemplate()
        },
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
