(() => {
    
    const { hash } = window.location;

    const paths = [];
    paths[""] = login;
    paths["#/login"] = login;
    paths["#/home"] = home;
    paths["#/404"] = status404;

    paths[hash] === undefined ? paths["#/404"]() : paths[hash]()
    
})(); 