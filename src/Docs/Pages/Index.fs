module Docs.Pages.Index

open Feliz
open Elmish
open Feliz.UseElmish
open Feliz.DaisyUI


[<ReactComponent>]
let IndexView () =

    Html.img [ prop.src "https://picsum.photos/id/1005/200/200"; mask.diamond ]

