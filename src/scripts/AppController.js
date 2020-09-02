import Home from './Home.js';
import Lobby from './Lobby.js';
// import Test from './Test.js';

export default class AppController {
    constructor() {

        this.user = {};

        this.outlet = document.getElementById('outlet');

        if ( localStorage.getItem( 'ktb-username' ) ){
            this.initLobby();
        } else {
            this.home = new Home ( this.outlet, this.homeSubmitHandler );
            this.lobby = null;
        }
    }

    homeSubmitHandler = ( username ) => {
        this.user.name = username;
        this.home.hide();
        this.initLobby();
    };

    initLobby = () => {
        this.lobby = new Lobby(
            this.outlet
        );
    };
}
