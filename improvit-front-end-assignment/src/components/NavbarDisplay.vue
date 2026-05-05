<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <img src="../assets/improvITBlack.png" class="logo">
      <div>
        <h4 class="page-title">Team Members</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar-wrapper {
  border-top: 2rem solid #00a3e4;
  border-bottom: 0.4rem solid #e5e5e5;
}

.navbar {
  padding: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
}

.logo {
  max-width: 8rem;
}

.page-title {
  color: #b1b1b1;
  font-size: xx-large;
}

@media only screen and (max-width: 48em) {
  .navbar {
    padding: 1rem;
    flex-direction: column;
  }
}
</style>