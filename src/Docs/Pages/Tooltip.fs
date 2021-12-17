module Docs.Pages.Tooltip

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.tooltip [
            tooltip.text "hello"
            prop.children [Daisy.button.button "Hover me"]
        ]
        |> Html.div

    let code = """Daisy.tooltip [
    tooltip.text "hello"
    prop.children [Daisy.button.button "Hover me"]
]"""
    let title = Html.text "Simple"
    codedView title code example

let directions =
    let example =
        let directions =
            [ tooltip.left  , "left"
              tooltip.bottom, "bottom"
              tooltip.right , "right" ]

        Html.div [
            for direction, directionText in directions do
                Daisy.tooltip [
                    prop.className "ml-8"
                    tooltip.text directionText
                    direction
                    prop.children [Daisy.button.button directionText]
                ]
        ]

    let code = """let directions =
    [ tooltip.left  , "left"
      tooltip.bottom, "bottom"
      tooltip.right , "right" ]

Html.div [
    for direction, directionText in directions do
        Daisy.tooltip [
            prop.className "ml-8"
            tooltip.text directionText
            direction
            prop.children [Daisy.button.button directionText]
        ]
]"""
    let title = Html.text "Directions"
    codedView title code example

let colors =
    let example =
        let colors =
            [ tooltip.primary  , button.primary  , "primary"
              tooltip.secondary, button.secondary, "secondary"
              tooltip.accent   , button.accent   , "accent"
              tooltip.info     , button.info     , "info"
              tooltip.success  , button.success  , "success"
              tooltip.warning  , button.warning  , "warning"
              tooltip.error    , button.error    , "error" ]

        Html.div [
            for color, buttonColor, colorText in colors do
                Daisy.tooltip [
                    prop.className "mt-8"
                    color
                    tooltip.open'
                    tooltip.text colorText
                    prop.children [Daisy.button.button [buttonColor; prop.text colorText]]
                ]
        ]

    let code = """let colors =
    [ tooltip.primary  , button.primary  , "primary"
      tooltip.secondary, button.secondary, "secondary"
      tooltip.accent   , button.accent   , "accent"
      tooltip.info     , button.info     , "info"
      tooltip.success  , button.success  , "success"
      tooltip.warning  , button.warning  , "warning"
      tooltip.error    , button.error    , "error" ]

Html.div [
    for color, buttonColor, colorText in colors do
        Daisy.tooltip [
            prop.className "mt-8"
            color
            tooltip.open'
            tooltip.text colorText
            prop.children [Daisy.button.button [buttonColor; prop.text colorText]]
        ]
]"""
    let title = Html.text "Colors"
    codedView title code example

[<ReactComponent>]
let TooltipView () =
    React.fragment [
        simple
        directions
        colors
    ]