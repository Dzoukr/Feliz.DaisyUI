module Docs.Pages.FormInput

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let inputWithBorder =
    let example =
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Username"]
            Daisy.input [input.bordered; prop.placeholder "Username"]
        ]
        |> Html.div

    let code = """Daisy.formControl [
    Daisy.label [Daisy.labelText "Username"]
    Daisy.input [input.bordered; prop.placeholder "Username"]
]"""
    let title = Html.text "Input with border"
    codedView title code example

let inputWithoutBorder =
    let example =
        Daisy.card [
            prop.className "p-10 bg-base-200"
            prop.children [
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "Username"]
                    Daisy.input [input.bordered; prop.placeholder "Username"]
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Username"]
            Daisy.input [input.bordered; prop.placeholder "Username"]
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
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "Username"]
                    Daisy.input [input.ghost; prop.placeholder "Username"]
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Username"]
            Daisy.input [input.ghost; prop.placeholder "Username"]
        ]
    ]
]"""
    let title = Html.text "Input ghost (no background)"
    codedView title code example

let inputDisabled =
    let example =
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Disabled input"]
            Daisy.input [input.bordered; prop.disabled true; prop.placeholder "Username"]
        ]

    let code = """Daisy.formControl [
    Daisy.label [Daisy.labelText "Disabled input"]
    Daisy.input [input.bordered; prop.disabled true; prop.placeholder "Username"]
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
        Daisy.formControl [
            for color, colorText in colors do
                Daisy.label [Daisy.labelText colorText]
                Daisy.input [color; input.bordered; prop.placeholder "Username"]
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
Daisy.formControl [
    for color, colorText in colors do
        Daisy.label [Daisy.labelText colorText]
        Daisy.input [color; input.bordered; prop.placeholder "Username"]
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
        Daisy.formControl [
            for size, sizeText in sizes do
                Daisy.label [Daisy.labelText sizeText]
                Daisy.input [size; input.bordered; prop.placeholder "Username"]
        ]

    let code = """let sizes = [
    input.xs, "xs"
    input.sm, "sm"
    input.md, "md"
    input.lg, "lg"
]
Daisy.formControl [
    for size, sizeText in sizes do
        Daisy.label [Daisy.labelText sizeText]
        Daisy.input [size; input.bordered; prop.placeholder "Username"]
]"""
    let title = Html.text "Input with sizes"
    codedView title code example

let inputWithButton =
    let example =
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Connected"]
            Html.div [
                prop.className "relative"
                prop.children [
                    Daisy.input [
                        input.bordered
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

    let code = """Daisy.formControl [
    Daisy.label [Daisy.labelText "Connected"]
    Html.div [
        prop.className "relative"
        prop.children [
            Daisy.input [input.bordered; input.primary; prop.placeholder "Search"]
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

let inputWithGroup =
    let example =
        Html.div [
            Daisy.formControl [
                Daisy.label [Daisy.labelText "Vertical"]
                Daisy.inputGroup [
                    Html.span "Email"
                    Daisy.input [input.bordered; prop.placeholder "info@site.com"]
                ]
            ]

            Daisy.formControl [
                Daisy.label [Daisy.labelText "medium"]
                Daisy.inputGroup [
                    inputGroup.md
                    prop.children [
                        Daisy.input [input.bordered; input.md; prop.value "0.0099"]
                        Html.span "BTC"
                    ]
                ]
            ]

            Daisy.formControl [
                Daisy.label [Daisy.labelText "small"]
                Daisy.inputGroup [
                    inputGroup.sm
                    prop.children [
                        Html.span "Price"
                        Daisy.input [input.bordered; input.sm; prop.value "20.99"]
                        Html.span "USD"
                    ]
                ]
            ]

            Daisy.formControl [
                Daisy.label [Daisy.labelText "tiny"]
                Daisy.inputGroup [
                    inputGroup.xs
                    prop.children [
                        Html.span "@"
                        Daisy.input [input.bordered; input.xs; prop.placeholder "username"]
                    ]
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.formControl [
        Daisy.label [Daisy.labelText "Vertical"]
        Daisy.inputGroup [
            Html.span "Email"
            Daisy.input [input.bordered; prop.placeholder "info@site.com"]
        ]
    ]

    Daisy.formControl [
        Daisy.label [Daisy.labelText "medium"]
        Daisy.inputGroup [
            inputGroup.md
            prop.children [
                Daisy.input [input.bordered; input.md; prop.value "0.0099"]
                Html.span "BTC"
            ]
        ]
    ]

    Daisy.formControl [
        Daisy.label [Daisy.labelText "small"]
        Daisy.inputGroup [
            inputGroup.sm
            prop.children [
                Html.span "Price"
                Daisy.input [input.bordered; input.sm; prop.value "20.99"]
                Html.span "USD"
            ]
        ]
    ]

    Daisy.formControl [
        Daisy.label [Daisy.labelText "tiny"]
        Daisy.inputGroup [
            inputGroup.xs
            prop.children [
                Html.span "@"
                Daisy.input [input.bordered; input.xs; prop.placeholder "username"]
            ]
        ]
    ]
]"""
    let title = Html.text "Input with group"
    codedView title code example

let inputWithVertical =
    let example =
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Vertical"]
            Daisy.inputGroup [
                inputGroup.vertical
                prop.children [
                    Html.span "Email"
                    Daisy.input [input.bordered; prop.placeholder "info@site.com"]
                ]
            ]
        ]

    let code = """Daisy.formControl [
    Daisy.label [Daisy.labelText "Vertical"]
    Daisy.inputGroup [
        inputGroup.vertical
        prop.children [
            Html.span "Email"
            Daisy.input [input.bordered; prop.placeholder "info@site.com"]
        ]
    ]
]"""
    let title = Html.text "Input with vertical"
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
        inputWithGroup
        inputWithVertical
    ]