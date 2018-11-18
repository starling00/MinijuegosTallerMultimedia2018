var escalar;
var PantallaCarga = function() {};

PantallaCarga.prototype = { //Cargar toda la pantalla

    loadScripts: function() {
        game.load.script('style', 'src/librerias/style.js');
        game.load.script('WebFont', 'src/librerias/webfontloader.js');
        game.load.script('menuprincipal', 'src/pantallas/MenuPrincipal.js');
        game.load.script('planetas', 'src/pantallas/PlanetasMenu.js');
        game.load.script('planetasmenu', 'src/pantallas/MenuPrincipal.js');
        game.load.script('menuconfiguracion', 'src/pantallas/MenuConfiguracion.js');
        game.load.script('GamePlayCiudad', 'src/pantallas/GamePlayCiudad.js');
        game.load.script('GamePlayManglar', 'src/pantallas/GamePlayManglar.js');
        game.load.script('GamePlayParque', 'src/pantallas/GamePlayParque.js');
        game.load.script('GamePlayPlaya', 'src/pantallas/GamePlayPlaya.js');
        game.load.script('StateTransition', 'phaser-state-transition.js');
    },

    //Para cargar la musica del juego
    /* loadBgm: function () {
       game.load.audio('dangerous', 'assets/bgm/Dangerous.mp3');
       game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
     },*/

    // cargar background de las pantallas
    loadImages: function() {
        //Pantalla de menu de inicio
        game.load.image('menu-principal-bg', 'assets/img/menuPrincipal/fondoMenuInicio.png');
        game.load.spritesheet('botonJugarC', 'assets/img/menuPrincipal/botonJugarMenuPrincipal.png', 294, 94);
        game.load.spritesheet('botonSalir', 'assets/img/menuPrincipal/botonSalirMenuPrincipal.png', 294, 94);
        game.load.spritesheet('botonConfiguracion', 'assets/img/menuPrincipal/configMenuPrincipal.png', 52, 52);

        //Pantalla de
        game.load.image('menu-bg', 'assets/img/menuPrincipal/menu-bg.jpg');
        game.load.image('botonUniversal', 'assets/img/pantallaNiveles/planetas.png');
        game.load.image('fondoEstrellado', 'assets/img/pantallaNiveles/fondoEstrellado.jpg');

        game.load.image('background_inicio', 'assets/img/juegoBasketball/FondoInicio/FondoInicio.png');

        //Botones inferiores de salida
        game.load.image('volverPrincipalPlanetas', 'assets/img/pantallaNiveles/salir.png');
        game.load.image('salirConfig', 'assets/img/pantallaNiveles/salir.png');
        game.load.image('configMenu', 'assets/img/pantallaNiveles/salir.png');

        game.load.image('background', 'assets/img/pantallaNiveles/background.png');
        game.load.image('botonUniversal', 'assets/img/pantallaNiveles/planetas.png');
        game.load.image('volver', 'assets/img/pantallaNiveles/salir.png');


        game.load.spritesheet('mundo1', 'assets/img/pantallaNiveles/Ciudad.png', 265, 257);
        game.load.spritesheet('mundo2', 'assets/img/pantallaNiveles/Playa.png', 265, 186);
        game.load.spritesheet('mundo3', 'assets/img/pantallaNiveles/Manglar.png', 265, 223);
        game.load.spritesheet('mundo4', 'assets/img/pantallaNiveles/ciudad.png', 265, 257);

        /*********Interactua mapa********/
        //Fondo
        //Fondo
        game.load.image('fondoLimpio', 'assets/img/mapaInteractivo/fondo/fondo_limpio.png');
        game.load.image('fondoDesktop', 'assets/img/mapaInteractivo/fondo/fondoPC.png');

        //Plataformas sprites
        game.load.image('platLimpio0', 'assets/img/mapaInteractivo/plataformas/platLimpio0.png');
        game.load.image('platLimpio1', 'assets/img/mapaInteractivo/plataformas/platLimpio1.png');
        game.load.image('platLimpio2', 'assets/img/mapaInteractivo/plataformas/platLimpio2.png');
        game.load.image('platLimpio3', 'assets/img/mapaInteractivo/plataformas/platLimpio3.png');
        game.load.image('platLimpio4', 'assets/img/mapaInteractivo/plataformas/platLimpio4.png');
        game.load.image('platLimpio5', 'assets/img/mapaInteractivo/plataformas/platLimpio5.png');
        game.load.image('platBas1', 'assets/img/mapaInteractivo/plataformas/platBas1.png');
        game.load.image('platBas2', 'assets/img/mapaInteractivo/plataformas/platBas2.png');
        //Tronco
        game.load.image('tronco', 'assets/img/mapaInteractivo/troncos/tronco2.png');
        game.load.image('tronco2', 'assets/img/mapaInteractivo/troncos/tronco2.png');
        game.load.image('tronco3', 'assets/img/mapaInteractivo/troncos/tronco2.png');
        //Basureros
        game.load.spritesheet('basureros', 'assets/img/mapaInteractivo/basureros/basureros2.png', 129, 142);

        //Basuras spritesheet
        game.load.spritesheet('organicas', 'assets/img/mapaInteractivo/basuras/organicas.png', 168, 168);


        // game.load.image('fondoLimpio', 'assets/img/fondo/fondo_limpio.png');
        //Plataformas sprites

        //Basura
        game.load.spritesheet('basuras', 'assets/img/mapaInteractivo/basuras/basuras.png', 170.12, 172);
        //Troncos sprites
        game.load.image('tronco', 'assets/img/mapaInteractivo/troncos/tronco_diagonal.png');
        game.load.image('tronco_flat', 'assets/img/mapaInteractivo/troncos/tronco_flat.png');
        game.load.image('tronco_abajo', 'assets/img/mapaInteractivo/troncos/tronco_down.png');
        //Basureros
        game.load.spritesheet('basureros', 'assets/img/mapaInteractivo/basureros/basureros2.png',129,142);
        //Remolinos
        game.load.image('remolino', 'assets/img/mapaInteractivo/remolinos/remolino.png');
        //Barra de tiempo
        game.load.image('barraTiempo', 'assets/img/mapaInteractivo/interfaz/barraTiempo.png');
        //Reloj
        game.load.image('reloj','assets/img/mapaInteractivo/interfaz/reloj.png');
        //Botones de pantallas
        game.load.image('boton_reinicar', 'assets/img/mapaInteractivo/pantallas/boton_reinicar.png');

        

        //////////*Keylor*//////////////
        //stateGame = STATE_GAME_LOADING;
        /*    game.load.image('background', 'assets/img/recolectaBasura/bg.jpg');
            game.load.atlasJSONArray('personajeCaminando', 'assets/img/recolectaBasura/top_walk.png', 'Assets/img/recolectaBasura/top_walk.json');
            game.load.atlasJSONArray('personajeCaminandoArriba', 'assets/img/recolectaBasura/personajeCaminandoArriba.png', 'Assets/img/recolectaBasura/personajeCaminandoArriba.json');
            game.load.atlasJSONArray('personajeCaminandoDerecha', 'assets/img/recolectaBasura/personajeCaminandoDerecha.png', 'Assets/img/recolectaBasura/personajeCaminandoDerecha.json');
            game.load.image('manzana', 'assets/img/recolectaBasura/manzana.png');
            game.load.spritesheet("BotonPlay", 'assets/img/recolectaBasura/botonPlay.png', 178, 176, 3);
            game.load.image('mapa', 'assets/img/recolectaBasura/mapa2.png');
            game.load.image('scoreFondo', 'assets/img/recolectaBasura/score.png');
            game.load.image('tiempo', 'assets/img/recolectaBasura/time.png');
            game.load.image('barraTiempo', 'assets/img/recolectaBasura/timeBar.png');
            game.load.image('statsFinal', 'assets/img/recolectaBasura/stats.png');
            game.load.image('recargar', 'assets/img/recolectaBasura/Reload.png');
            game.load.image('estrella', 'assets/img/recolectaBasura/estrella.png');
            game.load.audio('loopMusic', 'assets/Sonidos/Principal.mp3');
            game.load.audio('aplausos', 'assets/Sonidos/aplausos.wav');*/
    },

    loadFonts: function() {
        //Para cargar tipografias
        WebFontConfig = {
            custom: {
                families: ['TheMinion'],
                urls: ['assets/style/theminion.css']
            }
        }
    },

    init: function() { //orientacion x ,orientacion y, Recibe la img llamada en main.js(brand y loading)
        this.logo = game.make.sprite(game.world.centerX, game.world.centerY, 'brand');
        utils.centerGameObjects([this.logo]);
    },

    preload: function() {
        game.scale.forceOrientation(false, true);
        game.add.sprite(0, 0, 'stars');

        if (window.innerWidth < 630) {
            escalar = window.innerWidth / 1000;
        } else {
            escalar = window.innerWidth / 1400;
        }

        game.add.existing(this.logo).scale.setTo(escalar);

        this.loadScripts();
        this.loadImages();
        this.loadFonts();
        //this.loadBgm();   -----> llama a cargar la musica

    },

    addGameStates: function() {

        game.state.add("MenuPrincipal", MenuPrincipal);
        game.state.add("PlanetasMenu", PlanetasMenu);
        game.state.add("MenuConfiguracion", MenuConfiguracion);
        game.state.add("GamePlayManglar", GamePlayManglar);
        game.state.add("GamePlayCiudad", GamePlayCiudad);
        game.state.add("GamePlayParque", GamePlayParque);
        game.state.add("GamePlayPlaya", GamePlayPlaya);
    },

    /*addGameMusic: function () {
      music = game.add.audio('dangerous');
      music.loop = true;
      music.play();
    },*/

    create: function() {
        this.addGameStates();
        //this.addGameMusic();     -----> Agrega el cargarMusica

        setTimeout(function() {
            game.state.start("MenuPrincipal");
        }, 1000);
    }
};