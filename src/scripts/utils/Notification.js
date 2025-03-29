// export default class Notification {
//     #permission;

//     constructor() {
//         this.#permission = null;
//         this.init();
//     }

//     async init() {
//         if (!("Notification" in window)) {
//             console.error("Browser tidak mendukung notifikasi.");
//             return;
//         }

//         try {
//             this.#permission = await window.Notification.requestPermission();
//             this.handlePermission();
//         } catch (error) {
//             console.error("Gagal meminta izin notifikasi:", error);
//         }
//     }

//     handlePermission() {
//         switch (this.#permission) {
//             case "granted":
//                 console.log("Izin notifikasi diberikan.");
//                 break;

//             case "denied":
//                 console.warn("Izin notifikasi ditolak.");
//                 break;

//             case "default":
//                 console.info("Pengguna belum memutuskan.");
//                 break;
//         }
//     }
// }