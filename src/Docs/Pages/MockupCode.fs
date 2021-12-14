/// TODO: consider putting ``linedMockupCode`` as an exposed API
module Docs.Pages.MockupCode

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let noPrefix =
    let example =
        Daisy.mockupCode [Html.pre [Html.code [prop.text "npm i daisyui"]]]

    let code = """Daisy.mockupCode [Html.pre [Html.code [prop.text "npm i daisyui"]]]"""
    let title = Html.text "Prefix"
    codedView title code example

let prefix =
    let example =
        Daisy.mockupCode [
            Html.pre [
                mockupCode.prefix "$"
                prop.children [
                    Html.code [prop.text "npm i daisyui"]
                ]
            ]
        ]

    let code = """Daisy.mockupCode [
    Html.pre [
        mockupCode.prefix "$"
        prop.children [
            Html.code [prop.text "npm i daisyui"]
        ]
    ]
]"""
    let title = Html.text "Prefix"
    codedView title code example

[<ReactComponent>]
let MockupCodeView () =
    React.fragment [
        noPrefix
        prefix
    ]