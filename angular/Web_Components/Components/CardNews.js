class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"}) 
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
        
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Usuario");

        const linkTittle = document.createElement("h1");
        linkTittle.textContent = this.getAttribute("tittle") || "Título Não Definido";
        // linkTittle.href = this.getAttribute("link-url");

        const newscontent = document.createElement("p");
        newscontent.textContent = this.getAttribute("content") || "Conteúdo Não Definido";

        cardRight.appendChild(autor);
        cardRight.appendChild(linkTittle);
        cardRight.appendChild(newscontent);

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";

        cardLeft.appendChild(newsImage);

        componentRoot.appendChild(cardRight);
        componentRoot.appendChild(cardLeft);

        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
    .card{
        height: 250px;
        width: 720px;
        box-shadow: 9px 9px 27px 0px #000000;
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        justify-content: space-between;
        margin: 25px;
    }
    
    .card_left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
    }
    
    .card_left > span {
        font-weight: 400;
    }
    
    .card_left > h1 {
        margin-top: 15px;
        font-size: 25px;
    }
    
    .card_left > p {
        color: #808080;
    }    
        `
    return style;
    }
}

customElements.define('card-news', CardNews);
