module Docs.Pages.Index

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI


[<ReactComponent>]
let IndexView () =

    DaisyUI.alert [
        alert.warning
        prop.children [
            Html.div "AHOJ"
        ]
    ]

    DaisyUI.artboard [
        artboard.demo
        artboard.phone2
        prop.children [
            Html.div "AHOJ"
        ]
    ]