module Docs.Pages.MockupPhone

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let iphoneMockup =
    let example =
        Html.div [
            Daisy.mockupPhone [
                prop.className "bg-base-300"
                prop.children [
                    Daisy.mockupPhoneCamera []
                    Daisy.mockupPhoneDisplay [
                        prop.className "grid place-content-center"
                        prop.text "Hi."
                    ]
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.mockupPhone [
        prop.children [
            prop.className "bg-base-300"
            Daisy.mockupPhoneCamera []
            Daisy.mockupPhoneDisplay [
                prop.className "grid place-content-center"
                prop.text "Hi."
            ]
        ]
    ]
]"""
    let title = Html.text "iPhone mockup"
    codedView title code example

let iphoneWithColor =
    let example =
        Html.div [
            Daisy.mockupPhone [
                prop.className "bg-base-300"
                color.borderPrimary
                prop.children [
                    Daisy.mockupPhoneCamera []
                    Daisy.mockupPhoneDisplay [
                        prop.className "grid place-content-center"
                        prop.text "Hi."
                    ]
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.mockupPhone [
        prop.className "bg-base-300"
        color.borderPrimary
        prop.children [
            Daisy.mockupPhoneCamera []
            Daisy.mockupPhoneDisplay [
                prop.className "grid place-content-center"
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
            "w-[320px] h-[568px]", "phone1", color.borderPrimary
            "w-[375px] h-[667px]", "phone2", color.borderAccent
            "w-[414px] h-[736px]", "phone3", color.borderError
            "w-[375px] h-[812px]", "phone4", color.borderInfo
            "w-[414px] h-[896px]", "phone5", color.borderSuccess
            "w-[320px] h-[1024px]", "phone6", color.borderWarning
        ]
        Html.div [
            for phone, phoneText, borderColor in phones do 
                Daisy.mockupPhone [
                    prop.className "bg-base-300"
                    borderColor
                    prop.children [
                        Daisy.mockupPhoneCamera []
                        Daisy.mockupPhoneDisplay [
                            prop.className $"grid place-content-center {phone}"
                            prop.text phoneText
                        ]
                    ]
                ]
        ]

    let code = """let phones = [
    "w-[320px] h-[568px]", "phone1", color.borderPrimary
    "w-[375px] h-[667px]", "phone2", color.borderAccent
    "w-[414px] h-[736px]", "phone3", color.borderError
    "w-[375px] h-[812px]", "phone4", color.borderInfo
    "w-[414px] h-[896px]", "phone5", color.borderSuccess
    "w-[320px] h-[1024px]", "phone6", color.borderWarning
]
Html.div [
    for phone, phoneText, borderColor in phones do 
        Daisy.mockupPhone [
            prop.className "bg-base-300"
            borderColor
            prop.children [
                Daisy.mockupPhoneCamera []
                Daisy.mockupPhoneDisplay [
                    prop.className $"grid place-content-center {phone}"
                    prop.text phoneText
                ]
            ]
        ]
]"""
    let title = Html.text "Phone sizes"
    codedView title code example

[<ReactComponent>]
let MockupPhoneView () =
    React.fragment [
        iphoneMockup
        iphoneWithColor
        allPhones
    ]