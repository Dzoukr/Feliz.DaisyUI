module Docs.Pages.Dropdown

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.dropdown [
            Daisy.button.button [
                button.primary
                prop.text "Dropdown"
            ]
            Daisy.dropdownContent [
                prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
                prop.tabIndex 0
                prop.children [
                    Html.li [Html.a [prop.text "Item 1"]]
                    Html.li [Html.a [prop.text "Item 2"]]
                    Html.li [Html.a [prop.text "Item 3"]]
                ]
            ]
        ]

    let code = """Daisy.dropdown [
    Daisy.button.button [
        button.primary
        prop.text "Dropdown"
    ]
    Daisy.dropdownContent [
        prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
        prop.tabIndex 0
        prop.children [
            Html.li [Html.a [prop.text "Item 1"]]
            Html.li [Html.a [prop.text "Item 2"]]
            Html.li [Html.a [prop.text "Item 3"]]
        ]
    ]
]
"""
    let title = Html.text "Simple"
    codedView title code example

let hover =
    let example =
        Daisy.dropdown [
            dropdown.hover
            prop.children [
                Daisy.button.button [
                    button.primary
                    prop.text "Hover"
                ]
                Daisy.dropdownContent [
                    prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
                    prop.tabIndex 0
                    prop.children [
                        Html.li [Html.a [prop.text "Item 1"]]
                        Html.li [Html.a [prop.text "Item 2"]]
                        Html.li [Html.a [prop.text "Item 3"]]
                    ]
                ]
            ]
        ]

    let code = """Daisy.dropdown [
    dropdown.hover
    prop.children [
        Daisy.button.button [
            button.primary
            prop.text "Hover"
        ]
        Daisy.dropdownContent [
            prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
            prop.tabIndex 0
            prop.children [
                Html.li [Html.a [prop.text "Item 1"]]
                Html.li [Html.a [prop.text "Item 2"]]
                Html.li [Html.a [prop.text "Item 3"]]
            ]
        ]
    ]
]
"""
    let title = Html.text "Hover"
    codedView title code example

let open' =
    let example =
        Daisy.dropdown [
            dropdown.open'
            prop.children [
                Daisy.button.button [
                    button.primary
                    prop.text "Opened"
                ]
                Daisy.dropdownContent [
                    prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
                    prop.tabIndex 0
                    prop.children [
                        Html.li [Html.a [prop.text "Item 1"]]
                        Html.li [Html.a [prop.text "Item 2"]]
                        Html.li [Html.a [prop.text "Item 3"]]
                    ]
                ]
            ]
        ]

    let code = """Daisy.dropdown [
    dropdown.open'
    prop.children [
        Daisy.button.button [
            button.primary
            prop.text "Opened"
        ]
        Daisy.dropdownContent [
            prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
            prop.tabIndex 0
            prop.children [
                Html.li [Html.a [prop.text "Item 1"]]
                Html.li [Html.a [prop.text "Item 2"]]
                Html.li [Html.a [prop.text "Item 3"]]
            ]
        ]
    ]
]
"""
    let title = Html.text "Opened"
    codedView title code example

let directions =
    let example =
        let dirs = [
            dropdown.left , "left" , button.primary
            dropdown.end' , "end"  , button.secondary
            dropdown.top  , "top"  , button.accent
            dropdown.right, "right", button.success
        ]

        Html.div [
            for dir, dirText, buttonColor in dirs do
                Daisy.dropdown [
                    dir
                    prop.children [
                        Daisy.button.button [
                            buttonColor
                            prop.text dirText
                        ]
                        Daisy.dropdownContent [
                            prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
                            prop.tabIndex 0
                            prop.children [
                                Html.li [Html.a [prop.text "Item 1"]]
                                Html.li [Html.a [prop.text "Item 2"]]
                                Html.li [Html.a [prop.text "Item 3"]]
                            ]
                        ]
                    ]
                ]
        ]

    let code = """let dirs = [
    dropdown.left , "left" , button.primary
    dropdown.end' , "end"  , button.secondary
    dropdown.top  , "top"  , button.accent
    dropdown.right, "right", button.success
]

Html.div [
    for dir, dirText, buttonColor in dirs do
        Daisy.dropdown [
            dir
            prop.children [
                Daisy.button.button [
                    buttonColor
                    prop.text dirText
                ]
                Daisy.dropdownContent [
                    prop.className "p-2 shadow menu bg-base-100 rounded-box w-52"
                    prop.tabIndex 0
                    prop.children [
                        Html.li [Html.a [prop.text "Item 1"]]
                        Html.li [Html.a [prop.text "Item 2"]]
                        Html.li [Html.a [prop.text "Item 3"]]
                    ]
                ]
            ]
        ]
]"""
    let title = Html.text "Directions"
    codedView title code example

[<ReactComponent>]
let DropdownView () =
    React.fragment [
        simple
        hover
        open'
        directions
    ]
