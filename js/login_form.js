
				var db = firebase.database();


                 $('#login').on('submit', function(e){
                e.preventDefault();

                var email = jQuery('#emailli').val().trim();
                var password = jQuery('#passli').val().trim();

                if(!email) {
                    alert('email');
                    return false;
                }

                if(!password) {
                    alert('password');
                    return false;
                }

                var dataUsuario= db.ref("users/user");
                
                var queryRef = dataUsuario.orderByChild("email").equalTo(email).on('child_added', function(snapshot) {
                	console.log(snapshot);
                	db.ref("users/user/" + snapshot.key).on('child_added', function(data) {
                		console.log(data.key, data.val());
                		if(data.key === 'password'){
                			if(data.val() === password) {
                                localStorage(setItem('email'))
                				alert('Welcome!');
                				window.location.href = 'index.html';
                			} else {
                				alert('incorrect email/password');
                			}
                		}
                	});
                });

               



        });