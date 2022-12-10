module Docs.Pages.FileInput

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let fileWithBorder =
    let example =
        Daisy.formControl [
            Daisy.label [Daisy.labelText "File Selection"]
            Daisy.file [file.bordered]
        ]
        |> Html.div

    let code = """Daisy.formControl [
    Daisy.label [Daisy.labelText "File Selection"]
    Daisy.file [file.bordered]
]"""
    let title = Html.text "File Input with border"
    codedView title code example

let fileWithoutBorder =
    let example =
        Daisy.card [
            prop.className "p-10 bg-base-200"
            prop.children [
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "File Selection"]
                    Daisy.file [file.bordered]
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.formControl [
            Daisy.label [Daisy.labelText "File Selection"]
            Daisy.file [file.bordered]
        ]
    ]
]"""
    let title = Html.text "File Input with border"
    codedView title code example

let fileGhostNoBackground =
    let example =
        Daisy.card [
            prop.className "p-10 bg-base-200"
            prop.children [
                Daisy.formControl [
                    Daisy.label [Daisy.labelText "File Selection"]
                    Daisy.file [file.ghost]
                ]
            ]
        ]

    let code = """Daisy.card [
    prop.className "p-10 bg-base-200"
    prop.children [
        Daisy.formControl [
            Daisy.label [Daisy.labelText "File Selection"]
            Daisy.file [file.ghost]
        ]
    ]
]"""
    let title = Html.text "File Input ghost (no background)"
    codedView title code example

let fileDisabled =
    let example =
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Disabled file"]
            Daisy.file [file.bordered; prop.disabled true]
        ]

    let code = """Daisy.formControl [
    Daisy.label [Daisy.labelText "Disabled file"]
    Daisy.file [file.bordered; prop.disabled true]
]"""
    let title = Html.text "File Input ghost (no background)"
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
        Daisy.formControl [
            for color, colorText in colors do
                Daisy.label [Daisy.labelText colorText]
                Daisy.file [color; file.bordered]
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
Daisy.formControl [
    for color, colorText in colors do
        Daisy.label [Daisy.labelText colorText]
        Daisy.file [color; file.bordered]
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
        Daisy.formControl [
            for size, sizeText in sizes do
                Daisy.label [Daisy.labelText sizeText]
                Daisy.file [size; file.bordered]
        ]

    let code = """let sizes = [
    file.xs, "xs"
    file.sm, "sm"
    file.md, "md"
    file.lg, "lg"
]
Daisy.formControl [
    for size, sizeText in sizes do
        Daisy.label [Daisy.labelText sizeText]
        Daisy.file [size; file.bordered]
]"""
    let title = Html.text "File Input with sizes"
    codedView title code example

let fileWithButton =
    let example =
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Connected"]
            Html.div [
                prop.className "relative"
                prop.children [
                    Daisy.file [
                        file.bordered
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

    let code = """Daisy.formControl [
    Daisy.label [Daisy.labelText "Connected"]
    Html.div [
        prop.className "relative"
        prop.children [
            Daisy.file [file.bordered; file.primary]
            Daisy.button.button [
                button.primary
                prop.className "absolute top-0 right-0 rounded-l-none"
                prop.text "Upload"
            ]
        ]
    ]
]"""
    let title = Html.text "File Input with sizes"
    codedView title code example



[<ReactComponent>]
let FileInputView () =
    React.fragment [
        fileWithBorder
        fileWithoutBorder
        fileGhostNoBackground
        fileDisabled
        fileWithColors
        fileWithSizes
        fileWithButton
    ]