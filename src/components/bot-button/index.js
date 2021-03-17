const botButton = (() => {
    const module = {};

    module._style = () => { 
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .btnBot{
                background-color: #ffe200;
                color: #fff;
                width: 70vw;
                height: 48px;
                border-radius: 24px;
                text-align: center;
            }
            .btnBot:hover {
                background-color: #fff;
                color: #ffe200;
                border: solid 1px #ffe200 ;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };
    
    module.handleClick = (event, path) => {
        event.preventDefault();
        location.hash = `#/${path}`;
        location.reload();
    }

    module.render = ({content = "", path = ""}) => {
        module._style();

        return `
            <input
                class="btnBot"
                type="submit"
                value=${content}
                onClick="botButton.handleClick(event, '${path}')"
            />
        `;
    }

    return {
        render: module.render,
        handleClick: module.handleClick
    }
})();