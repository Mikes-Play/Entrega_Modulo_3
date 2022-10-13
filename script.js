products=[
    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/654546/Aromatizante-Glade-Aceites-Naturales-Repuesto-2-Encanto-De-Vainilla-1-342073.jpg?v=637605347080730000", "name": "Aromatizante De Ambientes Glade Aceites Naturales Vainilla Repuesto X2 21ml", "price": 1095.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/654382/Aromatizante-Glade-Aceites-Naturales-Repuesto-21-Ml-Vainilla-1-21865.jpg?v=637605346205300000", "name": "Aromatizante De Ambientes Glade Aceites Naturales Vainilla Repuesto 21ml", "price": 724.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/495720/Aceite-Natura-De-Oliva-1-451318.jpg?v=636771702272200000", "name": "Aceite Natura De Oliva", "price": 1142.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/468568/Aceite-De-Oliva-Oliovita-1-251260.jpg?v=636680876084230000", "name": "Aceite De Oliva Oliovita 1lt", "price": 2860.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/568773/Aceite-De-Oliva-Oliovita-Coratina-1-430165.jpg?v=637151736600230000", "name": "Aceite De Oliva Oliovita Coratina", "price": 1900.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/427751/Aceite-De-Girasol-Natura-15-L-1-247928.jpg?v=636495154762100000", "name": "Aceite De Girasol Natura 1.5 L", "price": 404.43},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/713315/Aceite-Girasol-Legitimo-X1-5l-1-890347.jpg?v=637949973680600000", "name": "Aceite Girasol Legitimo X1,5l", "price": 363.95},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/194938/Aceite-Natura-De-Girasol-Aceite-Natura-De-Girasol-Pvc-500-Cc-1-31299.jpg?v=636383558388030000", "name": "Aceite Natura De Girasol 500 Ml", "price": 149.64},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/691466/Aceite-De-Oliva-Zuelo-Original-500ml-1-869897.jpg?v=637814002898230000", "name": "Aceite De Oliva Zuelo Original 500ml", "price": 1695.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/423076/Aceite-De-Oliva-Oda-X500ml-1-245633.jpg?v=636481035556330000", "name": "Aceite De Oliva Oda 500 Ml", "price": 987.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/614755/Aceite-De-Oliva-Cocinero-500-Ml-1-247939.jpg?v=637409204347770000", "name": "Aceite De Oliva Cocinero 500 Ml", "price": 665.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/210279/Aceite-De-Soja-Sojola-X-900-Cc-Aceite-De-Soja-Sojola-900-Ml-1-46682.jpg?v=636383739184330000", "name": "Aceite De Soja Sojola 900 Ml", "price": 181.65},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/691508/Aceite-Oliva-Zuelo-Lata-1l-1-879750.jpg?v=637814003155100000", "name": "Aceite Oliva Zuelo Lata 1l", "price": 3418.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/614663/Aceite-De-Girasol-Cocinero-900-Ml-1-32670.jpg?v=637409202878630000", "name": "Aceite De Girasol Cocinero 900 Ml", "price": 235.43},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/422813/Aceite-Mazola-De-Oliva-X500cc-1-244284.jpg?v=636481033160570000", "name": "Aceite Mazola De Oliva 500 Cc", "price": 746.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/657204/Aceite-Lira-De-Maiz-X900ml-1-875948.jpg?v=637624881663070000", "name": "Aceite Lira De Maiz X900ml", "price": 1123.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/614718/Aceite-Mezcla-Cocinero-900-Ml-1-101205.jpg?v=637409203034000000", "name": "Aceite Mezcla Cocinero 900 Ml", "price": 188.99},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/427889/Aceite-De-Oliva-Azait-500-Ml-1-248410.jpg?v=636495157276970000", "name": "Aceite De Oliva Azait 500 Ml", "price": 904.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/698130/Aceite-De-Coco-Virgenbeepure-Frasco350ml-1-887725.jpg?v=637866922134630000", "name": "Aceite De Coco Virgenbeepure Frasco350ml", "price": 1545.0},

    {"src": "https://jumboargentina.vteximg.com.br/arquivos/ids/609041/Aceite-Clovelly-Mezcla-X900cc-1-854380.jpg?v=637388478559900000", "name": "Aceite Clovelly Mezcla X900cc", "price": 247.95}]


container=document.getElementsByClassName('container')[0]

for (const item of products) {
    if (item.price<1000 && item.name.includes("Oliva")) {
        container.innerHTML+='<article class="item"> <img src="'+item.src +'"width=300 height=300"><br><p>'+item.name +'<br>'+'$'+item.price+'</p></article>'
    }
}
    