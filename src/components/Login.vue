<template>

    <div class="login">
        <img src="../assets/dc_logo.jpg" width="300" />
        <h3>Comics Covers: </h3>

        <input type="text" v-model="email" placeholder="E-mail address" class="input" required />
        <br />
        <input type="password" v-model="password" placeholder="Introduce your password" class="input" required />
        <br />
        <button v-on:click="login" class="button">Enter</button>
        <p>
            <router-link to="/signup">
                New here? Create a new account
            </router-link>
        </p>
    </div>

</template>

<script>

    import firebase from 'firebase'

    export default {
        name: 'login',
        data: function () {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
                    this.$router.replace('/comics')
                }).catch((err) => {
                    alert(err.message)
                })
            },
        },
    }

</script>


<style scoped>
    .login {
        margin-top: 40px;
    }

    input {
        align-self: center;
        margin: 10px 0;
        width: auto;
        padding: 15px;
    }

    button {
        padding: 10px;
        margin: 10px 0;
        background-color: #0476F2;
        color: white;
        font-weight: bold;
    }

    a {
        color: black;
        text-decoration: underline;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    h1, h2 {
        font-weight: normal;
    }
</style>
