
//document.getElementById("createUserBtn").addEventListener("click", addContact(), true);
//$("#createUserBtn").click(addContact());

function init(){
	
	function Person(name, phone) {
		this.name = name;
		this.phone = phone;
	}
	
	var contacts = {}
	
	var contacts = [new Person("Jhon", "9087126311"), 
	                new Person("Den", "9012312894"), 
	                new Person("Cat", "9127126349"),
	                new Person("Putin", "9087126342"),
	                new Person("Cat", "976712874"),
	                new Person("Devis", "955718834"),
	                new Person("Mary", "908712634"),
	                new Person("Mad", "923412634"),
	                new Person("Tom", "9876712634"),
	                new Person("Jin", "912342634")
	];
	var namefield = document.getElementById("userlist");
	
	for(var item in contacts){
		var itemlist = document.createElement("li");
		itemlist.className = "ui-li-anchor";
		var attr = document.createAttribute("href");
		attr.value = "contact.html"
		var ref = document.createElement("a");
		ref.setAttributeNode(attr);
		itemlist.appendChild(document.createTextNode(contacts[item].name));
		itemlist.appendChild(ref);
		namefield.appendChild(itemlist);
	}
}

( function () {
	init();
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "main" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    
} () );


function addContact(){
	var namefield = document.getElementById("username");
	var itemlist = document.createElement("li");
	itemlist.className = "ui-li-anchor";
	var attr = document.createAttribute("href");
	attr.value = "contact.html"
	var ref = document.createElement("a");
	ref.setAttributeNode(attr);
	itemlist.appendChild(document.createTextNode(namefield));
	itemlist.appendChild(ref);
	namefield.appendChild(itemlist);
	}
