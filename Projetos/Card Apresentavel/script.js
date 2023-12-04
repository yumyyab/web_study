let perfil = document.getElementById('perfil');
let inputImg = document.getElementById('input-img');

inputImg.onchange = function(){
    perfil.src = URL.createObjectURL(inputFile.files[0])
};

