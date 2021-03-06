var app = new Vue({
    el: '#app',
    data: {
        countries: [],
        searchInput: '',
        recentSearches: []
    },

    methods: {
        searchBtn: function (event) {
            if (this.searchInput == "" || this.searchInput.length <= 2){
                alert("Du måste ange ett land med minst 3 bokstäver!")
                return;                
            }
            axios
                .get(`https://restcountries.eu/rest/v2/name/${this.searchInput}`)
                .then(response => {
                    this.countries = response.data;
                    this.updateStorage(this.searchInput);
                })
                .catch(error => {
                    alert("Couldn´t find the country you searched for!")
                });
        },

        updateStorage: function (searchWord){
            if (localStorage.getItem('recentSearches')) {
                let recentSearches = JSON.parse(localStorage.getItem('recentSearches'))
                recentSearches.push(searchWord);
                if (recentSearches.length > 3 ) {
                    recentSearches.shift();
                } 
                this.recentSearches = recentSearches
                let json = JSON.stringify(recentSearches);
                localStorage.setItem("recentSearches", json);
            }else{
                this.recentSearches = [searchWord]
                let json = JSON.stringify([searchWord]);
                localStorage.setItem("recentSearches", json);
            }
        },
        

        searchRecentSearches: function(event) {
            console.log(event.target.innerText);
            var selectedBtn = event.target.innerText;
            axios
                .get(`https://restcountries.eu/rest/v2/name/${selectedBtn}`)
                .then(response => {
                    this.countries = response.data;
                })
            }

        },

        mounted() {
            if (localStorage.getItem('recentSearches')) {
                this.recentSearches = JSON.parse(localStorage.getItem('recentSearches'));
            }
        },
        
});


