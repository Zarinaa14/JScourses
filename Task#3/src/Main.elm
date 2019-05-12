module Main exposing (main)

import Browser
import JsonUtil exposing (jsonToData)
import Model exposing (Error(..), Feedback, Guest, Model, Msg(..))
import Service exposing (lookUpData)
import Update exposing (req, update)
import View exposing (view)


init : ( Model, Cmd Msg )
init =( { guests = [],
       feedbacks = [],
       currentFeedback ={
            isEmpty = True,
            name = "",
            phone = "",
            rating = "",
            comment = ""
            },
            name = "",
            phone = "",
            comment = "",
            rating = "3" ,
            phoneError = False,
            isLoaded = True
      }
    , lookUpData
    )


main : Program () Model Msg
main = Browser.element
        { init = \() -> init,
          view = view,
          update = update,
          subscriptions = subscriptions
        }


subscriptions : Model -> Sub Msg
subscriptions model = req jsonToData





