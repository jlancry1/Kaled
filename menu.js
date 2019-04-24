function getStarterMenu() {
    $.get(
           function (data) {
            for(var i=0; i<menu.starters.length; i++){
				localStorage.setItem('name_'+i, JSON.stringify(menu.starters[i].name));

				var nameString = localStorage.getItem("name_"+i);
				console.log(nameString);
				}
        },
        'json'
        );
}

$.ajax({
            data: {

            },
            cache: false,           
         complete: function (jqXHR, textStatus) {

        }
});