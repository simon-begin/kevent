<template>
  <form class="homepage__form" @submit.prevent="sendWebsiteLink">
    <input class="homepage__input" type="search" v-model="website" placeholder="votresite.com" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
    <span class="homepage__help">Appuyez sur la touche entrer pour voir votre site</span>
  </form>
</template>

<script>
const io = require('socket.io-client');
import { API_LOCATION } from "../../config";

export default {
    data() {
        return {
            website: '',
            socket: io(API_LOCATION)
        }
    },
    methods: {
        sendWebsiteLink() {
            this.socket.emit('SEND_WEBSITE', {
                website: this.addhttp(this.website)
            });
            this.website = '';
        },
        addhttp(url) {
            if (!/^(f|ht)tps?:\/\//i.test(url)) {
               url = "http://" + url;
            }
            return url;
        }
    },
    mounted() {
        this.socket.on('REDIRECT', (data) => {
            window.location.replace(data.website);
        });
    }
};
</script>
