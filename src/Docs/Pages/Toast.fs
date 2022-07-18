module Docs.Pages.Toast

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let private relativeDiv (elms:ReactElement) =
    Html.div [
        prop.className "relative"
        prop.children elms
    ]

let middle =
    let example =
        Daisy.toast [
            toast.center
            toast.middle
            prop.className "absolute"
            prop.children [
                Daisy.alert [
                    alert.info
                    prop.text "New mail arrived."
                ]
            ]
        ]
        |> relativeDiv

    let code = """Daisy.toast [
    toast.center
    toast.middle
    prop.children [
        Daisy.alert [
            alert.info
            prop.text "New mail arrived."
        ]
    ]
]"""
    let title = Html.text "In the middle"
    codedView title code example

let bottom =
    let example =
        Daisy.toast [
            toast.bottom
            prop.className "absolute"
            prop.children [
                Daisy.alert [
                    alert.warning
                    prop.text "F# is awesome!"
                ]
            ]
        ]
        |> relativeDiv

    let code = """Daisy.toast [
    toast.bottom
    prop.children [
        Daisy.alert [
            alert.warning
            prop.text "F# is awesome!"
        ]
    ]
]"""
    let title = Html.text "On the bottom right"
    codedView title code example

let topLeft =
    let example =
        Daisy.toast [
            toast.top
            toast.start
            prop.className "absolute"
            prop.children [
                Daisy.alert [
                    alert.success
                    prop.text "Payment successful"
                ]
            ]
        ]
        |> relativeDiv

    let code = """Daisy.toast [
    toast.top
    toast.start
    prop.children [
        Daisy.alert [
            alert.success
            prop.text "Payment successful"
        ]
    ]
]"""
    let title = Html.text "Top left"
    codedView title code example

[<ReactComponent>]
let ToastView () =
    React.fragment [
        middle
        bottom
        topLeft
    ]