module Docs.Pages.Carousel

open Feliz
open Elmish
open Feliz.DaisyUI
open Docs.SharedView

let horizontal =
    let example =
        Daisy.carousel [
            Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]
            Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]
            Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]
            Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]
            Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]
            Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]
        ]
        |> Html.div

    let code = """Daisy.carousel [
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]
    Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]
]"""
    let title = Html.text "Horizontal"
    codedView title code example

let vertical =
    let example =
        Daisy.carousel [
            prop.classes ["w-64"; "h-36"]
            carousel.vertical
            prop.children [
                Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]
                Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]
                Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]
                Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]
                Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]
                Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]
            ]
        ]
        |> Html.div

    let code = """Daisy.carousel [
    prop.classes ["w-64"; "h-36"]
    carousel.vertical
    prop.children [
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/500/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/501/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/502/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/503/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/505/256/144"]]
        Daisy.carouselItem [Html.img [prop.src "https://picsum.photos/id/506/256/144"]]
    ]
]"""
    let title = Html.text "Vertical"
    codedView title code example

[<ReactComponent>]
let CarouselView () =
    React.fragment [
        horizontal
        vertical
    ]