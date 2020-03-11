<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            :clipped="$vuetify.breakpoint.lgAndUp"
            app
        >
            <v-list dense>
                <template v-for="item in items">
                    <v-row
                        v-if="item.heading"
                        :key="item.heading"
                        align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>
                        <v-col cols="6" class="text-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-col>
                    </v-row>
                    
                    <v-list-group
                        v-else-if="item.children"
                        :key="item.text"
                        v-model="item.model"
                        :prepend-icon="
                            item.model ? item.icon : item['icon-alt']
                        "
                        append-icon=""
                        @click="goTo(item.routeName)"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                            v-for="(child, i) in item.children"
                            :key="i"
                            link
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
              
                    <v-list-item v-else :key="item.text" link @click="goTo(item.routeName)">
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                              
                            <v-list-item-title>
                     
                                {{ item.text }}
                              
                            </v-list-item-title>
                           
                        </v-list-item-content>
                    </v-list-item>
         
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            app
            color="blue darken-3"
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <span @click="goToHome" class="hidden-sm-and-down">VueFor</span>
            </v-toolbar-title>

            <!--  <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      /> -->

            <v-spacer />
            <!--       <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          /></v-avatar>
      </v-btn> -->
            <iframe
                src="https://ghbtns.com/github-btn.html?user=CanerSezgin&repo=VueFor&type=star&count=true&size=large"
                frameborder="0"
                scrolling="0"
                width="160px"
                height="30px"
            ></iframe>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    props: {
        source: String
    },
    data: () => ({
        dialog: false,
        drawer: null,
        items: [
            { icon: "mdi-file", text: "New Form", routeName: "NewForm" },
            {
                icon: "mdi-content-copy",
                text: "Pre-made Layouts",
                routeName: "PreMadeLayouts"
            }

            /* {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        }, */
        ]
    }),
    methods: {
      goTo(name) {
        this.$router.push({name})
      },
      goToHome(){
        this.goTo('Home');
      }
    },
};
</script>
