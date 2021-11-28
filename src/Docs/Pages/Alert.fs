module Docs.Pages.Alert

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.alert [
            alert.info
            prop.text "This is info"
        ]
        |> Html.div

    let code = """Daisy.alert [
    alert.info
    prop.text "This is info"
]"""
    let title = Html.text "Use of Alert is rather straightforward."
    codedView title code example

let ex2 =
    let example =
        Daisy.alert [
            alert.success
            prop.text "Wow it works so great!"
        ]
        |> Html.div

    let code = """Daisy.alert [
    alert.success
    prop.text "Wow it works so great!"
]"""
    let title = Html.none
    codedView title code example

let ex3 =
    let example =
        Daisy.alert [
            alert.error
            prop.text "OMG, something went wrong!"
        ]
        |> Html.div

    let code = """Daisy.alert [
    alert.error
    prop.text "OMG, something went wrong!"
]"""
    let title = Html.none
    codedView title code example

let ex4 =
    let example =
        Daisy.alert [
            alert.warning
            prop.className "justify-start"
            prop.children [
                Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
                Html.label [ prop.text "Warning with cool icon" ]
            ]
        ]
        |> Html.div

    let code = """Daisy.alert [
    alert.warning
    prop.className "justify-start"
    prop.children [
        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
        Html.label [ prop.text "Warning with cool icon" ]
    ]
]"""
    let title = Html.none
    codedView title code example

[<ReactComponent>]
let AlertView () =
    React.fragment [
        ex1
        ex2
        ex3
        ex4
    ]