<template>
  <div class="accordion-wrapper">
    <div v-for="item in items" :key="item.id" class="accordion" @click="changeOpenedID(item.id)">
      <div class="header">
        <h4 class="title">{{ item.name }}</h4>
        <div>+</div>
      </div>
      <div class="content-wrapper" :class="isOpened(item.id)">
        <div class="content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dignissimos. Provident unde ipsa sunt
          facilis
          eaque. Fugiat tempora dolorem eius, totam qui id accusantium aspernatur fugit a tempore ipsam asperiores.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isOpened(id) {
      return {
        "content-wrapper-opened": id == this.openedID
      }
    },
    changeOpenedID(id) {
      this.$emit('changeOpened', id)
    }
  },
  props: ['items', "openedID"]
}
</script>

<style scoped>
.accordion-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.accordion {
  border: 1px solid #e5e5e5;
}

.header {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  background-color: #fafafa;
  justify-content: space-between;
  cursor: pointer;
}

.title {
  font-size: large;
  font-weight: bold;
}

.content-wrapper {
  transition: max-height 0.5s;
  background: #e5feff;
  overflow: hidden;
  max-height: 0;
}

.content-wrapper-opened {
  max-height: 15rem
}

.content {
  padding: 1rem;
}
</style>
