module Docs.View

open Feliz
open Router
open Elmish
open SharedView
open Feliz.DaisyUI
open Feliz.DaisyUI.Operators

type Msg =
    | UrlChanged of Page

type State = {
    Page : Page
}

let init () =
    let nextPage = Router.currentPath() |> Page.parseFromUrlSegments
    { Page = nextPage }, Cmd.navigatePage nextPage

let update (msg:Msg) (state:State) : State * Cmd<Msg> =
    match msg with
    | UrlChanged page -> { state with Page = page }, Cmd.none

Html.div []

let private inLayout (title:string) (p:Page) (elm:ReactElement) =

    let mi (t:string) (mp:Page) =
        Html.li [
            Html.a [
                if p = mp then menuItem.active
                prop.text t
                prop.href mp
                prop.onClick Router.goToUrl
            ]
        ]

    Daisy.drawer [
        drawer.mobile
        prop.children [
            Daisy.drawerToggle [ prop.id "main-menu" ]
            Daisy.drawerSide [
                Daisy.drawerOverlay [ prop.htmlFor "main-menu" ]
                Html.aside [
                    prop.className "flex flex-col border-r w-80"
                    prop.children [
                        Html.divClassed "inline-block text-3xl font-title px-5 py-5 font-bold" [
                            Html.span [
                                color.textPrimary
                                prop.text "Feliz."
                            ]
                            Html.text "DaisyUI"
                        ]
                        Daisy.menu [
                            menu.compact
                            prop.className "flex flex-col p-4 pt-0"
                            prop.children [
                                Daisy.menuTitle [ Html.span "Docs" ]
                                mi "Install" Page.Install
                                mi "Themes" Page.Themes
                                mi "Colors" Page.Colors
                            ]
                        ]

                        Daisy.menu [
                            menu.compact
                            prop.className "flex flex-col p-4 pt-0"
                            prop.children [
                                Daisy.menuTitle [ Html.span "Components" ]
                                mi "Alert" Page.Alert
                            ]
                        ]
                    ]

                ]
            ]
            Daisy.drawerContent [
                Html.divClassed "px-5 py-5" [
                    Html.h2 [
                        color.textPrimary
                        ++ prop.className "my-6 text-5xl font-bold"
                        prop.text title
                    ]
                    elm
                ]
            ]
        ]
    ]


[<ReactComponent>]
let AppView (state:State) (dispatch:Msg -> unit) =

    let title,content =
        match state.Page with
        | Page.Install -> "Installation", Pages.Install.InstallView()
        | Page.Themes -> "Themes", Pages.Themes.ThemesView ()
        | Page.Colors -> "Colors", Pages.Colors.ColorsView ()

    React.router [
        router.hashMode
        router.onUrlChanged (Page.parseFromUrlSegments >> UrlChanged >> dispatch)
        router.children [ content |> inLayout title state.Page ]
    ]