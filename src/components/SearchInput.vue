<template>
  <div class="wrapper">
    <input :value="value" @input="changeSearchValue" class="input" placeholder="Search by name" />
    <img src="../assets/search.png" class="icon">
  </div>
</template>

<script>
export default {
  methods: {
    changeSearchValue(event) {
      let newVal = event.target.value;
      this.$emit('changeValue', newVal)
    }
  },
  props: ['value']
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
}

.input {
  border: 1px solid #e5e5e5;
  border-right: none;
  padding: 1rem;
  min-height: 100%;
  max-height: 100%;
  width: 100%;
}

.input::placeholder {
  color: #b1b1b1;
}

.icon {
  border: 1px solid #e5e5e5;
  border-left: none;
  padding: 1rem;
  content: url("../assets/search.png");
}

.icon:hover {
  content: url("../assets/search-hover.png");
}

@media only screen and (max-width: 48em) {
  .wrapper {
    width: 100%;
  }
}
</style>