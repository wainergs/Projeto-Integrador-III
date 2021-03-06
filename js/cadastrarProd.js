function validarDados() {
    const tituloQuadrinho = document.getElementById('títuloQuadrinho').value.trim();
    const editora = document.getElementById('editora').value;
    const categoria = document.getElementById('categoria').value;
    const numeroPags = document.getElementById('numeroPags').value;
    const pesoQuadrinho = document.getElementById('pesoQuadrinho').value;
    const tipoCapa = document.getElementById('tipoCapa').value;
    const cpQuadrinho = document.getElementById('cpQuadrinho').value.trim();



    var ok = 0;
    if (tituloQuadrinho.length > 0) {
        document.getElementById('títuloQuadrinho').classList.add('is-valid');
        document.getElementById('títuloQuadrinho').classList.replace('is-invalid', 'is-valid');
        ok++;

    } else {
        document.getElementById('títuloQuadrinho').classList.add('is-invalid');

    }
    if (editora != 'editora') {
        document.getElementById('editora').classList.add('is-valid');
        document.getElementById('editora').classList.replace('is-invalid', 'is-valid');
        ok++;
    } else {
        document.getElementById('editora').classList.add('is-invalid');

    }

    if (categoria != 'categoria') {
        document.getElementById('categoria').classList.add('is-valid');
        document.getElementById('categoria').classList.replace('is-invalid', 'is-valid');
        ok++;

    } else {
        document.getElementById('categoria').classList.add('is-invalid');

    }

    if (numeroPags != '' && numeroPags > 0) {
        document.getElementById('numeroPags').classList.add('is-valid');
        document.getElementById('numeroPags').classList.replace('is-invalid', 'is-valid');
        ok++;


    } else {
        document.getElementById('numeroPags').classList.add('is-invalid');

    }


    if (pesoQuadrinho != '') {
        document.getElementById('pesoQuadrinho').classList.add('is-valid');
        document.getElementById('pesoQuadrinho').classList.replace('is-invalid', 'is-valid');
        ok++;


    } else {
        document.getElementById('pesoQuadrinho').classList.add('is-invalid');

    }

    if (tipoCapa != 'capa') {
        document.getElementById('tipoCapa').classList.add('is-valid');
        document.getElementById('tipoCapa').classList.replace('is-invalid', 'is-valid');
        ok++;

    } else {
        document.getElementById('tipoCapa').classList.add('is-invalid');

    }

    if (cpQuadrinho != '') {
        document.getElementById('previewQuadrinho').style.boxShadow = ' 5px 5px 5px 5px black'
        document.getElementById('msgImage').classList.replace('d-block', 'd-none');

        ok++;


    } else {
        document.getElementById('previewQuadrinho').style.boxShadow = ' 5px 5px 5px 5px red';
        document.getElementById('msgImage').classList.add('d-block');


    }
    if (ok == 7) {
        showAlertify();
        document.getElementById('formCadastroQuadrinho').submit();
    }
}

function showAlertify() {
    var notification = alertify.notify('Quadrinho cadastrado com sucesso!!', 'success', 3, function() { console.log('dismissed'); });
    notification();
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#previewQuadrinho')
                .attr('src', e.target.result)
                .width(250)
                .height(250);
        };
        reader.readAsDataURL(input.files[0]);
    }
}


function clickInputFile() {
    document.getElementById('cpQuadrinho').click();
}

function clearForm() {
    window.location.reload();


}