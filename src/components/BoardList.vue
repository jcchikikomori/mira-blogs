<template>
  <b-row>
    <b-col cols="12">
      <b-btn size="sm" href="#/add-board">Create New</b-btn>
      <br />
      <br />
      <b-container class="bv-example-row">
        <b-row class="text-center">
          <b-col cols="12">
            <h3>Hello Everyone!</h3>
            <p>
              Lorem ipsum keme keme keme 48 years urky ano tanders at nang at bakit lorem ipsum keme keme 48 years biway bella at bakit na matod paminta valaj chopopo ng sa bigalou shonga-shonga antibiotic na majonders wiz ang ganders jongoloids bakit at nang jongoloids ng kasi na ang mahogany kemerloo sudems boyband ng ano fayatollah kumenis at ano makyonget quality control boyband ano emena gushung tetetet shonget jowabella pamenthol paminta bakit wasok kasi nang doonek kemerloo tamalis guash shonga mashumers majonders jutay keme jutay kabog kasi ang nang na at sangkatuts shogal at ang ganda lang at bakit bakit jowabelles makyonget ng ano na nang at bakit fayatollah kumenis ang ma-kyonget ang katol na ang borta thunder ang bongga at bakit Mike bigalou at nang na ang.
            </p>
            <hr />
          </b-col>
        </b-row>
        <b-row class="text-center">
          <b-col cols="12">
            <h3>Hello Everyone!</h3>
            <p>
              Lorem ipsum keme keme keme 48 years urky ano tanders at nang at bakit lorem ipsum keme keme 48 years biway bella at bakit na matod paminta valaj chopopo ng sa bigalou shonga-shonga antibiotic na majonders wiz ang ganders jongoloids bakit at nang jongoloids ng kasi na ang mahogany kemerloo sudems boyband ng ano fayatollah kumenis at ano makyonget quality control boyband ano emena gushung tetetet shonget jowabella pamenthol paminta bakit wasok kasi nang doonek kemerloo tamalis guash shonga mashumers majonders jutay keme jutay kabog kasi ang nang na at sangkatuts shogal at ang ganda lang at bakit bakit jowabelles makyonget ng ano na nang at bakit fayatollah kumenis ang ma-kyonget ang katol na ang borta thunder ang bongga at bakit Mike bigalou at nang na ang.
            </p>
            <hr />
          </b-col>
        </b-row>
      </b-container>

      <b-table striped hover :items="boards" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'BoardList',
  data () {
    return {
      fields: {
        title: { label: 'Title', sortable: true, 'class': 'text-left' },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      boards: [],
      errors: [],
      ref: firebase.firestore().collection('boards'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        this.boards.push({
          key: doc.id,
          title: doc.data().title,
          description: doc.data().description
        });
      });
    });
  },
  methods: {
    details (board) {
      router.push({ name: 'ShowBoard', params: { id: board.key }})
    }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>
