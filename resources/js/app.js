require('./bootstrap');

require('alpinejs');

import Swal from "sweetalert2";

window.suppressionConfirm = function(formID){

    Swal.fire({
        title: 'attention ! supression de produit !',
        text: "etes vous sure de vouloir supprimer ce produit?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!',
        cancelButtonText: "Annuler"
      }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById(formID).submit()
        }
      });
}