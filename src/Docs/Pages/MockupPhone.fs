module Docs.Pages.MockupPhone

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let iphoneMockup =
    let example =
        Daisy.mockupPhone [
            Daisy.mockupPhoneCamera []
            Daisy.mockupPhoneDisplay [
                Daisy.artboard [
                    artboard.demo
                    artboard.phone1
                    prop.text "Hi."
                ]
            ]
        ]

    let code = """Daisy.mockupPhone [
    Daisy.mockupPhoneCamera []
    Daisy.mockupPhoneDisplay [
        Daisy.artboard [
            artboard.demo
            artboard.phone1
            prop.text "Hi."
        ]
    ]
]"""
    let title = Html.text "iPhone mockup"
    codedView title code example

let iphoneWithColor =
    let example =
        Daisy.mockupPhone [
            color.borderPrimary
            prop.children [
                Daisy.mockupPhoneCamera []
                Daisy.mockupPhoneDisplay [
                    Daisy.artboard [
                        artboard.demo
                        artboard.phone1
                        prop.text "Hi."
                    ]
                ]
            ]
        ]

    let code = """Daisy.mockupPhone [
    color.borderPrimary
    prop.children [
        Daisy.mockupPhoneCamera []
        Daisy.mockupPhoneDisplay [
            Daisy.artboard [
                artboard.demo
                artboard.phone1
                prop.text "Hi."
            ]
        ]
    ]
]"""
    let title = Html.text "iPhone with color"
    codedView title code example

let allPhones =
    let example =
        let phones = [
            artboard.phone1, "phone1", color.borderPrimary
            artboard.phone2, "phone2", color.borderAccent
            artboard.phone3, "phone3", color.borderError
            artboard.phone4, "phone4", color.borderInfo
            artboard.phone5, "phone5", color.borderSuccess
            artboard.phone6, "phone6", color.borderWarning
        ]
        Html.div [
            for phone, phoneText, borderColor in phones do 
                Daisy.mockupPhone [
                    borderColor
                    prop.children [
                        Daisy.mockupPhoneCamera []
                        Daisy.mockupPhoneDisplay [
                            Daisy.artboard [
                                artboard.demo
                                phone
                                prop.text phoneText
                            ]
                        ]
                    ]
                ]
        ]

    let code = """let phones = [
    artboard.phone1, "phone1", color.borderPrimary
    artboard.phone2, "phone2", color.borderAccent
    artboard.phone3, "phone3", color.borderError
    artboard.phone4, "phone4", color.borderInfo
    artboard.phone5, "phone5", color.borderSuccess
    artboard.phone6, "phone6", color.borderWarning
]
Html.div [
    for phone, phoneText, borderColor in phones do 
        Daisy.mockupPhone [
            borderColor
            prop.children [
                Daisy.mockupPhoneCamera []
                Daisy.mockupPhoneDisplay [
                    Daisy.artboard [
                        artboard.demo
                        phone
                        prop.text phoneText
                    ]
                ]
            ]
        ]
]"""
    let title = Html.text "All phones"
    codedView title code example

[<ReactComponent>]
let MockupPhoneView () =
    React.fragment [
        iphoneMockup
        iphoneWithColor
        allPhones
    ]