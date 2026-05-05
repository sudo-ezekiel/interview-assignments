<template>
  <div class="accordion-header" v-if="loaded">
    <SearchInput :value="searchValue" v-on:changeValue="changeSearchValue" />
    <span class="items-length">
      {{ this.apiData?.length || "-" }} People
    </span>
  </div>

  <div v-if="loaded && apiData != null && !apiData?.length">
    <p>No items found</p>
  </div>

  <div v-if="loaded && apiData == null">
    <p class="error">Error retrieving Data</p>
  </div>

  <div v-if="!loaded">
    <div class="load"></div>
  </div>

  <div v-if="loaded && apiData != null && apiData?.length">
    <AccordionDisplay :items="items" :openedID="openAccordionID" v-on:changeOpened="changeOpened" />
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue';
import AccordionDisplay from './AccordionDisplay.vue';

import axios from "axios";

export default {
  data() {
    return {
      searchValue: "",
      openAccordionID: null,
      loaded: false,
      apiData: [],
      items: []
    }
  },
  mounted() {
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => (
        this.apiData = response.data,
        this.items = response.data,
        this.loaded = true
      )).catch((e) => (
        console.error(e),
        this.loaded = true,
        this.apiData = null
      ))

    // dev debug
    // if there's no people
    // this.apiData = [];
    // this.loaded = true;

    // if there's an error retrieving from api
    // this.apiData = null;
    // this.loaded = true;

    // to display loading animation
    // this.loaded = false;
  },
  watch: {
    /**
     * listen to changes in search value and 
     * filter unedited api data
     */
    searchValue: {
      handler: function (newSearchBy) {
        this.items = this.apiData?.filter((item) => item?.name?.toLowerCase().includes(newSearchBy.toLowerCase()));
      }
    }
  },
  methods: {
    /**
     * @param {string} newVal 
     * changes the search value for the search input
     */
    changeSearchValue(newVal) {
      this.searchValue = newVal;
    },
    /**
     * @param {number} id the api data id, 
     * I bind it to the opened accordion item
     * so I know which accordion item is opened
     */
    changeOpened(id) {
      if (this.openAccordionID == id) {
        this.openAccordionID = null;
        return;
      }
      this.openAccordionID = id;
    }
  },
  components: {
    SearchInput,
    AccordionDisplay
  }
}
</script>

<style scoped>
.accordion-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 1rem;
}

.items-length {
  font-size: xx-large;
  font-weight: 400;
  margin-top: auto;
  margin-bottom: auto;
}

@media only screen and (max-width: 48em) {
  .accordion-header {
    flex-direction: column-reverse;
  }
}
</style>
