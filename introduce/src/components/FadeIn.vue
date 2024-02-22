<template>
    <div ref="fade" :class="{fadein: visible, hidden: !visible}">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FadeIn',
    data: () => ({
      visible: false
    }),
    created () {
      // created時にスクロールイベントを設定
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      // 実行後(表示後はスクロールイベントを取り消し)
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        if (!this.visible) {
          var top = this.$refs.fade.getBoundingClientRect().top
          this.visible = (top + 100) < window.innerHeight
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .hidden {
    opacity: 0;
  }
  
  .fadein {
    animation: fadeIn 1s;
    opacity: 1;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  </style>