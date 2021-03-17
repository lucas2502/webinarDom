const titleWebinar = (()=>{
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style =  document.createElement("style");

        $style.textContent = `
            .title-title {
                color: #ffe200;
                font-size: 24px;
                latter-spacing: 0.6px;
                text-transform: uppercase;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = (content) => {
        module._style();
        
        return `
            <h1 class="title-title">${content}</h1>
        `;
    };

    return {
        render: module.render
    };

})();