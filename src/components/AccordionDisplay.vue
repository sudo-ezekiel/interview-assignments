<template>
    <div v-for="item in items" :key="item.id">
        Vue Accordion Comp
    </div>
</template>

<script>
export default {
    props: ['items']
}
</script>
