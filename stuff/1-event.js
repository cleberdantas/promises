var img = new Image();

img.src = "https://newsstand.blob.core.windows.net/images/1957EB7C2871B9ECB8864815B33B1374-fome-noturna-monstro.jpg";

img.addEventListener('load', function() {
  console.log('yey image loaded')
});

img.addEventListener('error', function() {
  console.log('argh everythings broken')
});