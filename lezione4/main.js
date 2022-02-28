let modal = document.getElementById('exampleModal')

    modal.addEventListener('show.bs.modal', function(event){
        let button = event.relatedTarget;
        let contenuto = button.dataset.recipient;
        let message = button.dataset.message;

        modal.querySelector("modal-title").textContent = "new message to" + recipient;
        modal.querySelector("modal.body.input").value = contenuto;
        modal.querySelector("modal.body.textarea").value = message;
        
    })