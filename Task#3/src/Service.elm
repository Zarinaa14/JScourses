module Service exposing (..)

import Http
import Json.Decode exposing (Decoder)
import JsonUtil exposing ( convertGuests)
import Maybe exposing (..)
import Model exposing (Error(..), Feedback, Guest, Model, Msg(..))
import Task exposing (Task)


lookUpData : Cmd Msg
lookUpData =
    getAllGuests
        |> Task.mapError HttpError
        |> Task.andThen
            (\guests ->
                case guests of
                    _ ->
                        getGuestsDiets guests
                            |> Task.mapError HttpError
            )
        |> Task.attempt AllGuests



getAllGuests : Task Http.Error (List Guest)
getAllGuests =
    Http.task{
        method = "GET",
        headers = [],
        url = "https://gp-js-test.herokuapp.com/pizza/guests",
        body = Http.emptyBody,
        resolver = Http.stringResolver <| handleResponse <| convertGuests,
        timeout = Nothing
        }


generateURL : List Guest -> String
generateURL guests =  String.join "," (List.map (\e -> e.name) (List.filter (\e -> e.eatsPizza) guests))

getGuestsDiets : List Guest -> Task Http.Error (List Guest)
getGuestsDiets guests =
    Http.task{
           method = "GET",
           headers = [],
           url = "https://gp-js-test.herokuapp.com/pizza/world-diets-book/" ++ generateURL guests,
           body = Http.emptyBody,
           resolver = Http.stringResolver <| handleResponse <| convertGuests,
           timeout = Nothing
        }
        |> Task.andThen
            (\guestsDiets ->
                case guestsDiets of
                    _ ->
                        createGuestsLists guestsDiets guests
            )



createGuestsLists : List Guest -> List Guest -> Task Http.Error (List Guest)
createGuestsLists guestsDiets guests =
    List.filter (\guest -> not guest.eatsPizza) guests
        |> List.append guestsDiets
        |> Task.succeed


handleResponse : Decoder a -> Http.Response String -> Result Http.Error a
handleResponse info response =
    case response of
        Http.GoodStatus_ _ body ->
            case Json.Decode.decodeString info body of
                Err _ ->
                    Err (Http.BadBody body)
                Ok result ->
                    Ok result
        Http.BadUrl_ url ->
            Err (Http.BadUrl url)
        Http.Timeout_ ->
            Err Http.Timeout
        Http.BadStatus_ { statusCode } _ ->
            Err (Http.BadStatus statusCode)
        Http.NetworkError_ ->
            Err Http.NetworkError
