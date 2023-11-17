module Docs.Pages.Tab

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.tabs [
            Daisy.tab "Tab 1"
            Daisy.tab [tab.active; prop.text "Tab 2"]
            Daisy.tab "Tab 3"
        ]
        |> Html.div

    let code = """Daisy.tabs [
    Daisy.tab "Tab 1"
    Daisy.tab [tab.active; prop.text "Tab 2"]
    Daisy.tab "Tab 3"
]"""
    let title = Html.text "Simple"
    codedView title code example

let bordered =
    let example =
        Daisy.tabs [
            tabs.bordered
            prop.children [
                Daisy.tab [prop.text "Tab 1"]
                Daisy.tab [tab.active; prop.text "Tab 2"]
                Daisy.tab [prop.text "Tab 3"]
            ]
        ]
        |> Html.div

    let code = """Daisy.tabs [
    tabs.bordered
    prop.children [
        Daisy.tab [prop.text "Tab 1"]
        Daisy.tab [tab.active; prop.text "Tab 2"]
        Daisy.tab [prop.text "Tab 3"]
    ]
]"""
    let title = Html.text "Bordered"
    codedView title code example

let lifted =
    let example =
        Daisy.tabs [
            tabs.lifted
            prop.children [
                Daisy.tab [prop.text "Tab 1"]
                Daisy.tab [tab.active; prop.text "Tab 2"]
                Daisy.tab [prop.text "Tab 3"]
            ]
        ]
        |> Html.div

    let code = """Daisy.tabs [
    tabs.lifted
    prop.children [
        Daisy.tab [prop.text "Tab 1"]
        Daisy.tab [tab.active; prop.text "Tab 2"]
        Daisy.tab [prop.text "Tab 3"]
    ]
]"""
    let title = Html.text "Lifted"
    codedView title code example

let boxed =
    let example =
        Daisy.tabs [
            tabs.boxed
            prop.children [
                Daisy.tab [prop.text "Tab 1"]
                Daisy.tab [tab.active; prop.text "Tab 2"]
                Daisy.tab [prop.text "Tab 3"]
            ]
        ]
        |> Html.div

    let code = """Daisy.tabs [
    tabs.boxed
    prop.children [
        Daisy.tab [prop.text "Tab 1"]
        Daisy.tab [tab.active; prop.text "Tab 2"]
        Daisy.tab [prop.text "Tab 3"]
    ]
]"""
    let title = Html.text "Boxed"
    codedView title code example

let sizes =
    let example =
        let sizes = [
            tabs.xs, "xs"
            tabs.sm, "sm"
            tabs.md, "md"
            tabs.lg, "lg"
        ]
        Html.div [
            for size, sizeText in sizes do
               Html.div [
                    Daisy.tabs [
                        size
                        tabs.lifted
                        prop.children [
                            Daisy.tab [prop.text sizeText]
                            Daisy.tab [tab.active; prop.text sizeText]
                            Daisy.tab [prop.text sizeText]
                        ]
                    ]
               ]
        ]

    let code = """let sizes = [
    tabs.xs, "xs"
    tabs.sm, "sm"
    tabs.md, "md"
    tabs.lg, "lg"
]
Html.div [
    for size, sizeText in sizes do
       Html.div [
            Daisy.tabs [
                size
                tabs.lifted
                prop.children [
                    Daisy.tab [prop.text sizeText]
                    Daisy.tab [tab.active; prop.text sizeText]
                    Daisy.tab [prop.text sizeText]
                ]
            ]
       ]
]"""
    let title = Html.text "Sizes"
    codedView title code example

[<ReactComponent>]
let TabView () =
    React.fragment [
        simple
        bordered
        lifted
        boxed
        sizes
    ]
