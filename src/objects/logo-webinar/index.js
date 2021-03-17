const logoLogin = (() => {
    const module ={};
    
    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
        .logo-collabcode {
            display: inline-block;
            border: solid 40px #fff;
            border-radius: 50%;
        }
        .logo-collabcode > .logo {
            width: 175px;
            background-color: #fff;
        }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    }

    module.render = () => {
        module._style();

        return `
            <figure class="logo-collabcode">
                <img class="logo" src="img/js-icon.png">
            </figure>
        `;
    };

    return {
        render: module.render
    };
})();