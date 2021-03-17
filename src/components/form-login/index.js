const formLogin = (()=>{
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style")

        $style.textContent = `
            .login{
                padding-left: 35px;
                padding-right: 35px;
            }
            .login > .btnBot {
                margin: 45px 0px 36px 0px;
            }
        
        `;

        $head.insertAdjacentElement("beforeend", $style);

    };

    module._children = () => {
        const $labelWebinarEmail = labelWebinar.render("E-mail");
        const $inputWebinarEmail = inputWebinar.render({
            id: "email", 
            placeholder:"example@email.com",
            type: "email" 
            });
        
            const $labelWebinarPass = labelWebinar.render("Password");
        
        const $inputWebinarPass = inputWebinar.render({
            id: "password", 
            placeholder: "********", 
            type: "password"});
        
            const $eyeWebinar = eyeWebinar.render({attrFor: "password"});
        
        /* const $linkCollab = linkCollab.render({
            href: "#", 
            content: "Forget password?"}); */
        
        const $btn = botButton.render({
            content: "Login",
            path: "home"});
    
        return `
            ${$labelWebinarEmail}    
            ${$inputWebinarEmail}
            
            ${$labelWebinarPass}
            ${$inputWebinarPass}
            ${$eyeWebinar}
            
            ${$btn}
        `
    };

    module.render = () => {
        module._style();

        return `
            <form class="login" action="" method="POST">${module._children()}</form>
        `
    }

    return {
        render: module.render
    }

})();