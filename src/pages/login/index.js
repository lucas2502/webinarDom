const login = (()=> {
    const $root = document.querySelector("#root");
   
    const $imgLogo = logoLogin.render();
    const $titleWebinar = titleWebinar.render("DOM É LEGAL <3");
    const $logoWrapper = logoWrapper.render($imgLogo, $titleWebinar);
    const $formLogin = formLogin.render()

    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formLogin);

});

