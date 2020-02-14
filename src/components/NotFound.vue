<template>
    <div class="not-found">
        <img src="../assets/dc_logo.jpg" width="300" />
        <h3>404 Not Found</h3>
        <p>Looks like you're lost.</p>
        <button v-on:click="notFound" class="button">Go Back To Login</button>
    </div>
</template>

<script>

    export default {
        name: 'login',
        data: function () {
            return {}
        },
        methods: {
            notFound() {
                this.$router.replace('/comics')
            }
        }
    }

</script>

<style scoped>

    .notFound {
        margin-top: 40px;
    }

    button {
        margin: 10px 0;
        background-color: #0476F2;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    h3 {
        font-weight: normal;
    }

</style>
