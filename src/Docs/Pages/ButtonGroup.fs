module Docs.Pages.ButtonGroup

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.buttonGroup [
            Daisy.button.button [ button.active; button.lg; prop.text "Awesome" ]
            Daisy.button.button [ button.lg; prop.text "Less Awesome" ]
            Daisy.button.button [ button.lg; prop.text "Still good" ]
        ]
        |> Html.div

    let code = """Daisy.buttonGroup [
    Daisy.button.button [ button.active; button.lg; prop.text "Awesome" ]
    Daisy.button.button [ button.lg; prop.text "Less Awesome" ]
    Daisy.button.button [ button.lg; prop.text "Still good" ]
]"""
    let title = Html.text "Group buttons together"
    codedView title code example


[<ReactComponent>]
let ButtonGroupView () =
    React.fragment [
        ex1
    ]