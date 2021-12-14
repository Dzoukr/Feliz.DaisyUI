module Docs.Pages.Footer

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.footer [
            prop.className "p-10 bg-neutral text-neutral-content"
            prop.children [
                Html.div [
                    Daisy.footerTitle "Services"
                    Daisy.link [link.hover; prop.text "Branding"]
                    Daisy.link [link.hover; prop.text "Design"]
                    Daisy.link [link.hover; prop.text "Marketing"]
                    Daisy.link [link.hover; prop.text "Advertisement"]
                ]
                Html.div [
                    Daisy.footerTitle "Company"
                    Daisy.link [link.hover; prop.text "About us"]
                    Daisy.link [link.hover; prop.text "Contact"]
                    Daisy.link [link.hover; prop.text "Jobs"]
                    Daisy.link [link.hover; prop.text "Press kit"]
                ]
                Html.div [
                    Daisy.footerTitle "Legal"
                    Daisy.link [link.hover; prop.text "Legal"]
                    Daisy.link [link.hover; prop.text "Terms of use"]
                    Daisy.link [link.hover; prop.text "Privacy policy"]
                    Daisy.link [link.hover; prop.text "Cookie policy"]
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.footer [
    prop.className "p-10 bg-neutral text-neutral-content"
    prop.children [
        Html.div [
            Daisy.footerTitle "Services"
            Daisy.link [link.hover; prop.text "Branding"]
            Daisy.link [link.hover; prop.text "Design"]
            Daisy.link [link.hover; prop.text "Marketing"]
            Daisy.link [link.hover; prop.text "Advertisement"]
        ]
        Html.div [
            Daisy.footerTitle "Company"
            Daisy.link [link.hover; prop.text "About us"]
            Daisy.link [link.hover; prop.text "Contact"]
            Daisy.link [link.hover; prop.text "Jobs"]
            Daisy.link [link.hover; prop.text "Press kit"]
        ]
        Html.div [
            Daisy.footerTitle "Legal"
            Daisy.link [link.hover; prop.text "Legal"]
            Daisy.link [link.hover; prop.text "Terms of use"]
            Daisy.link [link.hover; prop.text "Privacy policy"]
            Daisy.link [link.hover; prop.text "Cookie policy"]
        ]
    ]
]"""
    let title = Html.text "Simple"
    codedView title code example

[<ReactComponent>]
let FooterView () =
    React.fragment [
        simple
    ]
