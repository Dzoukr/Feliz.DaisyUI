module Docs.Pages.FormRange

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let colors =
    let example =
        Html.div [
            Daisy.range [prop.max 100; prop.defaultValue 40]
            Daisy.range [prop.max 100; prop.defaultValue 50; range.primary]
            Daisy.range [prop.max 100; prop.defaultValue 60; range.secondary]
            Daisy.range [prop.max 100; prop.defaultValue 70; range.accent]
        ]

    let code = """Html.div [
    Daisy.range [prop.max 100; prop.defaultValue 40]
    Daisy.range [prop.max 100; prop.defaultValue 50; range.primary]
    Daisy.range [prop.max 100; prop.defaultValue 60; range.secondary]
    Daisy.range [prop.max 100; prop.defaultValue 70; range.accent]
]"""
    let title = Html.text "Colors"
    codedView title code example

let sizes =
    let example =
        Html.div [
            Daisy.range [prop.max 100; prop.defaultValue 40; range.xs]
            Daisy.range [prop.max 100; prop.defaultValue 50; range.sm]
            Daisy.range [prop.max 100; prop.defaultValue 60; range.md]
            Daisy.range [prop.max 100; prop.defaultValue 70; range.lg]
        ]

    let code = """Html.div [
    Daisy.range [prop.max 100; prop.defaultValue 40; range.xs]
    Daisy.range [prop.max 100; prop.defaultValue 50; range.sm]
    Daisy.range [prop.max 100; prop.defaultValue 60; range.md]
    Daisy.range [prop.max 100; prop.defaultValue 70; range.lg]
]"""
    let title = Html.text "Sizes"
    codedView title code example

[<ReactComponent>]
let FormRangeView () =
    React.fragment [
        colors
        sizes
    ]