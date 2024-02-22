<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-row justify-center">
        <h1 class="title_under_line">Works</h1>
      </v-col>
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              成果物
            </th>
            <th class="text-left">
              使用言語/ツール
            </th>
            <th class="text-left">
              担当
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="work in works"
            :key="work.name"
          >
            <td>{{ work.name }}</td>
            <td>{{ work.language }}</td>
            <td>{{ work.part }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
        works:[
          {
            name:'某下着量販店の顧客管理システムの機能追加・改修',
            language:'HTML/CSS, jQuery, Laravel',
            part:'機能修正、追加実装',
          },
          {
            name:'医療機関向け予約アプリ開発',
            language:'HTMLC/CSS, Vue.js',
            part:'画面基本設計～実装',
          },
          {
            name:'教育用Androidアプリ改修',
            language:'HTMLC/CSS, Java',
            part:'機能修正・追加実装'
          },
          {
            name:'iOS広告アプリ改修',
            language:'Objective-C',
            part:'機能修正実装',
          },
          {
            name:'勤怠管理システム開発',
            language:'HTML/CSS, jQuery',
            part:'画面基本設計～実装',
          },
          {
            name:'医療機関のメディア管理システム開発',
            language:'C#, asp.net',
            part:'機能設計・実装'
          },
          {
            name:'申込書管理システムの運用保守',
            language:'Zabbix, access',
            part:'異常監視と問い合わせ対応、作業効率化ツールの作成'
          },
          {
            name:'転職サイトシステムのリプレイス',
            language:'HTML/CSS, FuelPHP, jenkins',
            part:'不具合修正対応、テスト、jenkinsでの自動実行バッチ作成, 設計書の作成・修正'
          },
          {
            name:'ポートフォリオ作成(本サイト)',
            language:'HTML/CSS, Vue.js, Vuetify',
            part:'設計～実装'
          }
        ]
    }),
  }
</script>

<style>

</style>