module Docs.Pages.Artboard

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.artboard [
            artboard.demo
            artboard.phone1
            prop.text "Phone 1"
        ]
        |> Html.div

    let code = """Daisy.artboard [
    artboard.demo
    artboard.phone1
    prop.text "Phone 1"
]"""
    let title = Html.text "Use Artboard for fancy mobile-like style."
    codedView title code example


[<ReactComponent>]
let ArtboardView () =
    React.fragment [
        ex1
    ]