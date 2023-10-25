Buscamos una webapp sencilla, hecha en Vue3 que en una vista nos permita listar todos los equipos que nos devuelve la siguiente una API.
En esta vista será necesario poder buscar o filtrar y ordenar los equipos mostrados y además, de alguna manera, que el usuario (no hace falta que esté logueado) pueda añadir a favoritos tantos equipos como quiera. En esta acción de favorito, podrá añadir una nota de texto con algún comentario.
Por otro lado, al clickar en alguno de estos equipos, podremos ver una vista individual del equipo, con toda la información que nos aporta la API.
Como el usuario puede tener un listado de favoritos, será necesaria otra vista donde se puedan ver todos sus equipos favoritos con los comentarios que haya puesto el usuario. E igual que puede añadir a favoritos, también podrá eliminarlos. 

Vistas:
Listado de Equipos
Un listado de cards, o similar, con los siguientes datos, por lo menos: logo, colegio y color, o colores (mostrarlo visualmente no el código hexadecimal). Además, marcar de manera visual si está añadido a favoritos o no.
Listado de Favoritos
Este listado que sea similar al Listado de Equipos, pero añadiendo los comentarios del usuario. Que desde aquí se pueda eliminar cualquier equipo de favoritos.
Vista Individual
Una vista individual con toda la información posible que nos da la API. Colegio, mascota, abreviatura, nombre alternativo, conferencia, división, colores y logo. 

• Queremos 3 vistas: listado de equipos, listado de favoritos, vista individual de un equipo.
• El usuario puede añadir o quitar equipos a su listado de favoritos, además, podrá añadir una pequeña nota sobre el equipo.
• En las vistas de listado se podrá ordenar y filtrar y/o buscar.
• No es necesario un login.
• De alguna manera, como localStorage, este listado de favoritos se tiene que persistir para que el usuario al volver a entrar siga teniendo su listado de favoritos intacto. 
• Usar vue3 vue-router, pinia y es recomendable tailwindcss
• Valoramos el uso de buenas practicas y la creacion de tests


Api:

curl -X GET "https://api.collegefootballdata.com/teams" -H  "accept: application/json" -H  "Authorization: Bearer PySp71gdlpgk1GhuTnndKvDL+xad4RmswNqN15YcI9drZOUYB/FtKVoa4RREuRa+"
