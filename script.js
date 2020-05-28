
var app = new Vue({
    el: '#app',
    data: {
        countries: [],
        searchInput: '',   
    },

    methods: {
        searchBtn: function (event) {
            if (this.searchInput == "" || this.searchInput.length <= 2){
                alert("Du måste ange ett land med minst 3 bokstäver!")
                return;                
            }
            axios
                .get(`https://restcountries.eu/rest/v2/name/${this.searchInput}`)
                .then(response => (
                    this.countries = response.data
                ))
                .catch(error => (
                    alert("Couldn´t find the country you searched for!")
                ));
        }
    },

    mounted() {
        console.log('App mounted!');
        if (localStorage.getItem('searchInput')) this.countries = 
    JSON.parse(localstorage.getItem('searchInput'));
    }

});


