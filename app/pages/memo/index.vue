<template>
  <div class="container">
    <div class="ly_newMemo_heading">
      <h1 class="el_newMemo_heading">新規メモを追加する</h1>
    </div>
    <b-form class="ly_formArea" autocomplete="off" @submit.prevent="postForm">
      <div class="bl_formInner">
        <b-input-group class="bl_inputGroup input-group">
          <div class="ly_newMemoTitle">
            <b-form-input class="el_newMemoTitle" id="title" v-model="memoForm.title" type='text' required placeholder="タイトルを入力してください"/>
          </div>
          <div class="ly_newMemoDes">
            <b-form-textarea class="el_newMemoDes subtitle" id="text" v-model="memoForm.text" type='textarea' required rows="3" max-rows="3" placeholder="メモの内容を入力してください"/>
          </div>
        </b-input-group>
        <div class="bl_newMemoCheck">
          <div class="ly_newMemoDate">
            <b-form-datepicker class="el_newMemoDate" v-model="memoForm.dueDate" reset-button placeholder="期日を選択する"></b-form-datepicker>
          </div>
          <div class="ly_newMemoImportant">
            <b-form-checkbox class="el_newMemoImportant" v-model="memoForm.important">重要</b-form-checkbox>
          </div>
        </div>
        <div class="bl_btn">
          <button class="el_btn el_btn__skyblue" type="submit">メモを登録する</button>
        </div>
      </div>
    </b-form>
    <div class="bl_search_button">
      <span class="el_search_text">新しい順</span>
      <span class="el_search_text">古い順</span>
      <span class="el_search_text">期日が近い順</span>
      <span class="el_search_text">期日が遠い順</span>
    </div>
    <div>
      <div class="ly_newMemo_heading">
        <div class="el_newMemo_heading">メモ一覧</div>
      </div>
      <div class="bl_memoList" v-for="(memo, index) in memos" :key="index">
        <div class="ly_memoList">
          <div class="ly_memo_title">
            <div class="el_memo_title">{{ memo.title }} </div>
          </div>
          <div class="bl_memoCheck">
            <div class="ly_memoDeadline">
              <div class="el_memoDeadline">期限 {{ memo.dueDate }} 残日数： {{ memo.dueDate }} </div>
            </div>
            <div class="ly_memoImportant">
              <div class="el_memoImportant">{{ memo.important }}重要</div>
            </div>
          </div>
          <div class="ly_memoDes">
            <div class="el_memoDes">{{ memo.text }} </div>
          </div>
        </div>
      </div>
    </div>
      <a href="#" class="bl_topBtn">
        <span class="el_btn el_topBtn">
        新規メモを追加する　↑
        </span>
      </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

interface Memo {
  id: number
  title: string
  text: string
  dueDate: Date | string | null
  important: boolean
}

@Component({})
export default class MemoPage extends Vue {
  memoForm: Memo = {
    id: -1,
    title: '',
    text: '',
    dueDate: null,
    important: false
  }
  memos: Memo[] = []

  asyncData () {
    const today = new Date()
    const embeddedMemos: Memo[] = [
      {
        id: 0,
        title: 'もうすぐ甥が生まれる',
        text: 'お祝いの品を考えておこう',
        dueDate: null,
        important: true
      },
      {
        id: 1,
        title: 'リングフィットアドベンチャーをプレイする',
        text: '目標3kg減量！',
        dueDate: null,
        important: false
      },
      {
        id: 2,
        title: 'トマトの特売日',
        text: '今日はスーパーレトリバでトマトが1つ3円！！！',
        dueDate: (new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)),
        important: false
      },
      {
        id: 3,
        title: 'トイレットペーパーを買う',
        text: '残り半ロール・・・',
        dueDate: (new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2)),
        important: true
      }
    ]

    return { memos: embeddedMemos }
  }

  mounted () {
    this.resetMemoForm()
  }

  resetMemoForm () {
    this.memoForm   = {
      id: this.memos.length,
      title: '',
      text: '',
      dueDate: null,
      important: false
    }
  }

  postForm () {
    this.memos.push(this.memoForm)
    this.resetMemoForm()
  }
}
</script>
