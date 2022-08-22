FROM golang:1.18 AS build

WORKDIR /app

COPY . .

RUN go env -w GO111MODULE=off

RUN go build -o go_codeeducation


FROM scratch

WORKDIR /app

COPY --from=build /app/go_codeeducation ./

ENTRYPOINT [ "./go_codeeducation" ]