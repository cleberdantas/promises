var img = new Image();

img.src = "https://newsstand.blob.core.windows.net/images/1957EB7C2871B9ECB8864815B33B1374-fome-noturna-monstro.jpg";

function loaded() {
  console.log('yey image loaded again')
}

if (img.complete) {
  loaded();
}
else {
  img.addEventListener('load', loaded);
}

var teste = function() {
  console.log('argh everything is broken')
};

img.addEventListener('error', teste);