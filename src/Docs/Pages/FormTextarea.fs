module Docs.Pages.FormTextarea

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Daisy.formControl [
            Daisy.label [Daisy.labelText "Your bio"]
            Daisy.textarea [
                prop.placeholder "Bio"
                prop.className "h-24"
                textarea.bordered
            ]
        ]
        
    let code = """Daisy.formControl [
    Daisy.label [Daisy.labelText "Your bio"]
    Daisy.textarea [
        prop.placeholder "Bio"
        prop.className "h-24"
        textarea.bordered
    ]
]"""
    let title = Html.text "Basic"
    codedView title code example

let colors =
    let example =
        let colors = [
            textarea.primary  , "primary"
            textarea.secondary, "secondary"
            textarea.accent   , "accent"
            textarea.info     , "info"
            textarea.success  , "success"
            textarea.warning  , "warning"
            textarea.error    , "error"
        ]
        Html.div [
            for color, colorText in colors do
                Daisy.formControl [
                    Daisy.label [Daisy.labelText colorText]
                    Daisy.textarea [
                        color
                        prop.placeholder colorText
                        prop.className "h-24"
                        textarea.bordered
                    ]
                ]
        ]
        
    let code = """let colors = [
    textarea.primary  , "primary"
    textarea.secondary, "secondary"
    textarea.accent   , "accent"
    textarea.info     , "info"
    textarea.success  , "success"
    textarea.warning  , "warning"
    textarea.error    , "error"
]
Html.div [
    for color, colorText in colors do
        Daisy.formControl [
            Daisy.label [Daisy.labelText colorText]
            Daisy.textarea [
                color
                prop.placeholder colorText
                prop.className "h-24"
                textarea.bordered
            ]
        ]
]"""
    let title = Html.text "Colors"
    codedView title code example

[<ReactComponent>]
let FormTextareaView () =
    React.fragment [
        basic
        colors
    ]