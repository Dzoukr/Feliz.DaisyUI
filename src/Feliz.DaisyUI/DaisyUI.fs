namespace Feliz.DaisyUI

open Feliz
open Fable.Core

module internal Helpers =
    let [<Literal>] private ClassName = "className"

    let inline internal getClasses (xs:IReactProperty list) =
        xs
        |> List.choose (unbox<string * obj> >> function
            | (k, v) when k = ClassName -> Some (string v)
            | _ -> None)

    let extractClasses (xs:IReactProperty list) =
        xs
        |> List.rev
        |> List.fold (fun (classes, props) x ->
            match unbox<string * obj> x with
            | (k, v) when k = ClassName -> string v :: classes, props
            | _ -> classes, x :: props) ([], [])

    let combineClasses cn (xs:IReactProperty list) =
        xs
        |> extractClasses
        |> fun (classes, props) -> (cn :: classes |> prop.classes) :: props

module internal Elm =
    let inline props buildFn (xs:IReactProperty list) (cn:string) = buildFn (Helpers.combineClasses cn xs)
    let inline children buildFn (children:seq<ReactElement>) (cn:string) = buildFn [ prop.className cn; prop.children children ]
    let inline elm buildFn (child:ReactElement) (cn:string) = buildFn [ prop.className cn; prop.children [ child ] ]
    let inline string buildFn (value:string) (cn:string) = buildFn [ prop.className cn; prop.text value ]
    let inline int buildFn (value:int) (cn:string) = buildFn [ prop.className cn; prop.text value ]
    let inline float buildFn (value:float) (cn:string) = buildFn [ prop.className cn; prop.text value ]

