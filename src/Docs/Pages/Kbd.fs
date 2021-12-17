module Docs.Pages.Kbd

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let single =
    let example =
        Daisy.kbd "a"
        |> Html.div

    let code = """Daisy.kbd "a" """
    let title = Html.text "Single"
    codedView title code example

let sizes =
    let example =
        Html.div [
            for size in [kbd.lg; kbd.md; kbd.sm; kbd.xs] do
                Daisy.kbd [size; prop.text "shift"]
        ]

    let code = """for size in [kbd.lg; kbd.md; kbd.sm; kbd.xs] do
    Daisy.kbd [size; prop.text "shift"]"""
    let title = Html.text "Sizes"
    codedView title code example

let keyCombo =
    let example =
        Html.div [
            Daisy.kbd "ctrl"
            Html.span "+"
            Daisy.kbd "shift"
            Html.span "+"
            Daisy.kbd "del"
        ]

    let code = """Daisy.kbd "ctrl"
Html.span "+"
Daisy.kbd "shift"
Html.span "+"
Daisy.kbd "del" """
    let title = Html.text "Key Combination"
    codedView title code example

[<ReactComponent>]
let KbdView () =
    React.fragment [
        single
        sizes
        keyCombo
    ]