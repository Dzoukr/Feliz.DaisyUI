module Docs.Pages.Swap

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.swap [
            swap.flip
            prop.children [
                Html.input [ prop.type'.checkbox ]
                Daisy.swapOn "Ha! 😈 SWAPPED!"
                Daisy.swapOff "Click me to swap"
            ]
        ]
        |> Html.div

    let code = """Daisy.swap [
    swap.flip
    prop.children [
        Html.input [ prop.type'.checkbox ]
        Daisy.swapOn "Ha! 😈 SWAPPED!"
        Daisy.swapOff "Click me to swap"
    ]
]"""
    let title = Html.text "Swapping is so easy!"
    codedView title code example

let ex2 =
    let example =
        Daisy.swap [
            swap.rotate
            prop.className "text-9xl"
            prop.children [
                Html.input [ prop.type'.checkbox ]
                Daisy.swapOn "😈"
                Daisy.swapOff "😅"
            ]
        ]
        |> Html.div

    let code = """Daisy.swap [
    swap.rotate
    prop.className "text-9xl"
    prop.children [
        Html.input [ prop.type'.checkbox ]
        Daisy.swapOn "😈"
        Daisy.swapOff "😅"
    ]
]"""
    let title = Html.text ""
    codedView title code example

[<ReactComponent>]
let SwapView () =
    React.fragment [
        ex1
        ex2
    ]