var site;
site = new XMLHttpRequest();
site.open('GET', 'https://www2.ifal.edu.br', true);
site.send(null);

site.onreadystatechange = http;


function http() {
    if (site.readyState === 4) {
        if (site.status === 200) {
            document.write(site.responseText);
        }
    } else {
        document.write('Houve um problema com o pedido.');
    }
};