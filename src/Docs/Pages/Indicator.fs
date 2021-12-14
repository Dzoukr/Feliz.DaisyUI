/// TODO: this class does not seem to fit into the paradigm of a component
module Docs.Pages.Indicator

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.indicator [
            Daisy.indicatorItem [
                prop.className "badge badge-secondary"
                prop.text "New"
            ]
            Html.div [
                prop.className "grid w-32 h-32 bg-base-300 place-items-center"
                prop.text "Content"
            ]
        ]
        |> Html.div

    let code = """"""
    let title = Html.text "Simple"
    codedView title code example

[<ReactComponent>]
let IndicatorView () =
    React.fragment [
        simple
    ]
