module Docs.Pages.Aura

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Html.div [
            prop.className "flex flex-wrap items-center justify-center gap-8"
            prop.children [
                Daisy.aura [
                    color.textPrimary
                    prop.children [ Daisy.button.button "Primary aura" ]
                ]
                Daisy.aura [
                    aura.rainbow
                    aura.lg
                    prop.children [ Daisy.button.button "Rainbow aura" ]
                ]
                Daisy.aura [
                    aura.glow
                    color.textSecondary
                    prop.children [ Daisy.badge "Glow" ]
                ]
            ]
        ]

    let code = """Html.div [
    prop.className "flex flex-wrap items-center justify-center gap-8"
    prop.children [
        Daisy.aura [
            color.textPrimary
            prop.children [ Daisy.button.button "Primary aura" ]
        ]
        Daisy.aura [
            aura.rainbow
            aura.lg
            prop.children [ Daisy.button.button "Rainbow aura" ]
        ]
        Daisy.aura [
            aura.glow
            color.textSecondary
            prop.children [ Daisy.badge "Glow" ]
        ]
    ]
]"""

    codedView (Html.text "Aura styles and sizes") code example

[<ReactComponent>]
let AuraView () = React.Fragment [ basic ]
