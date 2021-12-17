module Docs.Pages.Countdown

open Feliz
open Elmish
open Feliz.DaisyUI
open Feliz.UseElmish
open Docs.SharedView

type Msg =
    | CountdownChange of int

type State =
    { Countdown : int }

let init () = { Countdown = 60 }, Cmd.none

let update (msg:Msg) (state:State) : State * Cmd<Msg> =
    match msg with
    | CountdownChange value -> { state with Countdown = value }, Cmd.none

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
let CountdownView () =
    let state,dispatch = React.useElmish(init, update, [||])

    React.fragment [
        basic state dispatch
    ]