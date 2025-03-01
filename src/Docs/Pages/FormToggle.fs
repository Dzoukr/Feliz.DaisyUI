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
            prop.children [
                Daisy.fieldset [
                    Daisy.fieldsetLabel [
                        prop.className "justify-between"
                        prop.children [
                            Html.text "Remember me"
                            Daisy.toggle []
                        ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Remember me"
                    Daisy.toggle []
                ]
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
            prop.children [
                for color, colorText in colors do
                    Daisy.fieldset [
                        Daisy.fieldsetLabel [
                            prop.className "justify-between"
                            prop.children [
                                Html.text colorText
                                Daisy.toggle [color; prop.defaultChecked true]
                            ]
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
    prop.children [
        for color, colorText in colors do
            Daisy.fieldset [
                Daisy.fieldsetLabel [
                    prop.className "justify-between"
                    prop.children [
                        Html.text colorText
                        Daisy.toggle [color; prop.defaultChecked true]
                    ]
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