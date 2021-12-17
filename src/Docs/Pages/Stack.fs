module Docs.Pages.Stack

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let withoutStack =
    let example =
        Html.div [
            Html.div [
                prop.className "grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
                prop.text "1"
            ]
            Html.div [
                prop.className "grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"
                prop.text "2"
            ]
            Html.div [
                prop.className "grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
                prop.text "3"
            ]
        ]

    let code = """Html.div [
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
        prop.text "1"
    ]
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"
        prop.text "2"
    ]
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
        prop.text "3"
    ]
]"""
    let title = Html.text "Without stack"
    codedView title code example

let withStack =
    let example =
        Daisy.stack [
            Html.div [
                prop.className "grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
                prop.text "1"
            ]
            Html.div [
                prop.className "grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"
                prop.text "2"
            ]
            Html.div [
                prop.className "grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
                prop.text "3"
            ]
        ]
        |> Html.div

    let code = """Daisy.stack [
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-primary text-primary-content place-content-center"
        prop.text "1"
    ]
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-accent text-accent-content place-content-center"
        prop.text "2"
    ]
    Html.div [
        prop.className "grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center"
        prop.text "3"
    ]
]"""
    let title = Html.text "With stack"
    codedView title code example

let stackedImages =
    let example =
        Daisy.stack [
            Html.img [
                prop.src "https://daisyui.com/tailwind-css-component-profile-1@94w.png"
            ]
            Html.img [
                prop.src "https://daisyui.com/tailwind-css-component-profile-2@94w.png"
            ]
            Html.img [
                prop.src "https://daisyui.com/tailwind-css-component-profile-3@94w.png"
            ]
        ]
        |> Html.div

    let code = """Daisy.stack [
    Html.img [
        prop.src "https://daisyui.com/tailwind-css-component-profile-1@94w.png"
    ]
    Html.img [
        prop.src "https://daisyui.com/tailwind-css-component-profile-2@94w.png"
    ]
    Html.img [
        prop.src "https://daisyui.com/tailwind-css-component-profile-3@94w.png"
    ]
]"""
    let title = Html.text "Stacked images"
    codedView title code example

[<ReactComponent>]
let StackView () =
    React.fragment [
        withoutStack
        withStack
        stackedImages
    ]