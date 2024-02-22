<template>
    <v-container ref="skills">
      <v-row>
        <v-col class="d-flex flex-row justify-center"><h1 class="title_under_line">Skills</h1></v-col>
      </v-row>
      <v-row>
        <v-container class="skill_title"><h4>・言語/フレームワーク</h4></v-container>
      </v-row>
      <FadeIn>
        <v-row max-width="100">
          <v-col
            v-for="[language, progress] in languages"
            :key="language"
            cols="6"
            sm="4"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card height="50">
              <v-container>
                {{ language }}
                <v-progress-linear :value="progress"></v-progress-linear>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </FadeIn>
      <v-row>
        <v-container><h4>・その他スキル</h4></v-container>
      </v-row>
      <FadeIn>
        <v-row>
          <v-col
            v-for="[etc, etcProgress] in etcs"
            :key="etc"
            cols="6"
            sm="4"
            md="4"
            lg="4"
            xl="4"
          >
            <v-card height="50">
              <v-container>
                {{ etc }}
                <v-progress-linear :value="etcProgress"></v-progress-linear>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </FadeIn>
    </v-container>

</template>

<script>

import FadeIn from '../components/FadeIn'

  export default {

    components:{
      FadeIn
    },  
    data: () => ({
      languages :[ 
        ['JavaScript',70], ['Vue.js', 70], ['jQuery', 70],['PHP', 50],['FuelPHP', 40],['Laravel', 40], ['HTMLCSS', 60], ['MySQL', 40],['Java', 30], ['C#', 10],['ASP.NET', 10]
      ],
      etcs : [
        ['Git',70], ['npm',50], ['docker',50], ['jenkins', 40], ['backlog',50], ['access',10]
      ],
    }),
  }
</script>

<style>

</style>