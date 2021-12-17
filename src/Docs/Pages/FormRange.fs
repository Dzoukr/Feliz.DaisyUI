module Docs.Pages.FormRange

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let colors =
    let example =
        Html.div [
            Daisy.range [range.max 100; range.defaultValue 40]
            Daisy.range [range.max 100; range.defaultValue 50; range.primary]
            Daisy.range [range.max 100; range.defaultValue 60; range.secondary]
            Daisy.range [range.max 100; range.defaultValue 70; range.accent]
        ]

    let code = """Html.div [
    Daisy.range [range.max 100; range.defaultValue 40]
    Daisy.range [range.max 100; range.defaultValue 50; range.primary]
    Daisy.range [range.max 100; range.defaultValue 60; range.secondary]
    Daisy.range [range.max 100; range.defaultValue 70; range.accent]
]"""
    let title = Html.text "Colors"
    codedView title code example

let sizes =
    let example =
        Html.div [
            Daisy.range [range.max 100; range.defaultValue 40; range.xs]
            Daisy.range [range.max 100; range.defaultValue 50; range.sm]
            Daisy.range [range.max 100; range.defaultValue 60; range.md]
            Daisy.range [range.max 100; range.defaultValue 70; range.lg]
        ]

    let code = """Html.div [
    Daisy.range [range.max 100; range.defaultValue 40; range.xs]
    Daisy.range [range.max 100; range.defaultValue 50; range.sm]
    Daisy.range [range.max 100; range.defaultValue 60; range.md]
    Daisy.range [range.max 100; range.defaultValue 70; range.lg]
]"""
    let title = Html.text "Sizes"
    codedView title code example

[<ReactComponent>]
let FormRangeView () =
    React.fragment [
        colors
        sizes
    ]