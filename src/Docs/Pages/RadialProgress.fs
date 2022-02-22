module Docs.Pages.RadialProgress

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Html.div [
            Daisy.radialProgress [
                prop.style [ style.custom("--value",100) ]
                prop.text "100%"
            ]
            Daisy.radialProgress [
                prop.style [ style.custom("--value",70) ]
                prop.text "70%"
            ]
            Daisy.radialProgress [
                prop.style [ style.custom("--value",10) ]
                prop.text "10%"
            ]
            Daisy.radialProgress [
                prop.style [ style.custom("--value",50) ]
                prop.text "50%"
            ]
        ]

    let code = """Daisy.radialProgress [
    prop.style [ style.custom("--value",100) ]
    prop.text "100%"
]
Daisy.radialProgress [
    prop.style [ style.custom("--value",70) ]
    prop.text "70%"
]
Daisy.radialProgress [
    prop.style [ style.custom("--value",10) ]
    prop.text "10%"
]
Daisy.radialProgress [
    prop.style [ style.custom("--value",50) ]
    prop.text "50%"
]"""
    let title = Html.text "Simple"
    codedView title code example

let allColors =
    let example =
        Html.div [
            Daisy.radialProgress [
                color.bgPrimary
                color.textPrimaryContent
                color.borderPrimary
                prop.className "border-4"
                prop.style [ style.custom("--value",70); style.custom("--size","12rem") ]
                prop.text "70%"
            ]
        ]

    let code = """Daisy.radialProgress [
    color.bgPrimary
    color.textPrimaryContent
    color.borderPrimary
    prop.className "border-4"
    prop.style [ style.custom("--value",70); style.custom("--size","12rem") ]
    prop.text "70%"
]"""
    let title = Html.text "Colors and different sizes"
    codedView title code example

[<ReactComponent>]
let RadialProgressView () =
    React.fragment [
        simple
        allColors
    ]