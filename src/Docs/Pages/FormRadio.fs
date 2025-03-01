module Docs.Pages.FormRadio

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let colors =
    let example =
        Daisy.card [
            prop.children [
                Daisy.fieldset [
                    Daisy.fieldsetLabel [
                        prop.className "justify-between"
                        prop.children [
                            Html.text "Neutral"
                            Daisy.radio [ prop.name "colors" ]
                        ]
                    ]
                ]
                Daisy.fieldset [
                    Daisy.fieldsetLabel [
                        prop.className "justify-between"
                        prop.children [
                            Html.text "Primary"
                            Daisy.radio [ radio.primary; prop.name "colors" ]
                        ]
                    ]
                ]
                Daisy.fieldset [
                    Daisy.fieldsetLabel [
                        prop.className "justify-between"
                        prop.children [
                            Html.text "Secondary"
                            Daisy.radio [ radio.secondary; prop.name "colors" ]
                        ]
                    ]
                ]
                Daisy.fieldset [
                    Daisy.fieldsetLabel [
                        prop.className "justify-between"
                        prop.children [
                            Html.text "Accent"
                            Daisy.radio [ radio.accent; prop.name "colors" ]
                        ]
                    ]
                ]
                Daisy.fieldset [
                    Daisy.fieldsetLabel [
                        prop.className "justify-between"
                        prop.children [
                            Html.text "Disabled"
                            Daisy.radio [ prop.disabled true; prop.name "colors" ]
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
                    Html.text "Neutral"
                    Daisy.radio [ prop.name "colors" ]
                ]
            ]
        ]
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Primary"
                    Daisy.radio [ radio.primary; prop.name "colors" ]
                ]
            ]
        ]
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Secondary"
                    Daisy.radio [ radio.secondary; prop.name "colors" ]
                ]
            ]
        ]
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Accent"
                    Daisy.radio [ radio.accent; prop.name "colors" ]
                ]
            ]
        ]
        Daisy.fieldset [
            Daisy.fieldsetLabel [
                prop.className "justify-between"
                prop.children [
                    Html.text "Disabled"
                    Daisy.radio [ prop.disabled true; prop.name "colors" ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Colors"
    codedView title code example

let sizes =
    let example =
        Html.div [
            Daisy.fieldset [Daisy.radio [prop.name "sizes"; radio.xs]]
            Daisy.fieldset [Daisy.radio [prop.name "sizes"; radio.sm]]
            Daisy.fieldset [Daisy.radio [prop.name "sizes"; radio.md]]
            Daisy.fieldset [Daisy.radio [prop.name "sizes"; radio.lg]]
        ]

    let code = """Html.div [
    Daisy.fieldset [Daisy.radio [radio.xs]]
    Daisy.fieldset [Daisy.radio [radio.sm]]
    Daisy.fieldset [Daisy.radio [radio.md]]
    Daisy.fieldset [Daisy.radio [radio.lg]]
]"""
    let title = Html.text "Sizes"
    codedView title code example

[<ReactComponent>]
let FormRadioView () =
    React.fragment [
        colors
        sizes
    ]