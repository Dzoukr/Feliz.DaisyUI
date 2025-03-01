module Docs.Pages.Avatar

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators
open Docs.SharedView

let ex1 =
    let example =
        Daisy.avatar [
            Html.div [
                prop.className "mb-8 w-24 h-24"
                prop.children [
                    Html.img [
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.avatar [
    Html.div [
        prop.className "mb-8 w-24 h-24"
        prop.children [
            Html.img [
                prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            ]
        ]
    ]
]"""
    let title = Html.text "Avatars are also quite easy to use!"
    codedView title code example

let ex2 =
    let example =
        Daisy.avatarGroup [
            prop.className "-space-x-6"
            prop.children [
                Daisy.avatar [
                    Html.div [
                        prop.className "w-12"
                        prop.children [
                            Html.img [
                                prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            ]
                        ]
                    ]
                ]
                Daisy.avatar [
                    Html.div [
                        prop.className "w-12"
                        prop.children [
                            Html.img [
                                prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            ]
                        ]
                    ]
                ]
                Daisy.avatar [
                    Html.div [
                        prop.className "w-12"
                        prop.children [
                            Html.img [
                                prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            ]
                        ]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.avatarGroup [
    prop.className "-space-x-6"
    prop.children [
        Daisy.avatar [
            Html.div [
                prop.className "w-12"
                prop.children [
                    Html.img [
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    ]
                ]
            ]
        ]
        Daisy.avatar [
            Html.div [
                prop.className "w-12"
                prop.children [
                    Html.img [
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    ]
                ]
            ]
        ]
        Daisy.avatar [
            Html.div [
                prop.className "w-12"
                prop.children [
                    Html.img [
                        prop.src "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Group all the avatars!"
    codedView title code example

[<ReactComponent>]
let AvatarView () =
    React.fragment [
        ex1
        ex2
    ]