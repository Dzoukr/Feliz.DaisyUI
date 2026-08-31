module Docs.Pages.Hover3D

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let private hoverZones = [ for _ in 1 .. 8 -> Html.div [] ]

let basic =
    let example =
        Daisy.hover3d [
            prop.className "m-auto"
            prop.children [
                Daisy.card [
                    prop.className "relative w-64 bg-base-200 shadow-xl"
                    prop.children [
                        Html.figure [
                            Html.img [
                                prop.src "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                prop.alt "Strawberries"
                            ]
                        ]
                        Daisy.cardBody [ Daisy.cardTitle "Hover me" ]
                    ]
                ]
                yield! hoverZones
            ]
        ]

    let code = """Daisy.hover3d [
    prop.children [
        Daisy.card [
            prop.className "relative w-64 bg-base-200 shadow-xl"
            prop.children [
                Html.figure [ Html.img [ prop.src "image.webp"; prop.alt "Example" ] ]
                Daisy.cardBody [ Daisy.cardTitle "Hover me" ]
            ]
        ]
        // Eight empty elements form the 3 × 3 hover sensor grid.
        for _ in 1 .. 8 do Html.div []
    ]
]"""

    codedView (Html.text "Move the pointer across the card for a 3D tilt effect") code example

[<ReactComponent>]
let Hover3DView () = React.Fragment [ basic ]
