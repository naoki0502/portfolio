<template>
  <div>
    <v-app-bar app elevate-on-scroll>
      <v-tabs>
        <v-tab @click="$vuetify.goTo('#welcome')">
          <v-icon>
            mdi-home
          </v-icon>
        </v-tab>
        <v-tab class="hidden-sm-and-down" 
          @click="toContent(item.titleVal)"
          v-for="item in items"
          :key="item.title"
          link
        >{{ item.title }}</v-tab>
      </v-tabs>
      <v-app-bar-nav-icon right class="hidden-md-and-up ml-auto" @click="drawer=true"></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- ナビゲーションドロワー -->
    <v-navigation-drawer app v-model="drawer" right fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Portfolio
          </v-list-item-title>
          <v-list-item-subtitle>
            naoki-onishi
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="toContent(item.titleVal)">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      items: [
          { title: 'AboutMe', titleVal: 'aboutMe', icon: 'mdi-account' },
          { title: 'Skills', titleVal: 'skills', icon: 'mdi-account-check-outline' },
          { title: 'Works', titleVal: 'works', icon: 'mdi-table-account' },
        ],
    }),

    methods:{
      toContent(title){
        this.$vuetify.goTo('#' + title)
      }
    }
  }


</script>

<style>
.tab_text{
  color: white !important;
  text-shadow:
  2px 2px 5px black,
  -2px 2px 5px black,
  2px -2px 5px black,
  -2px -2px 5px black;
}
</style>