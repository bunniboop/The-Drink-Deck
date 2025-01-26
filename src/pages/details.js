import { html } from "lit-html";

const templ = html`
<section id='description_page'>

    <div id='details_wrapper'>
        <div class="details_upper">
            <img>
            <div class="details_desription_titels">
                <h1>Lava Drink</h1>
                <p>A cool drink that uh helps u.. hydrate? Can you tell this is example text?</p>
                <a>@original recipe</a>
                <div class="details_tags" >
                    <button>HOT</button>
                    <button>NEW</button>
                </div>
            </div>
        </div>
        <div class="details_bottom">
            <div class="details_ingredients">
                <h1>Ingredients</h1>
                <ul>
                    <li>200ml milk</li>
                </ul>
            </div>
            <div class="details_preparation" >
                <h1>Ingredients</h1>
                <ol>
                    <li class="li_wrapper">
                        <p>You do that thrn mix that and sm sm and then another sm and yeH</p>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</section>
`

export function detailsPage(ctx){
    ctx.render(templ)
}