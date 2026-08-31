module Docs.Pages.FileInput

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let defaultFileInput =
    let example =
        Daisy.fieldset [
            Daisy.fieldsetLabel "File Selection"
            Daisy.file []
        ]
        |> Html.div

    let code = """Daisy.fieldset [
    Daisy.fieldsetLabel "File Selection"
    Daisy.file []
]"""
    let title = Html.text "Default file input"
    codedView title code example

let defaultFileInputOnBackground =
    let example =
        Daisy.card [
            prop.className "p-10 bg-base-200"
            prop.children [
                Daisy.fieldset [
                    Daisy.fieldsetLabel "File Selection"
                    Daisy.file []
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel "File Selection"
            Daisy.file []
        ]
    ]
]"""
    let title = Html.text "Default file input on a background"
    codedView title code example

let fileGhostNoBackground =
    let example =
        Daisy.card [
            prop.className "p-10 bg-base-200"
            prop.children [
                Daisy.fieldset [
                    Daisy.fieldsetLabel "File Selection"
                    Daisy.file [file.ghost]
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.fieldset [
            Daisy.fieldsetLabel "File Selection"
            Daisy.file [file.ghost]
        ]
    ]
]"""
    let title = Html.text "File Input ghost (no background)"
    codedView title code example

let fileDisabled =
    let example =
        Daisy.fieldset [
            Daisy.fieldsetLabel "Disabled file"
            Daisy.file [prop.disabled true]
        ]

    let code = """Daisy.fieldset [
    Daisy.fieldsetLabel "Disabled file"
    Daisy.file [prop.disabled true]
]"""
    let title = Html.text "Disabled file input"
    codedView title code example

let fileWithColors =
    let example =
        let colors = [
            file.primary  , "primary"
            file.secondary, "secondary"
            file.accent   , "accent"
            file.info     , "info"
            file.success  , "success"
            file.warning  , "warning"
            file.error    , "error"
        ]
        Daisy.fieldset [
            for color, colorText in colors do
                Daisy.fieldsetLabel colorText
                Daisy.file [color]
        ]

    let code = """let colors = [
    file.primary  , "primary"
    file.secondary, "secondary"
    file.accent   , "accent"
    file.info     , "info"
    file.success  , "success"
    file.warning  , "warning"
    file.error    , "error"
]
Daisy.fieldset [
    for color, colorText in colors do
        Daisy.fieldsetLabel colorText
        Daisy.file [color]
]"""
    let title = Html.text "File Input with colors"
    codedView title code example

let fileWithSizes =
    let example =
        let sizes = [
            file.xs, "xs"
            file.sm, "sm"
            file.md, "md"
            file.lg, "lg"
        ]
        Daisy.fieldset [
            for size, sizeText in sizes do
                Daisy.fieldsetLabel sizeText
                Daisy.file [size]
        ]

    let code = """let sizes = [
    file.xs, "xs"
    file.sm, "sm"
    file.md, "md"
    file.lg, "lg"
]
Daisy.fieldset [
    for size, sizeText in sizes do
        Daisy.fieldsetLabel sizeText
        Daisy.file [size]
]"""
    let title = Html.text "File Input with sizes"
    codedView title code example

let fileWithButton =
    let example =
        Daisy.fieldset [
            Daisy.fieldsetLabel "Connected"
            Html.div [
                prop.className "relative"
                prop.children [
                    Daisy.file [
                        file.primary
                        prop.className "w-full pr-16"
                    ]
                    Daisy.button.button [
                        button.primary
                        prop.className "absolute top-0 right-0 rounded-l-none"
                        prop.text "Upload"
                    ]
                ]
            ]
        ]

    let code = """Daisy.fieldset [
    Daisy.fieldsetLabel "Connected"
    Html.div [
        prop.className "relative"
        prop.children [
            Daisy.file [file.primary]
            Daisy.button.button [
                button.primary
                prop.className "absolute top-0 right-0 rounded-l-none"
                prop.text "Upload"
            ]
        ]
    ]
]"""
    let title = Html.text "File input with button"
    codedView title code example



[<ReactComponent>]
let FileInputView () =
    React.Fragment [
        defaultFileInput
        defaultFileInputOnBackground
        fileGhostNoBackground
        fileDisabled
        fileWithColors
        fileWithSizes
        fileWithButton
    ]
