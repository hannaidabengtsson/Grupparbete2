var app = new Vue({
    el: '#app', 
    data: {
        countries: [],
        search: ''
    },

    computed:{
        countries: function() {
        return this.country.filter((x) => {
            return x.title.match(this.search)
        });
    }
    },

    mounted() {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => (
                this.countries = response.data
                ))
            .catch(error => (
                console.log(error)
            ));
    }

})

