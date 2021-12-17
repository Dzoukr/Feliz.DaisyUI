module Docs.Pages.Countdown

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let basic (state: State) (dispatch: Msg -> unit) =
    let example =
        Html.div [
            Daisy.countdown [Daisy.countdownValue state.Countdown]

            Daisy.button.button [
                button.xs
                button.primary
                prop.onClick (fun _ -> CountdownChange(state.Countdown + 1) |> dispatch)
                prop.text "⬆️ Up"
            ]

            Daisy.button.button [
                button.xs
                button.secondary
                prop.onClick (fun _ -> CountdownChange(state.Countdown - 1) |> dispatch)
                prop.text "⬇️ Down"
            ]
        ]

    let code = """Html.div [
    Daisy.countdown [Daisy.countdownValue state.Countdown]

    Daisy.button.button [
        button.xs
        button.primary
        prop.onClick (fun _ -> CountdownChange(state.Countdown + 1) |> dispatch)
        prop.text "⬆️ Up"
    ]

    Daisy.button.button [
        button.xs
        button.secondary
        prop.onClick (fun _ -> CountdownChange(state.Countdown - 1) |> dispatch)
        prop.text "⬇️ Down"
    ]
]"""
    let title = Html.text "Basic"
    codedView title code example

[<ReactComponent>]
let CountdownView state dispatch =
    React.fragment [
        basic state dispatch
    ]