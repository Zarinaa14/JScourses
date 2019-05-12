module Model exposing (..)

import Http

type alias Model = {
           guests : List Guest,
           name : String,
           rating : String,
           phone : String,
           comment : String,
           feedbacks : List Feedback,
           currentFeedback : Feedback,
           isLoaded : Bool,
           phoneError : Bool
    }

type Msg
        = AllGuests (Result Error (List Guest))
        | ShowFeedback Guest
        | SendGuestFeedback  Feedback
        | EaterName String
        | Rating String
        | Phone String
        | Comment String
        | CheckFeedbacks (List Feedback)
        | InvalidPhone Bool
        | PopupClose



type alias Guest = {
           name : String,
           eatsPizza : Bool,
           isVegan : Bool
             }

type alias Feedback ={
           name : String,
           rating : String,
           phone : String,
           comment : String,
           isEmpty : Bool
    }

type Error
    = HttpError Http.Error
