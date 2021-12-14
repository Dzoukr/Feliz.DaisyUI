module Docs.Pages.FormRadio

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let colors =
    let example =
        Daisy.card [
            card.bordered
            prop.children [
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "Neutral"; Daisy.radio [prop.name "colors"]]
                ]
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "Primary"; Daisy.radio [radio.primary; prop.name "colors"]]
                ]
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "Secondary"; Daisy.radio [radio.secondary; prop.name "colors"]]
                ]
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "Accent"; Daisy.radio [radio.accent; prop.name "colors"]]
                ]
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "Disabled"; Daisy.radio [prop.disabled true; prop.name "colors"]]
                ]
            ]
        ]

    let code = """Daisy.card [
    card.bordered
    prop.children [
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Neutral"; Daisy.radio [prop.name "colors"]]
        ]
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Primary"; Daisy.radio [radio.primary; prop.name "colors"]]
        ]
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Secondary"; Daisy.radio [radio.secondary; prop.name "colors"]]
        ]
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Accent"; Daisy.radio [radio.accent; prop.name "colors"]]
        ]
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Disabled"; Daisy.radio [prop.disabled true; prop.name "colors"]]
        ]
    ]
]"""
    let title = Html.text "Colors"
    codedView title code example

let sizes =
    let example =
        Html.div [
            Daisy.formControl [Daisy.radio [prop.name "sizes"; radio.xs]]
            Daisy.formControl [Daisy.radio [prop.name "sizes"; radio.sm]]
            Daisy.formControl [Daisy.radio [prop.name "sizes"; radio.md]]
            Daisy.formControl [Daisy.radio [prop.name "sizes"; radio.lg]]
        ]

    let code = """Html.div [
    Daisy.formControl [Daisy.radio [radio.xs]]
    Daisy.formControl [Daisy.radio [radio.sm]]
    Daisy.formControl [Daisy.radio [radio.md]]
    Daisy.formControl [Daisy.radio [radio.lg]]
]"""
    let title = Html.text "Sizes"
    codedView title code example

[<ReactComponent>]
let FormRadioView () =
    React.fragment [
        colors
        sizes
    ]