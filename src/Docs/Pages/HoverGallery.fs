module Docs.Pages.HoverGallery

open Feliz
open Feliz.DaisyUI
open Docs.SharedView

let basic =
    let imageSources = [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
    ]

    let example =
        Daisy.hoverGallery [
            prop.className "max-w-80 rounded-box"
            prop.children (imageSources |> List.map (fun source -> Html.img [ prop.src source; prop.alt "Gallery item" ]))
        ]

    let code = """Daisy.hoverGallery [
    prop.className "max-w-80 rounded-box"
    prop.children [
        Html.img [ prop.src "image-1.webp"; prop.alt "Gallery item" ]
        Html.img [ prop.src "image-2.webp"; prop.alt "Gallery item" ]
        Html.img [ prop.src "image-3.webp"; prop.alt "Gallery item" ]
        Html.img [ prop.src "image-4.webp"; prop.alt "Gallery item" ]
    ]
]"""

    codedView (Html.text "Hover over a thumbnail to show it as the main image") code example

[<ReactComponent>]
let HoverGalleryView () = React.Fragment [ basic ]
