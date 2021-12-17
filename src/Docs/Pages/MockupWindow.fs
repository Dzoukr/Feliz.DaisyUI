module Docs.Pages.MockupWindow

open Feliz
open Elmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let simple =
    let example =
        Daisy.mockupWindow [
            prop.className "border" ++ color.borderBase300
            prop.children [
                Html.div [
                    prop.className "flex justify-center px-4 py-16 border-t border-base-300"
                    prop.text "Hello!"
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.mockupWindow [
    prop.className "border" ++ color.borderBase300
    prop.children [
        Html.div [
            prop.className "flex justify-center px-4 py-16 border-t border-base-300"
            prop.text "Hello!"
        ]
    ]
]]"""
    let title = Html.text "Simple"
    codedView title code example

let withBgColor =
    let example =
        Daisy.mockupWindow [
            color.bgBase300
            prop.children [
                Html.div [
                    prop.className "flex justify-center px-4 py-16" ++ color.bgBase200
                    prop.text "Hello!"
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.mockupWindow [
    color.bgBase300
    prop.children [
        Html.div [
            prop.className "flex justify-center px-4 py-16" ++ color.bgBase200
            prop.text "Hello!"
        ]
    ]
]"""
    let title = Html.text "With background color"
    codedView title code example

[<ReactComponent>]
let MockupWindowView () =
    React.fragment [
        simple
        withBgColor
    ]