module Docs.Pages.FormSelect

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Daisy.select [
            prop.className "w-full max-w-xs"
            prop.children [
                Html.option "Choose your superpower"
                Html.option "telekenesis"
                Html.option "time travel"
                Html.option "invisibility"
            ]
        ]

    let code = """Daisy.select [
    prop.className "w-full max-w-xs"
    prop.children [
        Html.option "Choose your superpower"
        Html.option "telekenesis"
        Html.option "time travel"
        Html.option "invisibility"
    ]
]"""
    let title = Html.text "Basic"
    codedView title code example

let colors =
    let example =
        let colors = [
            select.primary  , "primary"
            select.secondary, "secondary"
            select.accent   , "accent"
            select.ghost    , "ghost"
            select.error    , "error"
            select.info     , "info"
            select.success  , "success"
            select.warning  , "warning"
        ]

        Html.div [
            for color, colorText in colors do
                Daisy.select [
                    color
                    prop.className "w-full max-w-xs"
                    prop.children [
                        Html.option colorText
                        Html.option "telekenesis"
                        Html.option "time travel"
                        Html.option "invisibility"
                    ]
                ]
        ]

    let code = """let colors = [
    select.primary  , "primary"
    select.secondary, "secondary"
    select.accent   , "accent"
    select.ghost    , "ghost"
    select.error    , "error"
    select.info     , "info"
    select.success  , "success"
    select.warning  , "warning"
]

Html.div [
    for color, colorText in colors do
        Daisy.select [
            color
            prop.className "w-full max-w-xs"
            prop.children [
                Html.option colorText
                Html.option "telekenesis"
                Html.option "time travel"
                Html.option "invisibility"
            ]
        ]
]"""
    let title = Html.text "Colors"
    codedView title code example

let sizes =
    let example =
        let sizes = [
            select.xs, "xs"
            select.sm, "sm"
            select.md, "md"
            select.lg, "lg"
        ]

        Html.div [
            for size, sizeText in sizes do
                Daisy.select [
                    size
                    prop.className "w-full max-w-xs"
                    prop.children [
                        Html.option sizeText
                        Html.option "telekenesis"
                        Html.option "time travel"
                        Html.option "invisibility"
                    ]
                ]
        ]

    let code = """let colors = [
    select.primary  , "primary"
    select.secondary, "secondary"
    select.accent   , "accent"
    select.ghost    , "ghost"
    select.error    , "error"
    select.info     , "info"
    select.success  , "success"
    select.warning  , "warning"
]

Html.div [
    for color, colorText in colors do
        Daisy.select [
            color
            prop.className "w-full max-w-xs"
            prop.children [
                Html.option colorText
                Html.option "telekenesis"
                Html.option "time travel"
                Html.option "invisibility"
            ]
        ]
]"""
    let title = Html.text "Sizes"
    codedView title code example

let disabled =
    let example =
        Daisy.select [
            prop.disabled true
            prop.className "w-full max-w-xs"
            prop.children [
                Html.option "Choose your superpower"
                Html.option "telekinesis"
                Html.option "time travel"
                Html.option "invisibility"
            ]
        ]

    let code = """Daisy.select [
    prop.disabled true
    prop.className "w-full max-w-xs"
    prop.children [
        Html.option "Choose your superpower"
        Html.option "telekinesis"
        Html.option "time travel"
        Html.option "invisibility"
    ]
]
"""
    let title = Html.text "Disabled"
    codedView title code example

[<ReactComponent>]
let FormSelectView () =
    React.fragment [
        basic
        colors
        sizes
        disabled
    ]