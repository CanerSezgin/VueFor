<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="800" persistent>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Preview</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon disabled>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon @click="$emit('closeDialog')"> <v-icon>mdi-close</v-icon> </v-btn>
                </v-toolbar>
                <component :is="layout"></component>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import New from "@/components/Previews/New";
import UserProfile from "@/components/Previews/UserProfile";
import Contact from "@/components/Previews/Contact";
import WebsiteSurvey from "@/components/Previews/WebsiteSurvey";
export default {
    components: {
        New,
        UserProfile,
        Contact,
        WebsiteSurvey
    },
    props: ["dialog", "layout"]
};
</script>
