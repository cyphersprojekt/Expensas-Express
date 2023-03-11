# Diseño general de los objetos de la db

## Usuarios:
| **field**        | **type**     | **description**                                    |
|------------------|--------------|----------------------------------------------------|
| full_name         | string       | Self-descriptive                                   |
| unit             | string       | apt unit. i.e 1-A, 2-B, 3-C etc                    |
| email            | string/email | name@provider.com                                  |
| phone_number      | string       | +54 11 123456789                                   |
| emergency_number | string       | ^=, used if you die and someone needs to be called |
| type             | string       | admin/clerk/tenant                                 |
| password         | string       | bcrypt generated string                            |



## Unidades: 
| **field**      | **type**  | **description**                                                                          |
|----------------|-----------|------------------------------------------------------------------------------------------|
| unit           | string    | apt unit. i.e 1-A, 2-B, 3-C etc                                                          |
| current_tenant | id/string | references users collection                                                              |
| owner          | id/string | references users collection                                                              |
| expenses_share | number    | % of expenses corresponding to this unit. generated automatically based on square_meters |
| square_meters  | number    | m2 of unit. used to calculate % of expenses                                              |
| balance        | number    | $ diff between payments and the sum of all expenses                                      |
| last_payment   | date      | date of last payment            


## Liquidaciones:
| **field** | **type** | **description**     |
|-----------|----------|---------------------|
| date      | Date     | date generated      |
| expenses  | Array    | [[concept, amount]] |
| total     | number   | sum of all          |

## Sub-Liquidaciones:
| **field**       | **type**  | **description**                        |
|-----------------|-----------|----------------------------------------|
| date            | Date      | date generated                         |
| expenses        | Array     | [[concept, amount]]                    |
| unit            | id/string | references units collection            |
| total           | number    | sum of all                             |
| total_unit      | number    | sum of all / unit_%                    |
| general_expense | id/string | references general_expenses collection |

## Pagos:
| **field** | **type**  | **description**                                |
|-----------|-----------|------------------------------------------------|
| unit      | id/string | references unit collection                     |
| date      | date      | date paid                                      |
| amount    | number    | $                                              |
| confirmed | boolean   | admin can confirm if payment has been received |