module Docs.Pages.Hero

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let advanced =
    let example =
        Daisy.hero [
            prop.className "min-h-screen"
            prop.style [style.backgroundImageUrl "https://picsum.photos/id/1005/1600/1400"]
            prop.children [
                Html.div [prop.className "hero-overlay bg-opacity-60"]
                Daisy.heroContent [
                    prop.className "text-center text-neutral-content"
                    prop.children [
                        Html.div [
                            prop.className "max-w-md"
                            prop.children [
                                Html.h1 [prop.className "mb-5 text-5xl font-bold"; prop.text "Hello there"]
                                Html.p "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
                                Daisy.button.button [button.primary; prop.text "Get Started"]
                            ]
                        ]
                    ]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.hero [
    prop.className "min-h-screen"
    prop.style [style.backgroundImageUrl "https://picsum.photos/id/1005/1600/1400"]
    prop.children [
        Html.div [prop.className "hero-overlay bg-opacity-60"]
        Daisy.heroContent [
            prop.className "text-center text-neutral-content"
            prop.children [
                Html.div [
                    prop.className "max-w-md"
                    prop.children [
                        Html.h1 [prop.className "mb-5 text-5xl font-bold"; prop.text "Hello there"]
                        Html.p "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
                        Daisy.button.button [button.primary; prop.text "Get Started"]
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Advanced"
    codedView title code example

[<ReactComponent>]
let HeroView () =
    React.fragment [
        advanced
    ]
