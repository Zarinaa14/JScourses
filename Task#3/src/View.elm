module View exposing (..)


import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Model exposing (Error(..), Feedback, Guest, Model, Msg(..))
import Validate exposing (checkPopup)



view : Model -> Html Msg
view model =
    div []
        [ h1 [ style "display" "flex", style "justify-content" "center" ]
            [ text
                (if List.isEmpty model.guests then "Loading..."     else ""  )
            ]
        , div [ class "content" ]
            [ if model.isLoaded then
                model |> guestList
              else
                model |> feedbackPopup
            ]
        ]


guestList : Model -> Html Msg
guestList model =
    div []
        [ table
            []
            ([ thead []
                [ th [] [] ]
             ]
                ++ guestRow model
            )
        ]


feedbackPopup : Model -> Html Msg
feedbackPopup model =
    if model.currentFeedback.isEmpty then
        div [ class "feedback-popup" ]
            [ div []
                [ h2 [] [ text "Name" ],
                  text model.currentFeedback.name],
              div []
                [ showRaiting model.rating],
              div []
                [ h2 [] [ text "Phone" ],
                input [ id "phone",
                        type_ "text",
                        onInput Phone
                      ]
                    []
                ]
            , if model.phoneError then
                div [ style "color" "red" ] [ text "Phone should  start from +,  contain numbers and  (), and space." ]
              else
                div [ style "display" "none" ] [ text " " ]
            , div []
                [ h2 [] [ text "Comment" ],
                input [ id "Comment",
                        type_ "text",
                        minlength 5,
                        onInput Comment ]
                      []
                ]
            , buttonPopup model
            ]

    else
        div [ class "feedback-popup" ]
            [ h2 [] [ text "Name" ],
              p [] [ text model.currentFeedback.name ],
              div [ class "rainting" ]
                [ div []
                    [ span
                        [ class(if model.currentFeedback.rating >= "1" then "fa fa-star checked" else "fa fa-star")]
                        [],
                    span
                        [ class (if model.currentFeedback.rating >= "2" then  "fa fa-star checked"  else "fa fa-star" )]
                        [],
                    span
                        [ class (if model.currentFeedback.rating >= "3" then "fa fa-star checked"  else "fa fa-star")]
                        [],
                    span
                        [ class (if model.currentFeedback.rating >= "4" then "fa fa-star checked" else "fa fa-star" )]
                        [],
                    span
                        [ class (if model.currentFeedback.rating == "5" then "fa fa-star checked" else "fa fa-star" ) ]
                        []
                    ]
                ],
              div []
                [ h2 [] [ text "Phone" ],
                  text model.currentFeedback.phone],
              div []
                [ h2 [] [ text "Comment" ],
                  text model.currentFeedback.comment],
                  h2 [] [],
               div []
                [ div []
                    [ button
                        [ onClick (SendGuestFeedback model.currentFeedback) ]
                        [ text "Delete" ],
                      button
                        [ onClick PopupClose ]
                        [ text "Cancel" ]
                    ]
                ]
            ]


buttonPopup : Model -> Html Msg
buttonPopup model =
    if checkPopup model then
        div []
            [ button
                [ onClick (SendGuestFeedback model.currentFeedback) ]
                [ text "Save" ]
            ]
    else
        div []
            [ button
                [ onClick PopupClose ]
                [ text "Cancel" ]
            ]


showRaiting : String -> Html Msg
showRaiting rating =
    div [ class "rainting" ]
        [ button
            [ onClick (Rating "1") ,
             class (if rating >= "1" then "fa fa-star checked"  else "fa fa-star")]
            [],
          button
            [ onClick (Rating "2"),
              class (if rating >= "2" then "fa fa-star checked"  else  "fa fa-star" )]
            [],
          button
            [ onClick (Rating "3"),
              class (if rating >= "3" then  "fa fa-star checked"  else  "fa fa-star" )]
            [],
          button
            [ onClick (Rating "4"),
              class (if rating >= "4" then "fa fa-star checked"  else "fa fa-star"  )]
            [],
          button
            [ onClick (Rating "5"),
            class (if rating == "5" then "fa fa-star checked"  else  "fa fa-star" )]
            []
        ]


guestRow : Model -> List (Html Msg)
guestRow model =
    List.map
        (\guest ->
            tr []
                [ td []
                    [ if guest.eatsPizza then
                        div
                            [ style "color"
                             (if guest.isVegan then  "green" else "#00008B")
                            , onClick (ShowFeedback guest)
                            , class("guest active"
                                    ++ (if hasFeedback guest model then " feedback-info " else "")
                                )
                            ]
                            [ text guest.name ]

                      else
                        div
                            [ class("guest"
                                    ++ (if hasFeedback guest model then " feedback-info" else "" )
                                )
                            ]
                            [ text guest.name]
                    ]
                ]
        )
        model.guests


hasFeedback : Guest -> Model -> Bool
hasFeedback guest model =
    List.length (List.filter (\i -> i.name == guest.name) model.feedbacks) > 0