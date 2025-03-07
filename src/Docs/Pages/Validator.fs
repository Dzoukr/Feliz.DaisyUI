module Docs.Pages.Validator

open System.Text.RegularExpressions
open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Html.div [
            Daisy.validator.email [
                prop.required true
                prop.placeholder "mail@site.com"
            ]
            Daisy.validatorHint "Enter valid email address"
        ]

    let code = """Html.div [
    Daisy.validator.email [
        prop.required true
        prop.placeholder "mail@site.com"
    ]
    Daisy.validatorHint "Enter valid email address"
]"""
    let title = Html.text "Validator with hint - try typing an invalid email address and then click away"
    codedView title code example

let password =
    let example =
        Html.div [
            Daisy.validator.password [
                prop.required true
                prop.placeholder "Password"
                prop.minLength 8
                prop.pattern (Regex "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
                prop.title "Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            ]
            Daisy.validatorHint [
                Html.text "Must be more than 8 characters, including"
                Html.br []
                Html.text "At least one number"
                Html.br []
                Html.text "At least one lowercase letter"
                Html.br []
                Html.text "At least one uppercase number"
                Html.br []
            ]
        ]

    let code = """Html.div [
    Daisy.validator.password [
        prop.required true
        prop.placeholder "Password"
        prop.minLength 8
        prop.pattern (Regex "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
        prop.title "Must be more than 8 characters, including number, lowercase letter, uppercase letter"
    ]
    Daisy.validatorHint [
        Html.text "Must be more than 8 characters, including"
        Html.br []
        Html.text "At least one number"
        Html.br []
        Html.text "At least one lowercase letter"
        Html.br []
        Html.text "At least one uppercase number"
        Html.br []
    ]
]"""
    let title = Html.text "Password validator with hint - try typing something and then click away"
    codedView title code example

let toggle =
    let example =
        Html.div [
            Daisy.validator.toggle [
                prop.required true
                prop.title "Required"
            ]
            Daisy.validatorHint "Required"
        ]

    let code = """Html.div [
    Daisy.validator.toggle [
        prop.required true
        prop.title "Required"
    ]
    Daisy.validatorHint "Required"
]"""
    let title = Html.text "Toggle validator with hint - try toggling and untoggling"
    codedView title code example

[<ReactComponent>]
let ValidatorView () =
    React.fragment [
        simple
        password
        toggle
    ]