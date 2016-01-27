@startuml
Autonumber

Actor Jane
Participant "Credential Curator" as CV
Participant "User Agent" as UA
Participant "Wines Of The World" as merchant

Jane->UA: Navigate to web site
UA->merchant: Request landing page

Note right
    Merchant requires that
    web site users be at
    least 21 years of age
End note

merchant->UA: Request proof of age
UA->CV: Need proof of age
CV->Jane: Displays relevant credentials
Jane->CV: Picks a credentials
CV->merchant: Use this credential as proof of age
merchant->merchant: Verify
merchant->UA: Redirect to web site

title Example age verification flow

@enduml
