module JsonUtil exposing (..)

import Json.Decode exposing (Decoder)
import Json.Encode
import Model exposing (Feedback, Guest, Model, Msg(..))



jsonToData : Json.Decode.Value -> Msg
jsonToData value =
    let
        result =
            Json.Decode.decodeValue feedBacks value
    in
    case result of
        Ok feedbacks ->
            CheckFeedbacks feedbacks
        Err _ ->
            CheckFeedbacks []

convertGuest : Decoder Guest
convertGuest =
    Json.Decode.map3
        Guest
        (Json.Decode.at [ "name" ] Json.Decode.string)
        (Json.Decode.oneOf
            [ Json.Decode.at [ "eatsPizza" ] Json.Decode.bool
            , Json.Decode.succeed True
            ]
        )
        (Json.Decode.oneOf
            [ Json.Decode.at [ "isVegan" ] Json.Decode.bool
            , Json.Decode.succeed False
            ]
        )

convertGuests : Json.Decode.Decoder (List Guest)
convertGuests =
    Json.Decode.oneOf
        [Json.Decode.at [ "diet" ] (Json.Decode.list convertGuest),
        Json.Decode.at [ "party" ] (Json.Decode.list convertGuest)]

feedBacks: Json.Decode.Decoder (List Feedback)
feedBacks =
    Json.Decode.at [ "feedbacks" ] (Json.Decode.list convertFeedback)


convertFeedback : Decoder Feedback
convertFeedback =
    Json.Decode.map5
        Feedback
        (Json.Decode.at [ "name" ] Json.Decode.string)
        (Json.Decode.at [ "rating" ] Json.Decode.string)
        (Json.Decode.at [ "phone" ] Json.Decode.string)
        (Json.Decode.at [ "comment" ] Json.Decode.string)
        (Json.Decode.oneOf
                   [ Json.Decode.at [ "isEmpty" ] Json.Decode.bool
                   , Json.Decode.succeed False
                   ]
               )


feedBackToJson : Model -> Feedback -> Json.Encode.Value
feedBackToJson model feedback =
    Json.Encode.object
        [ ( "name", Json.Encode.string feedback.name )
        , ( "rating", Json.Encode.string model.rating )
        , ( "phone", Json.Encode.string model.phone )
        , ( "comment", Json.Encode.string model.comment )
        ]



