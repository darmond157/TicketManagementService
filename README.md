# TicketManager-Backend

### Successful Response Code Agreements

+ LS => logged in successfully
+ SS => signed up successfully

+ UES => user editted successfully

+ PAS => product added successfully
+ PES => product editted successfully
+ PDS => product deleted successfully

+ TAS => ticket added successfully
+ TES => ticket editted successfully
+ TDS => ticket deleted successfully

### Error Response Code Agreements

+ WP => wrong password
+ PAICDM => password and its confirmation don't match

+ UNE => user not exists

+ EF => empty fields

+ PAF => product add failed

## Configs
+ docker-compose exec postgres psql -U admin -d newdb -f /tmp/seed.sql
+ git clone --recurse-submodules [git remote address]

## How To Run Project