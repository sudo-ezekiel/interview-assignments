<template>
  <div class="accordion-wrapper">
    <div v-for="item in items" :key="item.id" class="accordion" @click="changeOpenedID(item.id)">
      <div class="header">
        <h4 class="title">{{ item.name }}</h4>
        <div>{{ openedID === item.id ? "-" : "+" }}</div>
      </div>
      <div class="content-wrapper" :class="isOpened(item.id)">
        <div class="content">
          <img src="../assets/user.jpg" class="content-img" />
          <div class="content-info">
            <a :href="'mailto:' + item.email" class="content-email">{{ item.email }}</a>
            <span>{{ item.address.street }} {{ item.address.suite }}</span>
            <span>{{ item.address.zipcode }} {{ item.address.city }}</span>
          </div>
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
  font-weight: 500;
}

.content-wrapper {
  transition: max-height 0.5s;
  overflow: hidden;
  max-height: 0;
}

.content-wrapper-opened {
  max-height: 15rem
}

.content {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.content-img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}

.content-info {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  gap: 0.5rem;
  color: #b1b1b1;
  font-size: medium;
  font-weight: 600;
}

.content-email {
  color: #96dcff;
  font-weight: bold;
  cursor: pointer;
}
</style>
