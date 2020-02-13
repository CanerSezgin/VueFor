<template>

<div v-if="opts">
    <p v-if="opts.type === 'p'">{{opts.desc}}</p>
    <h1 v-else-if="opts.type === 'h1'">{{opts.desc}}</h1>
    <h2 v-else-if="opts.type === 'h2'">{{opts.desc}}</h2>
    <h3 v-else-if="opts.type === 'h3'">{{opts.desc}}</h3>
    <h4 v-else-if="opts.type === 'h4'">{{opts.desc}}</h4>
    <h5 v-else-if="opts.type === 'h5'">{{opts.desc}}</h5>
    <h6 v-else-if="opts.type === 'h6'">{{opts.desc}}</h6>
</div>

</template>

<script>
export default {
    props: ["opts"],
};
</script>

<style lang="scss" scoped></style>
