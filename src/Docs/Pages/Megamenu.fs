module Docs.Pages.Megamenu

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let private menuPanel (panelId: string) (items: string list) =
    Html.div [
        prop.id panelId
        prop.custom ("popover", "")
        prop.className "p-6 shadow-lg"
        prop.children [
            Html.ul [
                prop.className "grid min-w-48 gap-2"
                prop.children (items |> List.map (fun item -> Html.li [ Html.a [ prop.href "#"; prop.text item ] ]))
            ]
        ]
    ]

let basic =
    let example =
        Daisy.megamenu [
            megamenu.wide
            prop.className "m-auto border border-base-300"
            prop.children [
                Html.button [ prop.custom ("popovertarget", "products-menu"); prop.text "Products" ]
                menuPanel "products-menu" [ "Components"; "Themes"; "Templates" ]
                Html.button [ prop.custom ("popovertarget", "resources-menu"); prop.text "Resources" ]
                menuPanel "resources-menu" [ "Documentation"; "Examples"; "Community" ]
                Daisy.megamenuActive []
            ]
        ]

    let code = """Daisy.megamenu [
    megamenu.wide
    prop.children [
        Html.button [ prop.custom ("popovertarget", "products-menu"); prop.text "Products" ]
        Html.div [
            prop.id "products-menu"
            prop.custom ("popover", "")
            prop.children [ Html.text "Products menu content" ]
        ]
        Html.button [ prop.custom ("popovertarget", "resources-menu"); prop.text "Resources" ]
        Html.div [
            prop.id "resources-menu"
            prop.custom ("popover", "")
            prop.children [ Html.text "Resources menu content" ]
        ]
        Daisy.megamenuActive []
    ]
]"""

    codedView (Html.text "Megamenu using the native Popover API") code example

[<ReactComponent>]
let MegamenuView () = React.Fragment [ basic ]
