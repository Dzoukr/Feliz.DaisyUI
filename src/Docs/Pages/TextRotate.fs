module Docs.Pages.TextRotate

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Html.div [
            prop.className "m-auto text-3xl font-bold"
            prop.children [
                Html.text "Feliz.DaisyUI is "
                Daisy.textRotate [
                    color.textPrimary
                    prop.children [
                        Html.span [
                            Html.span "typed"
                            Html.span "expressive"
                            Html.span "productive"
                        ]
                    ]
                ]
            ]
        ]

    let code = """Html.div [
    Html.text "Feliz.DaisyUI is "
    Daisy.textRotate [
        color.textPrimary
        prop.children [
            Html.span [
                Html.span "typed"
                Html.span "expressive"
                Html.span "productive"
            ]
        ]
    ]
]"""

    codedView (Html.text "Rotate through up to six text items") code example

[<ReactComponent>]
let TextRotateView () = React.Fragment [ basic ]
