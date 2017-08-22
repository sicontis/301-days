module.exports = { 
    checkStorage: function() {
        if (typeof(Storage) !== "undefined") {
            if(localStorage.getItem('todos') !== null){
                return true;
            }
        } else {
            alert('No local storage support');
            return false;
        }
    },
    getTodos: function() {
        const todos = JSON.parse(localStorage.getItem('todos'));
        return todos;
    },
    saveTodos: function(t) {
        const todo = JSON.stringify(t);
        return localStorage.setItem('todos', todo);
    }
}
