# TicketManager-Backend
### This project is the Backend of the Ticket-Manager project, implemented in Fastify-js

## Response Code Agreements
+ WP => wrong password
+ UNE => user not exists
+ PAICDM => password and its confirmation don't match
+ LS => logged in successfully
+ SS => signed up successfully
+ EF => empty fields
+ PAS => product added successfully
+ PES => product editted successfully
+ PDS => product deleted successfully
+ PAF => product add failed

## Configs
+ docker-compose exec postgres psql -U admin -d newdb -f /tmp/seed.sql
+ git clone --recurse-submodules [git remote address]