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

    let code = """Daisy.indicator [
    Daisy.indicatorItem [
        prop.className "badge badge-secondary"
        prop.text "New"
    ]
    Html.div [
        prop.className "grid w-32 h-32 bg-base-300 place-items-center"
        prop.text "Content"
    ]
]"""
    let title = Html.text "Simple"
    codedView title code example

let button =
    let example =
        Daisy.indicator [
            Daisy.indicatorItem [prop.text "99+"; prop.className "badge"]
            Daisy.button.button [button.primary; prop.text "Inbox"]
        ]

    let code = """Daisy.indicator [
    Daisy.indicatorItem [prop.text "99+"; prop.className "badge"]
    Daisy.button.button [button.primary; prop.text "Inbox"]
]"""
    let title = Html.text "Button"
    codedView title code example

let avatar =
    let example =
        Daisy.indicator [
            prop.className "avatar"
            prop.children [
                Daisy.indicatorItem [prop.text "typing..."; prop.className "badge"]
                Html.div [
                    prop.className "w-24 h-24 rounded-btn"
                    prop.children [
                        Html.img [prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]
                    ]
                ]
            ]
        ]

    let code = """Daisy.indicator [
    prop.className "avatar"
    prop.children [
        Daisy.indicatorItem [prop.text "typing..."; prop.className "badge"]
        Html.div [
            prop.className "w-24 h-24 rounded-btn"
            prop.children [
                Html.img [prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"]
            ]
        ]
    ]
]"""
    let title = Html.text "Avatar"
    codedView title code example

let allPositions =
    let example =
        Daisy.indicator [
            prop.className "m-6"
            prop.children [
                Daisy.indicatorItem [indicator.top;    indicator.start ; badge.secondary; prop.className "badge"; prop.text "1"]
                Daisy.indicatorItem [indicator.top;    indicator.center; badge.secondary; prop.className "badge"; prop.text "2"]
                Daisy.indicatorItem [indicator.top;    indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "3"]
                Daisy.indicatorItem [indicator.middle; indicator.start ; badge.secondary; prop.className "badge"; prop.text "4"]
                Daisy.indicatorItem [indicator.middle; indicator.center; badge.secondary; prop.className "badge"; prop.text "5"]
                Daisy.indicatorItem [indicator.middle; indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "6"]
                Daisy.indicatorItem [indicator.bottom; indicator.start ; badge.secondary; prop.className "badge"; prop.text "7"]
                Daisy.indicatorItem [indicator.bottom; indicator.center; badge.secondary; prop.className "badge"; prop.text "8"]
                Daisy.indicatorItem [indicator.bottom; indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "9"]
                Html.div [prop.className "grid w-32 h-32 bg-base-300 place-items-center"]
            ]
        ]
        |> Html.div

    let code = """Daisy.indicator [
    prop.className "m-6"
    prop.children [
        Daisy.indicatorItem [indicator.top;    indicator.start ; badge.secondary; prop.className "badge"; prop.text "1"]
        Daisy.indicatorItem [indicator.top;    indicator.center; badge.secondary; prop.className "badge"; prop.text "2"]
        Daisy.indicatorItem [indicator.top;    indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "3"]
        Daisy.indicatorItem [indicator.middle; indicator.start ; badge.secondary; prop.className "badge"; prop.text "4"]
        Daisy.indicatorItem [indicator.middle; indicator.center; badge.secondary; prop.className "badge"; prop.text "5"]
        Daisy.indicatorItem [indicator.middle; indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "6"]
        Daisy.indicatorItem [indicator.bottom; indicator.start ; badge.secondary; prop.className "badge"; prop.text "7"]
        Daisy.indicatorItem [indicator.bottom; indicator.center; badge.secondary; prop.className "badge"; prop.text "8"]
        Daisy.indicatorItem [indicator.bottom; indicator.end'  ; badge.secondary; prop.className "badge"; prop.text "9"]
        Html.div [prop.className "grid w-32 h-32 bg-base-300 place-items-center"]
    ]
]"""
    let title = Html.text "All Positions"
    codedView title code example

[<ReactComponent>]
let IndicatorView () =
    React.fragment [
        simple
        button
        avatar
        allPositions
    ]
