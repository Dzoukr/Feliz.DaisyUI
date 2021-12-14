/// TODO: finish this one
module Docs.Pages.Divider

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let vertical =
    let example =
        Html.div [
            prop.className "flex"
            prop.className "flex-col"
            prop.className "w-full"
            prop.children [
                Html.div [
                    prop.classes ["grid"; "h-20"; "card"; "bg-base-300"; "rounded-box"; "place-items-center"]
                    prop.text "content"
                ]
                Daisy.divider [
                    divider.vertical
                    prop.text "OR"
                ]
                Html.div [
                    prop.classes ["grid"; "h-20"; "card"; "bg-base-300"; "rounded-box"; "place-items-center"]
                    prop.text "content"
                ]
            ]
        ]

    let code = """Daisy.countdown [Daisy.countdownValue 60]"""
    let title = Html.text "Basic"
    codedView title code example

let horizontal =
    let example =
        Html.div [
            prop.className "flex"
            prop.className "flex-col"
            prop.className "w-full"
            prop.children [
                Html.div [
                    prop.classes ["grid"; "h-20"; "card"; "bg-base-300"; "rounded-box"; "place-items-center"]
                    prop.text "content"
                ]
                Daisy.divider "OR"
                Html.div [
                    prop.classes ["grid"; "h-20"; "card"; "bg-base-300"; "rounded-box"; "place-items-center"]
                    prop.text "content"
                ]
            ]
        ]

    let code = """Daisy.countdown [Daisy.countdownValue 60]"""
    let title = Html.text "Basic"
    codedView title code example

[<ReactComponent>]
let DividerView () =
    React.fragment [
        vertical
        horizontal
    ]