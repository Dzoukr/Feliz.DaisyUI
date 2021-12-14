module Docs.Pages.Mask

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.mask [
            mask.circle
            prop.src "https://picsum.photos/id/1005/200/200"
        ]
        |> Html.div

    let code = """Daisy.mask [
    mask.circle
    prop.src "https://picsum.photos/id/1005/200/200"
]"""
    let title = Html.text "Basic Shape"
    codedView title code example

let allShapes =
    let example =
        let shapes =
            [ mask.squircle       , "squircle"
              mask.heart          , "heart"
              mask.hexagon        , "hexagon"
              mask.hexagon2       , "hexagon2"
              mask.decagon        , "decagon"
              mask.pentagon       , "pentagon"
              mask.diamond        , "diamond"
              mask.square         , "square"
              mask.circle         , "circle"
              mask.parallelogram  , "parallelogram"
              mask.parallelogram2 , "parallelogram2"
              mask.parallelogram3 , "parallelogram3"
              mask.parallelogram4 , "parallelogram4"
              mask.star           , "star"
              mask.star2          , "star2"
              mask.triangle       , "triangle"
              mask.triangle2      , "triangle2"
              mask.triangle3      , "triangle3"
              mask.triangle4      , "triangle4" ]

        Html.div [
            for shape, text in shapes do
                Html.div [
                    Html.span text
                    Daisy.mask [shape; prop.src "https://picsum.photos/id/1005/200/200"]
                ]
        ]

    let code ="""let shapes =
    [ mask.squircle       , "squircle"
      mask.heart          , "heart"
      mask.hexagon        , "hexagon"
      mask.hexagon2       , "hexagon2"
      mask.decagon        , "decagon"
      mask.pentagon       , "pentagon"
      mask.diamond        , "diamond"
      mask.square         , "square"
      mask.circle         , "circle"
      mask.parallelogram  , "parallelogram"
      mask.parallelogram2 , "parallelogram2"
      mask.parallelogram3 , "parallelogram3"
      mask.parallelogram4 , "parallelogram4"
      mask.star           , "star"
      mask.star2          , "star2"
      mask.triangle       , "triangle"
      mask.triangle2      , "triangle2"
      mask.triangle3      , "triangle3"
      mask.triangle4      , "triangle4" ]

Html.div [
    for shape, text in shapes do
        Html.div [
            Html.span text
            Daisy.mask [shape; prop.src "https://picsum.photos/id/1005/200/200"]
        ]
]"""
    let title = Html.text "All Shapes"
    codedView title code example

[<ReactComponent>]
let MaskView () =
    React.fragment [
        simple
        allShapes
    ]