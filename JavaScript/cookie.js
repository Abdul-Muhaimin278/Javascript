// const setCookie = (name, value) => {
//   const d = new Date();
//   d.setTime(d.getTime() * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = `${name}=${value}; ${expires} ;path=/`;
// };

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   // console.log(name, "|", decodedCookie, "|", ca);

//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     console.log(c);
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       console.log(c);
//       return c.substring(name.length, c.length);
//     }
//   }

//   return "";
// }
// function checkCookie(name) {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user);
//     }
//   }
// }
// checkCookie();
