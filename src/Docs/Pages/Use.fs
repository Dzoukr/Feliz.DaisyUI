module Docs.Pages.Use

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

[<ReactComponent>]
let UseView () =
    React.fragment [
        Html.divClassed "description" [ Html.text "After installation just open proper namespace:" ]
        Html.divClassed "max-w-xl" [
            linedMockupCode "open Feliz.DaisyUI"
        ]
        Html.divClassed "description" [
            Html.text "Now you can start using library. Everything important starts with "
            Html.code [ prop.className "code"; prop.text "Daisy.*" ]
            Html.text " module."
        ]
        Html.divClassed "max-w-xl" [
            linedMockupCode """Daisy.button.button [
    button.primary
    prop.text "This is button"
]"""
        ]
        Html.divClassed "description" [
            Html.text "For applying helpers to non-daisy elements, you need to use custom operator "
            Html.code [ prop.className "code"; prop.text "++" ]
            Html.text " from "
            Html.code [ prop.className "code"; prop.text "Feliz.DaisyUI.Operators" ]
            Html.text " namespace."
        ]
        Html.divClassed "max-w-xl" [
            linedMockupCode """open Feliz.DaisyUI.Operators

Html.div [
    prop.className "my-class"
    ++ color.success // note usage of custom operator here
]"""
        ]
    ]