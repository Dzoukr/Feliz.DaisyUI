module Docs.Pages.Join

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Html.div [
            Daisy.join [
                Daisy.button.button [
                    button.primary
                    join.item // note here
                    prop.text "A"
                ]
                Daisy.button.button [
                    button.secondary
                    join.item // note here
                    prop.text "B"
                ]
                Daisy.button.button [
                    button.warning
                    join.item // note here
                    prop.text "C"
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.join [
        Daisy.button.button [
            button.primary
            join.item // note here
            prop.text "A"
        ]
        Daisy.button.button [
            button.secondary
            join.item // note here
            prop.text "B"
        ]
        Daisy.button.button [
            button.warning
            join.item // note here
            prop.text "C"
        ]
    ]
]"""
    let title = Html.text "Join is the new ButtonGroup"
    codedView title code example



[<ReactComponent>]
let JoinView () =
    React.fragment [
        ex1
    ]