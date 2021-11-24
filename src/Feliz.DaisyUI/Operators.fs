module Feliz.DaisyUI.Operators

open Feliz

let (++) (prop1:IReactProperty) (prop2:IReactProperty) =
    Helpers.getClasses [prop1; prop2]
    |> fun classes -> prop.classes classes