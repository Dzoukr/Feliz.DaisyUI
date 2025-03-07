module Docs.Pages.Dock

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let simple =
    let example =
        Daisy.dock [
            dock.xl
            prop.children [
                Html.button [
                    prop.children [
                        Svg.svg [
                            svg.className "size-[1.2em]"
                            svg.viewBox (0, 0, 24, 24)
                            svg.children [
                                Svg.g [
                                    svg.fill "currentColor"
                                    svg.strokeLineJoin "miter"
                                    svg.strokeLineCap "butt"
                                    svg.children [
                                        Svg.polyline [
                                            svg.points "3 14 9 14 9 17 15 17 15 14 21 14"
                                            svg.strokeMitterLimit 10
                                            svg.strokeWidth 2
                                        ]
                                        Svg.rect [
                                            svg.x 3
                                            svg.y 3
                                            svg.width 18
                                            svg.height 18
                                            svg.rx 2
                                            svg.ry 2
                                            svg.fill "none"
                                            svg.stroke "currentColor"
                                            svg.strokeLineCap "square"
                                            svg.strokeMitterLimit 10
                                            svg.strokeWidth 2
                                        ]
                                    ]
                                ]
                            ]
                        ]
                        Daisy.dockLabel "Inbox"
                    ]
                ]
                Html.button [
                    dock.active
                    prop.children [
                        Svg.svg [
                            svg.className "size-[1.2em]"
                            svg.viewBox (0, 0, 24, 24)
                            svg.children [
                                Svg.g [
                                    svg.fill "currentColor"
                                    svg.strokeLineJoin "miter"
                                    svg.strokeLineCap "butt"
                                    svg.children [
                                        Svg.polyline [
                                            svg.points "3 14 9 14 9 17 15 17 15 14 21 14"
                                            svg.strokeMitterLimit 10
                                            svg.strokeWidth 2
                                        ]
                                        Svg.rect [
                                            svg.x 3
                                            svg.y 3
                                            svg.width 18
                                            svg.height 18
                                            svg.rx 2
                                            svg.ry 2
                                            svg.fill "none"
                                            svg.stroke "currentColor"
                                            svg.strokeLineCap "square"
                                            svg.strokeMitterLimit 10
                                            svg.strokeWidth 2
                                        ]
                                    ]
                                ]
                            ]
                        ]
                        Daisy.dockLabel "Inbox active"
                    ]
                ]
            ]
        ]

    let code = """Daisy.dock [
    dock.xl
    prop.children [
        Html.button [
            prop.children [
                Svg.svg [
                    svg.className "size-[1.2em]"
                    svg.viewBox (0, 0, 24, 24)
                    svg.children [
                        Svg.g [
                            svg.fill "currentColor"
                            svg.strokeLineJoin "miter"
                            svg.strokeLineCap "butt"
                            svg.children [
                                Svg.polyline [
                                    svg.points "3 14 9 14 9 17 15 17 15 14 21 14"
                                    svg.strokeMitterLimit 10
                                    svg.strokeWidth 2
                                ]
                                Svg.rect [
                                    svg.x 3
                                    svg.y 3
                                    svg.width 18
                                    svg.height 18
                                    svg.rx 2
                                    svg.ry 2
                                    svg.fill "none"
                                    svg.stroke "currentColor"
                                    svg.strokeLineCap "square"
                                    svg.strokeMitterLimit 10
                                    svg.strokeWidth 2
                                ]
                            ]
                        ]
                    ]
                ]
                Daisy.dockLabel "Inbox"
            ]
        ]
        Html.button [
            dock.active
            prop.children [
                Svg.svg [
                    svg.className "size-[1.2em]"
                    svg.viewBox (0, 0, 24, 24)
                    svg.children [
                        Svg.g [
                            svg.fill "currentColor"
                            svg.strokeLineJoin "miter"
                            svg.strokeLineCap "butt"
                            svg.children [
                                Svg.polyline [
                                    svg.points "3 14 9 14 9 17 15 17 15 14 21 14"
                                    svg.strokeMitterLimit 10
                                    svg.strokeWidth 2
                                ]
                                Svg.rect [
                                    svg.x 3
                                    svg.y 3
                                    svg.width 18
                                    svg.height 18
                                    svg.rx 2
                                    svg.ry 2
                                    svg.fill "none"
                                    svg.stroke "currentColor"
                                    svg.strokeLineCap "square"
                                    svg.strokeMitterLimit 10
                                    svg.strokeWidth 2
                                ]
                            ]
                        ]
                    ]
                ]
                Daisy.dockLabel "Inbox active"
            ]
        ]
    ]
]"""
    let title = Html.text "Docked navigation bar"
    codedView title code example

[<ReactComponent>]
let DockView () =
    React.fragment [
        simple
    ]
