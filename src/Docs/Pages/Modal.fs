module Docs.Pages.Modal

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let modalWithToggle =
    let example =
        Html.div [
            Daisy.button.label [
                prop.htmlFor "my-modal"
                button.primary
                prop.text "Open Modal"
            ]
            Daisy.modalToggle [prop.id "my-modal"]
            Daisy.modal [
                prop.children [
                    Daisy.modalBox [
                        Html.p "Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima."
                        Daisy.modalAction [
                            Daisy.button.label [
                                prop.htmlFor "my-modal"
                                button.primary
                                prop.text "Accept"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.button.label [
        prop.htmlFor "my-modal"
        button.primary
        prop.text "Open Modal"
    ]
    Daisy.modalToggle [prop.id "my-modal"]
    Daisy.modal [
        prop.children [
            Daisy.modalBox [
                Html.p "Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima."
                Daisy.modalAction [
                    Daisy.button.label [
                        prop.htmlFor "my-modal"
                        button.primary
                        prop.text "Accept"
                    ]
                ]
            ]
        ]
    ]
]"""
    let title = Html.text "Modal with toggle"
    codedView title code example

[<ReactComponent>]
let ModalView () =
    React.fragment [
        modalWithToggle
    ]