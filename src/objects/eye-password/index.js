const eyeWebinar = (() => {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-webinar {
                background-image: url(/img/eye.png); 
                background-repeat: no-repeat;
                background-position: center;
                display: block;
                text-indent: -999px;
                width: 24px;
                height: 15px;
                cursor: pointer;
                opacity: 0.5;
                transition: opacity 200ms linear;
                margin-left: auto;
                transform: translateY(-140%);
            }
            .eye-webinar.-active {
                opacity:1;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style)
    };

    module._handleClick = function () {
        const attrFor = this.getAttribute("for");
        const $input = document.querySelector(`#${attrFor}`);

        if($input.getAttribute("type") === "text"){
            $input.classList.remove("-active") 
            $input.setAttribute("type", "password")   
        }else{
            $input.classList.add("-active")
            $input.setAttribute("type", "text")
        }
    }

    module.render = ({ attrFor = ""}) => {
        module._style();

        return `
            <label
                for="${attrFor}" 
                class="eye-webinar" 
                onClick="{() => eyewebinar.handleClick()}"
            >Show password</label>
        `;


    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }

})();