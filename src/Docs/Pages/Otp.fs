module Docs.Pages.Otp

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let private otpInput length =
    Html.input [
        prop.type'.text
        prop.custom ("autocomplete", "one-time-code")
        prop.custom ("inputmode", "numeric")
        prop.custom ("maxlength", length)
        prop.custom ("pattern", $"[0-9]{{{length}}}")
        prop.required true
        prop.ariaLabel "One-time password"
    ]

let private otpCells count = [ for _ in 1 .. count -> Html.span [] ]

let basic =
    let example =
        Html.div [
            prop.className "m-auto flex flex-col gap-6"
            prop.children [
                Daisy.otp [
                    otp.primary
                    prop.children [
                        yield! otpCells 4
                        otpInput 4
                    ]
                ]
                Daisy.otp [
                    otp.joined
                    otp.success
                    otp.lg
                    prop.children [
                        yield! otpCells 6
                        otpInput 6
                    ]
                ]
            ]
        ]

    let code = """Daisy.otp [
    otp.primary
    prop.children [
        for _ in 1 .. 4 do Html.span []
        Html.input [
            prop.type'.text
            prop.custom ("autocomplete", "one-time-code")
            prop.custom ("inputmode", "numeric")
            prop.custom ("maxlength", 4)
            prop.custom ("pattern", "[0-9]{4}")
            prop.required true
        ]
    ]
]"""

    codedView (Html.text "One-time password inputs; the number of empty spans sets the code length") code example

[<ReactComponent>]
let OtpView () = React.Fragment [ basic ]
