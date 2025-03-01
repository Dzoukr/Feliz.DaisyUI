module Docs.Pages.FormInput

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let inputWithBorder =
    let example =
        Daisy.fieldset [
            Daisy.fieldsetLabel "Username"
            Daisy.input [ prop.placeholder "Username" ]
        ]
        |> Html.div

    let code = """Daisy.fieldset [
    Daisy.fieldsetLabel "Username"
    Daisy.input [ prop.placeholder "Username" ]
]"""
    let title = Html.text "Input with border"
    codedView title code example

let inputWithoutBorder =
    let example =
        Daisy.card [
            prop.className "p-10 bg-base-200"
            prop.children [
                Daisy.fieldset [
                    Daisy.fieldsetLabel "Username"
                    Daisy.input [prop.placeholder "Username"]
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel "Username"
            Daisy.input [prop.placeholder "Username"]
        ]
    ]
]"""
    let title = Html.text "Input with border"
    codedView title code example

let inputGhostNoBackground =
    let example =
        Daisy.card [
            prop.className "p-10 bg-base-200"
            prop.children [
                Daisy.fieldset [
                    Daisy.fieldsetLabel "Username"
                    Daisy.input [input.ghost; prop.placeholder "Username"]
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel "Username"
            Daisy.input [input.ghost; prop.placeholder "Username"]
        ]
    ]
]"""
    let title = Html.text "Input ghost (no background)"
    codedView title code example

let inputDisabled =
    let example =
        Daisy.fieldset [
            Daisy.fieldsetLabel "Disabled input"
            Daisy.input [prop.disabled true; prop.placeholder "Username"]
        ]

    let code = """Daisy.fieldset [
    Daisy.fieldsetLabel "Disabled input"
    Daisy.input [prop.disabled true; prop.placeholder "Username"]
]"""
    let title = Html.text "Input ghost (no background)"
    codedView title code example

let inputWithColors =
    let example =
        let colors = [
            input.primary  , "primary"
            input.secondary, "secondary"
            input.accent   , "accent"
            input.info     , "info"
            input.success  , "success"
            input.warning  , "warning"
            input.error    , "error"
        ]
        Daisy.fieldset [
            for color, colorText in colors do
                Daisy.fieldsetLabel colorText
                Daisy.input [color; prop.placeholder "Username"]
        ]

    let code = """let colors = [
    input.primary  , "primary"
    input.secondary, "secondary"
    input.accent   , "accent"
    input.info     , "info"
    input.success  , "success"
    input.warning  , "warning"
    input.error    , "error"
]
Daisy.fieldset [
    for color, colorText in colors do
        Daisy.fieldsetLabel colorText
        Daisy.input [color; prop.placeholder "Username"]
]"""
    let title = Html.text "Input with colors"
    codedView title code example

let inputWithSizes =
    let example =
        let sizes = [
            input.xs, "xs"
            input.sm, "sm"
            input.md, "md"
            input.lg, "lg"
        ]
        Daisy.fieldset [
            for size, sizeText in sizes do
                Daisy.fieldsetLabel sizeText
                Daisy.input [size; prop.placeholder "Username"]
        ]

    let code = """let sizes = [
    input.xs, "xs"
    input.sm, "sm"
    input.md, "md"
    input.lg, "lg"
]
Daisy.fieldset [
    for size, sizeText in sizes do
        Daisy.fieldsetLabel sizeText
        Daisy.input [size; prop.placeholder "Username"]
]"""
    let title = Html.text "Input with sizes"
    codedView title code example

let inputWithButton =
    let example =
        Daisy.fieldset [
            Daisy.fieldsetLabel "Connected"
            Html.div [
                prop.className "relative"
                prop.children [
                    Daisy.input [
                        input.primary
                        prop.placeholder "Search"
                        prop.className "w-full pr-16"
                    ]
                    Daisy.button.button [
                        button.primary
                        prop.className "absolute top-0 right-0 rounded-l-none"
                        prop.text "Go"
                    ]
                ]
            ]
        ]

    let code = """Daisy.fieldset [
    Daisy.fieldsetLabel "Connected"
    Html.div [
        prop.className "relative"
        prop.children [
            Daisy.input [
                input.primary
                prop.placeholder "Search"
                prop.className "w-full pr-16"
            ]
            Daisy.button.button [
                button.primary
                prop.className "absolute top-0 right-0 rounded-l-none"
                prop.text "Go"
            ]
        ]
    ]
]"""
    let title = Html.text "Input with sizes"
    codedView title code example

[<ReactComponent>]
let FormInputView () =
    React.fragment [
        inputWithBorder
        inputWithoutBorder
        inputGhostNoBackground
        inputDisabled
        inputWithColors
        inputWithSizes
        inputWithButton
    ]