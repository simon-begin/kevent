<template>
  <div class="homepage">
    <form v-if="show" class="homepage__form" @submit.prevent="sendWebsiteLink">
      <span v-if="redirected_url" class="homepage__form__cancel" @click.prevent="toggleInput" >X</span>
      <input class="form__input" type="search" v-model="website" placeholder="votresite.com" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
      <span class="form__help">Appuyez sur la touche entrer pour voir votre site</span>
      <div>
        <input type="checkbox" v-model="iframe_supported" id="redirection" /> <label for="redirection">Votre site accepte t-il les iframes ?</label>
      </div>
      <button type="submit" class="form__button">Tester</button>
    </form>
    <a v-if="!show" @click.prevent="toggleInput" class="homepage__arrow">
      >
    </a>
    <iframe class="homepage__iframe" v-if="redirected_url" v-bind:src="redirected_url"></iframe>
  </div>
</template>

<script>
const io = require('socket.io-client');

export default {
    data() {
        return {
            show: true,
            redirected_url: '',
            iframe_supported: true,
            website: '',
            socket: io('localhost:8080')
        }
    },
    methods: {
        sendWebsiteLink() {
            this.socket.emit('SEND_WEBSITE', {
                website: this.addhttp(this.website),
                redirection: !this.iframe_supported
            });
            this.website = '';
        },
        addhttp(url) {
            if (!/^(f|ht)tps?:\/\//i.test(url)) {
               url = "http://" + url;
            }
            return url;
        },
        toggleInput() {
            this.show = !this.show;
        }
    },
    mounted() {
        this.socket.on('REDIRECT', (data) => {
            if (data.redirection) {
              window.location.replace(data.website);
            } else {
              this.redirected_url = data.website;
              this.show = false;
            }
        });
    }
};
</script>
