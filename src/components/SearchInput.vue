<template>
  <div class="wrapper">
    <input :value="value" @input="changeSearchValue" class="input" placeholder="Search by name" />
    <div class="icon">M</div>
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
  height: 100%;
  width: 100%;
}

.icon {
  border: 1px solid #e5e5e5;
  border-left: none;
  padding: 1rem;
}
</style>