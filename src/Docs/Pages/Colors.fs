module Docs.Pages.Colors

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
                    prop.text "This is haloween style button"
                ]
            ]
        ]

    let code = """Html.div [
    theme.cupcake // <-- this is the theme
    prop.children [
        Daisy.button.button [
            button.primary
            prop.text "This is haloween style button"
        ]
    ]
]"""
    let title =
        Html.div [ prop.dangerouslySetInnerHTML "Use <code class='code'>theme.YOUR_THEME</code> to apply one of existing themes to any element on a page." ]

    codedView title code example





[<ReactComponent>]
let ColorsView () =
    React.fragment [
        ex1
    ]

