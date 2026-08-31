module Docs.Pages.Modal

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let popoverAttributeGuidance =
    Daisy.alert [
        alert.info
        prop.className "mb-10"
        prop.children [
            Html.div [
                Html.h3 [ prop.className "font-bold"; prop.text "Using native HTML Popover attributes" ]
                Html.p "Feliz does not currently provide typed properties for the Popover API. Pass them through prop.custom:"
                Html.ul [
                    prop.className "mt-2 list-inside list-disc font-mono"
                    prop.children [
                        Html.li [ Html.code "prop.custom (\"popover\", \"\")" ]
                        Html.li [ Html.code "prop.custom (\"popovertarget\", modalId)" ]
                        Html.li [ Html.code "prop.custom (\"popovertargetaction\", \"hide\")" ]
                    ]
                ]
                Html.p [
                    prop.className "mt-2"
                    prop.text "Use a unique modal ID and pass the same value to every popovertarget that opens or closes it. The popover attribute uses an empty value for the default auto behavior."
                ]
                Html.a [
                    prop.className "link"
                    prop.href "https://daisyui.com/components/modal/"
                    prop.text "See the current daisyUI Modal documentation"
                ]
            ]
        ]
    ]

let modalWithPopover =
    let modalId = "popover-modal"

    let example =
        Html.div [
            Daisy.button.button [
                button.primary
                prop.custom ("popovertarget", modalId)
                prop.text "Open Modal"
            ]
            Daisy.modal.div [
                prop.id modalId
                prop.custom ("popover", "")
                prop.children [
                    Daisy.modalBox.div [
                        Html.h3 [ prop.className "text-lg font-bold"; prop.text "Hello!" ]
                        Html.p [
                            prop.className "py-4"
                            prop.text "Press ESC or use the button below to close."
                        ]
                        Daisy.modalAction [
                            Daisy.button.button [
                                prop.custom ("popovertarget", modalId)
                                prop.custom ("popovertargetaction", "hide")
                                prop.text "Close"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """let modalId = "popover-modal"

Html.div [
    Daisy.button.button [
        button.primary
        prop.custom ("popovertarget", modalId)
        prop.text "Open Modal"
    ]
    Daisy.modal.div [
        prop.id modalId
        prop.custom ("popover", "")
        prop.children [
            Daisy.modalBox.div [
                Html.h3 [ prop.className "text-lg font-bold"; prop.text "Hello!" ]
                Html.p [
                    prop.className "py-4"
                    prop.text "Press ESC or use the button below to close."
                ]
                Daisy.modalAction [
                    Daisy.button.button [
                        prop.custom ("popovertarget", modalId)
                        prop.custom ("popovertargetaction", "hide")
                        prop.text "Close"
                    ]
                ]
            ]
        ]
    ]
]"""

    codedView (Html.text "Modal using the native HTML Popover API") code example

let popoverModalWithBackdrop =
    let modalId = "popover-modal-backdrop"

    let example =
        Html.div [
            Daisy.button.button [
                button.primary
                prop.custom ("popovertarget", modalId)
                prop.text "Open Modal"
            ]
            Daisy.modal.div [
                prop.id modalId
                prop.custom ("popover", "")
                prop.children [
                    Daisy.modalBox.div [
                        Html.h3 [ prop.className "text-lg font-bold"; prop.text "Hello!" ]
                        Html.p [
                            prop.className "py-4"
                            prop.text "Press ESC, click outside, or use the backdrop to close."
                        ]
                    ]
                    Html.div [
                        prop.className "modal-backdrop"
                        prop.children [
                            Html.button [
                                prop.custom ("popovertarget", modalId)
                                prop.custom ("popovertargetaction", "hide")
                                prop.text "Close"
                            ]
                        ]
                    ]
                ]
            ]
        ]

    let code = """let modalId = "popover-modal-backdrop"

Html.div [
    Daisy.button.button [
        button.primary
        prop.custom ("popovertarget", modalId)
        prop.text "Open Modal"
    ]
    Daisy.modal.div [
        prop.id modalId
        prop.custom ("popover", "")
        prop.children [
            Daisy.modalBox.div [
                Html.h3 [ prop.className "text-lg font-bold"; prop.text "Hello!" ]
                Html.p [
                    prop.className "py-4"
                    prop.text "Press ESC, click outside, or use the backdrop to close."
                ]
            ]
            Html.div [
                prop.className "modal-backdrop"
                prop.children [
                    Html.button [
                        prop.custom ("popovertarget", modalId)
                        prop.custom ("popovertargetaction", "hide")
                        prop.text "Close"
                    ]
                ]
            ]
        ]
    ]
]"""

    codedView (Html.text "Popover modal that closes when clicked outside") code example

let modalWithToggle =
    let example =
        Html.div [
            Daisy.button.label [
                prop.htmlFor "my-modal"
                button.primary
                prop.text "Open Modal"
            ]
            Daisy.modalToggle [prop.id "my-modal"]
            Daisy.modal.div [
                prop.children [
                    Daisy.modalBox.div [
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
    Daisy.modal.div [
        prop.children [
            Daisy.modalBox.div [
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
    let title = Html.text "Modal with toggle (legacy checkbox method)"
    codedView title code example

[<ReactComponent>]
let ModalView () =
    React.Fragment [
        popoverAttributeGuidance
        modalWithPopover
        popoverModalWithBackdrop
        modalWithToggle
    ]
