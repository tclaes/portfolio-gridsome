<template>
    <div class="quote">
        <slot/>
    </div>
</template>

<script>
    export default {
      name: 'Quote'
    }
</script>

<style lang="scss" scoped>
    .quote {
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: bold;
        flex-direction: column;
        margin: 0 auto;
        max-width: 500px;
    }
    .quote::before, .quote::after {
        background: rgba(255, 0, 0,.5);
        content: '"';
        display: flex;
        font-size: 8rem;
        font-style: italic;
        line-height: 2rem;
        width: 100%;
    }
    .quote::before {
        border-top-right-radius: 20px;
    }
    .quote::after {
        justify-content: flex-end;
        border-bottom-left-radius: 20px;
    }
    p {
        text-align: center;
    }
</style>
