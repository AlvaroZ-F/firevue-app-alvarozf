<template>

    <div class="sign-up">

        <img src="../assets/dc_logo.jpg" width="300" />
        <h3>Create a new account</h3>

        <input v-model="email" type="text" class="input" placeholder="Introduce an email" required />
        <br />
        <input v-model="password" type="password" class="input" placeholder="Introduce a password" required />
        <br />
        <button v-on:click="signUp" class="button">Sign Up!</button>
        <button class="button">
            <router-link to="/login">
                Back
            </router-link>
        </button>

    </div>

</template>

<script>

    import firebase from 'firebase'

    export default {
        name: "signup",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            signUp() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
                    this.$router.replace('/login')
                }).catch((err) => {
                    alert(err.message)
                });
            }
        }
    }

</script>

<style scoped>
    .sign-up {
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
        color: #2c3e50;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    h3 {
        font-weight: normal;
    }
</style>
