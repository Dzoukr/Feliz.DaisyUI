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
                        prop.src "http://daisyui.com/tailwind-css-component-profile-1@56w.png"
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
                prop.src "http://daisyui.com/tailwind-css-component-profile-1@56w.png"
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
                    Html.img [
                        prop.src "http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                    ]
                ]
                Daisy.avatar [
                    Html.img [
                        prop.src "http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                    ]
                ]
                Daisy.avatar [
                    Html.img [
                        prop.src "http://daisyui.com/tailwind-css-component-profile-3@56w.png"
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.avatarGroup [
    prop.className "-space-x-6"
    prop.children [
        Daisy.avatar [
            Html.img [
                prop.src "http://daisyui.com/tailwind-css-component-profile-1@56w.png"
            ]
        ]
        Daisy.avatar [
            Html.img [
                prop.src "http://daisyui.com/tailwind-css-component-profile-2@56w.png"
            ]
        ]
        Daisy.avatar [
            Html.img [
                prop.src "http://daisyui.com/tailwind-css-component-profile-3@56w.png"
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