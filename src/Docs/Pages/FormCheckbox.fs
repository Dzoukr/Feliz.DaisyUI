module Docs.Pages.FormCheckbox

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Daisy.checkbox []

    let code = """Daisy.checkbox []"""
    let title = Html.text "Basic"
    codedView title code example

let basicChecked =
    let example =
        Daisy.checkbox [prop.defaultChecked true]

    let code = """Daisy.checkbox [prop.defaultChecked true]"""
    let title = Html.text "Checked"
    codedView title code example

let basicLabel =
    let example =
        Daisy.formControl [
            Daisy.label [
                Daisy.labelText "Remember me"
                Daisy.checkbox []
            ]
        ]

    let code = """Daisy.formControl [
    Daisy.label [
        Daisy.labelText "Remember me"
        Daisy.checkbox []
    ]
]"""
    let title = Html.text "Basic Label"
    codedView title code example

let all =
    let example =
        let colors = [
            checkbox.primary  , "primary"
            checkbox.secondary, "secondary"
            checkbox.accent   , "accent"
        ]

        let sizes = [
            checkbox.lg, "lg"
            checkbox.md, "md"
            checkbox.sm, "sm"
            checkbox.xs, "xs"
        ]

        Html.div [
            for size, sizeText in sizes do
                for color, colorText in colors do
                    Daisy.formControl [
                        Daisy.label [
                            Daisy.labelText (sprintf "%s - %s" sizeText colorText)
                            Daisy.checkbox [color; size; prop.defaultChecked true]
                        ]
                    ]
                    Daisy.formControl [
                        Daisy.label [
                            Daisy.labelText (sprintf "%s - %s (disabled)" sizeText colorText)
                            Daisy.checkbox [color; size; prop.disabled true; prop.defaultChecked true]
                        ]
                    ]
        ]

    let code = """let colors = [
    checkbox.primary  , "primary"
    checkbox.secondary, "secondary"
    checkbox.accent   , "accent"
]

let sizes = [
    checkbox.lg, "lg"
    checkbox.md, "md"
    checkbox.sm, "sm"
    checkbox.xs, "xs"
]

Html.div [
    for size, sizeText in sizes do
        for color, colorText in colors do
            Daisy.formControl [
                Daisy.label [
                    Daisy.labelText (sprintf "%s - %s" sizeText colorText)
                    Daisy.checkbox [color; size; prop.defaultChecked true]
                ]
            ]
            Daisy.formControl [
                Daisy.label [
                    Daisy.labelText (sprintf "%s - %s (disabled)" sizeText colorText)
                    Daisy.checkbox [color; size; prop.disabled true; prop.defaultChecked true]
                ]
            ]
]"""
    let title = Html.text "All Sizes and Colors"
    codedView title code example


[<ReactComponent>]
let FormCheckboxView () =
    React.fragment [
        basic
        basicChecked
        basicLabel
        all
    ]