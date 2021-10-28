/*  OBBIETTIVI:
    Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/


// Utilizziamo Vue.js:

let root = new Vue({
    el: "#root",
    data: {
        // message = testo da inserire nel titolo: {{}}.
        message: "LOOK OUT ON THE ADVENTURE",

        // image = riferimento da inserire in attributo src -> v-blind:src="".
        image: "https://motorrevu.hu/wp-content/uploads/2020/08/KTM_390adventura_motorrevu-1.jpg",
        
        // classi = classi css, da associare agli elementi html in attributo class -> v-blind:class="".
        classText: "header_property",
        classImg: "img_adattament"
    }
})