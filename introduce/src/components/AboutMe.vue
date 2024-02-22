<template>
    <v-container>
      <v-row>
        <v-col class="d-flex flex-row justify-center"><h1 class="title_under_line">About Me</h1></v-col>
      </v-row>
      <v-row>
        <v-col class="rounded-pill d-flex flex-row justify-center" >
          <v-avatar size="128">
            <v-img src="../assets/face_smile_man4.png"></v-img>
          </v-avatar>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex flex-row justify-center">
          <v-card width="90%" class="box">
            <v-container>
              <v-row v-for="about in abouts"
                :key="about.title"
              >
                <v-col cols="5" class="d-flex flex-row justify-end">{{ about.title }}</v-col>
                <v-col cols="6">{{ about.text }}</v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>  
    </v-container>
</template>

<script>

  export default {
    data: () => ({
      abouts: [
        {title: '名前：', text: '大西 直輝'},
        {title: '生年月日：', text: '1996/05/02'},
        {title: '性別：', text: '男'},
        {title: '経歴：', text: '2019年4月よりIT業界に参入、受託案件でJava、js/jQuery/vue.js、PHP/laravel/fuelPHP、iOS/android、C#等の様々な言語や環境での案件に対応。AWSやインフラについても独学中。'},
      ]
    }),
  }
</script>

<style>
.box{
  border: solid #2a35d3 !important;/*線*/
  border-radius: 30px !important;/*角の丸み*/
}

.title_under_line{
  border-bottom: solid 3px #d0dd1c !important;
}

</style>