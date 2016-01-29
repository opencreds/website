@startuml
Autonumber

Actor Asako
Participant "User Agent" as UA
Participant "Credential Curator" as CV
Participant "Certifying Authority" as Issuer

Asako->UA: Navigate to web site
UA->Issuer: Request Credential
Issuer->Issuer: Verify identity

Note right
  Expand on identity
  verification?
End note

Issuer->Issuer: Generate credential
Issuer->UA: Return credential
UA->Asako: Display credential
Asako->UA: Save credential
UA->CV: Store credential
CV->UA: Display saved credentials

title Example credential creation flow

@enduml
