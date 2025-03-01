module Docs.Pages.List

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let grow =
    let example =
        Daisy.list [
            prop.className "bg-base-100 rounded-box shadow-md"

            prop.children [
                Html.li [
                    prop.className "p-4 pb-2 text-xs opacity-60 tracking-wide"
                    prop.text "Most played songs this week"
                ]

                Daisy.listRow [
                    Html.div [
                        prop.className "text-4xl font-thin opacity-30 tabular-nums"
                        prop.text "01"
                    ]
                    Html.div [
                        Html.img [
                            prop.className "size-10 rounded-box"
                            prop.src "https://img.daisyui.com/images/profile/demo/1@94.webp"
                        ]
                    ]
                    Html.div [
                        list.colGrow

                        prop.children [
                            Html.div "Dio Lupa"
                            Html.div [
                                prop.className "text-xs uppercase font-semibold opacity-60"
                                prop.text "Remaining Reason"
                            ]
                        ]
                    ]
                    Daisy.button.button [
                        button.ghost
                        button.square

                        prop.children [
                            Svg.svg [
                                svg.className "size-[1.2em]"
                                svg.viewBox (0, 0, 24, 24)

                                svg.children [
                                    Svg.g [
                                        svg.strokeLineJoin "round"
                                        svg.strokeLineCap "round"
                                        svg.strokeWidth 2
                                        svg.fill "none"
                                        svg.stroke "currentColor"

                                        svg.children [
                                            Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]                    
                ]

                Daisy.listRow [
                    Html.div [
                        prop.className "text-4xl font-thin opacity-30 tabular-nums"
                        prop.text "02"
                    ]
                    Html.div [
                        Html.img [
                            prop.className "size-10 rounded-box"
                            prop.src "https://img.daisyui.com/images/profile/demo/4@94.webp"
                        ]
                    ]
                    Html.div [
                        list.colGrow

                        prop.children [
                            Html.div "Ellie Beilish"
                            Html.div [
                                prop.className "text-xs uppercase font-semibold opacity-60"
                                prop.text "Bears of a fever"
                            ]
                        ]
                    ]
                    Daisy.button.button [
                        button.ghost
                        button.square

                        prop.children [
                            Svg.svg [
                                svg.className "size-[1.2em]"
                                svg.viewBox (0, 0, 24, 24)

                                svg.children [
                                    Svg.g [
                                        svg.strokeLineJoin "round"
                                        svg.strokeLineCap "round"
                                        svg.strokeWidth 2
                                        svg.fill "none"
                                        svg.stroke "currentColor"

                                        svg.children [
                                            Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]                    
                ]

                Daisy.listRow [
                    Html.div [
                        prop.className "text-4xl font-thin opacity-30 tabular-nums"
                        prop.text "03"
                    ]
                    Html.div [
                        Html.img [
                            prop.className "size-10 rounded-box"
                            prop.src "https://img.daisyui.com/images/profile/demo/3@94.webp"
                        ]
                    ]
                    Html.div [
                        list.colGrow

                        prop.children [
                            Html.div "Sabrino Gardener"
                            Html.div [
                                prop.className "text-xs uppercase font-semibold opacity-60"
                                prop.text "Cappuccino"
                            ]
                        ]
                    ]
                    Daisy.button.button [
                        button.ghost
                        button.square

                        prop.children [
                            Svg.svg [
                                svg.className "size-[1.2em]"
                                svg.viewBox (0, 0, 24, 24)

                                svg.children [
                                    Svg.g [
                                        svg.strokeLineJoin "round"
                                        svg.strokeLineCap "round"
                                        svg.strokeWidth 2
                                        svg.fill "none"
                                        svg.stroke "currentColor"

                                        svg.children [
                                            Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]                    
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.list [
    prop.className "bg-base-100 rounded-box shadow-md"

    prop.children [
        Html.li [
            prop.className "p-4 pb-2 text-xs opacity-60 tracking-wide"
            prop.text "Most played songs this week"
        ]

        Daisy.listRow [
            Html.div [
                prop.className "text-4xl font-thin opacity-30 tabular-nums"
                prop.text "01"
            ]
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/1@94.webp"
                ]
            ]
            Html.div [
                list.colGrow

                prop.children [
                    Html.div "Dio Lupa"
                    Html.div [
                        prop.className "text-xs uppercase font-semibold opacity-60"
                        prop.text "Remaining Reason"
                    ]
                ]
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]

        Daisy.listRow [
            Html.div [
                prop.className "text-4xl font-thin opacity-30 tabular-nums"
                prop.text "02"
            ]
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/4@94.webp"
                ]
            ]
            Html.div [
                list.colGrow

                prop.children [
                    Html.div "Ellie Beilish"
                    Html.div [
                        prop.className "text-xs uppercase font-semibold opacity-60"
                        prop.text "Bears of a fever"
                    ]
                ]
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]

        Daisy.listRow [
            Html.div [
                prop.className "text-4xl font-thin opacity-30 tabular-nums"
                prop.text "03"
            ]
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/3@94.webp"
                ]
            ]
            Html.div [
                list.colGrow

                prop.children [
                    Html.div "Sabrino Gardener"
                    Html.div [
                        prop.className "text-xs uppercase font-semibold opacity-60"
                        prop.text "Cappuccino"
                    ]
                ]
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]
    ]
]"""
    let title = Html.text "List (third column grows)"
    codedView title code example

let wrap =
    let example =
        Daisy.list [
            prop.className "bg-base-100 rounded-box shadow-md"

            prop.children [
                Html.li [
                    prop.className "p-4 pb-2 text-xs opacity-60 tracking-wide"
                    prop.text "Most played songs this week"
                ]

                Daisy.listRow [
                    Html.div [
                        Html.img [
                            prop.className "size-10 rounded-box"
                            prop.src "https://img.daisyui.com/images/profile/demo/1@94.webp"
                        ]
                    ]
                    Html.div [
                        Html.div "Dio Lupa"
                        Html.div [
                            prop.className "text-xs uppercase font-semibold opacity-60"
                            prop.text "Remaining Reason"
                        ]
                    ]
                    Html.p [
                        list.colWrap
                        prop.text "\"Remaining Reason\" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks."
                    ]
                    Daisy.button.button [
                        button.ghost
                        button.square

                        prop.children [
                            Svg.svg [
                                svg.className "size-[1.2em]"
                                svg.viewBox (0, 0, 24, 24)

                                svg.children [
                                    Svg.g [
                                        svg.strokeLineJoin "round"
                                        svg.strokeLineCap "round"
                                        svg.strokeWidth 2
                                        svg.fill "none"
                                        svg.stroke "currentColor"

                                        svg.children [
                                            Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]                    
                ]

                Daisy.listRow [
                    Html.div [
                        Html.img [
                            prop.className "size-10 rounded-box"
                            prop.src "https://img.daisyui.com/images/profile/demo/4@94.webp"
                        ]
                    ]
                    Html.div [
                        Html.div "Ellie Beilish"
                        Html.div [
                            prop.className "text-xs uppercase font-semibold opacity-60"
                            prop.text "Bears of a fever"
                        ]
                    ]
                    Html.p [
                        list.colWrap
                        prop.text "\"Bears of a Fever\" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim."
                    ]
                    Daisy.button.button [
                        button.ghost
                        button.square

                        prop.children [
                            Svg.svg [
                                svg.className "size-[1.2em]"
                                svg.viewBox (0, 0, 24, 24)

                                svg.children [
                                    Svg.g [
                                        svg.strokeLineJoin "round"
                                        svg.strokeLineCap "round"
                                        svg.strokeWidth 2
                                        svg.fill "none"
                                        svg.stroke "currentColor"

                                        svg.children [
                                            Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]                    
                ]

                Daisy.listRow [
                    Html.div [
                        Html.img [
                            prop.className "size-10 rounded-box"
                            prop.src "https://img.daisyui.com/images/profile/demo/3@94.webp"
                        ]
                    ]
                    Html.div [
                        Html.div "Sabrino Gardener"
                        Html.div [
                            prop.className "text-xs uppercase font-semibold opacity-60"
                            prop.text "Cappuccino"
                        ]
                    ]
                    Html.p [
                        list.colWrap
                        prop.text "\"Cappuccino\" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star."
                    ]
                    Daisy.button.button [
                        button.ghost
                        button.square

                        prop.children [
                            Svg.svg [
                                svg.className "size-[1.2em]"
                                svg.viewBox (0, 0, 24, 24)

                                svg.children [
                                    Svg.g [
                                        svg.strokeLineJoin "round"
                                        svg.strokeLineCap "round"
                                        svg.strokeWidth 2
                                        svg.fill "none"
                                        svg.stroke "currentColor"

                                        svg.children [
                                            Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]                    
                ]
            ]
        ]
        |> Html.div

    let code = """Daisy.list [
    prop.className "bg-base-100 rounded-box shadow-md"

    prop.children [
        Html.li [
            prop.className "p-4 pb-2 text-xs opacity-60 tracking-wide"
            prop.text "Most played songs this week"
        ]

        Daisy.listRow [
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/1@94.webp"
                ]
            ]
            Html.div [
                Html.div "Dio Lupa"
                Html.div [
                    prop.className "text-xs uppercase font-semibold opacity-60"
                    prop.text "Remaining Reason"
                ]
            ]
            Html.p [
                list.colWrap
                prop.text "\"Remaining Reason\" became an instant hit, praised for its haunting sound and emotional depth. A viral performance brought it widespread recognition, making it one of Dio Lupa’s most iconic tracks."
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]

        Daisy.listRow [
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/4@94.webp"
                ]
            ]
            Html.div [
                Html.div "Ellie Beilish"
                Html.div [
                    prop.className "text-xs uppercase font-semibold opacity-60"
                    prop.text "Bears of a fever"
                ]
            ]
            Html.p [
                list.colWrap
                prop.text "\"Bears of a Fever\" captivated audiences with its intense energy and mysterious lyrics. Its popularity skyrocketed after fans shared it widely online, earning Ellie critical acclaim."
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]

        Daisy.listRow [
            Html.div [
                Html.img [
                    prop.className "size-10 rounded-box"
                    prop.src "https://img.daisyui.com/images/profile/demo/3@94.webp"
                ]
            ]
            Html.div [
                Html.div "Sabrino Gardener"
                Html.div [
                    prop.className "text-xs uppercase font-semibold opacity-60"
                    prop.text "Cappuccino"
                ]
            ]
            Html.p [
                list.colWrap
                prop.text "\"Cappuccino\" quickly gained attention for its smooth melody and relatable themes. The song’s success propelled Sabrino into the spotlight, solidifying their status as a rising star."
            ]
            Daisy.button.button [
                button.ghost
                button.square

                prop.children [
                    Svg.svg [
                        svg.className "size-[1.2em]"
                        svg.viewBox (0, 0, 24, 24)

                        svg.children [
                            Svg.g [
                                svg.strokeLineJoin "round"
                                svg.strokeLineCap "round"
                                svg.strokeWidth 2
                                svg.fill "none"
                                svg.stroke "currentColor"

                                svg.children [
                                    Svg.path [ svg.d "M6 3L20 12 6 21 6 3z" ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]                    
        ]
    ]
]"""
    let title = Html.text "List (third column wraps to next row)"
    codedView title code example

[<ReactComponent>]
let ListView () =
    React.fragment [
        grow
        wrap
    ]