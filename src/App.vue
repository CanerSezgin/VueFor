<template>
    <v-app>
        <Bars />
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Bars from "./components/Bars";

export default {
    name: "App",

    components: {
        Bars,
        HelloWorld
    },
};
</script>
