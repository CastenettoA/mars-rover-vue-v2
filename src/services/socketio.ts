import { io } from 'socket.io-client';
import { useStore } from 'vuex';
import { Point } from '@/interfaces/cartesian'

export class SocketioService {
    static socket:any;
    static store:any;
    constructor() {}

    static setupStore(s:any) {
        this.store = s;
    }

    static destroyStore() {
        this.store = undefined;
    }

    static setupSocketConnection() {
        /** init connection to remote server,
         * we need to pass the url because is not the same server.
         */ 
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
        this.socket.on('update-map', (pos:Point) => {
            // use vuex action to update the map
            this.store.dispatch('updateRoverPosition', { currentPosition: pos });
        });
    }

    static disconnect() {
        if (this.store) this.destroyStore();
        if (this.socket) this.socket.disconnect();
    }
}