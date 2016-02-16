@startuml
' Built at http://plantuml.com/plantuml/
!includeurl  https://raw.githubusercontent.com/opencreds/website/master/specs/source/common/skin.pml 
Autonumber

Actor Recipient
Participant "User Agent" as UA
Participant "Credential Service" as CS
Participant "Certifying Authority" as Issuer

Recipient->UA: Navigate to\nweb site
UA->Issuer: Request\nCredential
Issuer->Issuer: Verify\nidentity
Issuer->Issuer: Generate credential
Issuer->UA: Issue\ncredential
UA->Recipient: Display credential
Recipient->UA: Save credential
UA->CS: Store\ncredential
CS->UA: Display\nsaved credentials

title Example credential creation flow

@enduml
