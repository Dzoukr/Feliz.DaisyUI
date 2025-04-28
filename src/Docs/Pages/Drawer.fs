module Docs.Pages.Drawer

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.drawer [
            prop.className "rounded-lg shadow bg-base-200 h-52"
            prop.children [
                Daisy.drawerToggle [prop.id "my-drawer"]
                Daisy.drawerContent [
                    prop.className "flex flex-col items-center justify-center"
                    prop.children [
                        Html.label [
                            button.primary
                            prop.htmlFor "my-drawer"
                            prop.text "Open Menu"
                        ]
                    ]
                ]
                Daisy.drawerSide [
                    prop.className "absolute h-full"
                    prop.children [
                        Daisy.drawerOverlay [prop.htmlFor "my-drawer"]
                        Daisy.menu [
                            prop.className "p-4 h-full overflow-y-auto w-80 bg-base-100 text-base-content"
                            prop.children [
                                Html.li "Menu item 1"
                                Html.li "Menu item 2"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """Daisy.drawer [
    prop.className "rounded-lg shadow bg-base-200 h-52"
    prop.children [
        Daisy.drawerToggle [prop.id "my-drawer"]
        Daisy.drawerContent [
            prop.className "flex flex-col items-center justify-center"
            prop.children [
                Html.label [
                    button.primary
                    prop.htmlFor "my-drawer"
                    prop.text "Open Menu"
                ]
            ]
        ]
        Daisy.drawerSide [
            prop.className "absolute h-full"
            prop.children [
                Daisy.drawerOverlay [prop.htmlFor "my-drawer"]
                Daisy.menu [
                    prop.className "p-4 h-full overflow-y-auto w-80 bg-base-100 text-base-content"
                    prop.children [
                        Html.li "Menu item 1"
                        Html.li "Menu item 2"
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Simple"
    codedView title code example

[<ReactComponent>]
let DrawerView () =
    React.fragment [
        simple
    ]
