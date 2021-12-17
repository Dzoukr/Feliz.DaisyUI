module Docs.Pages.Progress

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Html.div [
            Daisy.progress [prop.value 0; prop.max 100]
            Daisy.progress [prop.value 25; prop.max 100]
            Daisy.progress [prop.value 50; prop.max 100]
            Daisy.progress [prop.value 75; prop.max 100]
            Daisy.progress [prop.value 100; prop.max 100]
        ]

    let code = """Daisy.progress [prop.value 0; prop.max 100]
Daisy.progress [prop.value 25; prop.max 100]
Daisy.progress [prop.value 50; prop.max 100]
Daisy.progress [prop.value 75; prop.max 100]
Daisy.progress [prop.value 100; prop.max 100]"""
    let title = Html.text "Simple"
    codedView title code example

let allColors =
    let example =
        let colors =
            [ progress.primary  , "primary"
              progress.secondary, "secondary"
              progress.accent   , "accent"
              progress.info     , "info"
              progress.success  , "success"
              progress.warning  , "warning"
              progress.error    , "error" ]

        Html.div [
            for color, text in colors do
                Html.h3 text
                Daisy.progress [color; prop.value 0; prop.max 100]
                Daisy.progress [color; prop.value 25; prop.max 100]
                Daisy.progress [color; prop.value 50; prop.max 100]
                Daisy.progress [color; prop.value 75; prop.max 100]
                Daisy.progress [color; prop.value 100; prop.max 100]
        ]
    
    let code = """let colors =
    [ progress.primary  , "primary"
      progress.secondary, "secondary"
      progress.accent   , "accent"
      progress.info     , "info"
      progress.success  , "success"
      progress.warning  , "warning"
      progress.error    , "error" ]

Html.div [
    for color, text in colors do
        Html.h3 text
        Daisy.progress [color; prop.value 0; prop.max 100]
        Daisy.progress [color; prop.value 25; prop.max 100]
        Daisy.progress [color; prop.value 50; prop.max 100]
        Daisy.progress [color; prop.value 75; prop.max 100]
        Daisy.progress [color; prop.value 100; prop.max 100]
]"""
    let title = Html.text "Colors"
    codedView title code example

[<ReactComponent>]
let ProgressView () =
    React.fragment [
        simple
        allColors
    ]