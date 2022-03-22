module Docs.Pages.Navbar

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView
open Feliz.DaisyUI.Operators

let iconAndText =
    let example =
        Daisy.navbar [
            shadow.shadowLg
            margin.mb2
            color.bgNeutral
            color.textNeutralContent
            box.roundedBox
            prop.children [
                Html.div [
                    prop.className "flex-none"
                    prop.children [
                        Daisy.button.button [
                            button.square
                            button.ghost
                            prop.children [
                                Html.i [ prop.className "fas fa-arrow-left" ++ color.textSuccess ]
                            ]
                        ]
                    ]
                ]
                Html.div [
                    prop.className "flex-1 px-2 mx-2"
                    prop.children [
                        Html.span [prop.className "text-lg font-bold"; prop.text "With one icon"]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.navbar [
    shadow.shadowLg
    margin.mb2
    color.bgNeutral
    color.textNeutralContent
    box.roundedBox
    prop.children [
        Html.div [
            prop.className "flex-none"
            prop.children [
                Daisy.button.button [
                    button.square
                    button.ghost
                    prop.children [
                        Html.i [ prop.className "fas fa-arrow-left" ++ color.textSuccess ]
                    ]
                ]
            ]
        ]
        Html.div [
            prop.className "flex-1 px-2 mx-2"
            prop.children [
                Html.span [prop.className "text-lg font-bold"; prop.text "With one icon"]
            ]
        ]
    ]
]"""
    let title = Html.text "Icon and text"
    codedView title code example

let startCenterEnd =
    let example =
        Daisy.navbar [
            margin.mb2
            shadow.shadowLg
            color.bgNeutral
            color.textNeutralContent
            box.roundedBox
            prop.children [
                Daisy.navbarStart [
                    Daisy.button.button [
                        button.square
                        button.ghost
                        prop.children [
                            Html.i [ prop.className "fas fa-bars" ]
                        ]
                    ]
                ]
                Daisy.navbarCenter [Html.span "With two icons"]
                Daisy.navbarEnd [
                    Daisy.button.button [
                        button.square
                        button.ghost
                        prop.children [
                            Html.i [ prop.className "fas fa-ellipsis-h" ]
                        ]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.navbar [
    margin.mb2
    shadow.shadowLg
    color.bgNeutral
    color.textNeutralContent
    box.roundedBox
    prop.children [
        Daisy.navbarStart [
            Daisy.button.button [
                button.square
                button.ghost
                prop.children [
                    Html.i [ prop.className "fas fa-bars" ]
                ]
            ]
        ]
        Daisy.navbarCenter [Html.span "With two icons"]
        Daisy.navbarEnd [
            Daisy.button.button [
                button.square
                button.ghost
                prop.children [
                    Html.i [ prop.className "fas fa-ellipsis-h" ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Start / Center / End"
    codedView title code example

let withInput =
    let example =
        Daisy.navbar [
            margin.mb2
            shadow.shadowLg
            color.bgNeutral
            color.textNeutralContent
            box.roundedBox
            prop.children [
                Html.div [
                    prop.className "flex-none"
                    prop.children [
                        Daisy.formControl [
                            Daisy.input [input.ghost; prop.placeholder "Search"]
                        ]
                    ]
                ]
                Html.div [
                    prop.className "flex-none"
                    prop.children [
                        Daisy.button.button [
                            button.square
                            button.ghost
                            prop.children [
                                Html.i [ prop.className "fas fa-search" ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.navbar [
    margin.mb2
    shadow.shadowLg
    color.bgNeutral
    color.textNeutralContent
    box.roundedBox
    prop.children [
        Html.div [
            prop.className "flex-none"
            prop.children [
                Daisy.formControl [
                    Daisy.input [input.ghost; prop.placeholder "Search"]
                ]
            ]
        ]
        Html.div [
            prop.className "flex-none"
            prop.children [
                Daisy.button.button [
                    button.square
                    button.ghost
                    prop.children [
                        Html.i [ prop.className "fas fa-search" ]
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "With input"
    codedView title code example

[<ReactComponent>]
let NavbarView () =
    React.fragment [
        iconAndText
        startCenterEnd
        withInput
    ]