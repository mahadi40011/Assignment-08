import Swal from "sweetalert2";

const InstallAlert =(title) => {
  Swal.fire({
        title: `${title} Successfully Install`,
        icon: "success",
        customClass: {
          popup: "popup-style",
          title: "title-style",
        },
      });
}

const UninstallAlert =(title) => {
  Swal.fire({
        title: `${title} Successfully Uninstall`,
        icon: "success",
        customClass: {
          popup: "popup-style",
          title: "title-style",
        },
      });
}


export {InstallAlert, UninstallAlert}