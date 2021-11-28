open Fake
open Fake.Core
open Fake.IO
open Fake.IO.FileSystemOperators
open Fake.Core.TargetOperators
open System.IO

open BuildHelpers
open BuildTools

initializeContext()

let publishPath = Path.getFullName "publish"
let srcPath = Path.getFullName "src"
let clientSrcPath = srcPath </> "Docs"
let librarySrcPath = srcPath </> "Feliz.DaisyUI"
let appPublishPath = publishPath </> "app"

// Targets
let clean proj = [ proj </> "bin"; proj </> "obj" ] |> Shell.cleanDirs

Target.create "InstallClient" (fun _ ->
    printfn "Node version:"
    Tools.node "--version" clientSrcPath
    printfn "Yarn version:"
    Tools.yarn "--version" clientSrcPath
    Tools.yarn "install --frozen-lockfile" clientSrcPath
)

let createNuget proj =
    clean proj
    Tools.yarn "install" proj
    Tools.dotnet "restore --no-cache" proj
    Tools.dotnet "pack -c Release" proj

let publishNuget proj =
    createNuget proj
    let nugetKey =
        match Environment.environVarOrNone "NUGET_KEY" with
        | Some nugetKey -> nugetKey
        | None -> failwith "The Nuget API key must be set in a NUGET_KEY environmental variable"
    let nupkg =
        Directory.GetFiles(proj </> "bin" </> "Release")
        |> Seq.head
        |> Path.GetFullPath
    Tools.dotnet (sprintf "nuget push %s -s nuget.org -k %s" nupkg nugetKey) proj

Target.create "Pack" (fun _ ->
    createNuget librarySrcPath
)

Target.create "Publish" (fun _ ->
    publishNuget librarySrcPath
)

Target.create "PublishDocs" (fun _ ->
    Tools.yarn "build" ""
)

Target.create "Run" (fun _ ->
    Tools.yarn "start" ""
)

let dependencies = [
    "InstallClient" ==> "PublishDocs"
    "InstallClient" ==> "Publish"
    "InstallClient" ==> "Pack"
    "InstallClient" ==> "Run"
]

[<EntryPoint>]
let main args = runOrDefault "Run" args