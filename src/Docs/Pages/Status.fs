module Docs.Pages.Status

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Daisy.status [
            status.error
            status.xl
        ]
        |> Html.div

    let code = """Daisy.status [
    status.error
    status.xl
]"""
    let title = Html.text "Basic"
    codedView title code example

let ping =
    let example =
        Html.div [
            Html.div [
                prop.className "inline-grid *:[grid-area:1/1]"
                prop.children [
                    Daisy.status [ status.primary; prop.className "animate-ping" ]
                    Daisy.status [ status.primary ]
                ]
            ]
            Html.text " Unread messages"
        ]

    let code = """Html.div [
    Html.div [
        prop.className "inline-grid *:[grid-area:1/1]"
        prop.children [
            Daisy.status [ status.primary; prop.className "animate-ping" ]
            Daisy.status [ status.primary ]
        ]
    ]
    Html.text " Unread messages"
]"""
    let title = Html.text "Ping animation"
    codedView title code example

[<ReactComponent>]
let StatusView () =
    React.fragment [
        basic
        ping
    ]