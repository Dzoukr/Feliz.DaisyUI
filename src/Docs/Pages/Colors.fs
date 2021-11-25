module Docs.Pages.Colors

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Html.divClassed "flex flex-col space-y-4" [
            Html.div [ color.textPrimary; prop.text "I am primary!" ]
            Html.div [ color.textSuccess; prop.text "I am success!" ]
            Html.div [ color.bgAccent; prop.text "Background accent" ]
            Html.div [ (color.bgError ++ color.textSuccess); prop.text "Success with error background 🤦" ]
        ]

    let code = """Html.div [
    Html.div [ color.textPrimary; prop.text "I am primary!" ]
    Html.div [ color.textSuccess; prop.text "I am success!" ]
    Html.div [ color.bgAccent; prop.text "Background accent" ]
    Html.div [
        // Note the usage of custom operator ++
        (color.bgError ++ color.textSuccess)
        prop.text "Success with error background 🤦"
    ]
]"""

    let title =
        Html.div [
            Html.span "To select one of predefined "
            Html.a [ prop.className "link"; prop.text "colors"; prop.href "https://daisyui.com/core/colors" ]
            Html.span [ prop.dangerouslySetInnerHTML ", use the <code class='code'>color.YOUR_COLOR</code>" ]
        ]

    codedView title code example


[<ReactComponent>]
let ColorsView () =
    React.fragment [
        ex1
    ]

