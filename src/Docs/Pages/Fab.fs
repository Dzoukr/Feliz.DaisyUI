module Docs.Pages.Fab

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Html.div [
            prop.className "relative min-h-72"
            prop.children [
                Daisy.fab [
                    prop.className "absolute"
                    prop.children [
                        Daisy.button.button [
                            prop.tabIndex 0
                            button.circle
                            button.primary
                            prop.text "+"
                        ]
                        Daisy.fabClose [
                            button.circle
                            button.secondary
                            prop.text "×"
                        ]
                        Daisy.button.button [ button.circle; prop.text "A" ]
                        Daisy.button.button [ button.circle; prop.text "B" ]
                        Daisy.button.button [ button.circle; prop.text "C" ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.fab [
    prop.children [
        Daisy.button.button [
            prop.tabIndex 0
            button.circle
            button.primary
            prop.text "+"
        ]
        Daisy.fabClose [
            button.circle
            button.secondary
            prop.text "×"
        ]
        Daisy.button.button [ button.circle; prop.text "A" ]
        Daisy.button.button [ button.circle; prop.text "B" ]
        Daisy.button.button [ button.circle; prop.text "C" ]
    ]
]"""

    codedView (Html.text "Click or focus the main action to reveal the FAB actions") code example

let flower =
    let example =
        Html.div [
            prop.className "relative min-h-72"
            prop.children [
                Daisy.fab [
                    fab.flower
                    prop.className "absolute"
                    prop.children [
                        Daisy.button.button [ prop.tabIndex 0; button.circle; button.accent; prop.text "+" ]
                        Daisy.fabMainAction [ button.circle; button.primary; prop.text "★" ]
                        Daisy.button.button [ button.circle; prop.text "1" ]
                        Daisy.button.button [ button.circle; prop.text "2" ]
                        Daisy.button.button [ button.circle; prop.text "3" ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.fab [
    fab.flower
    prop.children [
        Daisy.button.button [ prop.tabIndex 0; button.circle; button.accent; prop.text "+" ]
        Daisy.fabMainAction [ button.circle; button.primary; prop.text "★" ]
        Daisy.button.button [ button.circle; prop.text "1" ]
        Daisy.button.button [ button.circle; prop.text "2" ]
        Daisy.button.button [ button.circle; prop.text "3" ]
    ]
]"""

    codedView (Html.text "Flower layout with a persistent main action") code example

[<ReactComponent>]
let FabView () = React.Fragment [ basic; flower ]
