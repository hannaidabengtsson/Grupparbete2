var app = new Vue({
    el: '#app',
    data: {
        countries: [],
        searchInput: ''
    },

    methods: {
        searchBtn: function (event) {
            axios
                .get(`https://restcountries.eu/rest/v2/name/${this.searchInput}`)
                .then(response => (
                    this.countries = response.data
                ))
                .catch(error => (
                    console.log(error)
                ));
            },
    }
});


