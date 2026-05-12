# Estágio 1 - Build
FROM ubuntu AS build

RUN apt update && apt install build-essential -y

RUN mkdir /opt/app/

WORKDIR /opt/app/

COPY Main.c .
# opt/app/Main.c 

RUN gcc ./Main.c -static -o Main


# Estágio 2 - Production
FROM alpine AS prd

COPY --from=build opt/app/Main /opt/app/Main

# Estágio 3 - Run
FROM prd AS run

CMD ["/opt/app/Main"]
