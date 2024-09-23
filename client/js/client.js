const submit_btn = document.getElementById("submit_btn");
const btn = document.getElementById("btn");

const contact_name = document.getElementById("name");
const email = document.getElementById("email");
const inquiry = document.getElementById("inquiry");

const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const inquiry_error = document.getElementById("inquiry_error");

const email_exp = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]+$/;
const inquiry_exp = /^.{1,10}$/;


//サーバにデータを送信（{deploy_id}は各自の環境に依存）
const api_url = "https://script.google.com/macros/s/AKfycbwNAW-94Z4SrWWolLA6fSgt8QTylZ-GA-INcjwi2sXUGsZlL7nirDTIiJL0xZw_QMF6Fw/exec"
// "https://script.google.com/macros/s/AKfycbzyLMVx2j9iCz_i1_mc9dnz5J6WE3P4fJbzaBYrhLc6Ky3GNcN-IWqMsU6S0Mf-bdF2qw/exec"
// "https://script.google.com/macros/s/AKfycbxPT4CJr1SC87u67zo_8WA9PfXKxEs96n33JW9LDo0z_JhkdpkSyH2h2myNPTRVzJARVw/exec"
//"https://script.google.com/macros/s/AKfycby0jATsE7CzKWevl31IYSGnOhLpNNiplXWdIEL9sEmj163YjmZZaQMGdWDJWtupBeFulg/exec&cmd=inquiry"
// "https://script.google.com/macros/s/AKfycby0jATsE7CzKWevl31IYSGnOhLpNNiplXWdIEL9sEmj163YjmZZaQMGdWDJWtupBeFulg/exec?cmd=inquiry"
// const api_url = "https://script.google.com/macros/s/AKfycbxQjzo-aT3u55eKtTOVfPHhc3JouIaIbtFIEhNCkFewHwENy11OPihRBDJSyFzdd9zPAw/exec"

listx_query = `cmd=listx`
function ev_hdr(e, query){
  alert("listx_1")
  fetch(api_url, {
    method: "post",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: encodeURI(query)
  }).then((response) => {
    response.text().then((text) => {
      alert( 'then 1=' + text);
    });
    response.json().then((json) => {
                       alert( 'then 2=' + json.message);
                   });
  }).catch((error) => {
    alert(error.message);
  })
}
/*
function ev_hdr(e, query){
  e.preventDefault();
  alert("listx_1")
  // alert("Thank you for your inquiry!");
  fetch(api_url, {
    method: "post",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: encodeURI(query)
  }).then((response) => {
    response.text().then((text) => {
      alert(text);
    });
    response.json().then((json) => {
                       alert(json.message);
                   });
  }).catch((error) => {
    alert(error.message);
}
*/
btn.addEventListener("click", (e) => {
  ev_hdr(e, listx_query)
})
/*
btn.addEventListener("click", (e) => {
  e.preventDefault();
  // alert("Thank you for your inquiry!");
  fetch(api_url, {
    method: "post",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: encodeURI(`cmd=listx`)
  }).then((response) => {
    response.text().then((text) => {
      alert(text);
    });
    response.json().then((json) => {
                       alert(json.message);
                   });
  }).catch((error) => {
    alert(error.message);
  });
});
*/
submit_btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("ABC inquiry 1");

    if (contact_name.value == "") {
        name_error.classList.remove("hidden");
    }

    if (!email_exp.test(email.value)) {
        email_error.classList.remove("hidden");
    }

    if (!inquiry_exp.test(inquiry.value)) {
      inquiry_error.classList.remove("hidden")
    }
    alert("ABC inquiry 2");

    if (name_error.classList.contains("hidden") && email_error.classList.contains("hidden") && inquiry_error.classList.contains("hidden")) {
      alert("ABC inquiry before fetch");
      fetch(api_url, {
          method: "post",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          body: encodeURI(`cmd=inquiry&name=${contact_name.value}&email=${email.value}&inquiry=${inquiry.value}`)
      }).then((response) => {
          response.text().then((text) => {
            alert(text);
          });
          response.json().then((json) => {
                             alert(json.message);
                         });

      }).catch((error) => {
        alert(error.message);
      });
    }
  }
);
