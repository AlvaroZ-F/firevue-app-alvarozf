<template>

    <div>
        <button class="button logout" v-on:click="logout">Logout</button>
        <article class="covers" v-for="(comic, idx) in comics" :key="idx">
            <div>

                <img style="margin: 10px" :src="comic.image" height="291" width="192" />
                <p>{{ comic.name }}</p>
                <hr />
                <button class="button" v-on:click="deleteComic(comic.id)">Delete</button>

            </div>
        </article>

        <form @submit="addComic(name, image)">
            <h2>Add a new Comic Cover</h2>
            <input v-model="name" placeholder="Comic Name" class="input" required />
            <input v-mode="image" placeholder="Comic Image URL" class="input" required />
            <button type="submit" class="button">Add New Comic</button>
        </form>
    </div>

</template>

<script>

    import firebase from 'firebase'
    import { db } from '../main'

    export default {
        name: 'Comics',
        data() {
            return {
                comics: [],
                name: '',
                image: '',
            }
        },
        firestore() {
            return {
                comics: db.collection('comics').orderBy('createdAt'),
            }
        },
        methods: {
            addComic(name, image) {
                const createdAt = new Date()
                db.collection('comics').add({ name, image, createdAt })
                // Clear Values
                this.name = ''
                this.image = ''
            },
            deleteComic(id) {
                db.collection('comics').doc(id).delete()
            },
            logout() {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('login')
                })
            }
        }
    }

</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: black;
    }

    input, button {
        margin-bottom: 10px;
    }

    button {
        padding: 10px;
        margin: 10px 0;
        background-color: #0476F2;
        color: white;
        font-weight: bold;
    }

    .logout {
        left: 50%;
        top: 100%;
    }
</style>
