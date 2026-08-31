module Docs.Pages.MockupBrowser

open Feliz
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let basic =
    let example =
        Daisy.mockupBrowser [
            prop.className "border" ++ color.borderBase300
            prop.children [
                Daisy.mockupBrowserToolbar [
                    Html.div [
                        prop.className "input"
                        prop.text "https://daisyui.com"
                    ]
                ]
                Html.div [
                    prop.className "grid h-48 place-content-center border-t border-base-300"
                    prop.text "Hello!"
                ]
            ]
        ]

    let code = """Daisy.mockupBrowser [
    prop.className "border" ++ color.borderBase300
    prop.children [
        Daisy.mockupBrowserToolbar [
            Html.div [
                prop.className "input"
                prop.text "https://daisyui.com"
            ]
        ]
        Html.div [
            prop.className "grid h-48 place-content-center border-t border-base-300"
            prop.text "Hello!"
        ]
    ]
]"""

    codedView (Html.text "Browser mockup with toolbar") code example

[<ReactComponent>]
let MockupBrowserView () = React.Fragment [ basic ]
