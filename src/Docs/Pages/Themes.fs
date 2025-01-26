module Docs.Pages.Themes

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Docs.SharedView

let ex1 =
    let example =
        Html.div [
            theme.cupcake
            prop.children [
                Daisy.button.button [
                    button.primary
                    prop.text "This is cupcake style button"
                ]
            ]
        ]

    let code = """Html.div [
    theme.cupcake // <-- this is the theme
    prop.children [
        Daisy.button.button [
            button.primary
            prop.text "This is cupcake style button"
        ]
    ]
]"""
    let title =
        Html.div [ prop.dangerouslySetInnerHTML "Use <code class='code'>theme.YOUR_THEME</code> to apply one of existing themes to any element on a page." ]

    codedView title code example

let ex2 =
    let example =
        Html.div [
            Daisy.card [
                theme.cyberpunk
                card.border
                prop.children [
                    Html.figure [
                        prop.className "pt-10"
                        prop.children [
                            Html.img [ prop.src "https://picsum.photos/id/1005/400/250" ]
                        ]
                    ]
                    Daisy.cardBody [
                        Daisy.cardTitle "Some title"
                        Html.p "What a cool library, isn't it?"
                        Daisy.cardActions [
                            Daisy.button.button [
                                button.primary
                                prop.text "Click or something"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.card [
    theme.cyberpunk // <-- use cyberpunk here
    card.border
    prop.children [
        Html.figure [
            prop.className "pt-10"
            prop.children [
                Html.img [ prop.src "https://picsum.photos/id/1005/400/250" ]
            ]
        ]
        Daisy.cardBody [
            Daisy.cardTitle "Some title"
            Html.p "What a cool library, isn't it?"
            Daisy.cardActions [
                Daisy.button.button [
                    button.primary
                    prop.text "Click or something"
                ]
            ]
        ]
    ]
]"""
    let title =
        Html.div [ prop.dangerouslySetInnerHTML "You can use it on any element or any part of page. Yes, even for whole <code class='code'>&lt;body&gt;</code>!" ]

    codedView title code example


[<ReactComponent>]
let ThemesView () =
    React.fragment [
        ex1
        ex2
    ]

