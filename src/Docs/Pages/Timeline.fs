module Docs.Pages.Timeline

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.timeline [
            Html.li [
                Daisy.timelineStart "1984"
                Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
                Daisy.timelineEnd [ timeline.box; prop.text "First Macintosh computer" ]
                Html.hr []
            ]
            Html.li [
                Html.hr []
                Daisy.timelineStart "1998"
                Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
                Daisy.timelineEnd [ timeline.box; prop.text "iMac" ]
                Html.hr []
            ]
            Html.li [
                Html.hr []
                Daisy.timelineStart "2001"
                Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
                Daisy.timelineEnd [ timeline.box; prop.text "iPod" ]
            ]
        ]

    let code = """Daisy.timeline [
    Html.li [
        Daisy.timelineStart "1984"
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
        Daisy.timelineEnd [ timeline.box; prop.text "First Macintosh computer" ]
        Html.hr []
    ]
    Html.li [
        Html.hr []
        Daisy.timelineStart "1998"
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
        Daisy.timelineEnd [ timeline.box; prop.text "iMac" ]
        Html.hr []
    ]
    Html.li [
        Html.hr []
        Daisy.timelineStart "2001"
        Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
        Daisy.timelineEnd [ timeline.box; prop.text "iPod" ]
    ]
]"""
    let title = Html.text "Create easy timeline"
    codedView title code example

let ex2 =
    let example =
        Daisy.timeline [
            timeline.vertical
            prop.children [
                Html.li [
                    Daisy.timelineStart [ timeline.box; prop.text "1984" ]
                    Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
                    Html.hr []
                ]
                Html.li [
                    Html.hr []
                    Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
                    Daisy.timelineEnd [ timeline.box; prop.text "iMac" ]
                    Html.hr [ color.bgPrimary ]
                ]
                Html.li [
                    Html.hr [ color.bgPrimary ]
                    Daisy.timelineStart [ timeline.box; prop.text "iPod" ]
                    Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle text-primary" ]
                ]

            ]
        ]

    let code = """Daisy.timeline [
    timeline.vertical
    prop.children [
        Html.li [
            Daisy.timelineStart [ timeline.box; prop.text "1984" ]
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
            Html.hr []
        ]
        Html.li [
            Html.hr []
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle" ]
            Daisy.timelineEnd [ timeline.box; prop.text "iMac" ]
            Html.hr [ color.bgPrimary ]
        ]
        Html.li [
            Html.hr [ color.bgPrimary ]
            Daisy.timelineStart [ timeline.box; prop.text "iPod" ]
            Daisy.timelineMiddle [ Html.faIcon "fa-solid fa-check-circle text-primary" ]
        ]

    ]
]"""
    let title = Html.text "Timeline can be also vertical and from both sides"
    codedView title code example


[<ReactComponent>]
let TimelineView () =
    React.fragment [
        ex1
        ex2
    ]