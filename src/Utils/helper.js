
import { removeAuth } from "@/Utils/localstorage";
import Swal from "sweetalert2";


// import jwt_decode from "jwt-decode";
// import { ProfileController } from "@/controllers/ProfileControllers.js";


// export const formatPrice = (price) => {
//     if (!price) return "Rp. 0";
//     const result = price.toLocaleString("id");
//     return `Rp. ${result}`;
// };

export const sessionExpired = () => {
    Swal.fire({
        title: "Perhatian!",
        text: "Sesi Telah habis, silahkan Login Kembali",
        icon: "info",
        closeOnClickOutside: false,
        buttons: {
            confirm: {
                text: "Ok",
                value: true,
                visible: true,
                className: "bg-green-button  rounded-[32px] ",
                customClass: " hover:bg-green-button-darker",
                closeModal: true
            }
        }
    }).then((result) => {
        if (result) {
            removeAuth();
            window.location.reload();

        }
    });
}

// export const formatDate = (date) => {
//     return moment(date).subtract(1, 'D').format("DD MMMM YYYY")
// }

export const errorLogout = () => {
    let token = 1;
    let hk_repeat = localStorage.getItem("hk_repeat") || "";


    if (hk_repeat >= 3) {

        localStorage.removeItem("hk_repeat")
        removeAuth()
        window.location.reload();
    } else {
        if (!hk_repeat) {
            localStorage.setItem("hk_repeat", token);
        } else {
            localStorage.setItem("hk_repeat", Number(hk_repeat) + 1);
        }
    }
}