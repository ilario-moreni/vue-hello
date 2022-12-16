const {createApp} = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            img: 'https://i.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
        }
    }
}).mount('#app')