module Validate exposing (..)

import Model exposing (Model)
import Regex exposing (..)

pattern =  Maybe.withDefault Regex.never <|  fromString "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$"

checkNumber : String -> Bool
checkNumber phoneNumber =
    contains pattern phoneNumber && String.length phoneNumber >= 3 && String.length phoneNumber < 11

checkEmptyFields : String -> Bool
checkEmptyFields field = String.length field > 0

checkPopup : Model -> Bool
checkPopup model =
    checkEmptyFields model.comment && not model.phoneError


