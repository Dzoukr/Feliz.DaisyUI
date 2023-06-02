/// TODO: the API for the menu isn't that great
module Docs.Pages.Menu

open Feliz
open Elmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let basic =
    let example =
        Daisy.artboard [
            artboard.demo ++ color.bgBase200
            prop.children [
                Daisy.menu [
                    prop.className "bg-base-100 rounded-box"
                    prop.children [
                        Daisy.menuTitle "Menu title"
                        Html.li [Html.a [prop.text "Item without icon"]]
                        Html.li [
                            Html.a [
                                Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
                                Html.span "Item with icon"
                            ]
                        ]
                        Html.li [
                            Html.a [
                                Html.i [ prop.className "fas fa-angry mr-2" ]
                                Html.span "Item with icon"
                                Daisy.badge [badge.success; prop.text "3"]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.artboard [
    artboard.demo ++ color.bgBase200
    prop.children [
        Daisy.menu [
            prop.className "bg-base-100 rounded-box"
            prop.children [
                Daisy.menuTitle "Menu title"
                Html.li [Html.a [prop.text "Item without icon"]]
                Html.li [
                    Html.a [
                        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
                        Html.span "Item with icon"
                    ]
                ]
                Html.li [
                    Html.a [
                        Html.i [ prop.className "fas fa-angry mr-2" ]
                        Html.span "Item with icon"
                        Daisy.badge [badge.success; prop.text "3"]
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Basic"
    codedView title code example

let bordered =
    let example =
        Daisy.artboard [
            artboard.demo ++ color.bgBase200
            prop.children [
                Daisy.menu [
                    prop.className "bg-base-100 rounded-box"
                    prop.children [
                        Daisy.menuTitle "Menu title"
                        Html.li [Html.a [prop.text "Non Bordered"]]
                        Html.li [
                            prop.className "bordered"
                            prop.children [
                                Html.a [ prop.text "Bordered"]
                            ]
                        ]
                        Html.li [
                            prop.className "bordered disabled"
                            prop.children [
                                Html.a [ prop.text "Bordered Disabled" ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.artboard [
    artboard.demo ++ color.bgBase200
    prop.children [
        Daisy.menu [
            prop.className "py-3 bg-base-100 rounded-box"
            prop.children [
                Daisy.menuTitle "Menu title"
                Html.li [Html.a [prop.text "Non Bordered"]]
                Html.li [
                    prop.className "bordered"
                    prop.children [
                        Html.a [ prop.text "Bordered"]
                    ]
                ]
                Html.li [
                    prop.className "bordered disabled"
                    prop.children [
                        Html.a [ prop.text "Bordered Disabled" ]
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Bordered"
    codedView title code example

let horizontal =
    let example =
        Daisy.artboard [
            artboard.demo ++ color.bgBase200
            prop.children [
                Daisy.menu [
                    menu.horizontal
                    prop.className "items-stretch shadow-lg bg-base-100 rounded-box"
                    prop.children [
                        Html.li [Html.a [prop.text "With link"]]
                        Html.li [
                            prop.className "bordered"
                            prop.children [
                                Html.a [ prop.text "Bordered"]
                            ]
                        ]
                        Html.li [Html.span "With a span"]
                        Html.li [
                            Html.a [
                                Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
                                Html.span "With an icon"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.artboard [
    artboard.demo ++ color.bgBase200
    prop.children [
        Daisy.menu [
            menu.horizontal
            prop.className "items-stretch shadow-lg bg-base-100 rounded-box"
            prop.children [
                Html.li [Html.a [prop.text "With link"]]
                Html.li [
                    prop.className "bordered"
                    prop.children [
                        Html.a [ prop.text "Bordered"]
                    ]
                ]
                Html.li [Html.span "With a span"]
                Html.li [
                    Html.a [
                        Html.i [ prop.className "fas fa-exclamation-triangle mr-2" ]
                        Html.span "With an icon"
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Horizontal"
    codedView title code example

let tree =
    let example =
        Daisy.artboard [
            prop.className "py-4" ++ artboard.demo ++ color.bgBase200
            prop.children [
                Daisy.menu [
                    prop.className "bg-base-100 rounded-box"
                    prop.children [
                        Daisy.menuTitle "Menu title"
                        Html.li [Html.a [prop.text "Level 1"]]
                        Html.li [
                            Html.details [
                                Html.summary "Parent"
                                Html.ul [
                                    prop.className "rounded-box p-2 bg-base-100"
                                    prop.children [
                                        Html.li [Html.a [prop.text "Level 2/1"]]
                                        Html.li [Html.a [prop.text "Level 2/2"]]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.artboard [
    prop.className "py-4" ++ artboard.demo ++ color.bgBase200
    prop.children [
        Daisy.menu [
            prop.className "bg-base-100 rounded-box"
            prop.children [
                Daisy.menuTitle "Menu title"
                Html.li [Html.a [prop.text "Level 1"]]
                Html.li [
                    Html.span "Parent"
                    Html.ul [
                        prop.className "rounded-box p-2 bg-base-100"
                        prop.children [
                            Html.li [Html.a [prop.text "Level 2/1"]]
                            Html.li [Html.a [prop.text "Level 2/2"]]
                        ]
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Tree"
    codedView title code example

[<ReactComponent>]
let MenuView () =
    React.fragment [
        basic
        bordered
        horizontal
        tree
    ]