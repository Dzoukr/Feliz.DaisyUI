module Docs.Pages.Divider

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let vertical =
    let example =
        Html.div [
            prop.className "flex flex-col w-full"
            prop.children [
                Html.div [
                    prop.className "grid h-20 card bg-base-300 rounded-box place-items-center"
                    prop.text "content"
                ]
                Daisy.divider "OR"
                Html.div [
                    prop.className "grid h-20 card bg-base-300 rounded-box place-items-center"
                    prop.text "content"
                ]
            ]
        ]

    let code = """Html.div [
    prop.className "flex flex-col w-full"
    prop.children [
        Html.div [
            prop.className "grid h-20 card bg-base-300 rounded-box place-items-center"
            prop.text "content"
        ]
        Daisy.divider "OR"
        Html.div [
            prop.className "grid h-20 card bg-base-300 rounded-box place-items-center"
            prop.text "content"
        ]
    ]
]"""
    let title = Html.text "Vertical (default)"
    codedView title code example

let horizontal =
    let example =
        Html.div [
            prop.className "flex flex-row w-full"
            prop.children [
                Html.div [
                    prop.className "grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
                    prop.text "content"
                ]
                Daisy.divider [
                    divider.horizontal
                    prop.text "OR"
                ]
                Html.div [
                    prop.className "grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
                    prop.text "content"
                ]
            ]
        ]
        |> Html.div

    let code = """Html.div [
    prop.className "flex flex-row w-full"
    prop.children [
        Html.div [
            prop.className "grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
            prop.text "content"
        ]
        Daisy.divider [
            divider.horizontal
            prop.text "OR"
        ]
        Html.div [
            prop.className "grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
            prop.text "content"
        ]
    ]
]"""
    let title = Html.text "Vertical"
    codedView title code example

[<ReactComponent>]
let DividerView () =
    React.fragment [
        vertical
        horizontal
    ]