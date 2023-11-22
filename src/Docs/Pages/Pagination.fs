module Docs.Pages.Pagination

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.join [
            Daisy.button.button "Previous"
            Daisy.button.button "1"
            Daisy.button.button [button.active; prop.text "2"]
            Daisy.button.button "3"
            Daisy.button.button "4"
            Daisy.button.button "Next"
        ]

    let code = """Daisy.join [
    Daisy.button.button "Previous"
    Daisy.button.button "1"
    Daisy.button.button [button.active; prop.text "2"]
    Daisy.button.button "3"
    Daisy.button.button "4"
    Daisy.button.button "Next"
]"""
    let title = Html.text "Simple pagination"
    codedView title code example

let sizes =
    let example =
        let sizes = [
            button.xs, nameof button.xs
            button.sm, nameof button.sm
            button.md, nameof button.md
            button.lg, nameof button.lg
        ]
        Html.div [
            for size, sizeText in sizes do
                Daisy.join [
                    Daisy.button.button [size; prop.text "Previous"]
                    Daisy.button.button [size; prop.text "1"]
                    Daisy.button.button [size; button.active; prop.text "2"]
                    Daisy.button.button [size; prop.text "3"]
                    Daisy.button.button [size; prop.text "4"]
                    Daisy.button.button [size; prop.text "Next"]
                ]
        ]

    let code = """let sizes = [
    button.xs, nameof button.xs
    button.sm, nameof button.sm
    button.md, nameof button.md
    button.lg, nameof button.lg
]
Html.div [
    for size, sizeText in sizes do
        Daisy.join [
            Daisy.button.button [size; prop.text "Previous"]
            Daisy.button.button [size; prop.text "1"]
            Daisy.button.button [size; button.active; prop.text "2"]
            Daisy.button.button [size; prop.text "3"]
            Daisy.button.button [size; prop.text "4"]
            Daisy.button.button [size; prop.text "Next"]
        ]
]"""
    let title = Html.text "Sizes"
    codedView title code example

[<ReactComponent>]
let PaginationView () =
    React.fragment [
        simple
        sizes
    ]