[<Erase>]
type DaisyUI =
    static member inline alert props = Elm.props Html.div props "alert"
    static member inline alert children = Elm.children Html.div children "alert"
    static member inline alert elm = Elm.elm Html.div elm "alert"
    static member inline alert string = Elm.string Html.div string "alert"
    static member inline alert int = Elm.int Html.div int "alert"
    static member inline alert float = Elm.float Html.div float "alert"

    static member inline artboard props = Elm.props Html.div props "artboard"
    static member inline artboard children = Elm.children Html.div children "artboard"
    static member inline artboard elm = Elm.elm Html.div elm "artboard"
    static member inline artboard string = Elm.string Html.div string "artboard"
    static member inline artboard int = Elm.int Html.div int "artboard"
    static member inline artboard float = Elm.float Html.div float "artboard"

    static member inline avatar props = Elm.props Html.div props "avatar"
    static member inline avatar children = Elm.children Html.div children "avatar"
    static member inline avatar elm = Elm.elm Html.div elm "avatar"

    static member inline avatarGroup props = Elm.props Html.div props "avatar-group"
    static member inline avatarGroup children = Elm.children Html.div children "avatar-group"
    static member inline avatarGroup elm = Elm.elm Html.div elm "avatar-group"

    static member inline badge props = Elm.props Html.div props "badge"
    static member inline badge children = Elm.children Html.div children "badge"
    static member inline badge elm = Elm.elm Html.div elm "badge"
    static member inline badge string = Elm.string Html.div string "badge"
    static member inline badge int = Elm.int Html.div int "badge"
    static member inline badge float = Elm.float Html.div float "badge"

    static member inline breadcrumbs props = Elm.props Html.div props "breadcrumbs"
    static member inline breadcrumbs children = Elm.children Html.div children "breadcrumbs"
    static member inline breadcrumbs elm = Elm.elm Html.div elm "breadcrumbs"
    static member inline breadcrumbs string = Elm.string Html.div string "breadcrumbs"
    static member inline breadcrumbs int = Elm.int Html.div int "breadcrumbs"
    static member inline breadcrumbs float = Elm.float Html.div float "breadcrumbs"

    static member inline buttonGroup props = Elm.props Html.div props "btn-group"
    static member inline buttonGroup children = Elm.children Html.div children "btn-group"
    static member inline buttonGroup elm = Elm.elm Html.div elm "btn-group"
    static member inline buttonGroup string = Elm.string Html.div string "btn-group"
    static member inline buttonGroup int = Elm.int Html.div int "btn-group"
    static member inline buttonGroup float = Elm.float Html.div float "btn-group"

    static member inline card props = Elm.props Html.div props "card"
    static member inline card children = Elm.children Html.div children "card"
    static member inline card elm = Elm.elm Html.div elm "card"

    static member inline cardTitle props = Elm.props Html.h2 props "card-title"
    static member inline cardTitle children = Elm.children Html.h2 children "card-title"
    static member inline cardTitle elm = Elm.elm Html.h2 elm "card-title"
    static member inline cardTitle string = Elm.string Html.h2 string "card-title"
    static member inline cardTitle int = Elm.int Html.h2 int "card-title"
    static member inline cardTitle float = Elm.float Html.h2 float "card-title"

    static member inline cardBody props = Elm.props Html.div props "card-body"
    static member inline cardBody children = Elm.children Html.div children "card-body"
    static member inline cardBody elm = Elm.elm Html.div elm "card-body"

    static member inline cardActions props = Elm.props Html.div props "card-actions"
    static member inline cardActions children = Elm.children Html.div children "card-actions"
    static member inline cardActions elm = Elm.elm Html.div elm "card-actions"

    static member inline carousel props = Elm.props Html.div props "carousel"
    static member inline carousel children = Elm.children Html.div children "carousel"
    static member inline carousel elm = Elm.elm Html.div elm "carousel"

    static member inline carouselItem props = Elm.props Html.div props "carousel-item"
    static member inline carouselItem children = Elm.children Html.div children "carousel-item"
    static member inline carouselItem elm = Elm.elm Html.div elm "carousel-item"

    static member inline collapse props = Elm.props Html.div props "collapse"
    static member inline collapse children = Elm.children Html.div children "collapse"
    static member inline collapse elm = Elm.elm Html.div elm "collapse"

    static member inline collapseTitle props = Elm.props Html.div props "collapse-title"
    static member inline collapseTitle children = Elm.children Html.div children "collapse-title"
    static member inline collapseTitle elm = Elm.elm Html.div elm "collapse-title"
    static member inline collapseTitle string = Elm.string Html.div string "collapse-title"
    static member inline collapseTitle int = Elm.int Html.div int "collapse-title"
    static member inline collapseTitle float = Elm.float Html.div float "collapse-title"

    static member inline collapseContent props = Elm.props Html.div props "collapse-content"
    static member inline collapseContent children = Elm.children Html.div children "collapse-content"
    static member inline collapseContent elm = Elm.elm Html.div elm "collapse-content"
    static member inline collapseContent string = Elm.string Html.div string "collapse-content"
    static member inline collapseContent int = Elm.int Html.div int "collapse-content"
    static member inline collapseContent float = Elm.float Html.div float "collapse-content"

    static member inline countdown props = Elm.props Html.span props "countdown"
    static member inline countdown children = Elm.children Html.span children "countdown"
    static member inline countdown elm = Elm.elm Html.span elm "countdown"

    static member inline divider props = Elm.props Html.div props "divider"
    static member inline divider children = Elm.children Html.div children "divider"
    static member inline divider elm = Elm.elm Html.div elm "divider"
    static member inline divider string = Elm.string Html.div string "divider"
    static member inline divider int = Elm.int Html.div int "divider"
    static member inline divider float = Elm.float Html.div float "divider"

    static member inline drawer props = Elm.props Html.div props "drawer"
    static member inline drawer children = Elm.children Html.div children "drawer"
    static member inline drawer elm = Elm.elm Html.div elm "drawer"

    static member inline drawerToggle props = Elm.props Html.input (prop.type'.checkbox :: props) "drawer-toggle"

    static member inline drawerContent props = Elm.props Html.div props "drawer-content"
    static member inline drawerContent children = Elm.children Html.div children "drawer-content"
    static member inline drawerContent elm = Elm.elm Html.div elm "drawer-content"

    static member inline drawerSide props = Elm.props Html.div props "drawer-side"
    static member inline drawerSide children = Elm.children Html.div children "drawer-side"
    static member inline drawerSide elm = Elm.elm Html.div elm "drawer-side"

    static member inline drawerOverlay props = Elm.props Html.label props "drawer-overlay"

    static member inline dropdown props = Elm.props Html.div props "dropdown"
    static member inline dropdown children = Elm.children Html.div children "dropdown"
    static member inline dropdown elm = Elm.elm Html.div elm "dropdown"

    static member inline dropdownContent props = Elm.props Html.ul props "dropdown-content"
    static member inline dropdownContent children = Elm.children Html.ul children "dropdown-content"
    static member inline dropdownContent elm = Elm.elm Html.ul elm "dropdown-content"

    static member inline footer props = Elm.props Html.footer props "footer"
    static member inline footer children = Elm.children Html.footer children "footer"
    static member inline footer elm = Elm.elm Html.footer elm "footer"

    static member inline footerTitle props = Elm.props Html.span props "footer-title"
    static member inline footerTitle children = Elm.children Html.span children "footer-title"
    static member inline footerTitle elm = Elm.elm Html.span elm "footer-title"
    static member inline footerTitle string = Elm.string Html.span string "footer-title"
    static member inline footerTitle int = Elm.int Html.span int "footer-title"
    static member inline footerTitle float = Elm.float Html.span float "footer-title"

    static member inline hero props = Elm.props Html.div props "hero"
    static member inline hero children = Elm.children Html.div children "hero"
    static member inline hero elm = Elm.elm Html.div elm "hero"


    static member inline heroContent props = Elm.props Html.div props "hero-content"
    static member inline heroContent children = Elm.children Html.div children "hero-content"
    static member inline heroContent elm = Elm.elm Html.div elm "hero-content"

    static member inline heroOverlay props = Elm.props Html.div props "hero-overlay"
    static member inline heroOverlay children = Elm.children Html.div children "hero-overlay"
    static member inline heroOverlay elm = Elm.elm Html.div elm "hero-overlay"

    static member inline indicator props = Elm.props Html.div props "indicator"
    static member inline indicator children = Elm.children Html.div children "indicator"
    static member inline indicator elm = Elm.elm Html.div elm "indicator"

    static member inline indicatorItem props = Elm.props Html.div props "indicator-item"
    static member inline indicatorItem children = Elm.children Html.div children "indicator-item"
    static member inline indicatorItem elm = Elm.elm Html.div elm "indicator-item"
    static member inline indicatorItem string = Elm.string Html.div string "indicator-item"
    static member inline indicatorItem int = Elm.int Html.div int "indicator-item"
    static member inline indicatorItem float = Elm.float Html.div float "indicator-item"

module DaisyUI =
    [<Erase>]
    type button =
        static member inline button props = Elm.props Html.button props "btn"
        static member inline button children = Elm.children Html.button children "btn"
        static member inline button elm = Elm.elm Html.button elm "btn"
        static member inline button string = Elm.string Html.button string "btn"
        static member inline button int = Elm.int Html.button int "btn"
        static member inline button float = Elm.float Html.button float "btn"

        static member inline a props = Elm.props Html.a props "btn"
        static member inline a children = Elm.children Html.a children "btn"
        static member inline a elm = Elm.elm Html.a elm "btn"
        static member inline a string = Elm.string Html.a string "btn"
        static member inline a int = Elm.int Html.a int "btn"
        static member inline a float = Elm.float Html.a float "btn"

        static member inline submit props = Elm.props Html.input (prop.type'.submit :: props) "btn"
        static member inline reset props = Elm.props Html.input (prop.type'.reset :: props) "btn"
        static member inline inputButton props = Elm.props Html.input (prop.type'.button :: props) "btn"
