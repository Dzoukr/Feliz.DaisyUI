module Docs.Pages.Badge

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.badge [
            badge.lg
            badge.error
            prop.text "Big error badge"
        ]
        |> Html.div

    let code = """Daisy.badge [
    badge.lg
    badge.error
    prop.text "Big error badge"
]"""
    let title = Html.text "Just a badge."
    codedView title code example

let ex2 =
    let example =
        Daisy.badge [
            badge.sm
            badge.success
            prop.text "Success badge"
        ]
        |> Html.div

    let code = """Daisy.badge [
    badge.lg
    badge.error
    prop.text "Big error badge"
]"""
    let title = Html.text "Just a badge. Yup. Again."
    codedView title code example

let ex3 =
    let example =
        Daisy.button.button [
            Html.text "This is button"
            Daisy.badge [
                badge.sm
                badge.success
                prop.className "ml-2"
                prop.text "NEW"
            ]
        ]
        |> Html.div

    let code = """Daisy.button.button [
    Html.text "This is button"
    Daisy.badge [
        badge.sm
        badge.success
        prop.className "ml-2"
        prop.text "NEW"
    ]
]"""
    let title = Html.text "And now inside a button!"
    codedView title code example

[<ReactComponent>]
let BadgeView () =
    React.fragment [
        ex1
        ex2
        ex3
    ]