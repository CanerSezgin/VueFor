<template>
    <v-card
        class="px-4 container"
        :style="{
            gridTemplateRows: 'repeat(13, 40px [row-start])',
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(12, 8.333333% [col-start])'
        }"
    >
        <div class="item-a ma-1 px-5" :style="{ gridArea: '1 / 2 / 3 / 12' }">
            <h2>Contact Us</h2>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 2 / 7 / 7' }">
            <v-text-field
                v-model="form['firstname']"
                label="First Name"
                filled
            ></v-text-field>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '5 / 7 / 7 / 12' }">
            <v-text-field
                v-model="form['lastname']"
                label="Last Name"
                filled
            ></v-text-field>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '7 / 2 / 9 / 12' }">
            <v-text-field
                v-model="form['email']"
                label="Email"
                filled
            ></v-text-field>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '9 / 2 / 14 / 12' }">
            <v-textarea
                v-model="form['message']"
                label="Message"
                :auto-grow="false"
                filled
            ></v-textarea>
        </div>
        <div class="item-a ma-1 px-5" :style="{ gridArea: '3 / 2 / 5 / 12' }">
            <p>
                We'd love to hear from you! Leave a message below and we will
                get in touch with you shortly.
            </p>
        </div>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        };
    }
};
</script>

<style lang="scss" scoped></style>
