/// TODO: the API for the menu isn't that great
module Docs.Pages.Menu

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let example =
        Html.div [
            prop.className "py-4 artboard artboard-demo bg-base-200"
            prop.children [
                Daisy.menu [
                    prop.className "py-3 bg-base-100 rounded-box"
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

    let code = """Html.div [
    prop.className "py-4 artboard artboard-demo bg-base-200"
    prop.children [
        Daisy.menu [
            prop.className "py-3 bg-base-100 rounded-box"
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
        Html.div [
            prop.className "py-4 artboard artboard-demo bg-base-200"
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
        ]

    let code = """Html.div [
    prop.className "py-4 artboard artboard-demo bg-base-200"
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
        Html.div [
            prop.className "py-4 artboard artboard-demo bg-base-200"
            prop.children [
                Daisy.menu [
                    prop.className "menu items-stretch px-3 shadow-lg bg-base-100 horizontal rounded-box"
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

    let code = """Html.div [
    prop.className "py-4 artboard artboard-demo bg-base-200"
    prop.children [
        Daisy.menu [
            prop.className "menu items-stretch px-3 shadow-lg bg-base-100 horizontal rounded-box"
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
    let title = Html.text "Basic"
    codedView title code example

let tree =
    let example =
        Html.div [
            prop.className "py-4 artboard artboard-demo bg-base-200"
            prop.children [
                Daisy.menu [
                    prop.className "py-3 bg-base-100 rounded-box"
                    prop.children [
                        Daisy.menuTitle "Menu title"
                        Html.li [Html.a [prop.text "Level 1"]]
                        Html.li [
                            Html.a [prop.text "Level 1"]
                            Daisy.menu [
                                Html.li [Html.a [prop.text "Level 2"]]
                                Html.li [
                                    Html.a [prop.text "Level 2"]
                                    Daisy.menu [
                                        Html.li [Html.a [prop.text "Level 3"]]
                                    ]
                                ]
                                Html.li [Html.a [prop.text "Level 2"]]
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """Html.div [
    prop.className "py-4 artboard artboard-demo bg-base-200"
    prop.children [
        Daisy.menu [
            prop.className "py-3 bg-base-100 rounded-box"
            prop.children [
                Daisy.menuTitle "Menu title"
                Html.li [Html.a [prop.text "Level 1"]]
                Html.li [
                    Html.a [prop.text "Level 1"]
                    Daisy.menu [
                        Html.li [Html.a [prop.text "Level 2"]]
                        Html.li [
                            Html.a [prop.text "Level 2"]
                            Daisy.menu [
                                Html.li [Html.a [prop.text "Level 3"]]
                            ]
                        ]
                        Html.li [Html.a [prop.text "Level 2"]]
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