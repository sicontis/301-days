module.exports = { 
    checkStorage: function() {
        if (typeof(Storage) !== "undefined") {
            if(localStorage.getItem('cities') !== null){
                return true;
            }
        } else {
            alert('No local storage support');
            return false;
        }
    },
    getCities: function() {
        const cities = JSON.parse(localStorage.getItem('cities'));
        return cities;
    },
    saveCities: function(c) {
        const city = JSON.stringify(c);
        return localStorage.setItem('cities', city);
    }
}