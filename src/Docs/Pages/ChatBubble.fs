module Docs.Pages.ChatBubble

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Html.div [
            Daisy.chat [
                chat.start
                prop.children [
                    Daisy.chatBubble "Is there anything better than Fable & F#?"
                ]
            ]
            Daisy.chat [
                chat.end'
                prop.children [
                    Daisy.chatBubble "No."
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.chat [
        chat.start
        prop.children [
            Daisy.chatBubble "Is there anything better than Fable & F#?"
        ]
    ]
    Daisy.chat [
        chat.end'
        prop.children [
            Daisy.chatBubble "No."
        ]
    ]
]"""
    let title = Html.text "With start and end"
    codedView title code example

let withImages =
    let example =
        Html.div [
            Daisy.chat [
                chat.start
                prop.children [
                    Daisy.chatImage [
                        avatar.className
                        prop.children [
                            Html.div [
                                prop.className "w-10 rounded-full"
                                prop.children [ Html.img [ prop.src "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ] ]
                            ]
                        ]
                    ]
                    Daisy.chatBubble "Is anyone here?"
                ]
            ]
            Daisy.chat [
                chat.start
                prop.children [
                    Daisy.chatImage [
                        avatar.className
                        prop.children [
                            Html.div [
                                prop.className "w-10 rounded-full"
                                prop.children [ Html.img [ prop.src "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ] ]
                            ]
                        ]
                    ]
                    Daisy.chatBubble "Helloooooo!"
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.chat [
        chat.start
        prop.children [
            Daisy.chatImage [
                avatar.className
                prop.children [
                    Html.div [
                        prop.className "w-10 rounded-full"
                        prop.children [ Html.img [ prop.src "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ] ]
                    ]
                ]
            ]
            Daisy.chatBubble "Is anyone here?"
        ]
    ]
    Daisy.chat [
        chat.start
        prop.children [
            Daisy.chatImage [
                avatar.className
                prop.children [
                    Html.div [
                        prop.className "w-10 rounded-full"
                        prop.children [ Html.img [ prop.src "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ] ]
                    ]
                ]
            ]
            Daisy.chatBubble "Helloooooo!"
        ]
    ]
]"""
    let title = Html.text "With images"
    codedView title code example

let header =
    let example =
        Html.div [
            Daisy.chat [
                chat.start
                prop.children [
                    Daisy.chatImage [
                        avatar.className
                        prop.children [
                            Html.div [
                                prop.className "w-10 rounded-full"
                                prop.children [ Html.img [ prop.src "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ] ]
                            ]
                        ]
                    ]
                    Daisy.chatHeader [
                        Html.text "Vincent Noir "
                        Html.time [ prop.className "text-xs opacity-50"; prop.text "2 hours ago" ]
                    ]
                    Daisy.chatBubble "Wind. My only friend!"
                    Daisy.chatFooter [
                        prop.className "opacity-50"
                        prop.text "Delivered"
                    ]
                ]
            ]
            Daisy.chat [
                chat.end'
                prop.children [
                    Daisy.chatImage [
                        avatar.className
                        prop.children [
                            Html.div [
                                prop.className "w-10 rounded-full"
                                prop.children [ Html.img [ prop.src "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ] ]
                            ]
                        ]
                    ]
                    Daisy.chatHeader [
                        Html.text "Wind "
                        Html.time [ prop.className "text-xs opacity-50"; prop.text "2 hours ago" ]
                    ]
                    Daisy.chatBubble "I HATE YOU!"
                    Daisy.chatFooter [
                        prop.className "opacity-50"
                        prop.text "Delivered"
                    ]
                ]
            ]
        ]

    let code = """Html.div [
    Daisy.chat [
        chat.start
        prop.children [
            Daisy.chatImage [
                avatar.className
                prop.children [
                    Html.div [
                        prop.className "w-10 rounded-full"
                        prop.children [ Html.img [ prop.src "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ] ]
                    ]
                ]
            ]
            Daisy.chatHeader [
                Html.text "Vincent Noir "
                Html.time [ prop.className "text-xs opacity-50"; prop.text "2 hours ago" ]
            ]
            Daisy.chatBubble "Wind. My only friend!"
            Daisy.chatFooter [
                prop.className "opacity-50"
                prop.text "Delivered"
            ]
        ]
    ]
    Daisy.chat [
        chat.end'
        prop.children [
            Daisy.chatImage [
                avatar.className
                prop.children [
                    Html.div [
                        prop.className "w-10 rounded-full"
                        prop.children [ Html.img [ prop.src "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" ] ]
                    ]
                ]
            ]
            Daisy.chatHeader [
                Html.text "Wind "
                Html.time [ prop.className "text-xs opacity-50"; prop.text "2 hours ago" ]
            ]
            Daisy.chatBubble "I HATE YOU!"
            Daisy.chatFooter [
                prop.className "opacity-50"
                prop.text "Delivered"
            ]
        ]
    ]
]"""
    let title = Html.text "With images"
    codedView title code example

let colors =
    let example =
        let colors = [
            "primary", chatBubble.primary
            "secondary", chatBubble.secondary
            "accent", chatBubble.accent
            "info", chatBubble.info
            "success", chatBubble.success
            "warning", chatBubble.warning
            "error", chatBubble.error
        ]
        Html.div [
            for (n,c) in colors do
                Daisy.chat [
                    chat.start
                    prop.children [
                        Daisy.chatBubble [
                            c
                            prop.text $"This is {n} color"
                        ]
                    ]
                ]
        ]

    let code = """let colors = [
    "primary", chatBubble.primary
    "secondary", chatBubble.secondary
    "accent", chatBubble.accent
    "info", chatBubble.info
    "success", chatBubble.success
    "warning", chatBubble.warning
    "error", chatBubble.error
]
Html.div [
    for (n,c) in colors do
        Daisy.chat [
            chat.start
            prop.children [
                Daisy.chatBubble [
                    c
                    prop.text $"This is {n} color"
                ]
            ]
        ]
]"""
    let title = Html.text "With colors"
    codedView title code example

[<ReactComponent>]
let ChatBubble () =
    React.fragment [
        simple
        withImages
        header
        colors
    ]