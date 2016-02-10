@startuml
!includeurl  https://raw.githubusercontent.com/opencreds/website/master/specs/source/common/skin.pml 
Autonumber

Actor Asako
Participant "User Agent" as UA
Participant "Credential Curator" as CV
Participant "Certifying Authority" as Issuer

Asako->UA: Navigate to\nweb site
UA->Issuer: Request\nCredential
Issuer->Issuer: Verify\nidentity

Note right
  Expand on identity
  verification?
End note

Issuer->Issuer: Generate credential
Issuer->UA: Return\ncredential
UA->Asako: Display credential
Asako->UA: Save credential
UA->CV: Store\ncredential
CV->UA: Display\nsaved credentials

title Example credential creation flow

@enduml
