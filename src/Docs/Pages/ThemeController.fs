module Docs.Pages.ThemeController

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.toggle [
            theme.controller
            prop.value "synthwave"
        ]

    let code = """Daisy.toggle [
    theme.controller
    prop.value "synthwave"
]"""
    let title = Html.text "If a checked checkbox input or a checked radio input with theme-controller class exists in the page, The page will have the same theme as that input's value."
    codedView title code example

[<ReactComponent>]
let ThemeControllerView () =
    React.fragment [
        ex1
    ]