module Docs.Pages.Card

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let cardFullImage =
    let example =
        Daisy.card [
            card.bordered
            card.full
            prop.children [
                Html.figure [Html.img [prop.src "https://picsum.photos/id/1005/400/250"]]
                Daisy.cardBody [
                    Daisy.cardTitle "Image overlay"
                    Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
                    Daisy.cardActions [
                        Daisy.button.button [prop.text "Get started"; button.primary]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.card [
    card.bordered
    card.full
    prop.children [
        Html.figure [Html.img [prop.src "https://picsum.photos/id/1005/400/250"]]
        Daisy.cardBody [
            Daisy.cardTitle "Image overlay"
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
            Daisy.cardActions [
                Daisy.button.button [prop.text "Get started"; button.primary]
            ]
        ]
    ]
]"""
    let title = Html.text "Card with full image"
    codedView title code example

let cardTopImage =
    let example =
        Daisy.card [
            card.bordered
            prop.children [
                Html.figure [Html.img [prop.src "https://picsum.photos/id/1005/400/250"]]
                Daisy.cardBody [
                    Daisy.cardTitle [
                        prop.children [
                            Html.span "Top image "
                            Daisy.badge [
                                badge.lg
                                badge.secondary
                                prop.text "NEW"
                            ]
                        ]
                    ]
                    Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
                    Daisy.cardActions [
                        Daisy.button.button [prop.text "More info"; button.secondary]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.card [
    card.bordered
    prop.children [
        Html.figure [Html.img [prop.src "https://picsum.photos/id/1005/400/250"]]
        Daisy.cardBody [
            Daisy.cardTitle [
                prop.children [
                    Html.span "Top image "
                    Daisy.badge [
                        badge.lg
                        badge.secondary
                        prop.text "NEW"
                    ]
                ]
            ]
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
            Daisy.cardActions [
                Daisy.button.button [prop.text "More info"; button.secondary]
            ]
        ]
    ]
]"""
    let title = Html.text "Card with top image"
    codedView title code example

let cardWithShadowNoImage =
    let example =
        Daisy.card [
            prop.className "shadow-lg"
            prop.children [
                Daisy.cardBody [
                    Daisy.cardTitle "Card with shadow no image"
                    Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
                    Daisy.cardActions [
                        Daisy.button.button [prop.text "Get Started"; button.primary]
                        Daisy.button.button [prop.text "More info"; button.ghost]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.card [
    prop.className "shadow-lg"
    prop.children [
        Daisy.cardBody [
            Daisy.cardTitle "No Images"
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
            Daisy.cardActions [
                Daisy.button.button [prop.text "Get Started"; button.primary]
                Daisy.button.button [prop.text "More info"; button.ghost]
            ]
        ]
    ]
]"""
    let title = Html.text "Card with shadow no image"
    codedView title code example

let cardWithBorderNoImage =
    let example =
        Daisy.card [
            card.bordered
            prop.children [
                Daisy.cardBody [
                    Daisy.cardTitle "Card with border no image"
                    Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
                    Daisy.cardActions [
                        Daisy.button.button [prop.text "Get Started"; button.primary]
                        Daisy.button.button [prop.text "More info"; button.ghost]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.card [
    card.bordered
    prop.children [
        Daisy.cardBody [
            Daisy.cardTitle "No Images"
            Html.p "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
            Daisy.cardActions [
                Daisy.button.button [prop.text "Get Started"; button.primary]
                Daisy.button.button [prop.text "More info"; button.ghost]
            ]
        ]
    ]
]"""
    let title = Html.text "Card with border no image"
    codedView title code example

[<ReactComponent>]
let CardView () =
    React.fragment [
        cardWithBorderNoImage
        cardWithShadowNoImage
        cardTopImage
        cardFullImage
    ]