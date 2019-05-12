port module Update exposing (..)

import Json.Encode
import JsonUtil exposing (feedBackToJson)
import Model exposing (Feedback, Guest, Model, Msg(..))
import Validate exposing (checkNumber)

port resp : Json.Encode.Value -> Cmd msg
port req : (Json.Encode.Value -> msg) -> Sub msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CheckFeedbacks feedbacks ->
            ( { model | feedbacks = feedbacks, isLoaded = True }, Cmd.none )

        ShowFeedback guest ->
            { model
                | currentFeedback =
                    if List.length (List.filter (\feedback -> feedback.name == guest.name) model.feedbacks) == 0 then{
                        isEmpty = True,
                        name = guest.name,
                        rating = "3",
                        phone = "",
                        comment = ""
                        }
                    else
                        Maybe.withDefault{
                        isEmpty = True,
                        name = "",
                        rating = "",
                        phone = "",
                        comment = ""}
                        (List.head (List.filter (\feedback -> feedback.name == guest.name) model.feedbacks)),
                        isLoaded = False
            }
                |> update (InvalidPhone False)

        AllGuests result ->
            case result of
                Err _ ->  ( { model | guests = [] }, Cmd.none )
                Ok guests ->  ( { model | guests = guests }, Cmd.none )
        SendGuestFeedback data ->
            ( { model | rating = "3" }
            , resp
                (let
                    commentModel = feedBackToJson model
                 in
                    commentModel data
                )
            )

        EaterName name -> ( { model | name = name }, Cmd.none )
        Phone phone -> { model | phone = phone } |> update (InvalidPhone (not (checkNumber phone)))
        InvalidPhone error -> ( { model | phoneError = error }, Cmd.none )
        Rating rating -> ( { model | rating = rating }, Cmd.none )
        Comment comment -> ( { model | comment = comment }, Cmd.none )
        PopupClose ->  ( { model | isLoaded = True, rating = "" }, Cmd.none )




