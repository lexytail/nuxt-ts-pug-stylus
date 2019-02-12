import Vue from 'vue'

declare interface $Loading extends Vue {

  finish?: () => void

  start?: () => void

  fail?: () => void

  increase?: (number: number) => void

}