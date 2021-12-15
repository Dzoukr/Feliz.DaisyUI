module Docs.Pages.FormToggle

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Daisy.toggle []

    let code = """Daisy.toggle []"""
    let title = Html.text "Basic"
    codedView title code example

let toggleWithLabelAndContainer =
    let example =
        Daisy.card [
            card.bordered
            prop.children [
                Daisy.formControl [
                    Daisy.label [
                        Daisy.labelText "Remember me"
                        Daisy.toggle []
                    ]
                ]
            ]
        ]

    let code = """Daisy.card [
    card.bordered
    prop.children [
        Daisy.formControl [
            Daisy.label [
                Daisy.labelText "Remember me"
                Daisy.toggle []
            ]
        ]
    ]
]"""
    let title = Html.text "Toggle with label and container"
    codedView title code example

let colors =
    let example =
        let colors = [
            toggle.primary  , nameof toggle.primary
            toggle.secondary, nameof toggle.secondary
            toggle.accent   , nameof toggle.accent
        ]
        Daisy.card [
            card.bordered
            prop.children [
                for color, colorText in colors do
                    Daisy.formControl [
                        Daisy.label [
                            Daisy.labelText colorText
                            Daisy.toggle [color; prop.defaultChecked true]
                        ]
                    ]
            ]
        ]

    let code = """let colors = [
    toggle.primary  , nameof toggle.primary
    toggle.secondary, nameof toggle.secondary
    toggle.accent   , nameof toggle.accent
]
Daisy.card [
    card.bordered
    prop.children [
        for color, colorText in colors do
            Daisy.formControl [
                Daisy.label [
                    Daisy.labelText colorText
                    Daisy.toggle [color; prop.defaultChecked true]
                ]
            ]
    ]
]"""
    let title = Html.text "Toggle with label and container"
    codedView title code example

[<ReactComponent>]
let FormToggleView () =
    React.fragment [
        basic
        toggleWithLabelAndContainer
        colors
    ]