module Docs.Pages.Link

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Daisy.link "This is a link"
        |> Html.div

    let code = """Daisy.link "This is a link" """
    let title = Html.text "Basic"
    codedView title code example

let color =
    let example =
        Daisy.link [
            link.secondary
            prop.text "This is a link with color"
        ]
        |> Html.div

    let code = """Daisy.link [
    link.secondary
    prop.text "This is a link"
]"""
    let title = Html.text "Color"
    codedView title code example

let hover =
    let example =
        Daisy.link [
            link.hover
            link.accent
            prop.text "This is a link color and hover"
        ]
        |> Html.div

    let code = """Daisy.link [
    link.hover
    link.accent
    prop.text "This is a link"
]
"""
    let title = Html.text "Hover"
    codedView title code example

let colors =
    let example =
        Html.ol [
            let colors =
                [ link.primary  , "primary"
                  link.secondary, "secondary"
                  link.accent   , "accent"
                  link.neutral  , "neutral" ]

            for color, text in colors do
                Html.li [Daisy.link [color; prop.text text]]
        ]
        |> Html.div

    let code = """Html.ol [
    let colors =
        [ link.primary  , "primary"
          link.secondary, "secondary"
          link.accent   , "accent"
          link.neutral  , "neutral" ]

    for color, text in colors do
        Html.li [Daisy.link [color; prop.text text]]
]"""
    let title = Html.text "Colors"
    codedView title code example

[<ReactComponent>]
let LinkView () =
    React.fragment [
        basic
        color
        hover
        colors
    ]